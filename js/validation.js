import { salvarCadastro } from "./storage.js";

function mostrarErro(campo, mensagem) {
  let erro = campo.parentElement.querySelector(".erro-campo");

  if (!erro) {
    erro = document.createElement("small");

    erro.className = "erro-campo";

    campo.parentElement.appendChild(erro);
  }

  erro.textContent = mensagem;

  campo.classList.add("campo-erro");
}

function limparErros() {
  const erros = document.querySelectorAll(".erro-campo");

  erros.forEach(function (erro) {
    erro.remove();
  });

  const campos = document.querySelectorAll(".campo-erro");

  campos.forEach(function (campo) {
    campo.classList.remove("campo-erro");
  });
}

export function configurarFormulario() {
  const formulario = document.getElementById("formCadastro");

  if (!formulario) {
    return;
  }

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    limparErros();

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");
    const data = document.getElementById("data");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");
    const interesse = document.getElementById("interesse");
    const mensagem = document.getElementById("mensagem");
    const consentimento = document.querySelector('input[name="consentimento"]');

    let formularioValido = true;

    if (nome.value.trim() === "") {
      mostrarErro(nome, "Digite seu nome completo.");

      formularioValido = false;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
      mostrarErro(email, "Digite um e-mail válido.");

      formularioValido = false;
    }

    const cpfNumeros = cpf.value.replace(/\D/g, "");

    if (cpfNumeros.length !== 11) {
      mostrarErro(cpf, "Digite um CPF válido.");

      formularioValido = false;
    }

    const telefoneNumeros = telefone.value.replace(/\D/g, "");

    if (telefoneNumeros.length !== 10 && telefoneNumeros.length !== 11) {
      mostrarErro(telefone, "Digite um telefone válido.");

      formularioValido = false;
    }

    const cepNumeros = cep.value.replace(/\D/g, "");

    if (cepNumeros.length !== 8) {
      mostrarErro(cep, "Digite um CEP válido.");

      formularioValido = false;
    }

    if (data.value === "") {
      mostrarErro(data, "Informe sua data de nascimento.");

      formularioValido = false;
    }

    if (cidade.value.trim() === "") {
      mostrarErro(cidade, "Digite sua cidade.");

      formularioValido = false;
    }

    if (estado.value === "") {
      mostrarErro(estado, "Selecione seu estado.");

      formularioValido = false;
    }

    if (interesse.value === "") {
      mostrarErro(interesse, "Selecione sua área de interesse.");

      formularioValido = false;
    }

    if (mensagem.value.trim().length < 10) {
      mostrarErro(mensagem, "Escreva pelo menos 10 caracteres.");

      formularioValido = false;
    }

    if (!consentimento.checked) {
      mostrarErro(consentimento, "Você precisa aceitar o uso dos dados.");

      formularioValido = false;
    }

    if (!formularioValido) {
      return;
    }

    const dados = {
      nome: nome.value.trim(),

      email: email.value.trim(),

      cpf: cpf.value.trim(),

      telefone: telefone.value.trim(),

      cep: cep.value.trim(),

      data: data.value,

      cidade: cidade.value.trim(),

      estado: estado.value,

      interesse: interesse.value,

      mensagem: mensagem.value.trim(),
    };

    salvarCadastro(dados);

    const mensagemSucesso = document.getElementById("mensagemSucesso");

    mensagemSucesso.classList.add("show");

    setTimeout(function () {
      mensagemSucesso.classList.remove("show");
    }, 3000);

    formulario.reset();
  });
}
