/* global google */
import React from "react";

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }

    handlePlaceChanged(props) {
        const place = this.autocomplete.getPlace();
        this.props.onPlaceChanged(place);
    }

    render() {
        return (
            <div>
             < input ref = { this.autocompleteInput} id = "autocomplete" placeholder = "Enter your city" type = "text" />
            </div> 
        );
    }
}
export default Autocomplete;
