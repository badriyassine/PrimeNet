import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Support from "../../pages/home/components/support/Supports";
import moroccoCities from "./components/moroccoCities";

function MapZoomToCity({ city }) {
  const map = useMap();
  React.useEffect(() => {
    if (city) {
      map.setView([city.lat, city.lng], 12, { animate: true });
    }
  }, [city, map]);
  return null;
}

export default function Agencies() {
  const [selectedCity, setSelectedCity] = useState(null);
  const mapRef = useRef();
  return (
    <section className=" px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl border mb-15 border-gray-100 p-8">
        <h1 className="text-3xl font-bold text-[#27b4e0] mb-2 text-center">
          Our Agencies in Morocco
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Select a city to view its location on the map.
        </p>
        <div className="mb-6 flex justify-center">
          <select
            className="border cursor-pointer border-[#27b4e0] rounded-xl p-3 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#27b4e0]"
            value={selectedCity ? selectedCity.name : ""}
            onChange={(e) => {
              const city = moroccoCities.find((c) => c.name === e.target.value);
              setSelectedCity(city || null);
            }}
          >
            <option value="">Select a city</option>
            {moroccoCities
              .slice()
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((city, i) => (
                <option key={i} value={city.name}>
                  {city.name}
                </option>
              ))}
          </select>
        </div>
        <div className="w-full h-100 rounded-xl overflow-hidden mb-8 bg-blue-50 flex items-center justify-center relative z-0">
          <MapContainer
            center={[32.0, -6.8]}
            zoom={6}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "100%" }}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {selectedCity && <MapZoomToCity city={selectedCity} />}
            {moroccoCities.map((city, i) => (
              <Marker
                key={i}
                position={[city.lat, city.lng]}
                icon={L.icon({
                  iconUrl:
                    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                  shadowUrl:
                    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png",
                  shadowSize: [41, 41],
                })}
              >
                <Popup>
                  <b>{city.name}</b>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      <Support />
    </section>
  );
}
