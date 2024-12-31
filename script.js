// Prizes array
const prizes = [
  "20% Rebates",
  "10 Free Candidates",
  "RM300 Vouchers"
];

// Assign prizes to gift boxes randomly
const giftBoxes = document.querySelectorAll(".gift-box");
const prizeIndexMap = Array.from({ length: giftBoxes.length }, (_, i) => i);
const shuffledPrizes = prizeIndexMap.sort(() => Math.random() - 0.5).map((i) => prizes[i % prizes.length]);

// Handle gift box click
giftBoxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    // Show the selected prize
    const selectedPrize = shuffledPrizes[index];
    const prizeTextElement = document.getElementById("prizeText");
    prizeTextElement.innerText = `🎉 You won: ${selectedPrize}!`;

    // Change the prize text color to white
    prizeTextElement.style.color = "white";

    // Show the prize container
    document.getElementById("prizeContainer").style.display = "block";

    // Disable all boxes after a choice
    giftBoxes.forEach((b) => b.classList.add("disabled"));

    // Show the form
    document.querySelector(".form-container").style.display = "block";
  });
});

// Handle form submission
document.querySelector(".form-container form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page refresh

  // Hide the form
  document.querySelector(".form-container").style.display = "none";

  // Display thank you message
  const thankYouMessage = document.createElement("div");
  thankYouMessage.innerHTML = `
    <h3>Thank You!</h3>
    <p>Your submission has been received. We'll contact you soon to claim your prize.</p>
  `;
  thankYouMessage.style.textAlign = "center";
  thankYouMessage.style.marginTop = "20px";
  thankYouMessage.style.color = "white"; // Changed to white

  document.querySelector(".campaign-container").appendChild(thankYouMessage);
});
