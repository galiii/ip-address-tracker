import React, { useEffect, useState } from 'react'
import { asyncIPGeoLocations } from '../../constants/ip-geolocation';
import { IPGeoLocation } from '../../models/models';
import { InputSearch } from '../InputSearch/InputSearch';

import img from "../../images/pattern-bg.png";
import { styles } from './styles';



interface Props {
    setNewLocation: (newApi: IPGeoLocation) => void;
}

export const Header = (props: Props) => {

    /*const [api, setApi] = useState<IPGeoLocation>({
        ip: "8.8.8.8",
        isp: "Google LLC",
        location: {
            region: "California",
            city: "Mountain View",
            lat: 37.38605,
            lng: -122.08385,
            geonameId: 5375480,
        },
        timezone: "-08:00"
    });*/

    /* useEffect(() => { }, []);
     useEffect(() => { }, [api]);*/

    useEffect(() => {
        /*async function fetchDataOfIPGeoLocationAPI() {
            const data = await asyncIPGeoLocations();

            setApi(!!data ? {
                ip: data?.ip,
                isp: data?.isp,
                location: {
                    region: data?.location?.region,
                    city: data?.location?.city,
                    geonameId: data.location?.geonameId,
                    lat: data?.location?.lat,
                    lng: data?.location?.lng
                },
                timezone: data?.location?.timezone
            } : {});

        }
        fetchDataOfIPGeoLocationAPI();*/


    }, [])

    return (
        <styles.AppHeader imgUrl={img}>
            <styles.AppTitle>{"IP Address Tracker"}</styles.AppTitle>
            <InputSearch setNewLocation={props.setNewLocation} />

        </styles.AppHeader>
    )
}

