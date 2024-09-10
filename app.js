function pesquisar() {

let section = document.getElementById
("resultados-pesquisa");

let campoPesquisa = document.getElementById
("campo-pesquisa").value;

console.log(section);

let resultados = ""

// para cada dado dentro da lista de dados
if (campoPesquisa == "") {

}

for (let dado of dados) {
    // se titulo includes campoPesquisa
    // então, faça....
   if (dado.titulo.includes(campoPesquisa))

resultados += `
<div class="item-resultado">
         <h2>
    <a href="https://www.youtube.com/watch?v=6tw9sCSj_jM" target="_blank">${dado.titulo}
        </h2>
    </a>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link}" target="_blank">Saiba mais</a>
</div>
`;
}

section.innerHTML = resultados

}
