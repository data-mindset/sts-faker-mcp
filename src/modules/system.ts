import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function system(server: McpServer) {
  // Define the common count schema that can be either a number or a min/max object
  const countSchema = <T extends z.ZodTypeAny>(schema: T) =>
    z.union([
      schema,
      z.object({
        min: z.number().describe("Minimum number."),
        max: z.number().describe("Maximum number."),
      }),
    ])

  server.registerTool("system-fileName", { description: "Returns a random file name with extension.", inputSchema: {
      extensionCount: countSchema(z.number())
        .optional()
        .describe("Define how many extensions the file name should have."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.system.fileName(args) }],
      }
    },
  )

  server.registerTool("system-commonFileName", { description: "Returns a random file name with a given extension or a commonly used extension.", inputSchema: {
      extension: z.string().optional().describe("The file extension to use."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.system.commonFileName(args.extension) }],
      }
    },
  )

  server.registerTool("system-mimeType", { description: "Returns a mime-type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.system.mimeType() }],
    }
  })

  server.registerTool("system-commonFileType", { description: "Returns a commonly used file type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.system.commonFileType() }],
    }
  })

  server.registerTool("system-commonFileExt", { description: "Returns a commonly used file extension.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.system.commonFileExt() }],
    }
  })

  server.registerTool("system-fileType", { description: "Returns a file type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.system.fileType() }],
    }
  })

  server.registerTool("system-fileExt", { description: "Returns a file extension.", inputSchema: {
      mimeType: z.string().optional().describe("Valid mime-type"),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.system.fileExt(args.mimeType) }],
      }
    },
  )

  server.registerTool("system-directoryPath", { description: "Returns a directory path.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.system.directoryPath() }],
    }
  })

  server.registerTool("system-filePath", { description: "Returns a file path.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.system.filePath() }],
    }
  })

  server.registerTool("system-semver", { description: "Returns a semantic version.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.system.semver() }],
    }
  })

  server.registerTool("system-networkInterface", { description: "Returns a random network interface.", inputSchema: {
      interfaceType: z
        .enum(["en", "wl", "ww"])
        .optional()
        .describe("The interface type. Can be one of 'en', 'wl', 'ww'."),
      interfaceSchema: z
        .enum(["index", "slot", "mac", "pci"])
        .optional()
        .describe("The interface schema. Can be one of 'index', 'slot', 'mac', 'pci'."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.system.networkInterface(args) }],
      }
    },
  )

  server.registerTool("system-cron", { description: "Returns a random cron expression.", inputSchema: {
      includeYear: z.boolean().optional().describe("Whether to include a year in the generated expression."),
      includeNonStandard: z
        .boolean()
        .optional()
        .describe("Whether to include a '@yearly', '@monthly', '@daily', etc text labels in the generated expression."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.system.cron(args) }],
      }
    },
  )

  return server
}
