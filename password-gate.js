(function () {
  "use strict";
  var storageKey = "iceland-2026-guide-unlocked-v1";
  var gate = document.querySelector(".password-gate");
  if (!gate) return;
  var form = gate.querySelector("form");
  var input = gate.querySelector("input");
  var status = gate.querySelector(".password-gate__status");
  function unlock() {
    try { sessionStorage.setItem(storageKey, "1"); } catch (error) {}
    document.body.classList.remove("password-gate-locked");
    gate.hidden = true;
    input.value = "";
  }
  try {
    if (sessionStorage.getItem(storageKey) === "1") { unlock(); return; }
  } catch (error) {}
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value.trim() === "皇儿") { unlock(); return; }
    status.textContent = "答案不对，请再试一次。";
    input.select();
  });
  input.focus();
}());
