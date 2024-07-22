const btn = document.getElementById("start-typing-btn");

const textType = document.getElementById("text-type");

const typeStart = (text, speed) => {
    if(text === ""){
        clearTimeout(interval);
    }else{
        var interval = setTimeout(() => {
            textType.innerHTML += text.substr(0,1); 
            typeStart(text.substr(1,text.length),speed)
        },1000-speed)
    }
}


btn.addEventListener("click", () => {
    let text = document.getElementById("text").value;
    let speed = parseInt(document.getElementById("type-speed").value);
    textType.innerHTML = "";
    typeStart(text,speed);
})