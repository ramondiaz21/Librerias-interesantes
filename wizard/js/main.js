$(document).ready(() => {
  let wz_class = ".wizard";

  let args = {
      "wz_class": wz_class,
      "wz_nav_style": "dots", // dots, tabs, progress
      "wz_ori" : "vertical",
      "buttons": true,
      "navigation": 'all' // buttons, nav, all
  };
  
  document.addEventListener("readyWizard", function (e) {
  
      console.log("My body is ready")
  
      console.log(`↓ Target ↓`)
      console.log(e.detail.target)
  
      console.log(`↓ Elem ↓`)
      console.log(e.detail.elem)
  });
  
  const wizard = new Wizard(args);
  
  wizard.init();
  
  document.getElementById("btn_reset").onclick = function() {  
    wizard.reset();
  };  
  
  document.getElementById("btn_lock").onclick = function() {  
    wizard.lock();
  };  
  
  document.getElementById("btn_unlock").onclick = function() {  
    wizard.unlock();
  };  
  
  
  let $wz_doc = document.querySelector(wz_class)
  
  $wz_doc.addEventListener("prevWizard", function (e) {
    console.log("Prev Step");
  });
  
  $wz_doc.addEventListener("nextWizard", function (e) {
    console.log("Next Step");
  });
  
  $wz_doc.addEventListener("forwardNavWizard", function (e) {
    console.log("Forward Nav");
  });
  
  $wz_doc.addEventListener("backwardNavWizard", function (e) {
    console.log("Backward Nav");
  });
  
  $wz_doc.addEventListener("submitWizard", function (e) {
    alert("Form Submit");
  });
  
  $wz_doc.addEventListener("endWizard", function (e) {
    alert("Wizard End");
  });
  
  $wz_doc.addEventListener("errorFormValidatorWizard", function (e) {
    alert("Some required field is empty or incorrectly formatted.");
  });
  
  $wz_doc.addEventListener("lockWizard", function (e) {
    alert("Wizard locked");
  });
  
  $wz_doc.addEventListener("unlockWizard", function (e) {
    alert("Wizard unlocked");
  });
  
  $wz_doc.addEventListener("resetWizard", function (e) {
    document.getElementById("formWizard").reset();
    alert("Wizard has restarted");
  });
});