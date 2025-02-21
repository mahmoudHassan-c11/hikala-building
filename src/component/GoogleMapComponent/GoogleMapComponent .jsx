import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};
const center = {
  lat: 24.638551, // Replace with your location's latitude
  lng: 46.550027, // Replace with your location's longitude
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBkWxXPrdJxt1dp8Qu7Vcr6Wde4D2U6jwU">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
