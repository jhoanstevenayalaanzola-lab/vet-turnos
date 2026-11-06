//abstraccion de la logica del ejercicio para registrar mascotas
class Mascota {
  constructor(nombre, peso) {
    if (new.target === Mascota) {
      throw new TypeError(
        "No se puede instanciar la clase Mascota directamente",
      );
    }
    this.nombre = nombre;
    this.peso = peso;
  }
  //contrato
  hacerSonido() {
    throw new Error( `${this.constructor.name} debe implementar el metodo hacerSonido`,);
  }
}

//seccion para definir clases especificas de mascotas que heredan de la clase Mascota
class Perro extends Mascota {
  hacerSonido() {
    return "Guau Guau";
  }
}

class Gato extends Mascota {
  hacerSonido() {
    return "Miau Miau";
  }
}

//Conexion con la pagina de index.
const pacientes = [];
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");

function mostrar(tipo, texto) {
  mensaje.className = tipo;
  mensaje.textContent = texto;
}

function dibujar(){
  lista.innerHTML = "";
  for (const m of pacientes) {
    const li = document.createElement("li");
    li.className = "paciente";
    li.textContent = `${m.nombre} - ${m.peso} kg `;
    const detalle = document.createElement("small");
    detalle.textContent = m.hacerSonido();
    li.appendChild(detalle);
    lista.appendChild(li);
  }
}

// Aqui se consolida  la logica del ejercicio  para registrar mascotas
document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault(); //evitar que la pagina se recargue al enviar el formulario
  const tipo = document.getElementById("tipo").value;
  const nombre = document.getElementById("nombre").value;
  const peso = Number(document.getElementById("peso").value);

  const mascota = tipo === "perro" ? new Perro(nombre, peso) : new Gato(nombre, peso);

  pacientes.push(mascota);

  dibujar();

  mostrar("ok", `mascota ${nombre} registrada correctamente`);
});
