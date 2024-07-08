let song = document.getElementById("song");
let play = document.getElementById("play");
let bar = document.getElementById("bar");
var list = ["./Pentatonix_-_Binding_Lights_CeeNaija.com_.mp3","./Espresso - PagalHits.mp3","./fine-taste-production-music-elegant-classy-9915.mp3","./cute-and-upbeat-139374.mp3","./happy-child-112294.mp3"];
var names = ["Blinding Lights","Espresso","fine-taste","cute-and-upbeat","happy-child"];
var count=0;
var src1 = list[count];

var audio = new Audio(src1);
    audio.onloadedmetadata=()=>{
        // console.log(audio.duration);
        bar.max = audio.duration;
        bar.value = audio.currentTime;
        console.log(bar.max);
        console.log(bar.value);
}

function mypause(){
    console.log(song.ondurationchange)
    if(play.classList.contains("fa-pause")){
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");

    }
    else {
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
    
}
if(song.play){
    setInterval(() => {
        bar.value = song.currentTime;
    }, 50);
}
bar.onchange = () => {
    song.play();
    song.currentTime = bar.value;
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
    console.log(song.currentTime);
}

let next = document.querySelector(".next");
next.addEventListener("click",()=>{
    count= count+1;

    src1= list[count%(list.length)];
    var audio = new Audio(src1);
    audio.onloadedmetadata=()=>{
        // console.log(audio.duration);
        bar.max = audio.duration;
        bar.value = audio.currentTime;
        console.log(bar.max);
        console.log(bar.value);
    }

    document.querySelector("audio").src = src1;
    document.querySelector(".song_name").innerHTML = names[count%(list.length)];
    song.onloadedmetadata = ()=>{
        bar.max = audio.duration;
        bar.value = audio.currentTime;
        console.log(bar.max);
        console.log(bar.value);
    }

    if(play.classList.contains("fa-pause")){
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");

    }
    else {
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
    mypause();
})

let back = document.querySelector(".back");
back.addEventListener("click",()=>{
    count =count -1;
    src1= list[count%(list.length)];
    var audio = new Audio(src1);
    audio.onloadedmetadata=()=>{
        // console.log(audio.duration);
        bar.max = audio.duration;
        bar.value = audio.currentTime;
        console.log(bar.max);
        console.log(bar.value);
    }

    document.querySelector("audio").src = src1;
    document.querySelector(".song_name").innerHTML = names[count%(list.length)];
    song.onloadedmetadata = ()=>{
        bar.max = audio.duration;
        bar.value = audio.currentTime;
        console.log(bar.max);
        console.log(bar.value);
    }
    mypause();
})