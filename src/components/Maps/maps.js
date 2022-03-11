import React from 'react'

const comidas =[
        {id:1, name:"Lemon Pie", stock:5},
        {id:2, name:"Rogel", stock:3},
        {id:3, name:"Torta Oreo", stock:7},
        {id:4, name:"Budin", stock:4},
        {id:5, name:"Torta Brownie", stock:3},
        {id:6, name:"Chocotorta", stock:6},
        {id:7, name:"Red Velvet", stock:1},
        {id:8, name:"Alfajor", stock:11},
        {id:9, name:"Galletitas", stock:23},
        {id:10, name:"Maquise", stock:2},

]

console.log (comidas.map((comida)=> comida.name))