import React, { useEffect, useState } from 'react'
import { createIPGeoLocations } from '../../constants/ip-geolocation';
import { IPGeoLocation } from '../../models/models';
import { IconArrow } from '../Icons/IconArrow';

import { styles } from './styles';


interface Form {
    ipAddressForm: string;
}

interface Props {
    setNewLocation: (newApi: IPGeoLocation) => void;
}


export const InputSearch = (props: Props) => {
    //state
    const [ipAddress, setIpAddress] = useState<Form>({ ipAddressForm: '' });


    //helper 
    const getFormData = (value: string) => {
        const formToSubmit: Form = {
            ipAddressForm: value,
        };
        return formToSubmit;
    };



    const onSubmit = (e: any) => {
        e.preventDefault();

        const data = getFormData(e.target[0].value);

        setIpAddress(data);

        async function postDataOfIPGeoLocationAPI() {
            const dataApiAdress = await createIPGeoLocations(data);
            const location = {
                ip: dataApiAdress?.ip,
                isp: dataApiAdress?.isp,
                location: {
                    region: dataApiAdress?.location?.region,
                    city: dataApiAdress?.location?.city,
                    //timezone: "",
                    lat: dataApiAdress?.location?.lat,
                    lng: dataApiAdress?.location?.lng,
                    geonameId: 0,
                },
                timezone: dataApiAdress?.location?.timezone

            } as IPGeoLocation;
            props.setNewLocation(location);
            console.log(" dataApiAdress", dataApiAdress)

        }

        postDataOfIPGeoLocationAPI();
        return data;
    }

    //render
    return (

        <styles.SearchForm onSubmit={onSubmit}>
            <styles.SearchInput
                type="text"
                placeholder="Search for any IP address or domain"
                //name="search"
                value={ipAddress.ipAddressForm}
                onChange={(e: any) => setIpAddress(e.target.value)}
            />
            <styles.SearchButton type="submit">
                <IconArrow />
            </styles.SearchButton>
        </styles.SearchForm>

    )
}
