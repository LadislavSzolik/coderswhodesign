let earlyAccessSet = false;

function signUpEarlyAccess(e) {
  e.preventDefault();
  console.log("it worked");
  let formData = new FormData(e.target);
  formData.set("form-name", "earlyaccess")
  fetch("/", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: new URLSearchParams(formData).toString()
  }).then(() => earlyAccessSet = true).catch((error) => console.log("Error: ", error))
}

let newsLetterSet = false;

function signUpNewsletter(e) {
  let formData = new FormData(e.target);
  formData.set("form-name", "newsletters")
  fetch("/", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: new URLSearchParams(formData).toString()
  }).then(() => newsLetterSet = true).catch((error) => console.log("Error: ", error))
}