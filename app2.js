
let persona = {
    
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    ciudad : "Buenos Aires"
}

const infoPersona = document.getElementById("infoPersona")

const personaHTML = ` 
 <p>nombre: ${persona.nombre}</p>
 <p>apellido: ${persona.apellido}</p>
 <p>edad: ${persona.edad}</p>
 <p>ciudad: ${persona.ciudad}</p>
 `

 infoPersona.innerHTML = personaHTML;