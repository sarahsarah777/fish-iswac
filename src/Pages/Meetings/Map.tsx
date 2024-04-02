import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api"
import { useMemo } from "react";
import './Map.css'
// API Key = AIzaSyDBfCSIcCZqjbxc28_kzYUcMZtMMoHe2uc
// API Key = AIzaSyCL-0rQ3OWtsXA89d_kdR9LMYBbSROf4MU

export const Map = (): JSX.Element => {
    const { isLoaded } = useLoadScript({
      // https://maps.googleapis.com/maps/api/js?key=AIzaSyDBfCSIcCZqjbxc28_kzYUcMZtMMoHe2uc&callback=console.debug&libraries=maps,marker&v=beta
        //googleMapsApiKey: 'AIzaSyCL-0rQ3OWtsXA89d_kdR9LMYBbSROf4MU'//process.env.REACT_APP_GOOGLE_API_KEY,
        googleMapsApiKey: 'AIzaSyDBfCSIcCZqjbxc28_kzYUcMZtMMoHe2uc'
      });
      const center = useMemo(() => ({ lat: 34.098280, lng: -117.669480 }), []);
    return (
      <>
        {isLoaded && (
          <div style={{width: '100%',  height: '400px'}}>
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={12}
              >
              <Marker position={{ lat: 34.098280, lng: -117.669480 }} />
            </GoogleMap>
          </div>
        )}
      </>
    )
}