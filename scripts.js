import {adicionarItem} from "./js/adicionarItem.js";

const botaoSalvarItem = document.getElementById("adicionar-item"); //selecionou o botao 
botaoSalvarItem.addEventListener("click", adicionarItem);//Quando clicar, executar a função adicionarItem