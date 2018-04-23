/**
 * Remove Html Tags from String (This code more safe than dangerouslySetInnerHTML)
 * @link https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
 * @param html
 * @return {string|null}
 */
function removeHtmlTagsFromString(html) {
    if(html) {
        let div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
    }

    return null;
}

/**
 * Join Array
 * @param arr
 * @param [sep]
 * @return {string}
 */
function parseArrayToString(arr, sep = ", ") {
    let str = "";

    if(arr && Array.isArray(arr)) {
        str = arr.join(sep);
    }

    return str;
}

function findInObj(pattern, findInObj, searchInObj) {
    for(let key in findInObj) {
        if(findInObj.hasOwnProperty(key)) {
            let tempObj = findInObj[key];

            if(tempObj[pattern] == searchInObj[pattern]) {
                return findInObj[key];
            }
        }
    }

    return null;
}

export {removeHtmlTagsFromString, parseArrayToString, findInObj};