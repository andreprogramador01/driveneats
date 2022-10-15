function selecionarBebida(item){
    let selecionadoAnteriormente = document.querySelector('.bebidas .selecionado');
    if(selecionadoAnteriormente !== null){
        selecionadoAnteriormente.classList.remove('selecionado');
    }
    item.classList.add('selecionado');
    contarSelecionados();
}
function selecionarPrato(item){
    let selecionadoAnteriormente = document.querySelector('.pratos .selecionado');
    if(selecionadoAnteriormente !== null){
        selecionadoAnteriormente.classList.remove('selecionado');
    }
    item.classList.add('selecionado');
    contarSelecionados();
}
function selecionarSobremesa(item){
    let selecionadoAnteriormente = document.querySelector('.sobremesas .selecionado');
    if(selecionadoAnteriormente !== null){
        selecionadoAnteriormente.classList.remove('selecionado');
    }
    item.classList.add('selecionado');
    contarSelecionados();
}
function contarSelecionados(){
    const itensSelecionados = document.querySelectorAll('.selecionado').length;
    if(itensSelecionados === 3){
        const button = document.querySelector('button');
        button.classList.remove('button');
        button.classList.add('button-selecionado');
        button.innerHTML = "Fechar Pedido";
    }
}