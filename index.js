fetch("./alumnos.json")
  .then((response) => response.json())
  .then((data) => bootcampData(data))
  .catch((error) => console.log(error));

let bootcampData = (data) => {
  //console.log(data);
  for (int of data.integrantes) {
    //---- Muestra en consola los integrantes del bootcamp---------
    console.log(
      `Nombre: ${int.nombre} Apellido: ${int.apellido} Edad: ${int.edad} Cumpleaños: ${int.cumpleaños}`
    );
  } //-------------------------------------------------------------------------------------------
  pintaDatos(data.integrantes); // Llama a la función independiente solo para pintar los datos en el HTML
};

let pintaDatos = (datos) => {
  let bootcampMembers = document.getElementById("BootcampMembers");
  let cumpleaños = document.getElementById("cumpleaños");
  for (int of datos) {
    bootcampMembers.innerHTML += `Nombre: ${int.nombre}.  Apellido: ${int.apellido}.<br>`;
    cumpleaños.innerHTML += `${int.nombre} cumpleaños: ${int.cumpleaños}<br>`;
  }
};
