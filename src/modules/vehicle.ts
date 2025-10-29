import { faker } from "@faker-js/faker"
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"

export function vehicle(server: McpServer) {
  server.registerTool("vehicle-vehicle", { description: "Returns a random vehicle.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.vehicle() }],
    }
  })

  server.registerTool("vehicle-manufacturer", { description: "Returns a manufacturer name.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.manufacturer() }],
    }
  })

  server.registerTool("vehicle-model", { description: "Returns a vehicle model.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.model() }],
    }
  })

  server.registerTool("vehicle-type", { description: "Returns a vehicle type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.type() }],
    }
  })

  server.registerTool("vehicle-fuel", { description: "Returns a fuel type.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.fuel() }],
    }
  })

  server.registerTool("vehicle-vin", { description: "Returns a vehicle identification number (VIN).", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.vin() }],
    }
  })

  server.registerTool("vehicle-color", { description: "Returns a vehicle color.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.color() }],
    }
  })

  server.registerTool(
    "vehicle-vrm", { description: "Returns a vehicle registration number (Vehicle Registration Mark - VRM).", inputSchema: {} }, async () => {
      return {
        content: [{ type: "text", text: faker.vehicle.vrm() }],
      }
    },
  )

  server.registerTool("vehicle-bicycle", { description: "Returns a type of bicycle.", inputSchema: {} }, async () => {
    return {
      content: [{ type: "text", text: faker.vehicle.bicycle() }],
    }
  })

  return server
}
