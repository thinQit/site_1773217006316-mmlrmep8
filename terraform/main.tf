# Data sources for pre-existing infrastructure
locals {
  container_apps_env_name = trimspace(var.container_apps_env_name)
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
  name                = "${var.container_app_name}-env"
  location            = var.location
  resource_group_name = data.azurerm_resource_group.rg.name
}

data "azurerm_container_registry" "acr" {
  name                = var.acr_name
  resource_group_name = data.azurerm_resource_group.rg.name
}

# Container App
resource "azurerm_container_app" "app" {
  name                         = var.container_app_name
  container_app_environment_id = local.container_apps_env_name != "" ? data.azurerm_container_app_environment.env[0].id : azurerm_container_app_environment.env[0].id
  resource_group_name          = data.azurerm_resource_group.rg.name
  revision_mode                = "Single"

  registry {
    server               = data.azurerm_container_registry.acr.login_server
    username             = data.azurerm_container_registry.acr.admin_username
    password_secret_name = "acr-password"
  }

  secret {
    name  = "acr-password"
    value = data.azurerm_container_registry.acr.admin_password
  }

  ingress {
    external_enabled = true
    target_port      = 3000

    traffic_weight {
      latest_revision = true
      percentage      = 100
    }
  }

  template {
    min_replicas = 0
    max_replicas = 1

    container {
      name   = var.container_app_name
      image  = "mcr.microsoft.com/k8se/quickstart:latest"
      cpu    = 0.5
      memory = "1Gi"

      env {
        name  = "NODE_ENV"
        value = "production"
      }
      env {
        name  = "PORT"
        value = "3000"
      }
      env {
        name  = "HOSTNAME"
        value = "0.0.0.0"
      }
    }
  }

  lifecycle {
    ignore_changes = [
      template[0].container[0].image
    ]
  }
}
