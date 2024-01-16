function calculate() {
  var inputValue = document.getElementById("inputNumber").value;
  if (inputValue === "") {
    alert("Masukkan Nilai Dulu Broo!!!");
    return;
  }

  var luas = inputValue * inputValue;
  var keliling = 4 * inputValue;

  displayResult(
    "Berikut Hasilnya :\nHasil Luas : " +
      luas +
      "\nHasil Keliling : " +
      keliling
  );
}

function displayResult(result) {
  var textArea = document.getElementById("hasil");
  textArea.value = "";
  var index = 0;
  var typingAnimation = setInterval(function () {
    textArea.value += result[index];
    index++;
    if (index === result.length) {
      clearInterval(typingAnimation);
    }
  }, 50);
}

function resetPage() {
  document.getElementById("inputNumber").value = "";
  document.getElementById("hasil").value = "";

  document.getElementById("inputNumber").focus();
}
