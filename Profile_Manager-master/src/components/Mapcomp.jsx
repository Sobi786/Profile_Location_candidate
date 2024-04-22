import React, { useState } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Mapcomp() {
  const { id } = useParams();

  // Using useSelector to get the user data from the Redux store
  const user = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );
  const latitude = user.latitude;
  console.log(latitude);
  const longitude = user.longitude;
  console.log(longitude);

  const center = { lat: latitude, lng: longitude };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY", // Replace "YOUR_API_KEY" with your actual API key
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-grow w-full">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100vw", height: "100vh" }} // Adjusted height to full viewport height
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}

export default Mapcomp;
