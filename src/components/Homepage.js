import React from "react";
import ListItems from "./ListItems";

const Homepage = (props) => {
    return (<main> <ListItems apiData={props.apiData}/> </main>)
};

export default Homepage;