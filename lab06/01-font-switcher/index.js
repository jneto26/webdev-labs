let currentFont = 2;
const makeBigger = () => {
   // alert('make bigger!');
   // var fontsi = document.getElementById("words").style.fontSize;
   // fontsi++;
   // document.getElementById("words").style.fontSize = fontsi+ "px";
   // let my_header = document.getElementsByTagName("h1")[0];
   // let content = document.getElementsByClassName('content')[0];

   currentFont += 0.2; 
   setFont();
   // ev.targe.innerHTML = 'B'
};

const setFont = () =>{
   document.querySelector('.content').style.fontSize = `${currentFont}em`;
   document.querySelector('h1').style.fontSize = `${currentFont + 0.5}em`;
}

const makeSmaller = () => {
   currentFont -= 0.2; 
   setFont();
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);
