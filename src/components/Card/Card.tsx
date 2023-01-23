import { IPGeoLocation } from "../../models/models";
import { styles } from "./styles";

export const Card = (props: {
    apiCard: IPGeoLocation;
    isPropertyLocation?: boolean;
    index: number;
}) => {
    //render
    const renderPropertyLocation = (location: Location) => {
        const arrayToString = Object.values(location)
            .filter((item) => typeof item === "string" || Number.isInteger(item))
            .join(" ");
        /* console.log(
                 Object.values(location).filter((item) => typeof item === "string" || Number.isInteger(item))
             );*/
        return (
            <styles.CardText>
                {
                    arrayToString
                    // p.map((item, index) => <p className='property property-location'>{item}</p>)
                }
            </styles.CardText>
        );
    };

    const renderPropertyValueOfIPGeoLocation = () => {
        const propertyValueOfIPGeoLocation = Object.values(props.apiCard);
        return (
            <>
                <styles.Line index={props?.index} />
                <styles.CardTitle>
                    {propertyValueOfIPGeoLocation[0].toUpperCase()}
                </styles.CardTitle>
                {propertyValueOfIPGeoLocation[0] === "location" ? (
                    renderPropertyLocation(propertyValueOfIPGeoLocation[1])
                ) : (
                    <styles.CardText>{propertyValueOfIPGeoLocation[1]}</styles.CardText>
                )}
            </>
        );
    };
    return <styles.Item>{renderPropertyValueOfIPGeoLocation()}</styles.Item>;
};
