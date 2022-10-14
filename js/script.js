var palavras = ['BIBLIOTECA', 'AMAZONENCE', 'PARAIBANO', 'BRASILIENSE', 'INJUSTIÇADO', 'TESOURO', 'ELEFANTE', 'SANTUARIO'];
var imagens = ['cabeca.png', 'UM_BRACO.png', 'bracos.png', 'corpo_parte.png', 'UMA_PERNA.png', 'TUDO.png'];
var qtdePalavras = palavras.length; // qtde de palavras
var palavra, numLetras, letra, nomeID, letrasErradas = " ", tentativas = 0;
var qtdeImagens = imagens.length; // qtde de imagens

function inicio() {
	var sorteio = Math.floor(Math.random() * qtdePalavras);
	palavra = palavras[sorteio]; // palavra escolhida;
	numLetras = palavra.length;
	console.log(palavra);
	console.log(numLetras);
	criarCaixas(numLetras);
}

function criarCaixas(numLetras) {
	for (var n = 1; n <= numLetras; n++) {
		const lbl = document.createElement("label");
		lbl.innerHTML = " ";
		document.getElementById("dv1").appendChild(lbl);
		nomeID = "id" + n;
		lbl.setAttribute("id", nomeID);
		document.getElementById(nomeID).style.backgroundColor = 'yellow';
	}
}

function conferir() {
	letra = document.getElementById('letraDigitada').value;
	var pos = palavra.indexOf(letra);
	if (pos < 0 && (tentativas < qtdeImagens)) {
		letrasErradas = letrasErradas + letra + " ";
		document.getElementById('LetrasErro').innerHTML = letrasErradas;
		document.getElementById('letraDigitada').value = "";
		document.getElementById('letraDigitada').focus();
		document.getElementById('forca').src = 'imagens/' + imagens[tentativas];
		tentativas++;
	}
	else {
		while (pos !== -1) {
			nomeID = 'id' + (pos + 1);
			document.getElementById(nomeID).innerHTML = letra;
			document.getElementById('letraDigitada').value = "";
			document.getElementById('letraDigitada').focus();
			pos = palavra.indexOf(letra, pos + 1);
		}
	}
}

function maiuscula(letra) {
	v = letra.value.toUpperCase();
	letra.value = v;
}

function reiniciar() {
	location.reload();
}
