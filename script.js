// Minecraft Server IP
const serverIP = "play.mycoolserver.com"; // Replace with your server's IP

function copyToClipboard() {
  // Create a temporary text area to copy the IP
  const tempInput = document.createElement("textarea");
  tempInput.value = serverIP;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Show confirmation message
  const status = document.getElementById("copy-status");
  status.classList.remove("hidden");
  setTimeout(() => {
    status.classList.add("hidden");
  }, 2000);
}
