import GoogleMapReact from 'google-map-react';
import { googleAPIKey } from '../googleAPIKey';

const AnyReactComponent = ({ text }) => <div style={{color: "red"}}>{text}</div>;

const GoogleMap = () => {

    const defaultProps = {
        center: {
          lat: 23.80041,
          lng: 90.4152
        },
        zoom: 14
      };

    return (
           <div style={{ height: '500px', width: '500px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleAPIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={23.8041}
          lng={90.4152}
          text="Nexcus Electro"
        />
      </GoogleMapReact>
    </div>
    );
};

export default GoogleMap;