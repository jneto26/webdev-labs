/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
// const makeBigger = () => {
//    // alert('make bigger!');
//    var fontsi = document.getElementById("words").style.fontSize;
//    fontsi++;
//    document.getElementById("words").style.fontSize = fontsi+ "px";
// };

const makeDefault = () => {
   let body = document.querySelector('body');
   body.removeAttribute("class");
};
const makeOcean = () => {
   body = document.querySelector("body");
   body.className = "ocean";
   // alert('make bigger!');
};
const makeDesert = () => {
   // document.querySelector('body').className = 'desert';
   body = document.querySelector("body");
   body.className = "desert";
};
const makeContrast = () => {
   // document.querySelector('body').className = 'desert';
   body = document.querySelector("body");
   body.className = "high-contrast";
};


document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#high-contrast").addEventListener('click', makeContrast);