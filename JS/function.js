// This JS files containes all the functions used in this file

import * as DOM from "./dom.js";

// This function raises inavlid input error
export function checkInputValidation () {

    let name = DOM.bookmarkName.value;
    let url = DOM.bookmarkUrl.value;

    // If all 2 are true then only input feilds are valid
    let checkValidity = [false , false];

    // Resetting the error state of all inputs
    DOM.inputFields.forEach((val , idx , arr) => {
        val.classList.remove("emptyFeild");
        val.offsetWidth ;
    });

    // Checking validity & showing error msg 
    if(name === ""){
        // Showing Error
        DOM.inputFields[0].classList.add("emptyFeild");
    }else {
        checkValidity.splice(0 , 1 , true);
    }

    if(url === ""){
        // Showing Error
        DOM.inputFields[1].classList.add("emptyFeild");
    }else {
        checkValidity.splice(1 , 1 , true);
    }

    // Checking Validity & Returning 
    // So we know should the bookmark be created or not 
    let validity = checkValidity.every((val , idx , arr) => val === true);

    return validity;
}

// This function adds bookmark
export function addBookmark () {

    let validity = checkInputValidation();

    if(validity){

        let name = DOM.bookmarkName.value;
        let url = DOM.bookmarkUrl.value;

        DOM.bookmarkConatiner.insertAdjacentHTML("beforeend" , 
            `<div class="bookmarkItemCard">
                <a class="bookmarkLink" href="${url}" target="_main">${name}</a>
                <button class="removeBookmarkButton">Remove</button>
            </div>`
        );
    }
}