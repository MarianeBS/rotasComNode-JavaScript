/*var n1 = 10
var n2 = "Teste"

if (n1 < 10){
    console.log("N1 menor que 10")
}else{
    console.log("N1 igual ou maior que 10")
}

//Estrutura de repetição
//FOR
for (var n3 = 0; n3 <= 10; n3++){
    console.log("N3: " + n3)
}

var n4 = 0

while (n4 <= 10){
    console.log("N4: " + n4)
    n4++
}
*/

const express = require("express")
const app = express()

//Require and response
app.get("/", function(req, res){
    res.send("Seja bem-vindo ao Node JS")
})

app.get("/cadastrar/:item/:produto", function(req, res){
    res.end("Item: " + req.params.item + "\nProduto: " + req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.end("Produto: " + req.params.produto + "\nModelo: " + req.params.modelo)
})

app.get("/contato/:sac/:produto", function(req, res){
    res.end("SAC: " + req.params.sac + "\nProduto: " + req.params.produto)
})

app.listen(8081, function(){
    console.log("Servidor Ativo na porta 8081!")
})

//cadastrar/produto
//pesquisar/produto/modelo
//contato/sac/produto/




