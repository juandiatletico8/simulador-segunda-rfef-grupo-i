const equipos = [
  "Deportivo Fabril",
  "Oviedo Vetusta",
  "Gimnástica Segoviana",
  "Salamanca CF UDS",
  "UD Ourense",
  "Real Ávila",
  "Coruxo",
  "CD Numancia",
  "Atlético Astorga",
  "Bergantiños",
  "Marino de Luanco",
  "Rayo Cantabria",
  "Sarriana",
  "Langreo",
  "Real Valladolid Promesas",
  "Burgos Promesas",
  "Lealtad",
  "Sámano"
];

const escudos = {
"Deportivo Fabril": "escudos/fabril.png",
"Oviedo Vetusta": "escudos/vetusta.png",
"Gimnástica Segoviana": "escudos/segoviana.png",
"Salamanca CF UDS": "escudos/salamanca.png",
"UD Ourense": "escudos/ourense.png",
"Real Ávila": "escudos/avila.png",
"Coruxo": "escudos/coruxo.png",
"CD Numancia": "escudos/numancia.png",
"Atlético Astorga": "escudos/astorga.png",
"Bergantiños": "escudos/bergantinos.png",
"Marino de Luanco": "escudos/marino.png",
"Rayo Cantabria": "escudos/rayo-cantabria.png",
"Sarriana": "escudos/sarriana.png",
"Langreo": "escudos/langreo.png",
"Real Valladolid Promesas": "escudos/valladolid-promesas.png",
"Burgos Promesas": "escudos/burgos-promesas.png",
"Lealtad": "escudos/lealtad.png",
"Sámano": "escudos/samano.png"
};

 const partidos = [
// Jornada 1
{ jornada: 1, local: "Gimnástica Segoviana", visitante: "Sámano", gLocal: 3, gVis: 0 },
{ jornada: 1, local: "Langreo", visitante: "Coruxo", gLocal: 1, gVis: 1 },
{ jornada: 1, local: "Bergantiños", visitante: "Salamanca CF UDS", gLocal: 2, gVis: 2 },
{ jornada: 1, local: "UD Ourense", visitante: "Real Valladolid Promesas", gLocal: 0, gVis: 1 },
{ jornada: 1, local: "Deportivo Fabril", visitante: "Burgos Promesas", gLocal: 3, gVis: 0 },
{ jornada: 1, local: "Rayo Cantabria", visitante: "Marino de Luanco", gLocal: 1, gVis: 0 },
{ jornada: 1, local: "Atlético Astorga", visitante: "Real Ávila", gLocal: 1, gVis: 3 },
{ jornada: 1, local: "Lealtad", visitante: "CD Numancia", gLocal: 1, gVis: 1 },
{ jornada: 1, local: "Oviedo Vetusta", visitante: "Sarriana", gLocal: 3, gVis: 2 },

// Jornada 2
{ jornada: 2, local: "Real Ávila", visitante: "Bergantiños", gLocal: 2, gVis: 1 },
{ jornada: 2, local: "Coruxo", visitante: "Deportivo Fabril", gLocal: 0, gVis: 2 },
{ jornada: 2, local: "CD Numancia", visitante: "Rayo Cantabria", gLocal: 2, gVis: 1 },
{ jornada: 2, local: "Sarriana", visitante: "Lealtad", gLocal: 2, gVis: 0 },
{ jornada: 2, local: "Burgos Promesas", visitante: "UD Ourense", gLocal: 1, gVis: 1 },
{ jornada: 2, local: "Salamanca CF UDS", visitante: "Atlético Astorga", gLocal: 2, gVis: 0 },
{ jornada: 2, local: "Real Valladolid Promesas", visitante: "Gimnástica Segoviana", gLocal: 2, gVis: 2 },
{ jornada: 2, local: "Marino de Luanco", visitante: "Langreo", gLocal: 2, gVis: 0 },
{ jornada: 2, local: "Sámano", visitante: "Oviedo Vetusta", gLocal: 0, gVis: 2 },

// Jornada 3
{ jornada: 3, local: "Gimnástica Segoviana", visitante: "Sarriana", gLocal: 1, gVis: 0 },
{ jornada: 3, local: "Lealtad", visitante: "Sámano", gLocal: 2, gVis: 2 },
{ jornada: 3, local: "Bergantiños", visitante: "CD Numancia", gLocal: 3, gVis: 1 },
{ jornada: 3, local: "Deportivo Fabril", visitante: "Salamanca CF UDS", gLocal: 2, gVis: 1 },
{ jornada: 3, local: "UD Ourense", visitante: "Marino de Luanco", gLocal: 0, gVis: 1 },
{ jornada: 3, local: "Rayo Cantabria", visitante: "Burgos Promesas", gLocal: 0, gVis: 0 },
{ jornada: 3, local: "Atlético Astorga", visitante: "Coruxo", gLocal: 0, gVis: 2 },
{ jornada: 3, local: "Langreo", visitante: "Real Ávila", gLocal: 1, gVis: 2 },
{ jornada: 3, local: "Oviedo Vetusta", visitante: "Real Valladolid Promesas", gLocal: 2, gVis: 1 },

// Jornada 4
{ jornada: 4, local: "Coruxo", visitante: "Oviedo Vetusta", gLocal: 2, gVis: 2 },
{ jornada: 4, local: "CD Numancia", visitante: "Gimnástica Segoviana", gLocal: 1, gVis: 0 },
{ jornada: 4, local: "Real Ávila", visitante: "Lealtad", gLocal: 1, gVis: 0 },
{ jornada: 4, local: "Salamanca CF UDS", visitante: "UD Ourense", gLocal: 1, gVis: 0 },
{ jornada: 4, local: "Real Valladolid Promesas", visitante: "Atlético Astorga", gLocal: 1, gVis: 3 },
{ jornada: 4, local: "Rayo Cantabria", visitante: "Deportivo Fabril", gLocal: 2, gVis: 3 },
{ jornada: 4, local: "Marino de Luanco", visitante: "Bergantiños", gLocal: 1, gVis: 1 },
{ jornada: 4, local: "Sámano", visitante: "Sarriana", gLocal: 1, gVis: 2 },
{ jornada: 4, local: "Burgos Promesas", visitante: "Langreo", gLocal: 1, gVis: 1 },

// Jornada 5
{ jornada: 5, local: "Gimnástica Segoviana", visitante: "Coruxo", gLocal: 2, gVis: 0 },
{ jornada: 5, local: "Lealtad", visitante: "Marino de Luanco", gLocal: 0, gVis: 2 },
{ jornada: 5, local: "Bergantiños", visitante: "Real Valladolid Promesas", gLocal: 1, gVis: 0 },
{ jornada: 5, local: "Sámano", visitante: "Salamanca CF UDS", gLocal: 0, gVis: 2 },
{ jornada: 5, local: "Sarriana", visitante: "CD Numancia", gLocal: 4, gVis: 2 },
{ jornada: 5, local: "UD Ourense", visitante: "Real Ávila", gLocal: 1, gVis: 1 },
{ jornada: 5, local: "Oviedo Vetusta", visitante: "Burgos Promesas", gLocal: 5, gVis: 2 },
{ jornada: 5, local: "Langreo", visitante: "Rayo Cantabria", gLocal: 2, gVis: 2 },
{ jornada: 5, local: "Atlético Astorga", visitante: "Deportivo Fabril", gLocal: 0, gVis: 4 },

// Jornada 6
{ jornada: 6, local: "Coruxo", visitante: "Bergantiños", gLocal: 0, gVis: 1 },
{ jornada: 6, local: "CD Numancia", visitante: "Sámano", gLocal: 0, gVis: 0 },
{ jornada: 6, local: "Real Ávila", visitante: "Oviedo Vetusta", gLocal: 1, gVis: 1 },
{ jornada: 6, local: "Burgos Promesas", visitante: "Atlético Astorga", gLocal: 1, gVis: 0 },
{ jornada: 6, local: "Real Valladolid Promesas", visitante: "Lealtad", gLocal: 4, gVis: 1 },
{ jornada: 6, local: "Marino de Luanco", visitante: "Gimnástica Segoviana", gLocal: 0, gVis: 0 },
{ jornada: 6, local: "Salamanca CF UDS", visitante: "Sarriana", gLocal: 2, gVis: 1 },
{ jornada: 6, local: "Rayo Cantabria", visitante: "UD Ourense", gLocal: 1, gVis: 1 },
{ jornada: 6, local: "Deportivo Fabril", visitante: "Langreo", gLocal: 2, gVis: 0 },

// Jornada 7
{ jornada: 7, local: "Gimnástica Segoviana", visitante: "Real Ávila", gLocal: 1, gVis: 0 },
{ jornada: 7, local: "Bergantiños", visitante: "Burgos Promesas", gLocal: 4, gVis: 2 },
{ jornada: 7, local: "CD Numancia", visitante: "Salamanca CF UDS", gLocal: 3, gVis: 1 },
{ jornada: 7, local: "Sarriana", visitante: "Coruxo", gLocal: 1, gVis: 2 },
{ jornada: 7, local: "Lealtad", visitante: "Deportivo Fabril", gLocal: 0, gVis: 0 },
{ jornada: 7, local: "UD Ourense", visitante: "Langreo", gLocal: 1, gVis: 0 },
{ jornada: 7, local: "Atlético Astorga", visitante: "Rayo Cantabria", gLocal: 1, gVis: 1 },
{ jornada: 7, local: "Sámano", visitante: "Real Valladolid Promesas", gLocal: 2, gVis: 1 },
{ jornada: 7, local: "Oviedo Vetusta", visitante: "Marino de Luanco", gLocal: 1, gVis: 1 },

// Jornada 8
{ jornada: 8, local: "Burgos Promesas", visitante: "Lealtad", gLocal: 2, gVis: 2 },
{ jornada: 8, local: "Rayo Cantabria", visitante: "Bergantiños", gLocal: 1, gVis: 2 },
{ jornada: 8, local: "Salamanca CF UDS", visitante: "Gimnástica Segoviana", gLocal: 1, gVis: 2 },
{ jornada: 8, local: "Real Valladolid Promesas", visitante: "Sarriana", gLocal: 3, gVis: 0 },
{ jornada: 8, local: "Langreo", visitante: "Atlético Astorga", gLocal: 1, gVis: 0 },
{ jornada: 8, local: "Real Ávila", visitante: "Sámano", gLocal: 3, gVis: 2 },
{ jornada: 8, local: "Marino de Luanco", visitante: "CD Numancia", gLocal: 1, gVis: 2 },
{ jornada: 8, local: "Coruxo", visitante: "UD Ourense", gLocal: 0, gVis: 1 },
{ jornada: 8, local: "Deportivo Fabril", visitante: "Oviedo Vetusta", gLocal: 0, gVis: 1 },

// Jornada 9
{ jornada: 9, local: "Bergantiños", visitante: "Langreo", gLocal: 0, gVis: 0 },
{ jornada: 9, local: "Gimnástica Segoviana", visitante: "Burgos Promesas", gLocal: 0, gVis: 0 },
{ jornada: 9, local: "CD Numancia", visitante: "Real Valladolid Promesas", gLocal: 3, gVis: 1 },
{ jornada: 9, local: "Salamanca CF UDS", visitante: "Coruxo", gLocal: 2, gVis: 0 },
{ jornada: 9, local: "Sámano", visitante: "Marino de Luanco", gLocal: 1, gVis: 0 },
{ jornada: 9, local: "Sarriana", visitante: "Real Ávila", gLocal: 2, gVis: 0 },
{ jornada: 9, local: "Oviedo Vetusta", visitante: "Rayo Cantabria", gLocal: 0, gVis: 0 },
{ jornada: 9, local: "Lealtad", visitante: "Atlético Astorga", gLocal: 1, gVis: 2 },
{ jornada: 9, local: "UD Ourense", visitante: "Deportivo Fabril", gLocal: 2, gVis: 1 },

// Jornada 10
{ jornada: 10, local: "Coruxo", visitante: "Lealtad", gLocal: 1, gVis: 0 },
{ jornada: 10, local: "Langreo", visitante: "Oviedo Vetusta", gLocal: 0, gVis: 2 },
{ jornada: 10, local: "Marino de Luanco", visitante: "Sarriana", gLocal: 1, gVis: 1 },
{ jornada: 10, local: "Real Ávila", visitante: "CD Numancia", gLocal: 0, gVis: 0 },
{ jornada: 10, local: "Burgos Promesas", visitante: "Sámano", gLocal: 1, gVis: 1 },
{ jornada: 10, local: "Deportivo Fabril", visitante: "Bergantiños", gLocal: 0, gVis: 0 },
{ jornada: 10, local: "Real Valladolid Promesas", visitante: "Salamanca CF UDS", gLocal: 0, gVis: 0 },
{ jornada: 10, local: "Atlético Astorga", visitante: "UD Ourense", gLocal: 1, gVis: 1 },
{ jornada: 10, local: "Rayo Cantabria", visitante: "Gimnástica Segoviana", gLocal: 1, gVis: 2 },

// Jornada 11
{ jornada: 11, local: "Gimnástica Segoviana", visitante: "Langreo", gLocal: 1, gVis: 0 },
{ jornada: 11, local: "CD Numancia", visitante: "Coruxo", gLocal: 1, gVis: 2 },
{ jornada: 11, local: "Salamanca CF UDS", visitante: "Real Ávila", gLocal: 1, gVis: 3 },
{ jornada: 11, local: "Sarriana", visitante: "Burgos Promesas", gLocal: 1, gVis: 1 },
{ jornada: 11, local: "Lealtad", visitante: "Rayo Cantabria", gLocal: 1, gVis: 0 },
{ jornada: 11, local: "Real Valladolid Promesas", visitante: "Marino de Luanco", gLocal: 0, gVis: 2 },
{ jornada: 11, local: "Bergantiños", visitante: "Atlético Astorga", gLocal: 0, gVis: 0 },
{ jornada: 11, local: "Sámano", visitante: "Deportivo Fabril", gLocal: 0, gVis: 5 },
{ jornada: 11, local: "Oviedo Vetusta", visitante: "UD Ourense", gLocal: 0, gVis: 1 },

// Jornada 12
{ jornada: 12, local: "Deportivo Fabril", visitante: "Gimnástica Segoviana", gLocal: 0, gVis: 1 },
{ jornada: 12, local: "Langreo", visitante: "Lealtad", gLocal: 4, gVis: 0 },
{ jornada: 12, local: "Coruxo", visitante: "Sámano", gLocal: 4, gVis: 1 },
{ jornada: 12, local: "Marino de Luanco", visitante: "Salamanca CF UDS", gLocal: 1, gVis: 2 },
{ jornada: 12, local: "Real Ávila", visitante: "Real Valladolid Promesas", gLocal: 2, gVis: 2 },
{ jornada: 12, local: "UD Ourense", visitante: "Bergantiños", gLocal: 1, gVis: 0 },
{ jornada: 12, local: "Atlético Astorga", visitante: "Oviedo Vetusta", gLocal: 1, gVis: 1 },
{ jornada: 12, local: "Burgos Promesas", visitante: "CD Numancia", gLocal: 0, gVis: 1 },
{ jornada: 12, local: "Rayo Cantabria", visitante: "Sarriana", gLocal: 2, gVis: 0 },

// Jornada 13
{ jornada: 13, local: "Bergantiños", visitante: "Oviedo Vetusta", gLocal: 1, gVis: 2 },
{ jornada: 13, local: "Gimnástica Segoviana", visitante: "Atlético Astorga", gLocal: 1, gVis: 1 },
{ jornada: 13, local: "Marino de Luanco", visitante: "Real Ávila", gLocal: 1, gVis: 0 },
{ jornada: 13, local: "Salamanca CF UDS", visitante: "Burgos Promesas", gLocal: 3, gVis: 1 },
{ jornada: 13, local: "Sarriana", visitante: "Deportivo Fabril", gLocal: 1, gVis: 1 },
{ jornada: 13, local: "Real Valladolid Promesas", visitante: "Coruxo", gLocal: 0, gVis: 3 },
{ jornada: 13, local: "Sámano", visitante: "Rayo Cantabria", gLocal: 1, gVis: 1 },
{ jornada: 13, local: "CD Numancia", visitante: "Langreo", gLocal: 3, gVis: 1 },
{ jornada: 13, local: "Lealtad", visitante: "UD Ourense", gLocal: 0, gVis: 1 },

// Jornada 14
{ jornada: 14, local: "Langreo", visitante: "Sarriana", gLocal: 0, gVis: 2 },
{ jornada: 14, local: "UD Ourense", visitante: "CD Numancia", gLocal: 0, gVis: 3 },
{ jornada: 14, local: "Burgos Promesas", visitante: "Real Valladolid Promesas", gLocal: 3, gVis: 3 },
{ jornada: 14, local: "Bergantiños", visitante: "Gimnástica Segoviana", gLocal: 3, gVis: 1 },
{ jornada: 14, local: "Coruxo", visitante: "Real Ávila", gLocal: 1, gVis: 1 },
{ jornada: 14, local: "Deportivo Fabril", visitante: "Marino de Luanco", gLocal: 0, gVis: 0 },
{ jornada: 14, local: "Rayo Cantabria", visitante: "Salamanca CF UDS", gLocal: 1, gVis: 1 },
{ jornada: 14, local: "Atlético Astorga", visitante: "Sámano", gLocal: 3, gVis: 0 },
{ jornada: 14, local: "Oviedo Vetusta", visitante: "Lealtad", gLocal: 1, gVis: 2 },

// Jornada 15
{ jornada: 15, local: "Marino de Luanco", visitante: "Coruxo", gLocal: 1, gVis: 2 },
{ jornada: 15, local: "Real Ávila", visitante: "Burgos Promesas", gLocal: 2, gVis: 1 },
{ jornada: 15, local: "Salamanca CF UDS", visitante: "Oviedo Vetusta", gLocal: 0, gVis: 0 },
{ jornada: 15, local: "Sarriana", visitante: "Atlético Astorga", gLocal: 0, gVis: 0 },
{ jornada: 15, local: "Lealtad", visitante: "Bergantiños", gLocal: 0, gVis: 1 },
{ jornada: 15, local: "Real Valladolid Promesas", visitante: "Rayo Cantabria", gLocal: 1, gVis: 1 },
{ jornada: 15, local: "Gimnástica Segoviana", visitante: "UD Ourense", gLocal: 2, gVis: 0 },
{ jornada: 15, local: "Sámano", visitante: "Langreo", gLocal: 1, gVis: 2 },
{ jornada: 15, local: "CD Numancia", visitante: "Deportivo Fabril", gLocal: 1, gVis: 2 },

// Jornada 16
{ jornada: 16, local: "UD Ourense", visitante: "Sarriana", gLocal: 1, gVis: 0 },
{ jornada: 16, local: "Rayo Cantabria", visitante: "Coruxo", gLocal: 1, gVis: 1 },
{ jornada: 16, local: "Deportivo Fabril", visitante: "Real Ávila", gLocal: 2, gVis: 1 },
{ jornada: 16, local: "Oviedo Vetusta", visitante: "Gimnástica Segoviana", gLocal: 3, gVis: 0 },
{ jornada: 16, local: "Langreo", visitante: "Real Valladolid Promesas", gLocal: 1, gVis: 1 },
{ jornada: 16, local: "Bergantiños", visitante: "Sámano", gLocal: 1, gVis: 0 },
{ jornada: 16, local: "Atlético Astorga", visitante: "CD Numancia", gLocal: 1, gVis: 0 },
{ jornada: 16, local: "Burgos Promesas", visitante: "Marino de Luanco", gLocal: 1, gVis: 0 },
{ jornada: 16, local: "Lealtad", visitante: "Salamanca CF UDS", gLocal: 0, gVis: 1 },

// Jornada 17
{ jornada: 17, local: "Coruxo", visitante: "Burgos Promesas", gLocal: 5, gVis: 1 },
{ jornada: 17, local: "Gimnástica Segoviana", visitante: "Lealtad", gLocal: 2, gVis: 1 },
{ jornada: 17, local: "Marino de Luanco", visitante: "Atlético Astorga", gLocal: 0, gVis: 1 },
{ jornada: 17, local: "Real Ávila", visitante: "Rayo Cantabria", gLocal: 3, gVis: 3 },
{ jornada: 17, local: "Salamanca CF UDS", visitante: "Langreo", gLocal: 1, gVis: 1 },
{ jornada: 17, local: "Sámano", visitante: "UD Ourense", gLocal: 1, gVis: 1 },
{ jornada: 17, local: "Sarriana", visitante: "Bergantiños", gLocal: 1, gVis: 0 },
{ jornada: 17, local: "CD Numancia", visitante: "Oviedo Vetusta", gLocal: 1, gVis: 2 },
{ jornada: 17, local: "Real Valladolid Promesas", visitante: "Deportivo Fabril", gLocal: 0, gVis: 4 },

// Jornada 18
{ jornada: 18, local: "Bergantiños", visitante: "Real Ávila", gLocal: 0, gVis: 0 },
{ jornada: 18, local: "Langreo", visitante: "Marino de Luanco", gLocal: 0, gVis: 3 },
{ jornada: 18, local: "UD Ourense", visitante: "Salamanca CF UDS", gLocal: 1, gVis: 0 },
{ jornada: 18, local: "Burgos Promesas", visitante: "Gimnástica Segoviana", gLocal: 3, gVis: 0 },
{ jornada: 18, local: "Lealtad", visitante: "Sarriana", gLocal: 3, gVis: 1 },
{ jornada: 18, local: "Rayo Cantabria", visitante: "CD Numancia", gLocal: 0, gVis: 0 },
{ jornada: 18, local: "Oviedo Vetusta", visitante: "Sámano", gLocal: 3, gVis: 0 },
{ jornada: 18, local: "Atlético Astorga", visitante: "Real Valladolid Promesas", gLocal: 1, gVis: 4 },
{ jornada: 18, local: "Deportivo Fabril", visitante: "Coruxo", gLocal: 2, gVis: 1 },

// Jornada 19
{ jornada: 19, local: "Gimnástica Segoviana", visitante: "Rayo Cantabria", gLocal: 3, gVis: 3 },
{ jornada: 19, local: "Coruxo", visitante: "Atlético Astorga", gLocal: 1, gVis: 0 },
{ jornada: 19, local: "Langreo", visitante: "Deportivo Fabril", gLocal: 0, gVis: 0 },
{ jornada: 19, local: "Marino de Luanco", visitante: "Lealtad", gLocal: 0, gVis: 0 },
{ jornada: 19, local: "Real Ávila", visitante: "UD Ourense", gLocal: 0, gVis: 2 },
{ jornada: 19, local: "Salamanca CF UDS", visitante: "Real Valladolid Promesas", gLocal: 3, gVis: 0 },
{ jornada: 19, local: "Sarriana", visitante: "Oviedo Vetusta", gLocal: 0, gVis: 1 },
{ jornada: 19, local: "CD Numancia", visitante: "Bergantiños", gLocal: 2, gVis: 1 },
{ jornada: 19, local: "Sámano", visitante: "Burgos Promesas", gLocal: 1, gVis: 2 },

// Jornada 20
{ jornada: 20, local: "Bergantiños", visitante: "Marino de Luanco", gLocal: 0, gVis: 1 },
{ jornada: 20, local: "Gimnástica Segoviana", visitante: "CD Numancia", gLocal: 0, gVis: 0 },
{ jornada: 20, local: "Burgos Promesas", visitante: "Sarriana", gLocal: 0, gVis: 2 },
{ jornada: 20, local: "Lealtad", visitante: "Real Ávila", gLocal: 0, gVis: 1 },
{ jornada: 20, local: "Real Valladolid Promesas", visitante: "UD Ourense", gLocal: 2, gVis: 3 },
{ jornada: 20, local: "Rayo Cantabria", visitante: "Langreo", gLocal: 1, gVis: 2 },
{ jornada: 20, local: "Atlético Astorga", visitante: "Salamanca CF UDS", gLocal: 1, gVis: 2 },
{ jornada: 20, local: "Deportivo Fabril", visitante: "Sámano", gLocal: 1, gVis: 0 },
{ jornada: 20, local: "Oviedo Vetusta", visitante: "Coruxo", gLocal: 0, gVis: 1 },

// Jornada 21
{ jornada: 21, local: "Coruxo", visitante: "Salamanca CF UDS", gLocal: 1, gVis: 0 },
{ jornada: 21, local: "Marino de Luanco", visitante: "Rayo Cantabria", gLocal: 1, gVis: 1 },
{ jornada: 21, local: "Real Ávila", visitante: "Atlético Astorga", gLocal: 2, gVis: 4 },
{ jornada: 21, local: "Sámano", visitante: "Gimnástica Segoviana", gLocal: 0, gVis: 1 },
{ jornada: 21, local: "Sarriana", visitante: "Real Valladolid Promesas", gLocal: 2, gVis: 3 },
{ jornada: 21, local: "UD Ourense", visitante: "Burgos Promesas", gLocal: 1, gVis: 1 },
{ jornada: 21, local: "Oviedo Vetusta", visitante: "Deportivo Fabril", gLocal: 1, gVis: 1 },
{ jornada: 21, local: "CD Numancia", visitante: "Lealtad", gLocal: 0, gVis: 1 },
{ jornada: 21, local: "Langreo", visitante: "Bergantiños", gLocal: 0, gVis: 1 },

// Jornada 22
{ jornada: 22, local: "Salamanca CF UDS", visitante: "CD Numancia", gLocal: 1, gVis: 1 },
{ jornada: 22, local: "UD Ourense", visitante: "Coruxo", gLocal: 1, gVis: 1 },
{ jornada: 22, local: "Lealtad", visitante: "Langreo", gLocal: 1, gVis: 1 },
{ jornada: 22, local: "Rayo Cantabria", visitante: "Sámano", gLocal: 7, gVis: 0 },
{ jornada: 22, local: "Burgos Promesas", visitante: "Oviedo Vetusta", gLocal: 1, gVis: 2 },
{ jornada: 22, local: "Atlético Astorga", visitante: "Bergantiños", gLocal: 3, gVis: 0 },
{ jornada: 22, local: "Deportivo Fabril", visitante: "Sarriana", gLocal: 2, gVis: 1 },
{ jornada: 22, local: "Real Valladolid Promesas", visitante: "Real Ávila", gLocal: 7, gVis: 2 },
{ jornada: 22, local: "Gimnástica Segoviana", visitante: "Marino de Luanco", gLocal: 3, gVis: 2 },

// Jornada 23
{ jornada: 23, local: "Bergantiños", visitante: "Rayo Cantabria", gLocal: 3, gVis: 4 },
{ jornada: 23, local: "Coruxo", visitante: "Real Valladolid Promesas", gLocal: 0, gVis: 2 },
{ jornada: 23, local: "Marino de Luanco", visitante: "Deportivo Fabril", gLocal: 0, gVis: 0 },
{ jornada: 23, local: "Real Ávila", visitante: "Salamanca CF UDS", gLocal: 1, gVis: 2 },
{ jornada: 23, local: "Sámano", visitante: "Lealtad", gLocal: 0, gVis: 2 },
{ jornada: 23, local: "CD Numancia", visitante: "UD Ourense", gLocal: 2, gVis: 1 },
{ jornada: 23, local: "Sarriana", visitante: "Gimnástica Segoviana", gLocal: 1, gVis: 2 },
{ jornada: 23, local: "Langreo", visitante: "Burgos Promesas", gLocal: 2, gVis: 1 },
{ jornada: 23, local: "Oviedo Vetusta", visitante: "Atlético Astorga", gLocal: 1, gVis: 0 },

// Jornada 24
{ jornada: 24, local: "Salamanca CF UDS", visitante: "Marino de Luanco", gLocal: 0, gVis: 0 },
{ jornada: 24, local: "UD Ourense", visitante: "Rayo Cantabria", gLocal: 3, gVis: 3 },
{ jornada: 24, local: "Lealtad", visitante: "Oviedo Vetusta", gLocal: 1, gVis: 2 },
{ jornada: 24, local: "Coruxo", visitante: "Sarriana", gLocal: 1, gVis: 0 },
{ jornada: 24, local: "Deportivo Fabril", visitante: "CD Numancia", gLocal: 2, gVis: 1 },
{ jornada: 24, local: "Gimnástica Segoviana", visitante: "Bergantiños", gLocal: 1, gVis: 1 },
{ jornada: 24, local: "Real Valladolid Promesas", visitante: "Sámano", gLocal: 2, gVis: 2 },
{ jornada: 24, local: "Burgos Promesas", visitante: "Real Ávila", gLocal: 1, gVis: 2 },
{ jornada: 24, local: "Atlético Astorga", visitante: "Langreo", gLocal: 1, gVis: 0 },

// Jornada 25
{ jornada: 25, local: "Bergantiños", visitante: "Deportivo Fabril", gLocal: 2, gVis: 2 },
{ jornada: 25, local: "CD Numancia", visitante: "Burgos Promesas", gLocal: 2, gVis: 0 },
{ jornada: 25, local: "Sarriana", visitante: "UD Ourense", gLocal: 3, gVis: 1 },
{ jornada: 25, local: "Rayo Cantabria", visitante: "Lealtad", gLocal: 1, gVis: 0 },
{ jornada: 25, local: "Oviedo Vetusta", visitante: "Salamanca CF UDS", gLocal: 5, gVis: 2 },
{ jornada: 25, local: "Langreo", visitante: "Gimnástica Segoviana", gLocal: 1, gVis: 0 },
{ jornada: 25, local: "Marino de Luanco", visitante: "Real Valladolid Promesas", gLocal: 1, gVis: 0 },
{ jornada: 25, local: "Real Ávila", visitante: "Coruxo", gLocal: 2, gVis: 1 },
{ jornada: 25, local: "Sámano", visitante: "Atlético Astorga", gLocal: 1, gVis: 3 },

// Jornada 26
{ jornada: 26, local: "Burgos Promesas", visitante: "Bergantiños", gLocal: 1, gVis: 0 },
{ jornada: 26, local: "Coruxo", visitante: "Langreo", gLocal: 1, gVis: 2 },
{ jornada: 26, local: "Salamanca CF UDS", visitante: "Sámano", gLocal: 5, gVis: 1 },
{ jornada: 26, local: "UD Ourense", visitante: "Oviedo Vetusta", gLocal: 3, gVis: 0 },
{ jornada: 26, local: "Lealtad", visitante: "Gimnástica Segoviana", gLocal: 1, gVis: 0 },
{ jornada: 26, local: "Real Ávila", visitante: "Sarriana", gLocal: 0, gVis: 0 },
{ jornada: 26, local: "Atlético Astorga", visitante: "Marino de Luanco", gLocal: 3, gVis: 0 },
{ jornada: 26, local: "Deportivo Fabril", visitante: "Rayo Cantabria", gLocal: 2, gVis: 1 },
{ jornada: 26, local: "Real Valladolid Promesas", visitante: "CD Numancia", gLocal: 1, gVis: 1 },

// Jornada 27
{ jornada: 27, local: "Sámano", visitante: "Coruxo", gLocal: 2, gVis: 1 },
{ jornada: 27, local: "Gimnástica Segoviana", visitante: "Deportivo Fabril", gLocal: 0, gVis: 0 },
{ jornada: 27, local: "Rayo Cantabria", visitante: "Real Valladolid Promesas", gLocal: 4, gVis: 1 },
{ jornada: 27, local: "Oviedo Vetusta", visitante: "Real Ávila", gLocal: 0, gVis: 2 },
{ jornada: 27, local: "Bergantiños", visitante: "Lealtad", gLocal: 3, gVis: 0 },
{ jornada: 27, local: "Langreo", visitante: "UD Ourense", gLocal: 1, gVis: 0 },
{ jornada: 27, local: "Sarriana", visitante: "Salamanca CF UDS", gLocal: 1, gVis: 0 },
{ jornada: 27, local: "CD Numancia", visitante: "Atlético Astorga", gLocal: 0, gVis: 1 },
{ jornada: 27, local: "Marino de Luanco", visitante: "Burgos Promesas", gLocal: 0, gVis: 0 },

// Jornada 28
  { jornada: 28, local: "Deportivo Fabril", visitante: "Lealtad", gLocal: 3, gVis: 1 },
  { jornada: 28, local: "Salamanca CF UDS", visitante: "Bergantiños", gLocal: 0, gVis: 0 },
  { jornada: 28, local: "UD Ourense", visitante: "Sámano", gLocal: 3, gVis: 1 },
  { jornada: 28, local: "Coruxo", visitante: "CD Numancia", gLocal: 1, gVis: 1 },
  { jornada: 28, local: "Real Valladolid Promesas", visitante: "Oviedo Vetusta", gLocal: 2, gVis: 2 },
  { jornada: 28, local: "Real Ávila", visitante: "Marino de Luanco", gLocal: 2, gVis: 1 },
  { jornada: 28, local: "Sarriana", visitante: "Langreo", gLocal: 1, gVis: 1 },
  { jornada: 28, local: "Burgos Promesas", visitante: "Rayo Cantabria", gLocal: 4, gVis: 4 },
  { jornada: 28, local: "Atlético Astorga", visitante: "Gimnástica Segoviana", gLocal: 2, gVis: 2 },

// Jornada 29
  { jornada: 29, local: "Lealtad", visitante: "Burgos Promesas", gLocal: 0, gVis: 2 },
  { jornada: 29, local: "Marino de Luanco", visitante: "UD Ourense", gLocal: 0, gVis: 0 },
  { jornada: 29, local: "Bergantiños", visitante: "Coruxo", gLocal: 0, gVis: 1 },
  { jornada: 29, local: "Deportivo Fabril", visitante: "Atlético Astorga", gLocal: 3, gVis: 0 },
  { jornada: 29, local: "Gimnástica Segoviana", visitante: "Real Valladolid Promesas", gLocal: 1, gVis: 2 },
  { jornada: 29, local: "CD Numancia", visitante: "Sarriana", gLocal: 2, gVis: 2 },
  { jornada: 29, local: "Rayo Cantabria", visitante: "Oviedo Vetusta", gLocal: 1, gVis: 0 },
  { jornada: 29, local: "Langreo", visitante: "Salamanca CF UDS", gLocal: 1, gVis: 0 },
  { jornada: 29, local: "Sámano", visitante: "Real Ávila", gLocal: 0, gVis: 4 },

// Jornada 30
  { jornada: 30, local: "Oviedo Vetusta", visitante: "CD Numancia", gLocal: 0, gVis: 0 },
  { jornada: 30, local: "Atlético Astorga", visitante: "Lealtad", gLocal: 3, gVis: 4 },
  { jornada: 30, local: "Sarriana", visitante: "Sámano", gLocal: 4, gVis: 0 },
  { jornada: 30, local: "Real Valladolid Promesas", visitante: "Bergantiños", gLocal: 3, gVis: 4 },
  { jornada: 30, local: "Real Ávila", visitante: "Langreo", gLocal: 1, gVis: 2 },
  { jornada: 30, local: "Burgos Promesas", visitante: "Deportivo Fabril", gLocal: 1, gVis: 4 },
  { jornada: 30, local: "Salamanca CF UDS", visitante: "Rayo Cantabria", gLocal: 1, gVis: 2 },
  { jornada: 30, local: "UD Ourense", visitante: "Gimnástica Segoviana", gLocal: 1, gVis: 0 },
  { jornada: 30, local: "Coruxo", visitante: "Marino de Luanco", gLocal: 1, gVis: 2 },

// Jornada 31
{ jornada: 31, local: "Deportivo Fabril", visitante: "UD Ourense", gLocal: 3, gVis: 0 },
{ jornada: 31, local: "Rayo Cantabria", visitante: "Atlético Astorga", gLocal: 3, gVis: 2 },
{ jornada: 31, local: "Langreo", visitante: "Sámano", gLocal: 4, gVis: 1 },
{ jornada: 31, local: "Marino de Luanco", visitante: "Oviedo Vetusta", gLocal: 1, gVis: 1 },
{ jornada: 31, local: "Burgos Promesas", visitante: "Coruxo", gLocal: 1, gVis: 0 },
{ jornada: 31, local: "CD Numancia", visitante: "Real Ávila", gLocal: 2, gVis: 1 },
{ jornada: 31, local: "Lealtad", visitante: "Real Valladolid Promesas", gLocal: 2, gVis: 3 },
{ jornada: 31, local: "Gimnástica Segoviana", visitante: "Salamanca CF UDS", gLocal: 0, gVis: 1 },
{ jornada: 31, local: "Bergantiños", visitante: "Sarriana", gLocal: 0, gVis: 1 },

// Jornada 32
  { jornada: 32, local: "Atlético Astorga", visitante: "Burgos Promesas", gLocal: 0, gVis: 0 },
  { jornada: 32, local: "Oviedo Vetusta", visitante: "Bergantiños", gLocal: 1, gVis: 2 },
  { jornada: 32, local: "Real Valladolid Promesas", visitante: "Langreo", gLocal: 3, gVis: 0 },
  { jornada: 32, local: "Real Ávila", visitante: "Gimnástica Segoviana", gLocal: 2, gVis: 1 },
  { jornada: 32, local: "Salamanca CF UDS", visitante: "Deportivo Fabril", gLocal: 0, gVis: 1 },
  { jornada: 32, local: "Sámano", visitante: "CD Numancia", gLocal: 0, gVis: 3 },
  { jornada: 32, local: "Coruxo", visitante: "Rayo Cantabria", gLocal: 1, gVis: 1 },
  { jornada: 32, local: "Sarriana", visitante: "Marino de Luanco", gLocal: 0, gVis: 1 },
  { jornada: 32, local: "UD Ourense", visitante: "Lealtad", gLocal: 3, gVis: 1 },

// Jornada 33
  { jornada: 33, local: "Atlético Astorga", visitante: "Sarriana", gLocal: null, gVis: null },
  { jornada: 33, local: "Bergantiños", visitante: "UD Ourense", gLocal: null, gVis: null },
  { jornada: 33, local: "Burgos Promesas", visitante: "Salamanca CF UDS", gLocal: null, gVis: null },
  { jornada: 33, local: "Deportivo Fabril", visitante: "Real Valladolid Promesas", gLocal: null, gVis: null },
  { jornada: 33, local: "Gimnástica Segoviana", visitante: "Oviedo Vetusta", gLocal: null, gVis: null },
  { jornada: 33, local: "Langreo", visitante: "CD Numancia", gLocal: null, gVis: null },
  { jornada: 33, local: "Lealtad", visitante: "Coruxo", gLocal: null, gVis: null },
  { jornada: 33, local: "Marino de Luanco", visitante: "Sámano", gLocal: null, gVis: null },
  { jornada: 33, local: "Rayo Cantabria", visitante: "Real Ávila", gLocal: null, gVis: null },

// Jornada 34
  { jornada: 34, local: "Coruxo", visitante: "Gimnástica Segoviana", gLocal: null, gVis: null },
  { jornada: 34, local: "CD Numancia", visitante: "Marino de Luanco", gLocal: null, gVis: null },
  { jornada: 34, local: "Real Ávila", visitante: "Deportivo Fabril", gLocal: null, gVis: null },
  { jornada: 34, local: "Oviedo Vetusta", visitante: "Langreo", gLocal: null, gVis: null },
  { jornada: 34, local: "Salamanca CF UDS", visitante: "Lealtad", gLocal: null, gVis: null },
  { jornada: 34, local: "Sámano", visitante: "Bergantiños", gLocal: null, gVis: null },
  { jornada: 34, local: "Sarriana", visitante: "Rayo Cantabria", gLocal: null, gVis: null },
  { jornada: 34, local: "UD Ourense", visitante: "Atlético Astorga", gLocal: null, gVis: null },
  { jornada: 34, local: "Real Valladolid Promesas", visitante: "Burgos Promesas", gLocal: null, gVis: null }

];

