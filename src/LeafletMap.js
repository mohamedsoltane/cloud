import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const LeafletMap = () => {
  return (
    
    <MapContainer  center={[37.7749, -122.4194]} zoom={14} style={{ height: '700px', width: '100%',    }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default LeafletMap;
