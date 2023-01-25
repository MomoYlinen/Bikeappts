import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "500px",
  minWidth: "300px",
  minHeight: "300px",
  display: "flex",
  borderRadius: "10px",
  border: "1px solid #000000",
  boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.2)",
};

function MyComponent(props: any) {
  const center = React.useMemo(() => ({ lat: props.lat, lng: props.lng }), []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });

  const zoom = 17;

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    map.setZoom(zoom);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: props.lat, lng: props.lng }} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
