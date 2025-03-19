let listaDeParticipantes = [];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", adicionarNomes);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

function adicionarNomes() {
    let nomeAmigo = document.getElementById("nomeAmigo").value.trim();

    if (nomeAmigo && !listaDeParticipantes.includes(nomeAmigo)) {
        listaDeParticipantes.push(nomeAmigo);
        atualizarLista();
        document.getElementById("nomeAmigo").value = "";
    } else {
        alert("Nome inválido ou já inserido!");
    }
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    listaDeParticipantes.forEach(nome => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaDeParticipantes.length < 2) {
        alert("Adicione ao menos 2 participantes!");
        return;
    }

    let participantesEmbaralhados = [...listaDeParticipantes];
    
    // Algoritmo de Fisher-Yates Shuffle para embaralhar os participantes
    for (let i = participantesEmbaralhados.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [participantesEmbaralhados[i], participantesEmbaralhados[j]] = [participantesEmbaralhados[j], participantesEmbaralhados[i]];
    }

    // Garantir que ninguém tire a si mesmo
    for (let i = 0; i < participantesEmbaralhados.length; i++) {
        if (participantesEmbaralhados[i] === listaDeParticipantes[i]) {
            return sortearAmigo(); // Se alguém tirou a si mesmo, refazemos o sorteio
        }
    }

    let resultado = participantesEmbaralhados.map((amigo, index) => {
        return `${listaDeParticipantes[index]} tirou ${amigo}`;
    });

    alert(resultado.join("\n"));
}
