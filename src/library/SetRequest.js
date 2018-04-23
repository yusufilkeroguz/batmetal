import fetch from "node-fetch";

/**
 * @name setUrl
 * @description Generate Uri with Queries
 * @param {string} url
 * @param {object} [query]
 * @return {string}
 */
function setUrl(url, query = {}) {
    let _query = "";

    if(Object.keys(query).length) {
        for(let key in query) {
            if(query.hasOwnProperty(key)) {
                let value = query[key];

                _query += `&${key}=${value}`;
            }
        }
    }

    _query = _query.replace(/&/, '?');

    return url + _query;
}

/**
 * @name setRequest
 * @description Set Request To URL and get body (JSON) from URL
 * @param {string} url
 * @param {object} [query]
 * @return {Promise.<*>}
 */
let setRequest = async function setRequest(url, query = {})  {
    url = setUrl(url, query);

    let body = await fetch(url);
    return await body.json();
};

export default setRequest;