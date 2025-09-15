/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  const numero = Math.floor(Math.random() * (10 - 0));
  let segA = document.getElementById("seg-a");
  let segB = document.getElementById("seg-b");
  let segC = document.getElementById("seg-c");
  let segD = document.getElementById("seg-d");
  let segE = document.getElementById("seg-e");
  let segF = document.getElementById("seg-f");
  let segG = document.getElementById("seg-g");
  //segA.style.display = "none";
  //const numero = 9;
  console.log(numero);
  switch (numero) {
    case 0:
      segA.style.display = "flex";
      segB.style.display = "flex";
      segC.style.display = "flex";
      segD.style.display = "flex";
      segE.style.display = "flex";
      segF.style.display = "flex";
      segG.style.display = "none";
      break;
    case 1:
      segA.style.display = "none";
      segB.style.display = "flex";
      segC.style.display = "flex";
      segD.style.display = "none";
      segE.style.display = "none";
      segF.style.display = "none";
      segG.style.display = "none";
      break;
    case 2:
      segA.style.display = "flex";
      segB.style.display = "flex";
      segC.style.display = "none";
      segD.style.display = "flex";
      segE.style.display = "flex";
      segF.style.display = "none";
      segG.style.display = "flex";
      break;
    case 3:
      segA.style.display = "flex";
      segB.style.display = "flex";
      segC.style.display = "flex";
      segD.style.display = "flex";
      segE.style.display = "none";
      segF.style.display = "none";
      segG.style.display = "flex";
      break;
    case 4:
      segA.style.display = "none";
      segB.style.display = "flex";
      segC.style.display = "flex";
      segD.style.display = "none";
      segE.style.display = "none";
      segF.style.display = "flex";
      segG.style.display = "flex";
      break;
    case 5:
      segA.style.display = "flex";
      segB.style.display = "none";
      segC.style.display = "flex";
      segD.style.display = "flex";
      segE.style.display = "none";
      segF.style.display = "flex";
      segG.style.display = "flex";
      break;
    case 6:
      segA.style.display = "flex";
      segB.style.display = "none";
      segC.style.display = "flex";
      segD.style.display = "flex";
      segE.style.display = "flex";
      segF.style.display = "flex";
      segG.style.display = "flex";
      break;
    case 7:
      segA.style.display = "flex";
      segB.style.display = "flex";
      segC.style.display = "flex";
      segD.style.display = "none";
      segE.style.display = "none";
      segF.style.display = "none";
      segG.style.display = "none";
      break;
    case 8:
      segA.style.display = "flex";
      segB.style.display = "flex";
      segC.style.display = "flex";
      segD.style.display = "flex";
      segE.style.display = "flex";
      segF.style.display = "flex";
      segG.style.display = "flex";
      break;
    case 9:
      segA.style.display = "flex";
      segB.style.display = "flex";
      segC.style.display = "flex";
      segD.style.display = "flex";
      segE.style.display = "none";
      segF.style.display = "flex";
      segG.style.display = "flex";
      break;
    default:
      segA.style.display = "none";
      segB.style.display = "none";
      segC.style.display = "none";
      segD.style.display = "none";
      segE.style.display = "none";
      segF.style.display = "none";
      segG.style.display = "none";
  }
}

showRandomDigit();
