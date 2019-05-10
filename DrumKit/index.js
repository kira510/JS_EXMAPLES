function playSound (e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio)
    if (!audio) {
        return;
    }

    audio.currentTime = 0; //rewind to start
    audio.play();

    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
}

function removeClassPlaying (e) {
    //console.log(e); => FIRES on border-left-color , border-right-color, top and bottom color,
    // box-shadow and trasform

    if (e.propertyName === 'transform') {
        this.classList.remove('playing');
    }
}

var keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeClassPlaying)
});
window.addEventListener('keydown', playSound);