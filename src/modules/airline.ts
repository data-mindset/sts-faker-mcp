import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function airline(server: McpServer) {
  server.registerTool(
    "airline-airline-iataCode",
    {
      description: "Generates a random airline IATA code.",
      inputSchema: {},
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: faker.airline.airline().iataCode,
          },
        ],
      }
    }
  )

  server.registerTool(
    "airline-airline-name",
    {
      description: "Generates a random airline name.",
      inputSchema: {},
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: faker.airline.airline().name,
          },
        ],
      }
    }
  )

  server.registerTool(
    "airline-airport-iataCode",
    {
      description: "Generates a random airport IATA code.",
      inputSchema: {},
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: faker.airline.airport().iataCode,
          },
        ],
      }
    }
  )

  server.registerTool(
    "airline-airport-name",
    {
      description: "Generates a random airport name.",
      inputSchema: {},
    },
    async () => {
      return {
        content: [
          {
            type: "text",
            text: faker.airline.airport().name,
          },
        ],
      }
    }
  )

  server.registerTool(
    "airline-airplane-iataTypeCode",
    {
      description: "Generates a random airplane IATA type code.",
      inputSchema: {},
    },
    async () => {
      return {
        content: [{ type: "text", text: faker.airline.airplane().iataTypeCode }],
      }
    }
  )

  server.registerTool(
    "airline-airplane-name",
    {
      description: "Generates a random airplane model name.",
      inputSchema: {},
    },
    async () => {
      return {
        content: [{ type: "text", text: faker.airline.airplane().name }],
      }
    }
  )

  server.registerTool(
    "airline-recordLocator",
    {
      description: "Generates a random record locator (booking reference number).",
      inputSchema: {
        allowNumerics: z.boolean().optional().describe("Whether to allow numeric characters."),
        allowVisuallySimilarCharacters: z
          .boolean()
          .optional()
          .describe("Whether to allow visually similar characters such as '1' and 'I'."),
      },
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.airline.recordLocator(args) }],
      }
    }
  )

  server.registerTool(
    "airline-seat",
    {
      description: "Generates a random seat number.",
      inputSchema: {
        aircraftType: z
          .enum(["narrowbody", "regional", "widebody"])
          .optional()
          .describe("The aircraft type. Can be one of 'narrowbody', 'regional', 'widebody'."),
      },
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.airline.seat(args) }],
      }
    }
  )

  server.registerTool(
    "airline-aircraftType",
    {
      description: "Returns a random aircraft type.",
      inputSchema: {},
    },
    async () => {
      return {
        content: [{ type: "text", text: faker.airline.aircraftType() }],
      }
    }
  )

  server.registerTool(
    "airline-flightNumber",
    {
      description: "Returns a random flight number.",
      inputSchema: {
        length: z
          .union([
            z.number(),
            z.object({
              min: z.number().describe("The minimum number of digits to generate."),
              max: z.number().describe("The maximum number of digits to generate."),
            }),
          ])
          .optional()
          .describe("The number or range of digits to generate."),
        addLeadingZeros: z
          .boolean()
          .optional()
          .describe("Whether to pad the flight number up to 4 digits with leading zeros."),
      },
    },
    async (args) => {
      return {
        content: [{ type: "text", text: faker.airline.flightNumber(args) }],
      }
    }
  )

  return server
}
