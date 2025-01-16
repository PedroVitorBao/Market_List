import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item"); //selecionando o documento html - e especificando qual identificador ele procura
const listaDeCompras = document.getElementById("lista-de-compras");

export function adicionarItem(evento) { //se colocar a palavra "evento" dentro dos parenteses e colcoar na linha abaixo...
    evento.preventDefault() //evento.preventDefault(), quer dizer que quando o navegador atualizar e o console for limpo, vai estar exibindo o "antes de atualizar".

    if(item.value === ""){
        alert("Por favor insira um item!");
        return;
    }

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);

    item.value = "";
}