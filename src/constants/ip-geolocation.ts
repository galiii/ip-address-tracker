import axios from 'axios';
import { API_KEY, PROXY_URL } from './constants';
import { IPGeoLocation } from '../models/models'



export const handleResponse = (response: any) => async () => {
    if (!response.ok) {
        throw new Error(`lINE 10 ${response.statusText}`);
    }
    return response.json();
}


const getDataIPGeoLocation = async (): Promise<IPGeoLocation | undefined> => {
    const response = await axios.get(`${PROXY_URL}country,city?apiKey=${API_KEY}&ipAddress=8.8.8.8`);
    return response.data as IPGeoLocation;
}


const postDataIPGeoLocation = async (data: any): Promise<IPGeoLocation | undefined> => {
    const response = await axios.get<any>(
        `${PROXY_URL}country,city?apiKey=${API_KEY}&ipAddress=${data.ipAddressForm}`)

    return response.data as IPGeoLocation;
}




export const asyncIPGeoLocations = async () => {
    try {
        const reqCount = Number(localStorage.getItem('countOfRequest')) || 0;
        localStorage.setItem('countOfRequest', `${reqCount + 1}`);
        const ipGeoLocations = await getDataIPGeoLocation();
        console.log("line 35", ipGeoLocations)
        return !!ipGeoLocations ? ipGeoLocations : {};

    } catch (error) {
        console.log("123456789", error)
    }
}

export const createIPGeoLocations = async (data: any) => {
    console.log("abcd", data)
    try {
        const employees = await postDataIPGeoLocation(data);
        return !!employees ? employees : {};

    } catch (error) {
        console.log("12", error)
    }
};