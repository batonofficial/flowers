onload = () =>{
        document.body.classList.remove("container");
        var audio = new Audio();
        audio.preload = 'auto';
        audio.src = 'flower.mp3';
        audio.play();
};