let jornadasDisponibles = [];
let jornadaActual = 26;
let posicionesBaseJornada = {};
let simulacionFinalizada = false;

function crearTablaBase() {
  const tabla = {};
  for (let i = 0; i < equipos.length; i++) {
    const e = equipos[i];
    tabla[e] = {
      equipo: e,
      PJ: 0,
      PG: 0,
      PE: 0,
      PP: 0,
      GF: 0,
      GC: 0,
      PTS: 0,
      directos: {}
    };
  }
  return tabla;
}

function asegurarDirecto(tabla, eq1, eq2) {
  if (!tabla[eq1].directos[eq2]) {
    tabla[eq1].directos[eq2] = {
      partidos: 0,
      puntos: 0,
      gf: 0,
      gc: 0
    };
  }
}

function partidoJugado(p) {
  return Number.isInteger(p.gLocal) && Number.isInteger(p.gVis);
}

function jornadaCompleta(numeroJornada) {
  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (p.jornada === numeroJornada && !partidoJugado(p)) {
      return false;
    }
  }
  return true;
}

function aplicarPartido(tabla, local, visitante, gl, gv) {
  const home = tabla[local];
  const away = tabla[visitante];

  home.PJ += 1;
  away.PJ += 1;

  home.GF += gl;
  home.GC += gv;
  away.GF += gv;
  away.GC += gl;

  asegurarDirecto(tabla, local, visitante);
  asegurarDirecto(tabla, visitante, local);

  tabla[local].directos[visitante].partidos += 1;
  tabla[visitante].directos[local].partidos += 1;

  tabla[local].directos[visitante].gf += gl;
  tabla[local].directos[visitante].gc += gv;
  tabla[visitante].directos[local].gf += gv;
  tabla[visitante].directos[local].gc += gl;

  if (gl > gv) {
    home.PG += 1;
    away.PP += 1;
    home.PTS += 3;
    tabla[local].directos[visitante].puntos += 3;
  } else if (gl < gv) {
    away.PG += 1;
    home.PP += 1;
    away.PTS += 3;
    tabla[visitante].directos[local].puntos += 3;
  } else {
    home.PE += 1;
    away.PE += 1;
    home.PTS += 1;
    away.PTS += 1;
    tabla[local].directos[visitante].puntos += 1;
    tabla[visitante].directos[local].puntos += 1;
  }
}

