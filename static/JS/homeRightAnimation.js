document.addEventListener("DOMContentLoaded", function() {
  showHello()
});
function showHello() {
  const element = document.querySelector('#move');
  element.classList.add('show');
}