fetch("./alumnos.json")
  .then((response) => response.json())
  .then((data) => bootcampData(data))
  .catch((error) => console.log(error));

let bootcampData = (data) => {
  console.log(data);
  pintaDatos(data.integrantes);
};

let pintaDatos = (datos) => {
  let bootcampMembers = document.getElementById("BootcampMembers");
  let cumpleaños = document.getElementById("cumpleaños");
  for (int of datos) {
    console.log(
      `Nombre: ${int.nombre} Apellido: ${int.apellido} Edad: ${int.edad} Cumpleaños: ${int.cumpleaños}`
    );
    bootcampMembers.innerHTML += `Nombre: ${int.nombre}.  Apellido: ${int.apellido}.  Edad: ${int.edad}.  Cumpleaños: ${int.cumpleaños}.<br>`;
    cumpleaños.innerHTML += `${int.nombre} cumpleaños: ${int.cumpleaños}<br>`;
  }
};
