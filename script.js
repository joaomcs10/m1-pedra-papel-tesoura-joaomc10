function playRockPaperScissor(player1,player2){
    
    if ((player1.toUpperCase() == "PAPEL" && player2.toUpperCase() == "PAPEL")){
         console.log ('EMPATOU!');
         return;

    }else if((player1.toUpperCase() == "TESOURA" && player2.toUpperCase() == "TESOURA")){
        console.log ('EMPATOU!');
        return;

    }else if((player1.toUpperCase() == "PEDRA" && player2.toUpperCase() == "PEDRA")){
        console.log ('EMPATOU!');
         return;

    }else if((player1.toUpperCase() == "PEDRA" && player2.toUpperCase() == "PAPEL")){
        console.log ('Jogador 2 venceu');
         return;
    }else if((player1.toUpperCase() == "PAPEL" && player2.toUpperCase() == "PEDRA")){
        console.log ('Jogador 1 venceu');
         return;

    }else if((player1.toUpperCase() == "PEDRA" && player2.toUpperCase() == "TESOURA")){
        console.log ('Jogador 1 venceu');
         return;
    }else if((player1.toUpperCase() == "TESOURA" && player2.toUpperCase() == "PEDRA")){
        console.log ('Jogador 2 venceu');
         return;

    }else if((player1.toUpperCase() == "PAPEL" && player2.toUpperCase() == "TESOURA")){
        console.log ('Jogador 2 venceu');
         return;

    }else if((player1.toUpperCase() == "TESOURA" && player2.toUpperCase() == "PAPEL")){
        console.log ('Jogador 1 venceu');
         return;

    }
    

}

console.log(playRockPaperScissor())