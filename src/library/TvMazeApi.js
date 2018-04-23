import SetRequest from './SetRequest';

async function callTvMazeApi() {
    let output = [];
    let data = await SetRequest(
        "http://api.tvmaze.com/search/shows",
        {"q":"batman"}
    );

    for(let key in data) {
        if(data.hasOwnProperty(key)) {
            let value = data[key];

            output.push(value["show"]) ;
        }
    }

    return output;
}

export default callTvMazeApi;