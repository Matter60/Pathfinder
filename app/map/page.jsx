"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
export default function MyPage() {
  return (
    <>
      <div className=" h-screen">
        <h1 className="text-4xl font-bold text-center p-4">Add a route here</h1>
        <MapContainer
          className="w-[60vh] h-[60vh] justify-center mx-auto my-4"
          center={[48.8566, 2.3522]}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution="Google Maps"
            //  // regular
            // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
            url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // terrain
            maxZoom={20}
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
          />
        </MapContainer>
      </div>
    </>
  );
}
