var nomeDoAluno = "";
var primeiraNota = 0;
var segundaNota = 0;
var terceiraNota = 0;

var contador = 0;





for( var contador = 0; contador < 3; contador ++ ) {


    nomeDoAluno = prompt("Digite o nome do aluno");
    primeiraNota =  Number (prompt("Digite a primeira nota")).
    segundaNota = Number (prompt("Digite a segunda nota"));
    terceiraNota = Number (prompt("Digite a terceira nota"));
    
    var media = (primeiraNota + segundaNota + terceiraNota) /3 ; 
    
    if ( media >= 6.0 ) {
        alert("Aprovado");
        
    }else{
        alert("Você reprovou")
    }
    
 
    
}








