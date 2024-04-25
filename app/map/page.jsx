"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Input } from "@/components/ui/input";

export default function MyPage() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center p-4">Add a route here</h1>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Input
            id="picture"
            type="file"
            onChange={(file) => {
              // Console log the content of the file
              const reader = new FileReader();
              reader.onload = function (e) {
                console.log(e.target.result);
              };
            }}
          />
        </div>
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
