import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export namespace styles {
  export const MapDiv = styled.div`
    #mapId {
      height: 78vh;
      width: 100%;//100vw;
      /*z-index: 200;*/


      .leaflet-container{
            position: static !important;
            height: 100%;
        }
    }
  `;
  export const MapContainerLocation = styled(MapContainer)`
    &:hover {
      cursor: pointer;
    }
  `;
}

export default styles;
