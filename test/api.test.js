import { describe, expect, test } from "bun:test";
import iata from "../src/main.js";

describe("public API", () => {
  test("exports an airports map", () => {
    expect(iata).toHaveProperty("airports");
    expect(iata.airports).toBeInstanceOf(Map);
    expect(iata.airports.size).toBeGreaterThan(0);
  });

  test("returns coordinates for known airports", () => {
    expect(iata.airports.get("CDG")).toEqual([49.003197, 2.567023]);
    expect(iata.airports.get("LAX")).toEqual([33.943398, -118.40828]);
    expect(iata.airports.get("NRT")).toEqual([35.773212, 140.38744]);
  });

  test("returns undefined for unknown airports", () => {
    expect(iata.airports.get("ZZZ")).toBeUndefined();
  });
});