function compararPorGeneral(a, b) {
  const dgA = a.GF - a.GC;
  const dgB = b.GF - b.GC;

  if (dgB !== dgA) return dgB - dgA;
  if (b.GF !== a.GF) return b.GF - a.GF;

  return a.equipo.localeCompare(b.equipo, "es");
}

function compararDosEquipos(a, b) {
  if (b.PTS !== a.PTS) {
    return b.PTS - a.PTS;
  }

  const da = a.directos[b.equipo];
  const db = b.directos[a.equipo];

  // Solo vale el enfrentamiento directo si están jugados LOS DOS partidos
  if (da && db && da.partidos === 2 && db.partidos === 2) {
    if (db.puntos !== da.puntos) {
      return db.puntos - da.puntos;
    }

    const diffA = da.gf - da.gc;
    const diffB = db.gf - db.gc;
    if (diffB !== diffA) {
      return diffB - diffA;
    }

    if (db.gf !== da.gf) {
      return db.gf - da.gf;
    }
  }

  return compararPorGeneral(a, b);
}

function estanTodosLosPartidosMiniLiga(grupo) {
  const n = grupo.length;
  const partidosEsperadosPorEquipo = (n - 1) * 2;

  for (let i = 0; i < grupo.length; i++) {
    let jugados = 0;
    const eq = grupo[i];

    for (let j = 0; j < grupo.length; j++) {
      if (i === j) continue;
      const rival = grupo[j];

      if (eq.directos[rival.equipo]) {
        jugados += eq.directos[rival.equipo].partidos;
      }
    }

    if (jugados !== partidosEsperadosPorEquipo) {
      return false;
    }
  }

  return true;
}

