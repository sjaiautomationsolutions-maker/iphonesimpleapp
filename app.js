const testButton = document.querySelector("#testButton");
const result = document.querySelector("#result");

testButton.addEventListener("click", () => {
  result.textContent = "Hello World";
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // The app still works if service worker registration is unavailable.
    });
  });
}
