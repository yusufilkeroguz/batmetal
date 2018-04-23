import React from "react";
import List from "./List";

function ListItems(props) {
    const data = props.apiData;
    const listItems = data.map((item) => (
        <List key={item.id}
              className="tv-show"
              {...item}
        />
    ));

    return (<ul className="tv-shows list">{listItems}</ul>)
}

export default ListItems;