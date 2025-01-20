console.log("Hola");


fetch("http://localhost:8080/api/orders", {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(json => {console.log(json)
    mostrarOrders(json.result)
})
.catch(error => console.log(error))

function mostrarOrders(orders){
    const mostrarOrdenes = document.getElementById("show-products");
    mostrarOrdenes.innerHTML = "";

    orders.forEach(order => {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.innerHTML = `
            <h1>business: ${order.business}</h1>
            <p>User: ${order.number}</p>
            <p>Products: ${order.products}</p>
            <p>Status: ${order.status}</p>
            <p>Price: ${order.totalPrice}</p>

        `

        mostrarOrdenes.appendChild(nuevoDiv);
    });
}