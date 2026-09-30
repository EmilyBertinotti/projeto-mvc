//imports
const sequelize = require("./db")
const express = require("express")

const app = express() // criando um objeto do express

sequelize.sync().then(()=>{ //testando o banco 
    app(3000, ()=>console.log("Banco Conectado!"))
})
