const secondHand = document.querySelector(".second-hand");
        const mainHand = document.querySelector(".min-hand");
        const hourHand = document.querySelector(".hour-hand");


            const seconds = now.getSeconds()
            const secondsDegrees = ((seconds / 60) * 360) + 90


            secondHand.style.transform = "rotate(" + (secondsDegrees) + "deg)"
           
            const mins = now.getMinutes()
            const minsDegrees = ((mins / 60) * 360) + 90
            mainHand.style.transform = `rotate(${minsDegrees}deg)`

            const hours = now.getHours()
            const hoursDegrees = ((hours / 60) * 360) + 90
            hourHand.style.transform = `rotate(${hoursDegrees}deg)`

        }

        setInterval(function () {
            setClock()
        }, 1000)

// var currentSec = getSecondsToday();

// var seconds = (currentSec / 60) % 1;
// var minutes = (currentSec / 3600) % 1;
// var hours = (currentSec / 43200) % 1;

// setTime(60 * seconds, "second");
// setTime(3600 * minutes, "minute");
// setTime(43200 * hours, "hour");

// function setTime(left, hand) {
//     $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
// }

// function getSecondsToday() {
//     let now = new Date();

//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//     let diff = now - today;
//     return Math.round(diff / 1000);
// }