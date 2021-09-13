class Inimigo {
    Inimigo;
    formato;
    vida;
    tiro;
    xInimigo;
    yInimigo;
    dano;
        

    constructor(Inimigo, formato, vida, tiro, xInimigo, yInimigo, dano){
        this.Inimigo = Inimigo;
        this.formato = formato;
        this.vida = vida;
        this.tiro = tiro;
        this.xInimigo = xInimigo;
        this.yInimigo = yInimigo;
        this.dano = dano;
    }

    gerar_inimigos(){
        //Utilizado para poder gerar os inimigos
    }

    deletar(){
       //Serve para deletar os inimigos
    }

    cordenar(){
       //Feito para cordenar a posições dos inimigos
    }

    selecionar_formato(){
       //Seleciona o formato do inimigo.
    }
}