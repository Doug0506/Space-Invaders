class Barreira {
    vida;
    xBarreira;
    yBarreira;
    forma;
    tiro;
    
    constructor(vida, xBarreira, yBarreira, forma, tiro){
      this.vida = vida;
      this.xBarreira = xBarreira;
      this.yBarreira = yBarreira;
      this.forma = forma;
      this.tiro = tiro;
    }

    gerar_barreira(){
      //Serve para gerar barreira.
    }

    apagar(){
      //Utilizado para apagar a barreira
    }

    danificar(){
        //Receber a quantidade da vida da barreira e do tiro para moldar o dano sofrida pela barreira
    }
}