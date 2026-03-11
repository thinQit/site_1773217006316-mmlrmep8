# Data sources for pre-existing infrastructure
locals {
  container_apps_env_name = trimspace(var.container_apps_env_name)

  raw_container_app_name        = trimspace(var.container_app_name)
  container_app_name_clean      = regexreplace(lower(local.raw_container_app_name), "[^a-z0-9-]", "-")
  container_app_name_trimmed    = regexreplace(regexreplace(local.container_app_name_clean, "^-+", ""), "-+$", "")
  container_app_name_prefixed   = length(regexall("^[a-z]", local.container_app_name_trimmed)) > 0 ? local.container_app_name_trimmed : "app-${local.container_app_name_trimmed}"
  container_app_name_truncated  = substr(local.container_app_name_prefixed, 0, 60)
  container_app_name_sanitized  = regexreplace(local.container_app_name_truncated, "-+$", "")
  container_app_env_name        = local.container_apps_env_name != "" ? local.container_apps_env_name : "${local.container_app_name_sanitized}-env"
}

data "azurerm_resource_group" "rg" {
  name = var.resource_group
}

data "azurerm_container_app_environment" "env" {
  count               = local.container_apps_env_name != "" ? 1 : 0
  name                = local.container_apps_env_name
  resource_group_name = data.azurerm_resource_group.rg.name
}

resource "azurerm_container_app_environment" "env" {
  count               = local.container_apps_env_name == "" ? 1 : 0
  name                = local.container_app_env_name
  location            = var.location
  resource_group_name = data.azurerm_resource_group.rg.name
}

data "azurerm_container_registry" "acr" {
  name                = var.acr_name
  resource_group_name = data.azurerm_resource_group.rg.name
}

# Container App
resource "azurerm_container_app" "app" {
  name                         = local.container_app_name_sanitized
  container_app_environment_id = local.container_apps_env_name != "" ? data.azurerm_container_app_environment.env[0].id : azurerm_container_app_environment.env[0].id
  resource_group_name          = data.azurerm_resource_group.rg.name
  revision_mode                = "Single"

  secret {
    name  = "acr-pwd"
    value = data.azurerm_container_registry.acr.admin_password
  }

  registry {
    server               = var.acr_login_server
    username             = data.azurerm_container_registry.acr.admin_username
    password_secret_name = "acr-pwd"
  }

  template {
    container {
      name   = "app"
      image  = "${var.acr_login_server}/${local.container_app_name_sanitized}:latest"
      cpu    = 0.5
      memory = "1Gi"
    }

    scale {
      min_replicas = 1
      max_replicas = 1
    }
  }

  ingress {
    external_enabled = true
    target_port      = 3000
    transport        = "auto"
  }
}
