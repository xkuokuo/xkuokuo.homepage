'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import Datamap from 'datamaps'

const e = React.createElement;

class ZooMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Place Holder For React Component.';
    }

    return (
      <div id="zoo-map">
      </div>
    );
  }

  componentDidMount() {
    var map = new Datamap({
      element: document.getElementById('zoo-map'),
      geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false
      },
      projection: 'mercator',
      height: "600",
      fills: {
        defaultFill: "#E0E0E0",
        authorHasTraveledTo: "#FF9800",
        zoo: "#E65100"
      },
      data: {
        USA: { fillKey: "authorHasTraveledTo" },
        CHN: { fillKey: "authorHasTraveledTo" },
        SGP: { fillKey: "authorHasTraveledTo" },
        DEU: { fillKey: "authorHasTraveledTo" },
        MEX: { fillKey: "authorHasTraveledTo" },
      },
      bubblesConfig: {
        borderWidth: 2,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        popupOnHover: true,
        radius: null,
        popupTemplate: function(geography, data) {
          return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
        }, fillOpacity: 0.75,
        animate: true,
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1,
        highlightFillOpacity: 0.85,
        exitDelay: 100,
        key: JSON.stringify
      }
    });

    map.bubbles([
      {name: '北京动物园', latitude: 39.90, longitude: 116.4, radius: 8, fillKey: "zoo"},
      {name: 'Singapore Zoo', latitude: 1.35, longitude: 103.8, radius: 8, fillKey: "zoo"},
      {name: 'Seattle Zoo', latitude: 47.6, longitude: -122.3, radius: 8, fillKey: "zoo"},
      {name: 'San Diego Zoo', latitude: 32.7, longitude: -117.6, radius: 8, fillKey: "zoo"},
      {name: 'Buffalo Zoo', latitude: 42.8, longitude: -78.9, radius: 8, fillKey: "zoo"},
      {name: 'Portland Zoo', latitude: 45.5, longitude: -122.7, radius: 8, fillKey: "zoo"},
      {name: 'Atlanta Aquarium', latitude: 33.7, longitude: -84.3, radius: 8, fillKey: "zoo"},
      {name: 'Honolulu Zoo', latitude: 21.3, longitude: 157.9, radius: 8, fillKey: "zoo"},
      {name: 'Cancún Xcaret', latitude: 21.2, longitude: -86.9, radius: 8, fillKey: "zoo"},
      {name: 'Berlin Zoo', latitude: 52.5, longitude: 13.4, radius: 8, fillKey: "zoo"}
    ], {
      popupTemplate: function(geo, data) {
        return "<div class='hoverinfo'>" + data.name + "</div>";
      }
    });
  }
}

const domContainer = document.querySelector('#react_container');
ReactDOM.render(e(ZooMap), domContainer);
