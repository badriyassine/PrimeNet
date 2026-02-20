import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Support from "../../pages/home/components/Supports";

// Example: all major Moroccan cities (add more as needed)
const moroccoCities = [
  { name: "Casablanca", lat: 33.5731, lng: -7.5898 },
  { name: "Rabat", lat: 34.0209, lng: -6.8416 },
  { name: "Marrakech", lat: 31.6295, lng: -7.9811 },
  { name: "Tangier", lat: 35.7595, lng: -5.8339 },
  { name: "Agadir", lat: 30.4278, lng: -9.5981 },
  { name: "Fes", lat: 34.0331, lng: -5.0004 },
  { name: "Meknes", lat: 33.8955, lng: -5.5473 },
  { name: "Oujda", lat: 34.6833, lng: -1.9095 },
  { name: "Kenitra", lat: 34.261, lng: -6.5802 },
  { name: "Tetouan", lat: 35.5785, lng: -5.3684 },
  { name: "Safi", lat: 32.2994, lng: -9.2372 },
  { name: "El Jadida", lat: 33.2473, lng: -8.496 },
  { name: "Beni Mellal", lat: 32.3394, lng: -6.3608 },
  { name: "Nador", lat: 35.1681, lng: -2.9335 },
  { name: "Taza", lat: 34.2164, lng: -4.0088 },
  { name: "Khouribga", lat: 32.8823, lng: -6.9063 },
  { name: "Settat", lat: 33.0011, lng: -7.6166 },
  { name: "Larache", lat: 35.1932, lng: -6.1557 },
  { name: "Ksar El Kebir", lat: 35.0017, lng: -5.9004 },
  { name: "Guelmim", lat: 28.987, lng: -10.0574 },
  { name: "Tantan", lat: 28.438, lng: -11.103 },
  { name: "Errachidia", lat: 31.9314, lng: -4.4248 },
  { name: "Ouarzazate", lat: 30.9335, lng: -6.937 },
  { name: "Dakhla", lat: 23.6847, lng: -15.957 },
  { name: "Laayoune", lat: 27.1536, lng: -13.2033 },
  { name: "Azilal", lat: 32.0042, lng: -6.5786 },
  { name: "Taourirt", lat: 34.4071, lng: -2.8973 },
  { name: "Sidi Ifni", lat: 29.3783, lng: -10.1711 },
  { name: "Midelt", lat: 32.6852, lng: -4.7454 },
  { name: "Berkane", lat: 34.9279, lng: -2.3226 },
  { name: "Tiznit", lat: 29.6974, lng: -9.7323 },
  { name: "Essaouira", lat: 31.5085, lng: -9.7595 },
  { name: "Al Hoceima", lat: 35.2517, lng: -3.9372 },
  { name: "Sidi Bennour", lat: 32.6522, lng: -8.4476 },
  { name: "Youssoufia", lat: 32.2463, lng: -8.5296 },
  { name: "Jerada", lat: 34.3061, lng: -2.1597 },
  { name: "Boujdour", lat: 26.1333, lng: -14.5 },
  { name: "Smara", lat: 26.7394, lng: -11.6847 },
  // ...add more cities as needed
];

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
            className="border border-[#27b4e0] rounded-xl p-3 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#27b4e0]"
            value={selectedCity ? selectedCity.name : ""}
            onChange={(e) => {
              const city = moroccoCities.find((c) => c.name === e.target.value);
              setSelectedCity(city || null);
            }}
          >
            <option value="">Select a city</option>
            {moroccoCities.map((city, i) => (
              <option key={i} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full h-[400px] rounded-xl overflow-hidden mb-8 bg-blue-50 flex items-center justify-center relative z-0">
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
