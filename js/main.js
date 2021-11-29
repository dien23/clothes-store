// quantity
const myInput = document.getElementById("my-input");
function stepper(btn) {
  let id = btn.getAttribute("id");
  let min = myInput.getAttribute("min");
  let max = myInput.getAttribute("max");
  let step = myInput.getAttribute("step");
  let value = myInput.getAttribute("value");
  let calcStep = id == "increment" ? step * 1 : step * -1;
  let newValue = parseInt(value) + calcStep;

  if (newValue >= min && newValue <= max) {
    myInput.setAttribute("value", newValue);
  }
}

// detail
function detailPopup() {
  var detailPopup = document.getElementById("modal");
  detailPopup.classList.toggle("active");
}

// search
function search() {
  var search = document.getElementById("search");
  search.classList.toggle("active");
}
