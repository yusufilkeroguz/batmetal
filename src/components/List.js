import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import {removeHtmlTagsFromString, parseArrayToString} from "./../library/Utils";

const List = (props) => (
    <li className={props.className}>
        <Link className="thumbnail" to={`/detail/${props.id}`}>
            <img src={props.image.medium} alt={props.name} width="200" height="auto"/>
        </Link>
        <div className="content">
            <Link className="title" to={`/detail/${props.id}`}>
                {props.name}
            </Link>
            <p className="genres"><b>Genres:</b> {parseArrayToString(props.genres)}</p>
            <div className="rating"><Rating point={props.rating.average}/></div>
            <p className="description">
                {removeHtmlTagsFromString(props.summary)}
            </p>
        </div>
    </li>
);

export default List;