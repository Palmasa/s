
function printSum() {
  let input1 = document.getElementById("input1").value
  let input2 = document.getElementById("input2").value
  return document.getElementById("resultSum").innerHTML = Number(input1) + Number(input2)
}

/* 
Pongo Number y entre paréntesis el número porq al coger el value 
lo "fuerza" a ser un string y no lo suma si no que lo añade, prueba 
a quitarlo 
*/