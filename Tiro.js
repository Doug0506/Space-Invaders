class Tiro {
    hitbox;
    velocidade;
    formato;
    tipo_tiro;
    

    constructor(velocidade, formato, tipo_tiro){
       this.velocidade = velocidade;
       this.formato = formato;
       this.tipo_tiro = tipo_tiro;
    }

    acertarAlvo(){
        //Ele serve para identificar se o tiro acertou o alvo.
    }

    Destruir(){
        //Computa quando o tiro for destruido.
    }

    Atirar(){
        //Efetua o disparo.
        return hitbox;
    }

}