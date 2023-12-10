const from = document.getElementById("form");
function validateInput() {
  const inputField = document.getElementById("inputField");
  const inputValue = inputField.value.trim();

  // Define regex patterns for email and phone number
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  // Assumes a 10-digit phone number; you may need to adjust this based on your requirements
  // Check if the input matches either email or phone number pattern
  if (emailRegex.test(inputValue)) {
    form.action = "../home.html";
  } else if (phoneRegex.test(inputValue)) {
    form.action = "../home.html";
  } else {
    alert("Invalid Email or Phone Number");
  }
}
