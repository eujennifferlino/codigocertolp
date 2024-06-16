$(document).ready(function () {
  // Botão do menu mobile
  $("#mobile-btn").on("click", function () {
    $("#mobile-menu").toggleClass("active");
    $("#mobile-btn").find("i").toggleClass("fa-bars fa-x");
  });

  // Obter modal
  var modal = document.getElementById("volunteerModal");

  // Obter o botão que abre o modal
  var btn = document.getElementById("openVolunteerModal");

  // Obter o elemento <span> que fecha o modal
  var span = document.getElementsByClassName("close-button")[0];

  // Quando o usuário clicar no botão, abre o modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // Quando o usuário clicar em <span> (x), fecha o modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Quando o usuário clicar fora do modal, fecha o modal
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
