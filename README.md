# 🔭 Observabilidade com OpenTelemetry

Este é um projeto de estudo de observabilidade, focado em coletar e rastrear dados de uma aplicação Node.js usando **OpenTelemetry**, **Jaeger** para visualização de traces, e **Docker Compose** para orquestração dos serviços.

## Índice
- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Monitoramento e Visualização](#monitoramento-e-visualização)
- [Estrutura do Projeto](#estrutura-do-projeto)

## Visão Geral

Este projeto utiliza:
- **OpenTelemetry**: Para coletar métricas e traces da aplicação Node.js.
- **Jaeger**: Para visualizar os traces coletados.
- **Docker Compose**: Para facilitar a execução de todos os serviços em containers, incluindo o PostgreSQL, Jaeger e o OpenTelemetry Collector.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Docker**: [Instalar Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: [Instalar Docker Compose](https://docs.docker.com/compose/install/)
- **Node.js**: [Instalar Node.js](https://nodejs.org/en/)

## Monitoramento e Visualização

Jaeger UI: Acesse o Jaeger UI em http://localhost:8081 para visualizar os traces gerados pela sua aplicação.

## Estrutura do Projeto
    ├── docker-compose.yml
    ├── otel-collector-config.yml
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── src/
    		├── db.js
    		├── server.js
    		└── tracing.js
