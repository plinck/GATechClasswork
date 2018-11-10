/* 
JAVASCript File -
Right now, this is just a placeholder for the JS code that will come later
I put it in here so that I would start standardize the place and file 
structure for html/css/js projects
*/

/* Wait until window is loaded to bind elements */
window.onload = function() {

    document.getElementById("mainImage").addEventListener("click", function () { myMove(); });
  
};


function resetBtn() {
    var elem = document.getElementById("mainImage");
    var msgElem = document.getElementById("messages");

    msgElem.innerHTML = "message";

    elem.style.height = "250px";
    elem.style.width = "250px";
    elem.style.backgroundColor = "orange";    
    elem.style.opacity = 1;   
    elem.style.top = "0px";
    elem.style.left = "0px"; 
    elem.style.margin = "25px"; 
}

// Move the element by the same amount as it's width
function myMove() {
    var elem = document.getElementById("mainImage");
    var msgElem = document.getElementById("messages");

    var maxPos = 0; 
    // So, this code shouldnt be needed but it is - 
    // TODO: - 
    // Check with the teacher.  For some reason, the first time
    // this function is called after reloading page, it does not proerly get 
    // the element mainImage so parseInt returns Nan (nil).  On all subsequent calls
    // -- i.e. when the user clicks image again and again, it all works fine.
    if (isNaN(parseInt(elem.style.width, 10)) == true) {
        maxPos = 250;
        msgElem.innerHTML = "Error Converting" + elem.style.width;
    } else {
        maxPos = parseInt(elem.style.width, 10);   // e.g. convert string "250px" to int
        msgElem.innerHTML = "Converted:" + elem.style.width + " to" + maxPos;
    }
    // Hardcoding maxPos for now since parseInt is not working for some reason even though it worked oin module 10
    maxPos = 250;
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (pos >= maxPos) {
        clearInterval(id);
        // set it back to normal
        resetBtn();
    } else {
        pos++; 
        elem.style.left = pos + 'px'; 
      }
    }

  } 