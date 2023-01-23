export interface Location {
    region?: string;
    city?: string;
    timezone?: string;
    geonameId?: number;
    lat?: number;
    lng?: number;
}


export interface IPGeoLocation {
    ip?: string;
    location?: Location;
    isp?: string;
    timezone?: string;
}


/*export interface DictionaryIPGeoLocationKeyStringValueAnyType {
    [key: string]: Location | string;
}*/