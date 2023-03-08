let result = document.getElementById("result");
let historyList = document.getElementById("historyList");
let memory = null;

function append(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let expression = result.value;
  let answer;
  try {
    answer = eval(expression);
    result.value = answer;
    historyList.innerHTML += `<li>${expression} = ${answer}</li>`;
  } catch (error) {
    alert("Invalid expression");
  }
}

function memorize() {
  memory = result.value;
}

function recall() {
  if (memory !== null) {
    result.value += memory;
  }
}

function clearMemory() {
  memory = null;
}

function toggleHistory() {
  historyList.classList.toggle("hidden");
}

function clearHistory() {
  historyList.innerHTML = "";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Escape") {
    clearResult();
  } else if (event.key === "Backspace") {
    backspace();
  } else {
    append(event.key);
  }
});
