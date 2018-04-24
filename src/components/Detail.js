import React from "react";
import {removeHtmlTagsFromString, parseArrayToString, findInObj} from "./../library/Utils";
import NotFound from "./NotFound";
import Rating from "./Rating";

const Detail = (props) => {
    let data = props.apiData;
    let matches = props.match.params;

    let obj = findInObj("id", data, matches);

    if(obj !== null) {
        return (
            <main className="tv-shows">
                <div className="tv-show">
                    <div className="image">
                        <img src={props.image ? props.image.original : ""} alt={obj.name} width={200}/>
                    </div>
                    <div className="content">
                        <h1>{obj.name}</h1>
                        <a href={obj.url} className="tvmaze-link">Go To TvMaze Link &raquo;</a>
                        <p><b>Language:</b> {obj.language}</p>
                        <p className="genres"><b>Genres:</b> {parseArrayToString(obj.genres)}</p>
                        <div className="rating"><Rating point={obj.rating.average}/></div>
                        <p className="description">
                            {removeHtmlTagsFromString(obj.summary)}
                        </p>
                    </div>
                </div>
            </main>
        );
    }

    return (<NotFound />);
};

export default Detail;