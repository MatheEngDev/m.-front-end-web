export function paginaInicio() {
  return `
        <section>
            <img
                src="../imagens/voluntarios.jpg"
                alt="Voluntários realizando uma ação solidária"
            >

            <h2>Quem Somos</h2>

            <p>
                Somos uma organização dedicada a transformar vidas
                através de ações sociais.
            </p>
        </section>

        <section>
            <h2>Nossa Missão</h2>

            <p>
                Promover solidariedade, inclusão e oportunidades
                para pessoas em situação de vulnerabilidade.
            </p>
        </section>

        <section class="feedback-section">

            <h2>Informações e Interações</h2>

            <div class="badges">
                <span class="badge badge-verde">
                    Educação
                </span>

                <span class="badge badge-azul">
                    Alimentação
                </span>

                <span class="badge badge-amarelo">
                    Voluntariado
                </span>
            </div>

            <div class="alert">
                <strong>Importante:</strong>

                Toda contribuição ajuda o Instituto Esperança
                a manter seus projetos sociais.
            </div>

            <div class="feedback-actions">

                <button type="button" id="btnToast">
                    Mostrar notificação
                </button>

                <button type="button" id="btnModal">
                    Ver informações
                </button>

            </div>

        </section>

        <div id="toast" class="toast">
            Cadastro realizado com sucesso!
        </div>

        <div id="modal" class="modal">

            <div class="modal-content">

                <button
                    type="button"
                    id="fecharModal"
                    class="modal-close"
                >
                    &times;
                </button>

                <h2>Instituto Esperança</h2>

                <p>
                    Nosso trabalho busca promover inclusão,
                    solidariedade e oportunidades para pessoas
                    em situação de vulnerabilidade.
                </p>

                <button
                    type="button"
                    id="confirmarModal"
                >
                    Entendi
                </button>

            </div>

        </div>
    `;
}

export function paginaProjetos() {
  return `
        <section>
            <h2>Nossos Projetos</h2>

            <p>
                Conheça algumas das iniciativas realizadas pelo
                Instituto Esperança.
            </p>
        </section>

        <section>
            <article>
                <h3>Projeto Alimentar</h3>

                <p>
                    Distribuímos alimentos para famílias em situação
                    de vulnerabilidade.
                </p>
            </article>

            <article>
                <h3>Projeto Educação</h3>

                <p>
                    Oferecemos atividades educativas e apoio escolar
                    para crianças e jovens.
                </p>
            </article>

            <article>
                <h3>Projeto Solidariedade</h3>

                <p>
                    Realizamos campanhas de arrecadação e ações
                    comunitárias.
                </p>
            </article>
        </section>

        <section>
            <h2>Seja um Voluntário</h2>

            <p>
                Participe das nossas ações sociais.
            </p>

            <a href="#cadastro" data-rota="cadastro">
                Quero ser voluntário
            </a>
        </section>
    `;
}

export function paginaCadastro() {
  return `
        <section>
            <h2>Seja um Voluntário</h2>

            <p>
                Preencha o formulário para participar das nossas ações.
            </p>
        </section>

        <section>
            <form id="formCadastro">

                <label for="nome">
                    Nome completo:
                </label>

                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                >

                <label for="email">
                    E-mail:
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >

                <label for="cpf">
                    CPF:
                </label>

                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    maxlength="14"
                    required
                >

                <label for="telefone">
                    Telefone:
                </label>

                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                >

                <label for="cep">
                    CEP:
                </label>

                <input
                    type="text"
                    id="cep"
                    name="cep"
                    required
                >

                <label for="data">
                    Data de nascimento:
                </label>

                <input
                    type="date"
                    id="data"
                    name="data"
                    required
                >

                <label for="cidade">
                    Cidade:
                </label>

                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                >

                <label for="estado">
                    Estado:
                </label>

                <select id="estado" name="estado" required>
                    <option value="">Selecione</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PR">Paraná</option>
                    <option value="BA">Bahia</option>
                </select>

                <label for="interesse">
                    Área de interesse:
                </label>

                <select id="interesse" name="interesse" required>
                    <option value="">Selecione</option>
                    <option value="educacao">
                        Educação
                    </option>
                    <option value="alimentos">
                        Distribuição de alimentos
                    </option>
                    <option value="eventos">
                        Eventos
                    </option>
                    <option value="administrativo">
                        Administrativo
                    </option>
                </select>

                <label for="mensagem">
                    Por que deseja ser voluntário?
                </label>

                <textarea
                    id="mensagem"
                    name="mensagem"
                    rows="5"
                    required
                ></textarea>

                <label>
                    <input
                        type="checkbox"
                        name="consentimento"
                        required
                    >

                    Concordo com o uso dos dados para contato.
                </label>

                <button type="submit">
                    Enviar cadastro
                </button>

            </form>

            <div id="mensagemSucesso" class="toast">
                Cadastro realizado com sucesso!
            </div>
        </section>
    `;
}
