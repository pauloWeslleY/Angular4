export default class Vehicle {
   protected model: string
   protected speed: number = 0

   // o Método acelerar vai recuperar a velocidade do proprio objeto.
   public speedUp(): void {
      // ou seja a cada instante que o método acelerar do objeto for chamado ela vai incrementar a velocidade em 10.
      this.speed = this.speed + 10
   }

   // o método parar vai fazer com que a variável velocidade do objeto "seja lá qual for" passe a vale zero no instante que o método PARA for chamado.
   public stop(): void {
      this.speed = 0
   }

   // nesse método queremos retorna o valor atribuido a variável velocidade do objeto carro.
   public speedCurrent(): number {
      return this.speed
   }

}