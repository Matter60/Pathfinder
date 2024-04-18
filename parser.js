import { parseGPX } from "@we-gold/gpxjs";

fetch("test.gpx")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch the file");
    }
    return response.text();
  })
  .then((data) => {
    const [parsedFile, error] = parseGPX(data);

    // Or use a try catch to verify
    if (error) throw error;

    const geojson = parsedFile.toGeoJSON();
  });
