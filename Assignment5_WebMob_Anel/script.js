const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('click', () => {
        const note = key.getAttribute('data-note');
        const audio = document.getElementById(note);
        audio.currentTime = 0; 
        audio.play(); 
    });
});
