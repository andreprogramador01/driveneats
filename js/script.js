document.querySelector('button').disabled = true;

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
        button.disabled = false;
    }
}
function fecharPedido(){
    
    let itensSelecionados = document.querySelectorAll('.selecionado');
    let total = 0;
    let mensagem = "Olá, gostaria de fazer o pedido:\n\n";
    itensSelecionados.forEach(function(el){
        let valor = el.querySelector('.valor');
        let valorTransformado = Number(valor.innerHTML.replace('R$', '').replace(",","."));
        let nomeItem = el.className.replace('item selecionado','');
        let nomeItemCapitalize = nomeItem[0].toUpperCase()+ nomeItem.substring(1);
        total += valorTransformado;
        mensagem += '- ' +  nomeItemCapitalize.trim() +': '+ el.querySelector('.nome').innerHTML+'\n';

        
    });
    mensagem += '\nTotal: R$ '+ total.toFixed(2);
    window.open( 'https://wa.me/5573981427086?text='+encodeURIComponent(mensagem) );
    
}