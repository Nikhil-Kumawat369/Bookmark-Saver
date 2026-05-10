// This is the main JS file , This is where the final execurion , function calling etc happens

import * as DOM from "./dom.js";
import * as fun from "./function.js";

// This eventlistener adds bookmarks on click
DOM.addBookmarkBtn.addEventListener("click" , () => {
    fun.addBookmark();
});