"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from './map.module.css';
export default function MyPage() {


  return (
    <div className="bg-green-200 h-screen">
      <h1 className="text-4xl font-bold text-center p-4">Map Component</h1>
      <MapContainer className={styles.map} center={[48.8566, 2.3522]} zoom={10} scrollWheelZoom={true}>
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
  );
}
