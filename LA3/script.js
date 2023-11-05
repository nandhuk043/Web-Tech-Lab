document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
event.preventDefault();
const name = document.getElementById("name").value;
const gender =
document.querySelector('input[name="gender"]:checked')?.value;
const email = document.getElementById("email").value;
const subscribe = document.getElementById("subscribe").checked;
if (!name) {
alert("Please enter your name.");
return;
}
if (!gender) {
alert("Please select your gender.");
return;
}
if (!email) {
alert("Please enter your email.");
return;
}
if (!isValidEmail(email)) {
alert("Please enter a valid email address.");
return;
}
const confirmMessage = `Name: ${name}\nGender: ${gender}\nEmail:
${email}\nSubscribe: ${subscribe ? "Yes" : "No"}`;
if (confirm(`Please confirm the following
information:\n\n${confirmMessage}`)) {
const response = prompt("Thank you for submitting the
form!\n\nPlease enter any additional comments:");
if (response !== null) {
alert("Your response:\n\n" + response);
}
}
});
});
function isValidEmail(email) {
// Basic email validation regex
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailPattern.test(email);
}
