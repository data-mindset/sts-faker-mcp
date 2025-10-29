import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function hacker(server: McpServer) {
  server.registerTool("hacker-abbreviation", { description: "Returns a random hacker/IT abbreviation.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.abbreviation() }],
    }
  })

  server.registerTool("hacker-adjective", { description: "Returns a random hacker/IT adjective.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.adjective() }],
    }
  })

  server.registerTool("hacker-noun", { description: "Returns a random hacker/IT noun.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.noun() }],
    }
  })

  server.registerTool("hacker-verb", { description: "Returns a random hacker/IT verb.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.verb() }],
    }
  })

  server.registerTool(
    "hacker-ingverb", { description: "Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.hacker.ingverb() }],
      }
    },
  )

  server.registerTool("hacker-phrase", { description: "Generates a random hacker/IT phrase.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.hacker.phrase() }],
    }
  })

  return server
}
