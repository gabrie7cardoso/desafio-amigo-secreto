let amigos = [];

// Salvando os nomes

function adicionarAmigo() {

    let adicionar = document.getElementById("amigo").value;

    if (adicionar == "") {

        alert("Por favor, insira um nome.");

    } else {

        amigos.push(adicionar);

        console.log(amigos);

        document.getElementById("amigo").value = "";

        // Colocando eles na lista visível

        let lista = document.getElementById("listaAmigos");

        lista.innerHTML = "";

        for (let i = 0; i < amigos.length; i++) {

            let nomes = document.createElement("li");

            nomes.innerText = amigos[i];

            lista.append(nomes);

        }

    }

}

// Sorteando o nome

function sortearAmigo() {

    if (amigos == "") {

        alert("Você ainda não digitou o nome de ninguém.");

    } else {

        let n = Math.floor(Math.random() * amigos.length);

        console.log(n);

        let resultado = document.getElementById("resultado");

        resultado.innerHTML = "O amigo secreto é: " + amigos[n];

    }

}