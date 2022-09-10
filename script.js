var listaFilmes = ["Yesterday", "A Chegada", "Escola de Rock"];

//adicionando novos elementos
listaFilmes.push("Harry Potter 2");
listaFilmes.push("Harry Potter 7");
listaFilmes.push("O Senhor dos Anéis");

// Laço de repetição For para progredir em um array
for (var indice = 0; indice < listaFilmes.length; indice++) {
    document.write("<p>" + listaFilmes[indice] + "</p>");
    document.write("<p>" + indice + "</p>");

}