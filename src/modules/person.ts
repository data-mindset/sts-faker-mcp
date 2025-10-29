import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function person(server: McpServer) {
  // Define the SexType enum for use in the schema
  const SexTypeEnum = z.enum(["female", "male"])

  server.registerTool("person-firstName", { description: "Returns a random first name.", inputSchema: {
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.person.firstName(args.sex) }],
      }
    },
  )

  server.registerTool("person-lastName", { description: "Returns a random last name.", inputSchema: {
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.person.lastName(args.sex) }],
      }
    },
  )

  server.registerTool("person-middleName", { description: "Returns a random middle name.", inputSchema: {
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.person.middleName(args.sex) }],
      }
    },
  )

  server.registerTool("person-fullName", { description: "Generates a random full name.", inputSchema: {
      firstName: z
        .string()
        .optional()
        .describe("The optional first name to use. If not specified a random one will be chosen."),
      lastName: z
        .string()
        .optional()
        .describe("The optional last name to use. If not specified a random one will be chosen."),
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.person.fullName(args) }],
      }
    },
  )

  server.registerTool("person-gender", { description: "Returns a random gender.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.gender() }],
    }
  })

  server.registerTool("person-sex", { description: "Returns a random sex.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.sex() }],
    }
  })

  server.registerTool(
    "person-sexType", { description: "Returns a random sex type. The `SexType` is intended to be used in parameters and conditions.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.person.sexType() }],
      }
    },
  )

  server.registerTool("person-bio", { description: "Returns a random short biography.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.bio() }],
    }
  })

  server.registerTool("person-prefix", { description: "Returns a random person prefix.", inputSchema: {
      sex: SexTypeEnum.optional().describe("The optional sex to use. Can be either 'female' or 'male'."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.person.prefix(args.sex) }],
      }
    },
  )

  server.registerTool("person-suffix", { description: "Returns a random person suffix.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.suffix() }],
    }
  })

  server.registerTool("person-jobTitle", { description: "Generates a random job title.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.jobTitle() }],
    }
  })

  server.registerTool("person-jobDescriptor", { description: "Generates a random job descriptor.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.jobDescriptor() }],
    }
  })

  server.registerTool("person-jobArea", { description: "Generates a random job area.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.jobArea() }],
    }
  })

  server.registerTool("person-jobType", { description: "Generates a random job type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.jobType() }],
    }
  })

  server.registerTool("person-zodiacSign", { description: "Returns a random zodiac sign.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.person.zodiacSign() }],
    }
  })

  return server
}
