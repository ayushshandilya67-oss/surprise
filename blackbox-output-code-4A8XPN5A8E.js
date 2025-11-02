function updateCountdown() {
    const birthday = new Date('November 5, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('timer').innerHTML = "It's your birthday! 🎂";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();