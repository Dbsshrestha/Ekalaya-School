import React, { useEffect } from 'react';

function GoogleMap() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDEqFFqa-AJnlRukAFr3KFUxcCQt43-uOs&callback=initMap&language=en`;
    script.async = true;
    script.defer = true; // Added defer attribute for best-practice loading
    window.initMap = function() {
      // Create a new map and set the center and zoom level
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 27.696312, lng: 85.377687 },
        zoom: 12,  // Adjust the zoom level here
      });

      // Add a marker at the center of the map
      const marker = new google.maps.Marker({ // Continue using Marker
        position: map.getCenter(),
        map: map,
      });

      // Add a click listener to the marker
      marker.addListener('click', () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${marker.getPosition().lat()},${marker.getPosition().lng()}`);
      });
    };
    document.head.appendChild(script);
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
}

export default GoogleMap;
