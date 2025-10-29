import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function location(server: McpServer) {
  server.registerTool("location-buildingNumber", { description: "Generates a random building number.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.location.buildingNumber() }],
    }
  })

  server.registerTool("location-cardinalDirection", { description: "Returns a random cardinal direction (north, east, south, west).", inputSchema: {
      abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (N, E, etc)."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.cardinalDirection(args) }],
      }
    },
  )

  server.registerTool("location-city", { description: "Generates a random localized city name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.location.city() }],
    }
  })

  server.registerTool("location-continent", { description: "Returns a random continent name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.location.continent() }],
    }
  })

  server.registerTool("location-country", { description: "Returns a random country name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.location.country() }],
    }
  })

  server.registerTool("location-countryCode", { description: "Returns a random ISO_3166-1 country code.", inputSchema: {
      variant: z
        .enum(["alpha-2", "alpha-3", "numeric"])
        .optional()
        .describe("The code to return. Can be either 'alpha-2', 'alpha-3', or 'numeric'."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.countryCode(args) }],
      }
    },
  )

  server.registerTool(
    "location-county", { description: "Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.location.county() }],
      }
    },
  )

  server.registerTool("location-direction", { description: "Returns a random direction (cardinal and ordinal; northwest, east, etc).", inputSchema: {
      abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (NW, E, etc)."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.direction(args) }],
      }
    },
  )

  server.registerTool("location-language", { description: "Returns a random spoken language.", inputSchema: {} }, async () => {
    // The language method returns an object with alpha2, alpha3, and name properties
    // We'll convert it to a string representation
    const language = faker.location.language()
    return {
      content: [{ type: "text", text: JSON.stringify(language) }],
    }
  })

  server.registerTool("location-latitude", { description: "Generates a random latitude.", inputSchema: {
      max: z.number().optional().describe("The upper bound for the latitude to generate."),
      min: z.number().optional().describe("The lower bound for the latitude to generate."),
      precision: z.number().optional().describe("The number of decimal points of precision for the latitude."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.latitude(args).toString() }],
      }
    },
  )

  server.registerTool("location-longitude", { description: "Generates a random longitude.", inputSchema: {
      max: z.number().optional().describe("The upper bound for the longitude to generate."),
      min: z.number().optional().describe("The lower bound for the longitude to generate."),
      precision: z.number().optional().describe("The number of decimal points of precision for the longitude."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.longitude(args).toString() }],
      }
    },
  )

  server.registerTool("location-nearbyGPSCoordinate", { description: "Generates a random GPS coordinate within the specified radius from the given coordinate.", inputSchema: {
      origin: z
        .tuple([z.number(), z.number()])
        .optional()
        .describe("The original coordinate to get a new coordinate close to."),
      radius: z.number().optional().describe("The maximum distance from the given coordinate to the new coordinate."),
      isMetric: z.boolean().optional().describe("If true assume the radius to be in kilometers. If false for miles."),
    } }, async (args) => {
      const coordinates = faker.location.nearbyGPSCoordinate(args)
      return {
        content: [{ type: "text", text: JSON.stringify(coordinates) }],
      }
    },
  )

  server.registerTool("location-ordinalDirection", { description: "Returns a random ordinal direction (northwest, southeast, etc).", inputSchema: {
      abbreviated: z.boolean().optional().describe("If true this will return abbreviated directions (NW, SE, etc)."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.ordinalDirection(args) }],
      }
    },
  )

  server.registerTool(
    "location-secondaryAddress", { description: "Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number.", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.location.secondaryAddress() }],
      }
    },
  )

  server.registerTool("location-state", { description: "Returns a random state, or other equivalent first-level administrative entity for the locale's country such as a province, region, or prefecture.", inputSchema: {
      abbreviated: z.boolean().optional().describe("If true this will return abbreviated state names."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.state(args) }],
      }
    },
  )

  server.registerTool("location-street", { description: "Returns a random street name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.location.street() }],
    }
  })

  server.registerTool("location-streetAddress", { description: "Generates a random localized street address.", inputSchema: {
      useFullAddress: z
        .boolean()
        .optional()
        .describe("When true this will generate a full address. Otherwise it will just generate a street address."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.streetAddress(args) }],
      }
    },
  )

  server.registerTool("location-timeZone", { description: "Returns a random time zone.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.location.timeZone() }],
    }
  })

  server.registerTool("location-zipCode", { description: "Generates a random localized zip code.", inputSchema: {
      state: z.string().optional().describe("The state to generate a zip code for."),
      format: z.string().optional().describe("The format the zip code should use."),
    } }, async (args) => {
      return {
        content: [{ type: "text", text: faker.location.zipCode(args) }],
      }
    },
  )

  return server
}
