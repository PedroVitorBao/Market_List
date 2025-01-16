import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0; //const -> não altera o valor da variável / let -> altera o valor

export function criarItemDaLista(item){
    const itemDaLista = document.createElement("li"); //criando uma variavel e atribuindo uma criação de um elemento li
    const containerItemLista = document.createElement("div"); //criamos o container que vai ficar dentro do item da lista
    containerItemLista.classList.add("lista-item-container"); //acessando a lista de classes daquele elemento e adiocionando a classe nova

    const containerNomeDoItem = document.createElement("div"); //criar um elemento de div

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++; //cada vez que for aumentando o número da lista, adiciona mais um item abaixo

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id); //garante que sempre o valor do FOR seja o mesmo do Checkbox Input

    checkboxLabel.addEventListener("click", function(evento){ //consegue sabe qual o elemento que está sendo clicado
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo"); //pega o click, depois o Label, e dps procura o LI mais perto dele, e se refere ao item pelo item-titulo
        if (checkboxInput.checked) { //faz o check para ver se o checkbox esta marcado ou nao - se estiver, adiciona na lista
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista)
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista)
        }
    } )

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox)
 
    const nomeDoItem = document.createElement("p"); //criar um elemento de parágrafo
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item; //esta acesando o elemento de parágrafo e determinando que o texto dele eh o valor do campo do digitação
    containerNomeDoItem.appendChild(nomeDoItem); //deixamos como filho do parâmetro do parágrafo

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function(){
        excluirItem(itemDaLista);
    })

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button")

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("click", function(){
        editarItem(itemDaLista);
    })

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    //linha acima - mostra da data em dia de semana (dia/mes/ano) e o horário exato
    itemData.classList.add("texto-data");

    containerItemLista.appendChild(itemData);

    itemDaLista.appendChild(containerItemLista); //pegamos a variavel que eh correspondente ao elemento li, e colocamos um elemento como filho dela
    itemDaLista.appendChild(itemData);
    
    return itemDaLista;//como eu separei o li, precisa retornar o li para conseguir usar ele no itemDaLista
}