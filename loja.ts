class Loja {
   private produtos: string
   private listaDeProdutos: any

   constructor(produtos: string) {
      this.produtos = produtos
   }

   public fornecerProduto(): string {
      return this.produtos
   }

   public mostraListaProdutos(): any {
      return this.listaDeProdutos
   }

}

let lojaA = new Loja('Carro')
console.log(lojaA)