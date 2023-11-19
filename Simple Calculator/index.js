function display(num1){
    // var num1= document.getElementById('next').innerText;
    
    
    document.getElementById('head').value+=num1;
   

    
    
}
function display_result(){

    let exp = document.getElementById('head').value;
    document.getElementById('answer').value = exp;
  exp = exp.replace(/×/g, "*").replace(/÷/g, "/");
  let result;
  try {
    result = eval(exp);
    // if decimal number more than 4 decimal places
    if (result.toString().indexOf(".") !== -1) {
      result = result.toFixed(4);
    }
  } catch (e) {
    result = "Error";
  }
  document.getElementById('answer').value = result;
      

}
 function clea(){
    
    var inp=" ";
    document.getElementById('head').value=inp;
    document.getElementById('answer').value='0';

 }
 function deletee(){
    var ev = document.getElementById('head');
    ev.value = ev.value.slice(0,-1);
 }

const moonIcon= document.querySelector(".moon");
const nightIcon= document.querySelector(".night");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

const iconToggle=() =>{
    moonIcon.classList.toggle("display-none");
    nightIcon.classList.toggle("display-none");

};

const themeCheck=() => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark')
        moonIcon.classList.add("display-none");
        return
      } 
      nightIcon.classList.add("display-none");
      
};

const themeSwitch=() => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme","light")
        iconToggle();
        return
      } 
      document.documentElement.classList.add('dark')
        localStorage.setItem("theme","dark")
        iconToggle();
        
};

moonIcon.addEventListener("click",() => {
    themeSwitch();

});
nightIcon.addEventListener("click",() => {
    themeSwitch();

});

themeCheck();