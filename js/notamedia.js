function pecaNotas()
{
let voto = prompt(`introduzir uma notas`);
    return Number(voto);
}

function mediaNotas(){
let total = 0;


for (let i=0; i<6; i++){
    let nota = pecaNotas()
    total += nota;
    
}
let media = total / 6;
return media;
}

function exibeMedia(){
let mediafinal = mediaNotas();
console.log('A media é: ' + mediafinal);
return mediafinal;

}

function exibeMensagemBotton(){

}

exibeMedia();