let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btns = [btn1, btn2, btn3, btn4, btn5]
let ratingState = document.getElementById("rating-state");
let thankYouState = document.getElementById("thank-you-state")
let ratingSpan = document.getElementById("rating");
let selectedValue = "";
let getValue = (element) =>{
    selectedValue = ""
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "hsl(216, 4%, 25%)"
        btns[i].style.color = "hsl(217, 12%, 63%)"
    }
    element.style.backgroundColor = "hsl(25, 97%, 53%)"
    element.style.color = "hsl(0, 0%, 100%)"
    selectedValue += element.value
}

let submitValue = () => {
    if(selectedValue !== ""){
        ratingState.style.display ="none"
        ratingSpan.textContent = selectedValue
        thankYouState.style.display ="block"
    }
    
}