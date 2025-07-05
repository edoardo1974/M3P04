var mediafinal = 0;// Variable to store the final average

function pecaNotas()// Function to prompt the user for a note
{
let voto = prompt(`introduzir uma notas`);
    return Number(voto);
}

function mediaNotas(){// Function to calculate the average of 6 notes
// This function will call the pecaNotas function 6 times to get the notes and then
let total = 0;
for (let i=0; i<6; i++){
    let nota = pecaNotas()
    total += nota;
}
let media = Math.ceil(total / 6);
return media;
}

function exibeMedia(){// Function to display the average of the notes
// This function will call the mediaNotas function to calculate the average and then display it
mediafinal = mediaNotas();
console.log('A media é: ' + mediafinal);
document.getElementById('risultatomedia').textContent = 'A media é: ' + mediafinal;
return mediafinal;
}


function categoria(voto) { // Function to categorize the average note
   switch (true) {
        case (voto >=0 && voto <=2):
            console.log(`Muito fraco`);
            document.getElementById('resultadocategoria').textContent = 'O estudante obteve um '+ voto +' que corresponde a um Muito fraco';
            break
        case (voto >=3 && voto <=4):
            console.log(`Insuficiente`);
            document.getElementById('resultadocategoria').textContent = 'O estudante obteve um '+ voto +' que corresponde a um Insuficiente';
            break
        case (voto >=5 && voto <=6):
            console.log(`Suficiente`);
            document.getElementById('resultadocategoria').textContent = 'O estudante obteve um '+ voto +' que corresponde a um Suficiente';
            break
        case (voto >=7 && voto <= 8):
            console.log(`Bom`);
            document.getElementById('resultadocategoria').textContent = 'O estudante obteve um '+ voto +' que corresponde a um Bom';
            break
        case (voto >=9 && voto <= 10):
            console.log(`Excelente`);
            document.getElementById('resultadocategoria').textContent = 'O estudante obteve um '+ voto +' que corresponde a um Excelente';
            break
        default:
            console.log(`Valor fora do intervalo permitido.`);
            document.getElementById('resultadocategoria').textContent = 'O estudante obteve um '+ voto +', Valor fora do intervalo permitido.';
            break
    }
}


function exibeCategoria() {// Function to display the category of the average note
// This function will call the categoria function to categorize the average note and then display it
    categoria(mediafinal);
}