function crearMiniClasificacion(grupo) {
  const mini = {};

  for (let i = 0; i < grupo.length; i++) {
    const e = grupo[i];
    mini[e.equipo] = {
      equipo: e.equipo,
      PTS: 0,
      GF: 0,
      GC: 0
    };
  }

  for (let i = 0; i < grupo.length; i++) {
    const e = grupo[i];

    for (let j = 0; j < grupo.length; j++) {
      if (i === j) continue;

      const rival = grupo[j];
      const dir = e.directos[rival.equipo];

      if (dir) {
        mini[e.equipo].PTS += dir.puntos;
        mini[e.equipo].GF += dir.gf;
        mini[e.equipo].GC += dir.gc;
      }
    }
  }

  return mini;
}

function ordenarGrupoEmpatado(grupo) {
  if (grupo.length === 1) return grupo;

  if (grupo.length === 2) {
    return grupo.slice().sort(compararDosEquipos);
  }

  // 3 o más empatados: miniclasificación SOLO si están todos los partidos
  if (estanTodosLosPartidosMiniLiga(grupo)) {
    const mini = crearMiniClasificacion(grupo);

    return grupo.slice().sort((a, b) => {
      const ma = mini[a.equipo];
      const mb = mini[b.equipo];

      if (mb.PTS !== ma.PTS) {
        return mb.PTS - ma.PTS;
      }

      const dgMiniA = ma.GF - ma.GC;
      const dgMiniB = mb.GF - mb.GC;
      if (dgMiniB !== dgMiniA) {
        return dgMiniB - dgMiniA;
      }

      if (mb.GF !== ma.GF) {
        return mb.GF - ma.GF;
      }

      return compararPorGeneral(a, b);
    });
  }

  // Si no está completa la miniliga, ir a DG general
  return grupo.slice().sort(compararPorGeneral);
}

