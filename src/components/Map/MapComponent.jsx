import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Map.scss'
import L from 'leaflet'

const plants = [
    {
        id: 1,
        name: 'Solar Farm 1',
        position: [13.7563, 100.5018],
        capacity: '20 MW',
        detail: 'บางเขน กรุงเทพฯ'
    },
    {
        id: 2,
        name: 'Solar Farm 2',
        position: [15.1234, 101.2345],
        capacity: '35 MW',
        detail: 'โคราช'
    }
]

const greenMarkerIcon = L.divIcon({
    className: 'custom-marker',
    html: `<div class="pulse-marker"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
})

const MapComponent = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full z-0'>
            <MapContainer center={[13.7563, 100.5018]} zoom={7} zoomControl={false} className="h-screen w-full z-0">
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>' />
                {plants.map(plant => (
                    <Marker key={plant.id} position={plant.position} icon={greenMarkerIcon}>
                        <Popup>
                            <div className="text-sm">
                                <p>
                                    <strong>{plant.name}</strong>
                                </p>
                                <p>กำลังผลิต: {plant.capacity}</p>
                                <p>ที่ตั้ง: {plant.detail}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div >
    )
}

export default MapComponent
