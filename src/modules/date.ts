import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function date(server: McpServer) {
  const refDateSchema = z
    .string()
    .optional()
    .describe("The date to use as reference point for the newly generated date.")

  server.registerTool("date-anytime", { description: "Generates a random date that can be either in the past or in the future.", inputSchema: {
      refDate: refDateSchema,
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.anytime(args).toISOString() }],
      }
    },
  )

  server.registerTool("date-past", { description: "Generates a random date in the past.", inputSchema: {
      years: z.number().optional().describe("The range of years the date may be in the past."),
      refDate: refDateSchema,
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.past(args).toISOString() }],
      }
    },
  )

  server.registerTool("date-future", { description: "Generates a random date in the future.", inputSchema: {
      years: z.number().optional().describe("The range of years the date may be in the future."),
      refDate: refDateSchema,
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.future(args).toISOString() }],
      }
    },
  )

  server.registerTool("date-between", { description: "Generates a random date between the given boundaries.", inputSchema: {
      from: z.string().describe("The early date boundary."),
      to: z.string().describe("The late date boundary."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.between(args).toISOString() }],
      }
    },
  )

  server.registerTool("date-betweens", { description: "Generates random dates between the given boundaries. The dates will be returned in an array sorted in chronological order.", inputSchema: {
      from: z.string().describe("The early date boundary."),
      to: z.string().describe("The late date boundary."),
      count: z
        .union([
          z.number(),
          z.object({
            min: z.number().describe("The minimum number of dates to generate."),
            max: z.number().describe("The maximum number of dates to generate."),
          }),
        ])
        .optional()
        .describe("The number of dates to generate."),
    } }, async (args) => {
      const dates = faker.date
        .betweens(args)
        .map((date) => date.toISOString())
        .join(", ")
      return {
        content: [{ type: "text", text: dates }],
      }
    },
  )

  server.registerTool("date-recent", { description: "Generates a random date in the recent past.", inputSchema: {
      days: z.number().optional().describe("The range of days the date may be in the past."),
      refDate: refDateSchema,
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.recent(args).toISOString() }],
      }
    },
  )

  server.registerTool("date-soon", { description: "Generates a random date in the near future.", inputSchema: {
      days: z.number().optional().describe("The range of days the date may be in the future."),
      refDate: refDateSchema,
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.soon(args).toISOString() }],
      }
    },
  )

  server.registerTool("date-month", { description: "Returns a random name of a month.", inputSchema: {
      abbreviated: z.boolean().optional().describe("Whether to return an abbreviation."),
      context: z
        .boolean()
        .optional()
        .describe(
          "Whether to return the name of a month in the context of a date. In some locales this may affect grammar or capitalization.",
        ),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.month(args) }],
      }
    },
  )

  server.registerTool("date-weekday", { description: "Returns a random day of the week.", inputSchema: {
      abbreviated: z.boolean().optional().describe("Whether to return an abbreviation."),
      context: z
        .boolean()
        .optional()
        .describe(
          "Whether to return the day of the week in the context of a date. In some locales this may affect grammar or capitalization.",
        ),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.weekday(args) }],
      }
    },
  )

  server.registerTool("date-timeZone", { description: "Returns a random IANA time zone name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.date.timeZone() }],
    }
  })

  server.registerTool("date-birthdate", { description: "Returns a random birthdate. By default, the birthdate is generated for an adult between 18 and 80 years old. But you can customize the 'age' range or the 'year' range to generate a more specific birthdate.", inputSchema: {
      union: z.union([
        z.object({ refDate: refDateSchema }),
        z.object({ mode: z.literal("age"), min: z.number(), max: z.number(), refDate: refDateSchema }),
        z.object({ mode: z.literal("year"), min: z.number(), max: z.number() }),
      ]),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.date.birthdate(args.union).toISOString() }],
      }
    },
  )

  return server
}
