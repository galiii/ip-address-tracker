import { Result } from 'components/Result/Result';
import { asyncIPGeoLocations } from 'constants/ip-geolocation';
import { IPGeoLocation } from 'models/models';
import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';


import './App.css';

function App() {
  const [api, setApi] = useState<IPGeoLocation>({
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
  });

  //useEffect(() => { }, []);
  //useEffect(() => { }, [api]);

  useEffect(() => {
    async function fetchDataOfIPGeoLocationAPI() {
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
    fetchDataOfIPGeoLocationAPI();


  }, [])
  return (
    <div className="App">
      <Header setNewLocation={setApi} />
      <Result api={api} />
    </div>
  );
}

export default App;
