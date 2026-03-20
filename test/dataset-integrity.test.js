import { describe, expect, test } from "bun:test";
import iata from "../src/main.js";

const airportCodePattern = /^[A-Z0-9]{3}$/;

describe("dataset integrity", () => {
  test("uses valid three-character airport codes", () => {
    for (const iataCode of iata.airports.keys()) {
      expect(iataCode).toMatch(airportCodePattern);
    }
  });

  test("keeps IATA codes sorted in ascending order", () => {
    const airportCodes = [...iata.airports.keys()];
    const sortedAirportCodes = [...airportCodes].sort();

    expect(airportCodes).toEqual(sortedAirportCodes);
  });

  test("stores finite coordinates within latitude and longitude bounds", () => {
    for (const [iataCode, coordinates] of iata.airports) {
      expect(coordinates).toHaveLength(2);

      const [latitude, longitude] = coordinates;

      expect(Number.isFinite(latitude)).toBe(true);
      expect(Number.isFinite(longitude)).toBe(true);
      expect(latitude).toBeGreaterThanOrEqual(-90);
      expect(latitude).toBeLessThanOrEqual(90);
      expect(longitude).toBeGreaterThanOrEqual(-180);
      expect(longitude).toBeLessThanOrEqual(180);

      // Keep the assertion message anchored to the code being checked.
      expect([latitude, longitude], `invalid coordinates for ${iataCode}`).toEqual(coordinates);
    }
  });
});
