import React, {Component} from 'react'
import css from 'next/css'
import Map from 'react-minimal-google-maps'

class MapPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      API: {},
      markers: [
        {
          position: {lat: -34.397, lng: 150.644},
          title: 'Hello World!',
          defaultAnimation: 2
        },
        {
          position: {lat: -32.397, lng: 150.644},
          title: 'Hello Github!',
          defaultAnimation: 2
        }
      ]
    };
    this.handleLoadUpdate = this.handleLoadUpdate.bind(this);
  }

  handleLoadUpdate(result){
    this.setState({
      API: {
        isLoaded: result.isLoaded,
        map: result.map
      }
    });
    // we can load some objects from google API here
    console.log("API loaded - parent component");
  }

  render(){
    return(
      <div>
        <Map
          initialZoom={5}
          initialCordinates={{lat: -34.397, lng: 150.644}}
          markers={this.state.markers}
          styles={{height: "500px"}}
          updateLoadState={this.handleLoadUpdate}
        />
      </div>
    )
  }
}

export default MapPage
