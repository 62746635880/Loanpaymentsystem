# 🏦 Payment UTR Submission System

This is a simple payment confirmation web application with:
- ⏱ Countdown timer (auto-expiry)
- ✅ UTR submission with validation
- 💾 UTR storage and display on success page
- ❌ Expiry redirection to fail page
- 🔑 Multiple payment option selection

## 🚀 Features
- Countdown timer **(8:20 min)** with auto-redirect to `fail.html`
- Copy-to-clipboard buttons for amount and UPI ID
- Multiple payment options with selection highlight
- **12-digit UTR validation** before submission
- LocalStorage to store UTR and show on `success.html`
- Responsive design for mobile and desktop

---

## 🛠️ Installation
1. Download the ZIP or clone the repository:
   ```bash
   git clone https://your-repo-url.git

2. Extract files and open index.html in your browser.


3. Deploy to hosting (Netlify, GitHub Pages, cPanel, etc.).




---

📸 Screens

Payment Page: Enter UTR before timer ends

Fail Page: Shown when timer reaches 00:00

Success Page: Shows submitted UTR confirmation



---

⚡ How It Works

1. User lands on index.html.


2. Countdown timer starts (8:20).


3. User enters 12-digit UTR → validated → stored in browser.


4. Redirects to success.html with displayed UTR.


5. If timer expires, redirects to fail.html.




---

👨‍💻 Tech Used

HTML5

CSS3

JavaScript (Vanilla)
