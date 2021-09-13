class Painel {
    status_jogo;
    entrada_tecla;
    nivel;
    qtdinimigos;
    
    constructor(status_jogo, entrada_tecla, nivel, qtdinimigos)
    {
       this.status_jogo = status_jogo;
       this.entrada_tecla = entrada_tecla;
       this.nivel = nivel;
       this.qtdinimigos = qtdinimigos;
    }

    Iniciar(){

        //Ele iniciar o jogo.

    }

    Pausar(){

       //Ele pausar o jogo.
    
    }

    Reiniciar(){

       //Ele reiniciar o jogo.
    
    }

    Fim_de_Jogo(){

      //Ele declara o fim do jogo.
      return status_jogo;
    }
}