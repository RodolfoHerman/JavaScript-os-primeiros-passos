var botaoEnvio = document.querySelector("#adicionar-paciente");
botaoEnvio.addEventListener("click", function(event){
	//cancela o comportamento padrão do botão (Submit).
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");

	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}

	adicionaPacienteNaTabela(paciente);
	
	//limpar dados do form
	form.reset();

	var ul = document.querySelector("#mensagens-erro");

	//innerHTML pega todo o codigo HTML contido dentro do elemento
	ul.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente) {
	var tBody = document.querySelector("#tabela-pacientes");
	//appendChild insere um elemento filho ao elemento pai
	tBody.appendChild(montarTr(paciente));
}


function exibeMensagensDeErro(erros) {
		
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	//forEach recebe o elemento do array no primeiro parametro e o indice no seundo
	erros.forEach(function (erro) {
		
		var li = document.createElement("li");
		li.textContent = erro;

		ul.appendChild(li);
	});

}


function validaPaciente(paciente) {
	
	var erros = [];

	if(paciente.nome.length == 0) {
		erros.push("O nome não pode ser em branco.");
	}

	if(!validaPeso(paciente.peso)) {
		erros.push("O peso é inválido !!");
	}

	if(paciente.peso.length == 0) {
		erros.push("O peso não pode ser em branco");
	}	

	if(!validaAltura(paciente.altura)) {
		erros.push("A altura é inválida !!");
	}

	if(paciente.altura.length == 0) {
		erros.push("A altura não pode ser em branco");
	}

	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser em branco");
	}

	return erros;
}

function obtemPacienteDoFormulario(form) {
	
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montarTr(paciente) {
	
	var tr = document.createElement("tr");
	tr.classList.add("paciente");

	tr.appendChild(montarTd(paciente.nome, "info-nome"));
	tr.appendChild(montarTd(paciente.peso, "info-peso"));
	tr.appendChild(montarTd(paciente.altura, "info-altura"));
	tr.appendChild(montarTd(paciente.gordura, "info-gordura"));
	tr.appendChild(montarTd(paciente.imc, "info-imc"));

	return tr;
}

function montarTd(dado, classe) {
	
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;

	return td;
}