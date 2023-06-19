const notas = [6, 8, 9, 2, 5, 10];

function calcularSumaNotas(nums) {
   const suma = nums.reduce((acc, nota) => acc + nota, 0);
   return (suma);
}

function calcularPromedioNotas(e){
  const suma = calcularSumaNotas(e);
  const promedio = suma / notas.length;
  const promedioRedondeado = parseFloat(promedio.toFixed(1));
  return (promedioRedondeado);
};

const sumaNotas = calcularSumaNotas(notas);
const promedioNotas = calcularPromedioNotas(notas);

document.write(`La suma de las notas es: ${sumaNotas} `, `y el promedio es: ${promedioNotas}`)

console.log("La suma de las notas es:", sumaNotas, "y el promedio es: ", promedioNotas);
