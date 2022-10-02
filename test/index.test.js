import iata from "../dist/bundle.js"; // import the module

const invalid = [];

const dataset = iata.airports.size; // get the size of the dataset

// loop through the dataset and print the IATA code and coordinates of each airport
for (const [iataCode, coordinates] of iata.airports) {
  console.log(`${iataCode} lat:${coordinates[0]} long:${coordinates[1]}`);

  if (
    coordinates[0] > 90 ||
    coordinates[0] < -90 ||
    coordinates[1] > 180 ||
    coordinates[1] < -180 ||
    iataCode.length !== 3
  ) {
    invalid.push(iataCode);
  }
}

// throw an error if the coordinates are invalid
if (invalid.length > 0) {
  throw new Error(`Invalid coordinates for ${invalid.join(", ")}`);
}
console.log("dataset:", dataset); // size of the dataset
