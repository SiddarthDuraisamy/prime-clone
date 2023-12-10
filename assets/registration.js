const form = document.getElementById("form");
const btn = document.getElementById("btn");

function registration() {
  const name = document.forms["form"]["name"].value;
  let flag = false;
  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  const num = document.getElementById("num").value;
  if (num.length === 10 && /^[0-9]+[0-9]{1,9}$/) {
    console.log("This is a Valid Number");
    flag = true;
  } else {
    alert("Enter a Valid Number");
    return false;
  }

  const password = document.forms["form"]["pass"].value;
  if (password === "" || password.length < 6) {
    alert("please enter the password with at least 6 digits");
    return false;
  }
  if (flag) {
    form.action = "../home.html";
  }
}

btn.addEventListener("click", registration);
