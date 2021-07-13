
function ProvadorVirtual() {
    self = this;

    self.corBlusa = ko.observable();
    self.corCalca = ko.observable();
    self.corTenis = ko.observable();
    self.opcoes = ko.observableArray(['selecionar','Preto', 'Branco', 'Vermelho', 'Azul']);
    self.nomeCliente = ko.observable()
    self.enderecoCliente = ko.observable()
    self.emailCliente = ko.observable()
    self.cidadeCliente = ko.observable()
    self.nomeCartao= ko.observable("")
    self.numCartao= ko.observable("")
    self.anoCartao= ko.observable("")
    self.cvvCartao= ko.observable("")
    self.carrinho = ko.observableArray("")
    self.pedidos = ko.observableArray()
    self.nomeItem = ko.observable()
    self.quantidade = ko.observable('1')
    self.item = ko.observable()
    self.preco = ko.observable()
    self.cor = ko.observable()
    self.total = ko.observable(0)
    self.inverter = ko.observable(true)
    self.inverter2 = ko.observable(true)
    self.blusaInicial = ko.observable()
    self.calcaInicial = ko.observable()
    self.tenisInicial = ko.observable() 

    const roupas = [
            {tipo: 'blusa', cor: 'Preto', preco: 40.50, link: ['Sources/blusapreta.jpg']},
            {tipo: 'blusa', cor: 'Preto', preco: 40.50, link: ['Sources/blusapreta2.jpg']},
            {tipo: 'blusa', cor: 'Branco', preco: 40.50, link: ["Sources/blusabranca3.jpg"]},
            {tipo: 'blusa', cor: 'Branco', preco: 40.50, link: ["Sources/blusabranca.jpg"]},
            {tipo: 'blusa', cor: 'Vermelho', preco: 40.50, link: [ "Sources/blusavermelha.jpg"]},
            {tipo: 'blusa', cor: 'Vermelho', preco: 40.50, link: [ "Sources/blusavermelha2.jpg"]},
            {tipo: 'blusa', cor: 'Azul', preco: 40.50, link: ["Sources/blusaazul.jpg"]},
            {tipo: 'blusa', cor: 'Azul', preco: 40.50, link: ["Sources/blusaazul2.jpg"]},


            {tipo: 'calca', cor: 'Preto', preco: 120.00, link: ["Sources/calcapreta2.jpg"]},
            {tipo: 'calca', cor: 'Preto', preco: 120.00, link: ["Sources/calcapreta.jpg"]},
            {tipo: 'calca', cor: 'Branco', preco: 120.00, link: ["Sources/calcabranca3.jpg"]},
            {tipo: 'calca', cor: 'Branco', preco: 120.00, link: ["Sources/calcabranca.jpg"]},
            {tipo: 'calca', cor: 'Vermelho', preco: 120.00, link: ["Sources/calcavermelha.jpg"]},
            {tipo: 'calca', cor: 'Vermelho', preco: 120.00, link: ["Sources/calcavermelha2.jpg"]},
            {tipo: 'calca', cor: 'Azul', preco: 120.00, link: ["Sources/calcaazul.jpg"]},
            {tipo: 'calca', cor: 'Azul', preco: 120.00, link: ["Sources/calcaazul2.jpg"]},


            {tipo: 'tenis', cor: 'Preto', preco: 250.00, link: ["Sources/tenispreto.jpg"]},
            {tipo: 'tenis', cor: 'Preto', preco: 250.00, link: ["Sources/tenispreto2.jpg"]},
            {tipo: 'tenis', cor: 'Branco', preco: 250.00, link: ["Sources/tenisbranco.jpg"]},
            {tipo: 'tenis', cor: 'Branco', preco: 250.00, link: ["Sources/tenisbranco2.jpg"]},
            {tipo: 'tenis', cor: 'Vermelho', preco: 250.00, link: ["Sources/tenisvermelho.jpg"]},
            {tipo: 'tenis', cor: 'Vermelho', preco: 250.00, link: ["Sources/tenisvermelho2.jpg"]},
            {tipo: 'tenis', cor: 'Azul', preco: 250.00, link: ["Sources/tenisazul.jpg"]},
            {tipo: 'tenis', cor: 'Azul', preco: 250.00, link: ["Sources/tenisazul2.jpg"]},


    ]

    self.blusa = roupas => roupas.tipo == 'blusa'
    self.calca = roupas => roupas.tipo == 'calca'
    self.tenis = roupas => roupas.tipo == 'tenis'
    self.preto = roupas => roupas.cor == 'Preto'
    self.branco = roupas => roupas.cor == 'Branco'
    self.vermelho = roupas => roupas.cor == 'Vermelho'
    self.azul = roupas => roupas.cor == 'Azul'
    self.bo = true

    

    self.compraFinal = function(){
        alert("Sua compra foi realizada")

        // for(let i=0; i<self.carrinho().length; i++){
        //     var filtrado = self.carrinho().filter(self.carrinho()[i].nomeItem > 0)
        // }
        const compraFeita = {
            nomeCliente: self.nomeCliente(),
            emailCliente: self.emailCliente(),
            enderecoCliente: self.enderecoCliente(),
            cidadeCliente: self.cidadeCliente(),
            pedidoCliente: self.carrinho(),     //filtrado
            total: self.total()
        }
        self.pedidos.push(compraFeita)
        self.limpaCampos()
    }

   
    //subscribe
    self.corBlusa.subscribe(function(){
        if (self.corBlusa() == "selecionar"){
        }else{
            let aux = roupas.filter(self.blusa).filter(r => r.cor == self.corBlusa())
            self.blusaInicial(aux[0].link[0])
        }
    })


    self.corCalca.subscribe(function(){
        if (self.corCalca() == "selecionar"){
        }else{
            let aux1 = roupas.filter(self.calca).filter(r => r.cor == self.corCalca())
            self.calcaInicial(aux1[0].link[0])
        }
    })

    self.corTenis.subscribe(function(){
        if (self.corTenis() == "selecionar"){
        }else{
            let aux2 = roupas.filter(self.tenis).filter(r => r.cor == self.corTenis())
            self.tenisInicial(aux2[0].link[0])
        }
    })


    //adicionar ao carrinho 
    self.atualizarCarrinho = function(peca){ 
        if (peca == undefined){
        }else{
            let aux = roupas.find(r => r.link == peca) 
                const itemNovo = {
                item: aux.link,
                cor: aux.cor,
                nomeItem: aux.tipo,
                preco: aux.preco
                }
            self.carrinho.push(itemNovo)
            self.preco(itemNovo.preco)
            self.calcularTotal()   
        }
    }

   //Total
    self.calcularTotal = function(){
        let totalzao = self.total()
        totalzao += self.preco()
        self.total(totalzao)
    }
    
    //remove do carrinho
    self.removeItem = function(peca) {
        self.carrinho.remove(peca);
        let p = self.total()-peca.preco
        self.total(p)
    };

    self.limparCarrinho = function(){
        self.carrinho.removeAll()
        self.total(0)
    }

    self.limpaCampos = function(){
        self.limparCarrinho()
        self.blusaInicial("")
        self.calcaInicial("")
        self.tenisInicial("")
        self.corBlusa("selecionar")
        self.corCalca("selecionar")
        self.corTenis("selecionar")
        self.nomeCartao("")
        self.numCartao("")
        self.anoCartao("")
        self.cvvCartao("") 
        self.nomeCliente("")
        self.emailCliente("")
        self.enderecoCliente("")
        self.cidadeCliente("")
    }

    //Gera uma roupa aleatoria
    lookAleatorio = function(){

        let temp = roupas.filter(self.blusa)
        let coresBlusa = temp.length
        let opcoesBlusa = temp[self.gerarNumero(coresBlusa-1)].link.length
        document.getElementById("blusaid").src = temp[self.gerarNumero(coresBlusa -1)].link[0]

        let temp2 = roupas.filter(self.calca)
        let corescalca = temp2.length
        let opcoescalca = temp2[self.gerarNumero(corescalca-1)].link.length
        document.getElementById("calcaid").src = temp2[self.gerarNumero(corescalca-1)].link[0]

        let temp3 = roupas.filter(self.tenis)
        let corestenis = temp3.length
        let opcoestenis = temp3[self.gerarNumero(corestenis-1)].link.length
        document.getElementById("tenisid").src = temp3[self.gerarNumero(corestenis-1)].link[0]  //self.gerarNumero(opcoestenis-2)
    }


    //setinha
    self.mudar = function(peca){
        if (self.corBlusa() == "selecionar"){
        }else{
            const aux = roupas.filter(r => r.link == peca())
            let tipoRoupa = aux[0].tipo //blusa
            let corRoupa = aux[0].cor //preto
            let tipoCerto = p => p.tipo == tipoRoupa
            let corCerto = p => p.cor == corRoupa
            const roupaIgual = roupas.filter(tipoCerto).filter(corCerto)
            let num = roupaIgual.length
            console.log("funfou1")
            self.bo = !self.bo
            if(self.bo == true){
                peca(roupaIgual[num-1].link)
            }else{
            peca(roupaIgual[num-2].link)
            }
        }
    }

    //exibir formas de pagamento
    self.alterar = function(){
        let inverte = self.inverter()
        self.inverter(!inverte)
    }

    //exibir pedidos
    self.alterar2 = function(){
        let inverte2 = self.inverter2()
        self.inverter2(!inverte2)
    }
    
  
    self.gerarNumero = function(num){
        const min = 0
        const max = num
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
        return numeroAleatorio
    }

}

const _usuarioProvador = new ProvadorVirtual()
ko.applyBindings(_usuarioProvador)