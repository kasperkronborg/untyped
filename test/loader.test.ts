import { describe, it, expect } from "vitest";
import { loadSchema } from "../src/loader/loader";

describe("loader", () => {
  it("should load a schema", async () => {
    const schema = await loadSchema("./test/fixtures/config.ts", {});
    expect(schema).toMatchInlineSnapshot(`
      {
        "default": {
          "config": {
            "checked": false,
          },
        },
        "id": "#",
        "properties": {
          "config": {
            "default": {
              "checked": false,
            },
            "id": "#config",
            "properties": {
              "checked": {
                "default": false,
                "deprecated": "use unchecked",
                "description": "",
                "id": "#config/checked",
                "tags": [],
                "title": "",
                "type": "boolean",
              },
            },
            "type": "object",
          },
        },
        "type": "object",
      }
    `);
  });
});
