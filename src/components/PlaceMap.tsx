"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngTuple } from "leaflet";

export interface PlaceMapProps {
  className?: string;
}

const PlaceMap: React.FC<PlaceMapProps> = ({ className }) => {
  const classNameValue = className ? { className } : {};
  const position: LatLngTuple = [47.02326009028082, 28.827022822295405];
  
  return (
    <div {...classNameValue}>
      <MapContainer
        center={position}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: "700px", width: "100%", maxWidth: "1920px", }}
        className="mx-auto"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Arron service center
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PlaceMap;
