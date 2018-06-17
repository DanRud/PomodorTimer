var btn = document.querySelector('.start');
var btnReset = document.querySelector('.reset');
var time = document.querySelector('.num');
var audio = new Audio('great.mp3');
var paragraphQuotes = document.querySelector('.quote');
var quotes = [
"\"If you spend too much time thinking about a thing, you'll never get it done.\” ― Bruce Lee",
"\"Your mind is for having ideas, not holding them.\" ― David Allen",
"\"Consider everything an experiment.\" ― Corita Kent",
"\"Don't quit. Suffer now and live the rest of your life as a champion.\" - Muhammad Ali",
"\"You are as old as you think you are.\" - Muhammad Ali",
"\"Aim for the moon. If you miss, you may hit a star.\" —W. Clement Stone",
"\“Don’t watch the clock; do what it does. Keep going.\” —Sam Levenson",
"\“Keep your eyes on the stars, and your feet on the ground.\” —Theodore Roosevelt"
];

var timeToNumber = parseInt(time.textContent);




btn.addEventListener("click", function(){
    var counter = setInterval(timer, 1000);
    timeToNumber *= 60;

    btn.style.display = 'none';

    function timer() {
        timeToNumber -= 1;
        time.textContent = timeToNumber;

        if (timeToNumber % 60 >= 10) {
            time.textContent = (Math.floor(timeToNumber / 60) + ":" + timeToNumber % 60);
        } else {
            time.textContent = (Math.floor(timeToNumber / 60) + ":" + "0" + timeToNumber % 60);
        }

        //reset timer
        if(timeToNumber === 0) {
            clearInterval(counter);
            audio.play();
            btn.style.display = 'none';
            btnReset.style.display = 'block';
        }
    }


});


btnReset.addEventListener("click", function(){
        btn.style.display = 'block';
        btnReset.style.display = 'none';
        time.textContent = "25:00";
        timeToNumber = parseInt(time.textContent);
        paragraphQuotes.textContent = selectQuote();
});


function selectQuote() {
   var numQuote = Math.floor(Math.random() * 8);
   return quotes[numQuote];
}

paragraphQuotes.textContent = selectQuote();