function ordenarClasificacionConEmpates(clasificacionBase) {
  const grupos = [];
  let grupoActual = [];

  for (let i = 0; i < clasificacionBase.length; i++) {
    const equipo = clasificacionBase[i];

    if (grupoActual.length === 0) {
      grupoActual.push(equipo);
      continue;
    }

    if (equipo.PTS === grupoActual[0].PTS) {
      grupoActual.push(equipo);
    } else {
      grupos.push(grupoActual);
      grupoActual = [equipo];
    }
  }

  if (grupoActual.length > 0) {
    grupos.push(grupoActual);
  }

  let resultado = [];
  for (let i = 0; i < grupos.length; i++) {
    resultado = resultado.concat(ordenarGrupoEmpatado(grupos[i]));
  }

  return resultado;
}

function obtenerPosicionesClasificacionActual() {
  const tabla = crearTablaBase();

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (!partidoJugado(p)) continue;
    aplicarPartido(tabla, p.local, p.visitante, p.gLocal, p.gVis);
  }

  const clasificacionBase = Object.values(tabla).sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return a.equipo.localeCompare(b.equipo, "es");
  });

  const clasificacion = ordenarClasificacionConEmpates(clasificacionBase);
  const posiciones = {};

  for (let i = 0; i < clasificacion.length; i++) {
    posiciones[clasificacion[i].equipo] = i + 1;
  }

  return posiciones;
}

