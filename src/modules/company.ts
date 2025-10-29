import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function company(server: McpServer) {
  server.registerTool("company-name", { description: "Generates a random company name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.company.name() }],
    }
  })

  server.registerTool(
    "company-catchPhrase", { description: "Generates a random catch phrase that can be displayed to an end user.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.company.catchPhrase() }],
      }
    },
  )

  server.registerTool(
    "company-buzzPhrase", { description: "Generates a random buzz phrase that can be used to demonstrate data being viewed by a manager.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.company.buzzPhrase() }],
      }
    },
  )

  server.registerTool(
    "company-catchPhraseAdjective", { description: "Returns a random catch phrase adjective that can be displayed to an end user.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.company.catchPhraseAdjective() }],
      }
    },
  )

  server.registerTool(
    "company-catchPhraseDescriptor", { description: "Returns a random catch phrase descriptor that can be displayed to an end user.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.company.catchPhraseDescriptor() }],
      }
    },
  )

  server.registerTool(
    "company-catchPhraseNoun", { description: "Returns a random catch phrase noun that can be displayed to an end user.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.company.catchPhraseNoun() }],
      }
    },
  )

  server.registerTool(
    "company-buzzAdjective", { description: "Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.company.buzzAdjective() }],
      }
    },
  )

  server.registerTool(
    "company-buzzVerb", { description: "Returns a random buzz verb that can be used to demonstrate data being viewed by a manager.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.company.buzzVerb() }],
      }
    },
  )

  server.registerTool(
    "company-buzzNoun", { description: "Returns a random buzz noun that can be used to demonstrate data being viewed by a manager.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.company.buzzNoun() }],
      }
    },
  )

  return server
}
