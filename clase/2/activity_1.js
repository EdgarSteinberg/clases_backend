const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

// const total =  objetos.map(pr => Object.values(pr)).flat().reduce((init, acc) => init + acc ,0);
// console.log(total);

// const new_list = new Set(objetos.map(pr => Object.keys(pr)).flat());

// console.log(new_list);


//console.log(Object.entries(objetos))


let total = {};

objetos.map(obj => {
   object_entries = Object.entries(obj)
   object_entries.map((value) => {
        if(total[value[0]]){
            total[value[0]] += value[1]
        }else{
            total[value[0]] = value[1]
        }

   })
})

console.log(total)






