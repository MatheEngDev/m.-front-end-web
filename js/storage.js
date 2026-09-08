export function salvarCadastro(dados) {
  const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

  cadastros.push(dados);

  localStorage.setItem("cadastros", JSON.stringify(cadastros));
}
