/**
 * Type definitions for the @adaptivelink/iata dataset.
 */

/** Uppercase Latin letters used in airport codes. */
export type UppercaseLetter =
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

/** Numeric characters allowed in some three-character location codes. */
export type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

/** Single character allowed in a three-character airport code. */
export type AirportCodeCharacter = UppercaseLetter | Digit;

/** Three-character IATA airport or location code. */
export type AirportCode =
  `${AirportCodeCharacter}${AirportCodeCharacter}${AirportCodeCharacter}`;

/** Geographic coordinates in decimal degrees. */
export type Coordinates = readonly [latitude: number, longitude: number];

/** Read-only airport lookup keyed by three-character code. */
export type AirportMap = ReadonlyMap<AirportCode, Coordinates>;

/** Public dataset structure exposed by the package default export. */
export interface IataDataset {
  /** Map where the key is the three-character code and the value is its coordinates. */
  readonly airports: AirportMap;
}

declare const iata: Readonly<IataDataset>;
export default iata;
