import { paginaInicio, paginaProjetos, paginaCadastro } from "./templates.js";

import { configurarFormulario } from "./validation.js";

import { configurarFeedback } from "./feedback.js";

import { configurarMascaras } from "./masks.js";

const app = document.getElementById("app");

function configurarModal() {
  const botaoModal = document.getElementById("btnModal");
  const modal = document.getElementById("modal");
  const fecharModal = document.getElementById("fecharModal");
  const confirmarModal = document.getElementById("confirmarModal");

  if (!botaoModal || !modal) {
    return;
  }

  botaoModal.addEventListener("click", function () {
    modal.classList.add("show");
  });

  fecharModal.addEventListener("click", function () {
    modal.classList.remove("show");
  });

  confirmarModal.addEventListener("click", function () {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", function (evento) {
    if (evento.target === modal) {
      modal.classList.remove("show");
    }
  });
}

function mostrarPagina() {
  const rota = window.location.hash;

  if (rota === "#projetos") {
    app.innerHTML = paginaProjetos();
  } else if (rota === "#cadastro") {
    app.innerHTML = paginaCadastro();

    configurarFormulario();
    configurarMascaras();
  } else {
    app.innerHTML = paginaInicio();

    configurarModal();
    configurarFeedback();
  }
}

window.addEventListener("hashchange", mostrarPagina);

mostrarPagina();