function reiniciarReferenciaJornada() {
  posicionesBaseJornada = obtenerPosicionesClasificacionActual();
}

function construirListaJornadas() {
  jornadasDisponibles = [];
  for (let i = 0; i < partidos.length; i++) {
    if (!jornadasDisponibles.includes(partidos[i].jornada)) {
      jornadasDisponibles.push(partidos[i].jornada);
    }
  }
  jornadasDisponibles.sort(function (a, b) {
    return a - b;
  });
}

function obtenerPrimeraJornadaPendiente() {
  construirListaJornadas();

  for (let j = 0; j < jornadasDisponibles.length; j++) {
    const numeroJornada = jornadasDisponibles[j];

    for (let i = 0; i < partidos.length; i++) {
      const p = partidos[i];
      if (p.jornada === numeroJornada && !partidoJugado(p)) {
        return numeroJornada;
      }
    }
  }

  // Si todas están completas, ir a la última
  return jornadasDisponibles[jornadasDisponibles.length - 1];
}

function mostrarPartidos() {
  const contenedor = document.getElementById("partidos");
  if (!contenedor) return;

  construirListaJornadas();

  if (!jornadasDisponibles.includes(jornadaActual)) {
    jornadaActual = jornadasDisponibles[0];
  }

  contenedor.innerHTML = "";

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Jornada " + jornadaActual;
  }

  const bloque = document.createElement("div");
  bloque.className = "bloque-jornada";

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (p.jornada !== jornadaActual) continue;

    const fila = document.createElement("div");
    fila.className = "fila-partido";

    const spanLocal = document.createElement("span");
    spanLocal.className = "equipo-local";
    spanLocal.innerHTML =
      `<img class="escudo" src="${obtenerEscudo(p.local)}" alt="${p.local}">
       <span>${p.local}</span>`;

    const inputLocal = document.createElement("input");
    inputLocal.type = "number";
    inputLocal.min = "0";
    inputLocal.id = "gl" + i;
    inputLocal.value = partidoJugado(p) ? p.gLocal : "";

    const guion = document.createElement("span");
    guion.className = "guion";
    guion.textContent = "-";

    const inputVis = document.createElement("input");
    inputVis.type = "number";
    inputVis.min = "0";
    inputVis.id = "gv" + i;
    inputVis.value = partidoJugado(p) ? p.gVis : "";

    const spanVis = document.createElement("span");
    spanVis.className = "equipo-visitante";
    spanVis.innerHTML =
      `<img class="escudo" src="${obtenerEscudo(p.visitante)}" alt="${p.visitante}">
       <span>${p.visitante}</span>`;

    fila.appendChild(spanLocal);
    fila.appendChild(inputLocal);
    fila.appendChild(guion);
    fila.appendChild(inputVis);
    fila.appendChild(spanVis);

    bloque.appendChild(fila);
  }

  contenedor.appendChild(bloque);

  const inputs = contenedor.querySelectorAll('input[type="number"]');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function () {
    leerResultados();
    calcularClasificacion();
    actualizarBotonesJornada();
  });
}

  actualizarBotonesJornada();
}

