function circleChaptaKaro() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
    
        circleMouseFollower(xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector(
                "#minicircle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);
    });
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(
            "#minicircle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) )`;
    });
}

circleChaptaKaro();
circleMouseFollower();
let speech = new SpeechSynthesisUtterance();

let voices=[];

// let voiceSelect=document.querySelector("select");

window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    // it will give the default value to the voice used initially
    // speech.voice[0];
};


document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})