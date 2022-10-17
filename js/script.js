const input = document.querySelector("input");
const body = document.querySelector("body");

const darkmode = () => {
    body.classList.toggle("dark");  
};
input.onchange = darkmode;