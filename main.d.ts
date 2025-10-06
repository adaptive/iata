/**
 * Type definitions for the @adaptivelink/iata dataset.
 */

type UppercaseLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type AirportCodeChar = UppercaseLetter | Digit;

/** 3-character IATA airport code. */
export type AirportCode = `${AirportCodeChar}${AirportCodeChar}${AirportCodeChar}`;

/** Tuple containing latitude and longitude in decimal degrees. */
export type Coordinates = [latitude: number, longitude: number];

/** Structure returned by the default export. */
export interface IataDataset {
  /** Map where the key is the 3-character IATA airport code and the value is its coordinates. */
  airports: Map<AirportCode, Coordinates>;
}

declare const iata: IataDataset;
export default iata;
