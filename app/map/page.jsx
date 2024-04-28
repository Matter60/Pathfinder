"use client";
import { useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { parseGPX } from "@we-gold/gpxjs";

export default function MyPage() {
  const [waypoints, setWaypoints] = useState([]);
  const [trackPoints, setTrackPoints] = useState([]);
  const [routePoints, setRoutePoints] = useState([]);
  const [power, setPower] = useState([]);

  function handleOnChange(e) {
    const file = e.target.files[0];
    if (!file) {
      // No file selected, handle accordingly
      return;
    }
    const reader = new FileReader();
    reader.onload = function (e) {
      const xml = e.target.result;
      const [parsedFile, error] = parseGPX(xml);
      if (error) {
        console.error("Error parsing GPX file:", error);
        return;
      }

      // Extracting longitude and latitude from waypoints
      if (parsedFile.waypoints) {
        const newWaypoints = parsedFile.waypoints.map((waypoint) => ({
          latitude: waypoint.latitude,
          longitude: waypoint.longitude,
        }));
        setWaypoints(newWaypoints);
      }

      // Extracting longitude and latitude from tracks
      if (parsedFile.tracks) {
        const newTrackPoints = [];
        const newTrackPower = []; // Array to store power values
        parsedFile.tracks.forEach((track) => {
          track.points.forEach((point) => {
            const { latitude, longitude } = point;
            let power = null; // Initialize power as null
            if (point.extensions && point.extensions.power) {
              power = parseInt(point.extensions.power, 10); // Parse power value as integer
            }
            newTrackPoints.push([latitude, longitude]);
            newTrackPower.push(power); // Push power value to array
          });
        });
        setTrackPoints(newTrackPoints);
        setPower(newTrackPower); // Set power values in component state

        console.log("Track Power:", newTrackPower); // Log track power to console
      }

      // Extracting power from routes (if available)
      if (parsedFile.routes) {
        const newRoutePoints = [];
        const newRoutePower = []; // Array to store power values
        parsedFile.routes.forEach((route) => {
          route.points.forEach((point) => {
            const { latitude, longitude } = point;
            let power = null; // Initialize power as null
            if (point.extensions && point.extensions.power) {
              power = parseInt(point.extensions.power, 10); // Parse power value as integer
            }
            newRoutePoints.push([latitude, longitude]);
            newRoutePower.push(power); // Push power value to array
          });
        });
        setRoutePoints(newRoutePoints);
        setPower(newRoutePower); // Set power values in component state

        console.log("Route Power:", newRoutePower); // Log route power to console
      }

      // Extracting power from track  (if available)
    };
    reader.readAsText(file);
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center p-4">Add a route here</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">GPX</Label>
          <Input id="name" type="file" onChange={handleOnChange} />
        </div>
        <MapContainer
          className="w-[60vh] h-[60vh] justify-center mx-auto my-4"
          center={[51.160551, 4.606927]}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="Google Maps"
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
            maxZoom={20}
          />
          {trackPoints.length > 0 && (
            <Polyline positions={trackPoints} color="red" />
          )}
          {routePoints.length > 0 && (
            <Polyline positions={routePoints} color="blue" />
          )}
        </MapContainer>
      </div>
    </>
  );
}
