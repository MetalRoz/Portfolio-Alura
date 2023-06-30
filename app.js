let educacion = [
    {
        imagen: "https://th.bing.com/th/id/R.d94d63f8317a2cee8c627c3791f5cfcb?rik=T%2f6BLk4YINJJmA&pid=ImgRaw&r=0",
        institucion: "UTEL - Universidad",
        carrera: "Ingeniería en Sistemas",
        fecha: "2023 - En Curso"
    },
    {
        imagen: "https://th.bing.com/th/id/R.1633e4f6462c8c38a7bfe34a45d2919a?rik=FxH5w1856JDdDw&pid=ImgRaw&r=0",
        institucion: "Alura - Oracle",
        carrera: "Desarrollador Front-End",
        fecha: "2023 - En Curso"
    },
    {
        imagen: "https://www.tecnoschool.com.ar/img/slider/programacion-web.jpg",
        institucion: "Argentina Programa",
        carrera: "Desarrollador Full Stack Jr",
        fecha: "2022 - 2023"
    }
]
let proyectos = [
    {
        imagen: "img/anime2sis.PNG",
        nombre: "Anime2sis.com",
        descripcion: "Desarrollé esta página utilizando WordPress. Fue un proyecto personal para ver anime de manera online y sin publicidad."
    },
    {
        imagen: "img/encriptar.PNG",
        nombre: "Encriptador de Textos",
        descripcion: "Realicé este encriptador y desencriptador de textos utilizando HTML, CSS Y JAVASCRIPT. Este mismo fue un proyecto de Desarrollador Front-End de ONE - ORACLE."
    },
    {
        imagen: "img/ventas.PNG",
        nombre: "Ventas | Marketing<",
        descripcion: "Desarrollé esta página utilizando HTML Y CSS. Fue un proyecto personal para ofrecer servicios respecto a los negocios en linea."
    },
    {
        imagen: "img/odontologia.PNG",
        nombre: "Clinica Odontologica",
        descripcion: "Desarrollé esta página utilizando HTML Y CSS. Fue un proyecto personal para ofrecer servicios respecto a la salud dental."
    }
]


for (let i = 0; i < educacion.length; i++) {
    const element = educacion[i];
    
    let educations = document.getElementById("educations")

    educations.innerHTML += `
    <span class="place-education">${element.institucion}</span>
    <h4>${element.carrera}</h4>
    <p>${element.fecha}</p>
    <img src="${element.imagen}">
    `
}

for (let i = 0; i < proyectos.length; i++) {
    const element = proyectos[i];

    let projects = document.getElementById("projects")

    projects.innerHTML += `
    <img src="${element.imagen}">
    <h4>${element.nombre}</h4>
    <p>${element.descripcion}</p>
    `

}