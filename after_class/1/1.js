
class TicketManager {
    constructor() {
        this.eventos = []
    }

    #precioBaseDeGanancia; // Atributo privado

    getEventos() {
        return this.eventos;
    }

    agregarEvento(nombre, lugar, precio, capacidad, fecha) {

        const evento =
        {
            id: this.#getId(),
            nombre,
            lugar,
            precio: precio + precio * 0.15,
            capacidad: capacidad ? capacidad : 50,
            fecha: fecha ? fecha : new Date(),
            participantes: []
        }

        this.eventos.push(evento);
    }

    agregarUsuario(evento_id, usuario_id) {
        //    if(!this.eventos.filter(evento => evento.id === evento_id)){
        //     return "Evento No Encontrado"
        //    }

        // const new_usuario = {
        //     id_event,
        //     id_usuario,
        // }

        let i = null;
        this.eventos.find(function(evento,indice){
            if (evento.id == evento_id) i = indice;
        });

        if(i != null){
            this.eventos[i].participantes.push(usuario_id);
            return "Usuario Agregado";
        }

        return "El Evento No Existe!";
    }

    ponerEventoEnGira(eventoId, lugar, fecha){
        let i = null;
        this.eventos.find(function(evento,indice){
            if (evento.id == eventoId) i = indice;
        });

        if(i !== null){
            const nuevoEvento = {
                ...this.eventos[i],
               
            }
            nuevoEvento.id = this.#getId;
            nuevoEvento.lugar = lugar;
            nuevoEvento.fecha = fecha;
            nuevoEvento.participantes = []

            this.eventos.push(nuevoEvento);

            return "Evento generado correctamente"
        }

        return "El Evento No Existe!";
    }

    #getId() {
        if (this.eventos.length > 0) {
            return this.eventos[this.eventos.length - 1].id + 1;
        }
        return 1;
    }
}

const TM = new TicketManager();

// Creando el evento
console.log(TM.getEventos());
TM.agregarEvento("AfterClass", "Remoto", 100);
TM.agregarEvento("Cafe Coder", "Caballito", 150, 100, "01/03/2024") ;


console.log(TM.getEventos());

// Agragando el usuario al evento
console.log(TM.agregarUsuario(5,10));
console.log(TM.agregarUsuario(2,10));
console.log(TM.agregarUsuario(2,5));

// Creando el lugar del evento Evento En Gira
console.log("Evento en gira")
console.log(TM.ponerEventoEnGira(5, "CasaVillaCrespo", "20/04/2027"));
console.log(TM.ponerEventoEnGira(1, "CasaLugano", "20/04/2027"));
console.log(TM.ponerEventoEnGira(2, "CasaMarDeAjo", "20/04/2027"));