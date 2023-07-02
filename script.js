const name = document.getElementById("name");
const agreement = document.getElementById("agreement");
const input = document.getElementById("input");

input.addEventListener('input', () => {
  if (input.value.toLowerCase() == 'ilan') {
    input.value = 'zach';
  }
  name.innerText = input.value;
});