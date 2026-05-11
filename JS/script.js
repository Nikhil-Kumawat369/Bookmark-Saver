// This is the main JS file , This is where the final execurion , function calling etc happens

import * as DOM from "./dom.js";
import * as fun from "./function.js";

// This eventlistener adds bookmarks on click
DOM.addBookmarkBtn.addEventListener("click" , () => {
    fun.addBookmark();
    console.log("Click !!");

    // Only if both fiels are not empty , we should reset th einput feilds
    // Because Thats the only situation where actually a book mark is created
    if(DOM.bookmarkName.value !== "" && DOM.bookmarkUrl.value !== ""){
        DOM.bookmarkName.value = "";
        DOM.bookmarkUrl.value = "";
    }

    
});

// If The user starts to type in any feild it needs to be reset instantaneously
DOM.inputFields.forEach((val , idx , arr) => {
    val.addEventListener("input" , () => {
        val.classList.remove("emptyFeild");
    });
});

// This event listener deletes the bookmark created onClick of th Remove Btn
DOM.bookmarkConatiner.addEventListener("click" , (e) => {
    
    if(e.target.classList.contains("removeBookmarkButton")){

        e.target.parentElement.remove();

    }

});