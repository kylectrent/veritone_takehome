# Veritone Take Home

This repository contains a full-stack shopping list application built as part of the Veritone take-home challenge.

The application consists of a Spring Boot backend API backed by PostgreSQL, designed to support a simple shopping list UI with create, update, delete, and purchased-state functionality.
Veritone take home shopping app

---

## Running the Application

The entire backend stack is containerized using Docker.

**Prerequisites**

- Docker

- Docker Compose

**Start the backend**

From the project root (dev mode):

```bash
docker compose --profile dev up --build
```

From the project root (prod mode):

```bash
docker compose --profile prod up --build
```

This will start:

- A Spring Boot API on http://localhost:8080

- A PostgreSQL database with persisted storage via Docker volumes

- A frontend service running either a Vite development server (with hot module replacement) or an Nginx server serving a prebuilt production bundle, depending on the selected Docker Compose profile

sync the container’s deps to whatever is in ./frontend/package.json + lockfile:
- docker compose exec frontend-dev npm install

restart vite
- docker compose restart frontend-dev

view logs for java_app
- docker compose logs -f java_app

---

## Backend Architecture

**API Design**

The backend is implemented using:

- Spring Boot

- Spring Data JPA (Hibernate)

- PostgreSQL

**The API exposes REST endpoints to:**

- Retrieve all shopping items

- Create a new item

- Update an existing item

- Delete an item

Entities are persisted using JPA, with automatic timestamp management via lifecycle hooks.

---

## Data Contracts & Type Safety

The backend serves as the single source of truth for data contracts.

- DTOs define request and response shapes

- Springdoc OpenAPI generates an OpenAPI specification directly from controllers and DTOs

- The OpenAPI spec can be consumed by Orval on the frontend to generate:

    - Strongly typed TypeScript models

    - API clients and/or React Query hooks

**When springboot server is running, from root**

```bash
./scripts/export-openapi.sh
```

**After openapi.json has been generated, from frontend directory**

```bash
npm run gen:api
```

This approach prevents contract drift across the stack and provides a schema-driven workflow similar in spirit to GraphQL or Smithy, while remaining REST-based.

---

## Frontend Runtime Modes

The frontend supports two runtime modes: development and production, each optimized for a different stage of the workflow.

**Production Mode**

- Serves a prebuilt static bundle using Nginx

- The frontend is built during the Docker image build step and copied into the Nginx container

- Intended for production and production-like environments

- No hot reload — UI changes require rebuilding the Docker image and restarting the container

**Development Mode**

- Runs a Vite development server inside a Docker container

- The frontend Dockerfile includes a dedicated dev build target

- Source code is bind-mounted from the host into the container, allowing the dev server to detect local file changes

- Supports hot module replacement (HMR) for rapid UI iteration without rebuilding images

---

## Design Philosophy

- Clear separation between persistence models (JPA entities) and API contracts (DTOs)

- Explicit mapping between entities and DTOs

- Feature-based package organization for maintainability

- Environment-driven configuration for portability

- Containerized infrastructure for reproducible local development

---

## Notes

This repository currently focuses on the backend implementation.
Frontend integration (React + generated API client) is designed to build directly on top of the OpenAPI specification exposed by the backend.