function leerResultados() {
  for (let i = 0; i < partidos.length; i++) {
    const gl = document.getElementById("gl" + i);
    const gv = document.getElementById("gv" + i);

    if (!gl || !gv) continue;

    const valorLocal = gl.value.trim();
    const valorVis = gv.value.trim();

    partidos[i].gLocal = valorLocal === "" ? null : parseInt(valorLocal, 10);
    partidos[i].gVis = valorVis === "" ? null : parseInt(valorVis, 10);
  }

  actualizarBotonesJornada();
}

function obtenerClasificacionActual() {
  const tabla = crearTablaBase();

  for (let i = 0; i < partidos.length; i++) {
    const p = partidos[i];
    if (!partidoJugado(p)) continue;
    aplicarPartido(tabla, p.local, p.visitante, p.gLocal, p.gVis);
  }

  const clasificacionBase = Object.values(tabla).sort((a, b) => {
    if (b.PTS !== a.PTS) return b.PTS - a.PTS;
    return a.equipo.localeCompare(b.equipo, "es");
  });

  return ordenarClasificacionConEmpates(clasificacionBase);
}

function renderizarResumenFinal(clasificacion) {
  const contenedor = document.getElementById("partidos");
  if (!contenedor) return;

  const campeon = clasificacion[0];
  const playoff = clasificacion.slice(1, 5);
  const playOut = clasificacion[12];
  const descenso = clasificacion.slice(13);

  function renderEquipoResumen(equipo) {
    return `
      <span class="equipo-resumen">
        <img class="escudo" src="${obtenerEscudo(equipo.equipo)}" alt="${equipo.equipo}">
        <span>${equipo.equipo}</span>
      </span>
    `;
  }

  contenedor.innerHTML = `
    <div class="resumen-final" id="resumen-final-compartir">
      <h3>Resumen final de la liga</h3>

      <div class="linea-resumen">
        <span class="punto-resumen punto-verde"></span>
        <div>
          <strong>Ascendido a 1ª RFEF:</strong>
          ${renderEquipoResumen(campeon)}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-naranja"></span>
        <div>
          <strong>Play-off:</strong>
          ${playoff.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-morado"></span>
        <div>
          <strong>Play-out:</strong>
          ${renderEquipoResumen(playOut)}
        </div>
      </div>

      <div class="linea-resumen">
        <span class="punto-resumen punto-rojo"></span>
        <div>
          <strong>Descienden a 3ª RFEF:</strong>
          ${descenso.map(renderEquipoResumen).join("")}
        </div>
      </div>

      <!-- MENSAJE -->
      <p class="mensaje-final">
        Descarga y envía a Juandi tu pronóstico y a final de temporada comprobará tu acierto.
      </p>

      <!-- BOTÓN -->
      <div class="acciones-final">
        <button onclick="descargarResumenFinal()">Descargar imagen</button>
      </div>
    </div>
  `;
}

