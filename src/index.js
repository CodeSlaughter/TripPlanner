console.log("Hello from JavaScript");

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1IjoicGF0cmlja2d1bmQiLCJhIjoiY2o4YnF3em5hMDB3azMzc2Z0c2s4aXA0diJ9.lC8yZP6sxPbTeu9iW_UTkA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

//mapboxgl.accessToken = 'pk.eyJ1IjoicGF0cmlja2d1bmQiLCJhIjoiY2o4YnF3em5hMDB3azMzc2Z0c2s4aXA0diJ9.lC8yZP6sxPbTeu9iW_UTkA';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v10'
// });