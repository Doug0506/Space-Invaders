class Nave {
    Nave;
    vida;
    entrada_tecla;
    tiro;
    contar_pontuacao;
    velocidade;
    xNave;
    yNave;

    constructor(Nave, vida, entrada_tecla, tiro, contar_pontuacao, velocidade, xNave, yNave){
        this.Nave = Nave;
        this.vida = vida;
        this.entrada_tecla = entrada_tecla;
        this.tiro = tiro;
        this.contar_pontuacao = contar_pontuacao;
        this.velocidade = velocidade;
        this.xNave = xNave;
        this.yNave = yNave;

    }
    
    gerar_Nave(){
     //Utilizado para gerar a Nave
    }

    gerenciar_vida(){
      
     //O método organiza a vida da nave.
     return vida;

    }

    movimentar(){
     //Movimentaar a nave.
    }

    velocidade(){
     //Declarar ou alterar a velocidade da nave.
    }

    limpar_pontos(){
      //Limpar a quantidade de pontos.
    }

    contar_pontos(){
     //Sistema para contar a quantidade de pontos.
     return contar_pontuacao;
    }
}