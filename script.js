var listaFilmes = ["Yesterday", "A Chegada", "Escola de Rock"];

//adicionando novos elementos
listaFilmes.push("Harry Potter");

//escreve uma tag html no documento + seu conteúdo de forma simples
// document.write("<p>" + listaFilmes[0] + "</p>");
// document.write("<p>" + listaFilmes[1] + "</p>");
// document.write("<p>" + listaFilmes[2] + "</p>");
// document.write("<p>" + listaFilmes[3] + "</p>");

console.log(listaFilmes.length);

for (var indice = 0; indice <= 3; indice++) {
    document.write("<p>" + listaFilmes[indice] + "</p>");

}