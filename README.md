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

From the project root:

```bash
docker compose up --build
```

This will start:

- A Spring Boot API on http://localhost:8080

- A PostgreSQL database with persisted storage via Docker volumes

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
