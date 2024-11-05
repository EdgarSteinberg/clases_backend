function mostrarLista(nombres){
    if(nombres.length > 1){
        nombres.map(n => console.log(`Nombre: ${n}`))
    }else{
        console.log("Lista Vacia")
    }

    console.log(`La lista cuenta con ${nombres.length}`)
}

const nombres = ["Edgar", "Ilu", "Rocko", "Luna", "Mara", "Estrella"]
mostrarLista(nombres)