let time = 8 * 60 + 20;
const timerEl = document.getElementById('timer');

setInterval(() => {
    if (time > 0) {
        time--;
        let minutes = String(Math.floor(time / 60)).padStart(2, '0');
        let seconds = String(time % 60).padStart(2, '0');
        timerEl.textContent = `${minutes}:${seconds}`;
    } else {
        window.location.href = "fail.html"; // Redirect when timer ends
    }
}, 1000);

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied: ' + text);
    });
}

function submitUTR() {
    const utr = document.getElementById('utrInput').value.trim();
    const utrPattern = /^\d{12}$/;

    if (utr === "") {
        alert("Please enter a UTR number.");
    } else if (!utrPattern.test(utr)) {
        alert("Invalid UTR. It should be a 12-digit number.");
    } else {
        localStorage.setItem('submittedUTR', utr);
        window.location.href = "success.html";
    }
}

function selectPayment(button) {
    document.querySelectorAll('.payment-options button').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}
