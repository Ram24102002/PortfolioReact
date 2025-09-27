// index.js
export function notifyTostFun(message, bgcolor) {
  const notifyTost = document.createElement("div");

  notifyTost.innerText = message;
  notifyTost.style.position = "fixed";
  notifyTost.style.zIndex = "9999"; // on top
  notifyTost.style.top = "50px";
  notifyTost.style.left = "50%"; // center horizontally
  notifyTost.style.transform = "translateX(-50%)"; // shift by half
  notifyTost.style.backgroundColor = bgcolor;
  notifyTost.style.color = "white";
  notifyTost.style.padding = "6px 17px";
  notifyTost.style.fontSize = "13px";
  notifyTost.style.borderRadius = "8px";
  notifyTost.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
  notifyTost.style.fontWeight = "bold";
  notifyTost.style.opacity = "1"; // visible at first
  notifyTost.style.transition = "opacity 0.5s ease";

  document.body.appendChild(notifyTost);

  // Auto fade out + remove after 3s
  setTimeout(() => {
    notifyTost.style.opacity = "0";
    setTimeout(() => notifyTost.remove(), 500);
  }, 3000);
}
