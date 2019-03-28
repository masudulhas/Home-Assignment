import React, { Component} from 'react';
import { render } from 'react-dom';
import Autocomplete from "./Autocomplete";

class App extends Component {
    state = {
        place: {}
    };
    
    showPlaceDetails(place) {
        this.setState({
            place
        });
    }
    render() {
    /* const AddressDetails = props => {
        return ( <div>
            <pre> {
                JSON.stringify(props.place, null, 2)
            } </pre> 
            </div>
            )
        }; */
        return ( <div>
            <
            Autocomplete onPlaceChanged = {
                this.showPlaceDetails.bind(this)
            }
            /> 
            {/* { < AddressDetails place = { this.state.place }/>  } */}
            </div>
        );
    }
}
render( < App / > , document.getElementById('root'));