function animarCambiosTabla(tbody, posicionesAntes) {
  const filas = tbody.querySelectorAll("tr");

  filas.forEach((fila) => {
    const equipo = fila.dataset.equipo;
    const topAntes = posicionesAntes[equipo];

    if (topAntes === undefined) return;

    const topDespues = fila.getBoundingClientRect().top;
    const deltaY = topAntes - topDespues;

    if (deltaY !== 0) {
      fila.classList.add("fila-animando");
      fila.style.transition = "none";
      fila.style.transform = `translateY(${deltaY}px)`;

      requestAnimationFrame(() => {
        fila.style.transition = "transform 500ms ease";
        fila.style.transform = "translateY(0)";
      });

      fila.addEventListener(
        "transitionend",
        () => {
          fila.classList.remove("fila-animando");
          fila.style.transition = "";
          fila.style.transform = "";
        },
        { once: true }
      );
    }
  });
}

function calcularClasificacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();

  const tbody = document.querySelector("#tabla-clasificacion tbody");

  const posicionesAntes = {};
  const filasActuales = tbody.querySelectorAll("tr");
  filasActuales.forEach((fila) => {
    posicionesAntes[fila.dataset.equipo] = fila.getBoundingClientRect().top;
  });

  tbody.innerHTML = "";

  for (let i = 0; i < clasificacion.length; i++) {
    const e = clasificacion[i];
    const tr = document.createElement("tr");
    tr.dataset.equipo = e.equipo;

    if (i === 0) {
      tr.classList.add("pos-ascenso");
    } else if (i >= 1 && i <= 4) {
      tr.classList.add("pos-playoff");
    } else if (i === 12) {
      tr.classList.add("pos-playout");
    } else if (i >= 13 && i <= 17) {
      tr.classList.add("pos-descenso");
    }

    let flecha = "";
    const posicionBase = posicionesBaseJornada[e.equipo];
    const posicionActual = i + 1;

    if (posicionBase !== undefined) {
      if (posicionActual < posicionBase) {
        flecha = '<span class="flecha-sube">▲</span>';
      } else if (posicionActual > posicionBase) {
        flecha = '<span class="flecha-baja">▼</span>';
      }
    }

    tr.innerHTML =
      `<td>${posicionActual} ${flecha}</td>
       <td>
         <div class="equipo-con-escudo">
           <img class="escudo" src="${obtenerEscudo(e.equipo)}" alt="${e.equipo}">
           <span>${e.equipo}</span>
         </div>
       </td>
       <td class="col-puntos">${e.PTS}</td>
       <td>${e.PJ}</td>
       <td>${e.PG}</td>
       <td>${e.PE}</td>
       <td>${e.PP}</td>
       <td>${e.GF}</td>
       <td>${e.GC}</td>
       <td>${e.GF - e.GC}</td>`;

    tbody.appendChild(tr);
  }

  requestAnimationFrame(() => {
    animarCambiosTabla(tbody, posicionesAntes);
  });

  const jugados = partidos.filter(partidoJugado).length;
  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Clasificación actualizada. Partidos contabilizados: " + jugados;
  }
}

function actualizarBotonesJornada() {
  construirListaJornadas();

  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");

  if (!btnAnterior || !btnSiguiente) return;

  if (simulacionFinalizada) {
    btnAnterior.disabled = false;
    btnAnterior.style.display = "";
    btnSiguiente.style.display = "none";
    return;
  }

  const indice = jornadasDisponibles.indexOf(jornadaActual);
  const ultimaJornada = jornadasDisponibles[jornadasDisponibles.length - 1];
  const estamosEnUltima = jornadaActual === ultimaJornada;
  const jornadaActualCompleta = jornadaCompleta(jornadaActual);

  btnAnterior.style.display = "";
  btnSiguiente.style.display = "";

  btnAnterior.disabled = indice <= 0;

  if (estamosEnUltima) {
    btnSiguiente.textContent = "Finalizar";
    btnSiguiente.disabled = !jornadaActualCompleta;
  } else {
    btnSiguiente.textContent = "→";
    btnSiguiente.disabled = indice === -1 || indice >= jornadasDisponibles.length - 1;
  }
}

function irAJornadaAnterior() {
  construirListaJornadas();

  const btnSiguiente = document.getElementById("btn-siguiente");
  const botonCalcular = document.getElementById("calcular");

  // Si estamos en la pantalla final, volver a la última jornada
  if (simulacionFinalizada) {
    simulacionFinalizada = false;

    jornadaActual = jornadasDisponibles[jornadasDisponibles.length - 1];

    if (btnSiguiente) {
      btnSiguiente.style.display = "";
      btnSiguiente.textContent = "→";
    }

    if (botonCalcular) {
      botonCalcular.style.display = "";
    }

    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
    return;
  }

  const indice = jornadasDisponibles.indexOf(jornadaActual);

  if (indice > 0) {
    jornadaActual = jornadasDisponibles[indice - 1];
    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
  }
}

function finalizarSimulacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();
  simulacionFinalizada = true;

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.style.display = "none";
  }

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Resumen final";
  }

  const botonCalcular = document.getElementById("calcular");
  if (botonCalcular) {
    botonCalcular.style.display = "none";
  }

  renderizarResumenFinal(clasificacion);
  calcularClasificacion();

  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Simulación finalizada.";
  }
}

function finalizarSimulacion() {
  leerResultados();

  const clasificacion = obtenerClasificacionActual();
  simulacionFinalizada = true;

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.style.display = "none";
  }

  const titulo = document.getElementById("titulo-jornada");
  if (titulo) {
    titulo.textContent = "Resumen final";
  }

  const botonCalcular = document.getElementById("calcular");
  if (botonCalcular) {
    botonCalcular.style.display = "none";
  }

  renderizarResumenFinal(clasificacion);
  calcularClasificacion();

  const estado = document.getElementById("estado");
  if (estado) {
    estado.textContent = "Simulación finalizada.";
  }

  actualizarBotonesJornada();
}

function irAJornadaSiguiente() {
  construirListaJornadas();

  if (simulacionFinalizada) return;

  const indice = jornadasDisponibles.indexOf(jornadaActual);
  const esUltimaJornada = indice === jornadasDisponibles.length - 1;
  const ultimaJornadaCompleta = jornadaCompleta(jornadaActual);

  if (esUltimaJornada && ultimaJornadaCompleta) {
    finalizarSimulacion();
    return;
  }

  if (indice !== -1 && indice < jornadasDisponibles.length - 1) {
    jornadaActual = jornadasDisponibles[indice + 1];
    reiniciarReferenciaJornada();
    mostrarPartidos();
    calcularClasificacion();
  }
}

function obtenerEscudo(equipo) {
  return escudos[equipo] || "";
}

window.onload = function () {
  jornadaActual = obtenerPrimeraJornadaPendiente();
  reiniciarReferenciaJornada();
  mostrarPartidos();
  calcularClasificacion();

  const boton = document.getElementById("calcular");
  if (boton) {
    boton.addEventListener("click", calcularClasificacion);
  }

  const btnAnterior = document.getElementById("btn-anterior");
  if (btnAnterior) {
    btnAnterior.addEventListener("click", irAJornadaAnterior);
  }

  const btnSiguiente = document.getElementById("btn-siguiente");
  if (btnSiguiente) {
    btnSiguiente.addEventListener("click", irAJornadaSiguiente);
  }
};

function descargarResumenFinal() {
  const clasificacion = document.getElementById("clasificacion-compartir");

  if (!clasificacion) {
    alert("No se ha encontrado la clasificación.");
    return;
  }

  if (typeof html2canvas === "undefined") {
    alert("html2canvas no está cargado.");
    return;
  }

  html2canvas(clasificacion, {
    backgroundColor: "#ffffff",
    scale: 2,
    useCORS: true
  }).then((canvas) => {
    const enlace = document.createElement("a");
    enlace.href = canvas.toDataURL("image/png");
    enlace.download = "clasificacion-final-2rfef-grupo1.png";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  }).catch((error) => {
    console.error("Error al generar la imagen:", error);
    alert("Error al generar la imagen.");
  });
}