// Selectores
const selectAño = document.querySelector("#year");
const selectMarca = document.querySelector("#marca");
const selectPrecioMin = document.querySelector("#min");
const selectPrecioMax = document.querySelector("#max");
const selectPuertas = document.querySelector("#puertas");
const selectTransmision = document.querySelector("#transmision");
const selectColor = document.querySelector("#color");
selectAño.addEventListener("input", (e) => {
filtrarCoches((it) => it.year === Number(e.target.value) )
})
selectPrecioMin.addEventListener("input", (e) => {
filtrarCoches((it) => it.year === Number(e.target.value) )
})
selectMarca.addEventListener("input", (e) => {
filtrarCoches((it) => it.marca === e.target.value )
})

const cargarAño = () =>  {
    const año = new Date().getFullYear()
    const min = año-20
    const frag = document.createDocumentFragment()
    for (let i = año; i>min; i--) {
        const option = document.createElement("option")
        option.value = i
        option.textContent = i
        frag.append(option)
        }
        selectAño.append(frag)
}
const cargarCoches = (coches) => {
    const cont = document.querySelector("#resultado")
    const frag = document.createDocumentFragment()
    coches.forEach((it) => {
        const p = document.createElement("p")
        p.textContent = `${it.modelo} ${it.year} ${it.puertas} puertas, ${it.transmision} ${it.precio}€ ${it.color}`
        frag.append(p)
        
    } )
    cont.append(frag)
}
const limpiarResultado = () => { 
    const cont = document.querySelector("#resultado")
    while(cont.firstChild) {cont.firstChild.remove()}
}
const filtrarCoches = (condicion) => {
    limpiarResultado();
    const filtrado = coches.filter(condicion);
    cargarCoches(filtrado)
}
document.addEventListener("DOMContentLoaded", () => {
     cargarCoches(coches)
     cargarAño()
})


