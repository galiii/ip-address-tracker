import { Card } from "../Card/Card";
import { MapLocation } from "../MapLocation/MapLocation";
import { IPGeoLocation } from "../../models/models";
import { styles } from "./styles";

interface Props {
    api: IPGeoLocation;
}

export const Result = (props: Props) => {
    //state

    //render
    const renderIPGeoLocationToCard = () => {
        const entriesKeyNameValueProp = Object.entries(
            props.api
        ) as IPGeoLocation[];

        //console.log("123123123123", props.api["location"]);
        return entriesKeyNameValueProp.map((item, index) => {
            //printProperty(item)
            return (
                <Card
                    key={index}
                    index={index}
                    apiCard={item}
                    isPropertyLocation={!!item?.location && item?.location !== undefined}
                />
            );
        });
    };

    return (
        <styles.SectionResult>
            <styles.ListItems>{renderIPGeoLocationToCard()}</styles.ListItems>

            <MapLocation
                latitude={!!props.api.location?.lat ? props.api.location?.lat : 0}
                longitude={!!props.api.location?.lng ? props.api.location?.lng : 0}
                location={props.api?.location}
            />
        </styles.SectionResult>
    );
};
