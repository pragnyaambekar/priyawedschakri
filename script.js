function initLoadingScreen() {
    let countdown = 5; 
    const loadingMessage = document.getElementById('loading-message');
    loadingMessage.innerHTML = `Page will load in ${countdown} seconds`;
    
    const countdownInterval = setInterval(function() {
        countdown--;
        if (countdown > 0) {
            loadingMessage.innerHTML = `Page will load in ${countdown} ${countdown === 1 ? 'second' : 'seconds'}`;
        } else {
            clearInterval(countdownInterval);
            document.getElementById('loading-screen').style.display = 'none';
            document.querySelector('nav').style.display = 'block';
            document.getElementById('carouselExampleIndicators').style.display = 'block';
            document.querySelector('section').style.display = 'block';
        }
    }, 1000);
}

function countdown(id, targetDate) {
    const countdownElement = document.getElementById(id);
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Countdown: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Event Started";
        }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    const targetDate = new Date("August 18, 2024 08:56:00").getTime();
    countdown('countdown1', targetDate);
    countdown('countdown2', targetDate);
    countdown('countdown3', targetDate);
});
