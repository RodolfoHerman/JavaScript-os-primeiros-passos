var botaoEnvio = document.querySelector("#adicionar-paciente");
botaoEnvio.addEventListener("click", function(event){
	//cancela o comportamento padrão do botão (Submit).
	event.preventDefault();
	
	var form = document.querySelector("#form-adiciona");

	var paciente = obtemPacienteDoFormulario(form);

	var tBody = document.querySelector("#tabela-pacientes");

	tBody.appendChild(montarTr(paciente));

	//limpar dados do form
	form.reset();

});

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