var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener('input', function() {
	
	var pacientes = document.querySelectorAll(".paciente");


	if(this.value.length > 0) {

		for(var i = 0; i < pacientes.length; i++) {
			var paciente = pacientes[i];
			var nome = paciente.querySelector(".info-nome").textContent;

			//'i' significa case insensitive
			var expressaoRegular = new RegExp(this.value, "i");

			if(!expressaoRegular.test(nome)) {
				paciente.classList.add("invisivel");
			} else {
				paciente.classList.remove("invisivel");
			}
		}

	} else {

		for(var i = 0; i < pacientes.length; i++) {
			pacientes[i].classList.remove("invisivel");
		}

	}


});


campoFiltro.addEventListener('input', atualizaCaracteres);

function atualizaCaracteres() {
	var campo = document.querySelector("#filtrar-tabela");
	var caracteres = campo.value.length;

	var contador = document.querySelector("#contador");
	contador.textContent = caracteres;
}