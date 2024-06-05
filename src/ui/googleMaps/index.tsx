import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const index = () => {
  const center = {
    lat: -6.3307331,
    lng: 106.6787498
  };
  const style = {
    width: '100%',
  };
  return (
    <div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY ? process.env.NEXT_PUBLIC_GOOGLE_API_KEY : ''} mapIds={['2b95bf2655899320']}>
        <GoogleMap
          mapContainerStyle={style}
          center={center}
          zoom={16}
          options={{ mapId: '2b95bf2655899320' }}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default index;
