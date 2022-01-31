import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function GoogleMap() {
  return (
    <div>
      <Map
        // google={this.google}
        style={{ width: "100%", width: "100%" }}
        defaultZoom={10}
        initialCenter={{ lat: 19.29513, lng: 73.05774 }}
      />
    </div>
  );
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCKu-0MYR5ihlcp799TZxvMkvJ14OqEXs4",
})(GoogleMap);
