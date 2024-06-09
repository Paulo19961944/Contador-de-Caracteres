// Inicializa o Código ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  function contarCaracteresPalavrasLinhas(texto) {
    const contagemCaracteres = {}; // Armazena os caracteres em um objeto
    let contagemPalavras = 0; // Inicia a contagem das palavras
    let contagemLinhas = 0; // Inicia a contagem das linhas

    const linhas = texto.split("\n"); // Conta as linhas quando pular uma linha
    contagemLinhas = linhas.length; // Captura a quantidade de linhas

    // Faz a contagem das linhas
    for (const linha of linhas) {
      const palavras = linha.trim().split(" "); // Captura as palavras quando tiver espaços nas letras
      contagemPalavras += palavras.filter(palavra => palavra !== '').length; // Fltra as Palavras, e se ela não tiver espaços, captura as palavras

      // Faz a contagem das palavras
      for (const palavra of palavras) {
        const caracteres = palavra.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g, ''); // Remove todas as letras que não fazem parte do alfabeto
        if (caracteres.length > 0) {
          if (!contagemCaracteres[caracteres]) {
            contagemCaracteres[caracteres] = caracteres.length; // Se tiver algum caracter, faz a contagem
          }
        }
      }
    }
    const totalCaracteres = Object.values(contagemCaracteres).reduce((acc, cur) => acc + cur, 0); // Transforma Objeto em uma Array e soma a quantidade de caracteres

    // Retorna o resultado das contagens em um objeto.
    return {
      caracteres: totalCaracteres,
      palavras: contagemPalavras,
      linhas: contagemLinhas
    };
  }
  const textarea = document.getElementById("message"); // Captura o Elemento da TextArea

  // Adiciona evento de Input no TextArea
  textarea.addEventListener('input', () => {
    const texto = textarea.value; // Recebe o valor da TextArea
    const contagens = contarCaracteresPalavrasLinhas(texto);  // Chama a variável texto dento da função

    const contadorCaracteres = document.getElementById("char"); // Captura os Caracteres do HTML
    const contadorPalavras = document.getElementById("words"); // Captura as Palavras do HTML
    const contadorLinhas = document.getElementById("lines"); // Captura as Linhas do HTML

    contadorCaracteres.textContent = `Caracteres: ${contagens.caracteres}`; // Exibe a Quantidede de Caracteres na Tela
    contadorPalavras.textContent = `Palavras: ${contagens.palavras}`; // Exibe a Quantidade de Palavras na Tela
    contadorLinhas.textContent = `Linhas: ${contagens.linhas}`; // Exibe a Quantidade de Linhas na Tela
  });
});
