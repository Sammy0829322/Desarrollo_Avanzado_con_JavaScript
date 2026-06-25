const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {

    const promesa = new Promise((resolve)=>{
        let tiempo = Math.floor(Math.random()*4000)
        setTimeout(()=> resolve("completado"),tiempo)
    })

    let estadoActual = await promesa;

    updateOrderStatus(order,estadoActual);

    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"
}



/* 

function SimularLecturaSensor(){
 return new Promise((resolve,reject)=>{

    

    setTimeout(()=>resolve("Temperatura : 25°C"),Math.floor(Math.random()*4000))

    })

}


async function mostrarDatos(){
    console.log("Solicitando datos.....")
    const lectura = await SimularLecturaSensor()
    console.log(lectura)
}


mostrarDatos(); */