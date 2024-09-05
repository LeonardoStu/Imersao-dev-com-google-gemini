function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção onde os resultados serão exibidos

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa

    // Itera sobre cada elemento do array 'dados' e cria um elemento HTML para cada resultado
    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a> </h2>
                <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais informações</a> </div>
        `;
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}