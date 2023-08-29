//arrays
const borbotones = [];
let i;
do{
    borbotones.push(prompt("Ingrese un nombre, para salir presione ESC"));
}while(borbotones[i] != "ESC");

for(i=0;i<borbotones.length;i++){
    alert("La posicion "+i+" pertenece a "+borbotones[i])
}


