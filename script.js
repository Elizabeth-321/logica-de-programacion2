document.getElementById("convertir").addEventListener("click",function(){
    const tempValue =
    
document.getElementById("temperatura").value;

if (isNaN(tempValue)){
     alert("Ingresa un numero valido");
}else if (tempValue ===""){
    alert("el campo no puede estar vacio");
}else {
    const celsius = parseFloat(tempValue);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

const resultdiv =
document.getElementById("result");
resultdiv.innerHTML = `temperatura ingresada:${celsius}°C<br>` +
 `fahrenheit:${fahrenheit.toFixed(2)}°F<br>` +
`kelvin:${kelvin.toFixed(2)} k`
}
});
