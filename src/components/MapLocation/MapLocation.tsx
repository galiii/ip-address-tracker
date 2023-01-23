import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from 'leaflet';

import { Location } from '../../models/models';

import { styles } from './styles';
import iconLocation from "../../images/IconLocation.svg";

interface Props {
    latitude: number;
    longitude: number;
    location?: Location;
}



export const MapLocation = ({ latitude, longitude, location }: Props) => {

    const pinMB = L.icon({
        iconUrl: iconLocation,
        iconSize: [34, 41],
        iconAnchor: [0, 0],
        popupAnchor: [12, -40],

    });

    return (
        <styles.MapDiv>
            <MapContainer
                style={{ height: "65vh", width: "100%" }}
                center={[latitude, longitude]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <ChangeView center={[latitude, longitude]} zoom={13} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]} icon={pinMB}>
                    <Popup>{"hello"}</Popup>
                </Marker>
            </MapContainer>
        </styles.MapDiv>


    )
}

interface ChangeViewProps {
    center: [number, number];
    zoom: number;
}

function ChangeView({ center, zoom }: ChangeViewProps) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}
