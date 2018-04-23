import React, {Component} from "react";
import Rating from "react-rating";

function setPoint(point) {
    if(point) {
        point = point / 2;
    }

    return point || 0;
}

export default class rating extends Component {
    render() {
        return (
            <Rating readonly={true} emptySymbol="rating-empty" fullSymbol="rating-full" initialRating={setPoint(this.props.point)}/>
        );
    }
}