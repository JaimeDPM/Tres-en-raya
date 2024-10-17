alert("Buenas, vamos a echar una partidita");

// Inicialización del tablero
let tablero = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let jugadorActual = 'Jugador 1'; // Jugador que empieza
let simboloActual = 'X'; // Símbolo del jugador actual
let movimientos = 0; // Contador de movimientos

// Función para mostrar el tablero
function mostrarTablero() {
  console.log("Tablero:");
  tablero.forEach((fila, index) => {
    console.log(`${index + 1}: ${fila.join(' | ')}`);
  });
}

// Función para comprobar si hay tres en raya
function hayTresEnRaya() {
  // Comprobar filas, columnas y diagonales
  for (let i = 0; i < 3; i++) {
    if (tablero[i][0] === simboloActual && tablero[i][1] === simboloActual && tablero[i][2] === simboloActual) return true; // Filas
    if (tablero[0][i] === simboloActual && tablero[1][i] === simboloActual && tablero[2][i] === simboloActual) return true; // Columnas
  }
  if (tablero[0][0] === simboloActual && tablero[1][1] === simboloActual && tablero[2][2] === simboloActual) return true; // Diagonal principal
  if (tablero[0][2] === simboloActual && tablero[1][1] === simboloActual && tablero[2][0] === simboloActual) return true; // Diagonal secundaria
  return false;
}

// Función para comprobar si el tablero está lleno
function tableroLleno() {
  return movimientos === 9;
}

// Bucle principal del juego
while (true) {
  mostrarTablero();
  
  // Entrada del jugador
  let entrada = prompt(`${jugadorActual} (Simbolo: ${simboloActual}). Introduce una casilla (1-9):`);
  //las tildes permiten insertar variables o expresiones dentro de una cadena de texto de manera sencilla
  
  // Mapeo de coordenadas a índice de matriz
  const coordenadas = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2]
  };
  
  const posicion = coordenadas[entrada];

  // Comprobamos si la entrada es válida
  if (!posicion || tablero[posicion[0]][posicion[1]] !== '') {
    alert('Casilla no válida o ya ocupada. Intenta de nuevo.');
    continue;
  }

  // Marcar la casilla
  tablero[posicion[0]][posicion[1]] = simboloActual;
  movimientos++;

  // Comprobar el estado del juego
  if (hayTresEnRaya()) {
    mostrarTablero();
    alert(`${jugadorActual} gana!`); //las tildes permiten insertar variables o expresiones dentro de una cadena de texto de manera sencilla
    break;
  }

  if (tableroLleno()) {
    mostrarTablero();
    alert('¡Es un empate!');
    break;
  }

  // Cambiar de turno
  if (jugadorActual === 'Jugador 1') {
    jugadorActual = 'Jugador 2';
    simboloActual = 'O';
  } else {
    jugadorActual = 'Jugador 1';
    simboloActual = 'X';
  }
}