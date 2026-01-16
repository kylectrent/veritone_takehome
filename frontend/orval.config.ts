import { defineConfig } from "orval"

export default defineConfig({
  api: {
    input: {
      target: "../openapi/openapi.json",
    },
    output: {
      mode: "tags",
      target: "src/api/generated.ts",
      schemas: "src/api/model",
      client: "react-query",
      prettier: true,
      clean: true,
    },
  },
});