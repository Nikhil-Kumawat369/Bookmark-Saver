// This JS files containes all the functions used in this file

import * as DOM from "./dom.js";

// This function adds bookmark
export function addBookmark () {

    let name = DOM.bookmarkName.value;
    let url = DOM.bookmarkUrl.value;

    let checkBookmarkAddingValidity = [];

    if(name === ""){
        DOM.inputFields[0].classList.toggle("emptyFeild");
    }
    if(url === ""){
        DOM.inputFields[1].classList.toggle("emptyFeild");
    }
    if(!isValidUrl(url)){
        DOM.inputFields[1].classList.toggle("emptyFeild");
        url.value = "";
    }

    DOM.bookmarkConatiner.innerHTML += `
    <div class="bookmarkItemCard">
        <a class="bookmarkLink" href="${url}" target="_main">${name}</a>
        <button class="removeBookmarkButton">Remove</button>
    </div>
    `
}