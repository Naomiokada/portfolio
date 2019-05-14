
var graphicdesign = document.querySelector("#gd-icon"),
    illustrations = document.querySelector("#ill-icon"),
    uidesign = document.querySelector("#ui-icon"),
    motiongraphics = document.querySelector("#motion-icon");

// FUNCTIONS //

// float icons onmouseover

function floatIcon1() {
    graphicdesign.style.animation = "float-icon 2s infinite";
      
}
    
function floatIcon2() {
    illustrations.style.animation = "float-icon 2s infinite";
}

function floatIcon3() {
    uidesign.style.animation = "float-icon 2s infinite";
      
}

function floatIcon4() {
    motiongraphics.style.animation = "float-icon 2s infinite";
      
}


// float icons onmouseout    

function stopFloat1() {
    graphicdesign.style.animation = "none";
      
}
    
function stopFloat2() {
    illustrations.style.animation = "none";
}

function stopFloat3() {
    uidesign.style.animation = "none";
      
}

function stopFloat4() {
    motiongraphics.style.animation = "none";
      
}
    

