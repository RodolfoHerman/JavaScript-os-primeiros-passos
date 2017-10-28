//Lista de eventos: https://developer.mozilla.org/en-US/docs/Web/Events
//JavaScript possui a caracteristica 'EVENT BUBBLING', quando escutamos um evento esse evento nao acontece somente no dono (aonde foi clicado) mas acontece no pai, 
//depois no pai do papai e vai subindo ate o ultimo pai
//utilizar o 'this' representa o elemento buscado no querySelector. Ja o 'target' representa quem sofreu a acao (quem foi o alvo)
//Para acessar o pai de um elemento existe a propriedade parentNode. 

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener('dblclick', function(event){
	
	var alvoEvento = event.target;
	var paiDoAlvo  = alvoEvento.parentNode;
	paiDoAlvo.classList.add("fadeOut");
	
	//steTimeout executa codigos em seu corpo apos o tempo em seu parametro (no caso aqui e 500ms)
	setTimeout(function() {
		paiDoAlvo.remove();
	}, 500);

});