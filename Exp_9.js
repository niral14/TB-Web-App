function validateForm() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;

  if (!name || !mobile || !email) {
      alert("Please fill all fields.");
      return false;
  }

  const mobilePattern = /^[0-9]{10}$/;
  if (!mobilePattern.test(mobile)) {
      alert("Invalid mobile number.");
      return false;
  }

  const emailPattern = /^[^\s^&%$#!*()@]+@[^\s^&%$#!*@]+\.[^^&%$#!*\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Invalid email address.");
      return false;
  }

  alert("Form submitted successfully! Welcome!");
  return true;
}