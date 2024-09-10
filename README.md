Imersão Alura - Elenco Corinthians

function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa === "") {
      // Se estiver vazio, exibe uma mensagem informando que nada foi encontrado
      section.innerHTML = "<p>Nada foi encontrado</p>";
      return; // Interrompe a função
    }
  
    // Inicializa a variável para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      // Converte o título e a descrição para minúsculas para facilitar a comparação
       titulo = dado.titulo.toLowerCase();
       descricao = dado.descricao.toLowerCase();
       tags = dado.tags.toLowerCase();
  
      // Verifica se o título ou a descrição contém o termo pesquisado
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Se encontrar uma correspondência, adiciona o resultado à string de resultados
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
          </div>
        `;
      }

    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atualiza o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
  }
