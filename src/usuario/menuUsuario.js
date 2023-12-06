import { LitElement, html, css } from "lit-element";
import index_styles from "../index_styles";

export class usuario extends LitElement {

    static get styles() {

        return [index_styles]
        
      }

    constructor() {
  
        super();
    
        this.info = "";
    
        this.mascota_especifica = 0;
  
        this.contador_id_mascota = 0;
    
        this.mascotas = [
    
          { 
              id : 0,
              nombre : "david jose gonzales", 
              edad : 24, 
              especie : "perro_hpta", 
              raza : "perro_hpta_bandido", 
              peso : 79, 
              imagen : "https://delangelclinicaveterinaria.com/wp-content/uploads/2021/06/perros.png",
              enfermedad_terminal : "no", 
              enfermedad_cardiovascular : "no", 
              enfermedad_osea : "no", 
              enfermedad_respiratoria : "asma", 
              enfermedad_genetica : "no",
              enfermedad_digestiva : "no",
              enfermedad_cerebral : "no",
              enfermedad_sensorial : "no",
              mutilacion : "no",
              maltrato : "no",
          
          }
      
      ];
    
      }

      insertar_mascota () {
  
        let nombre_mascota = this.shadowRoot.getElementById("nombre").value;
        let edad_mascota = this.shadowRoot.getElementById("edad").value;
        let especie_mascota = this.shadowRoot.getElementById("especie").value;
        let raza_mascota = this.shadowRoot.getElementById("raza").value;
        let peso_mascota = this.shadowRoot.getElementById("peso").value;
        let enfermedad_terminal = this.shadowRoot.getElementById("enfermedad_terminal").value;
        let enfermedad_cardiovascular = this.shadowRoot.getElementById("enfermedad_cardiovascular").value;
        let enfermedad_osea = this.shadowRoot.getElementById("enfermedad_osea").value;
        let enfermedad_respiratoria = this.shadowRoot.getElementById("enfermedad_respiratoria").value;
        let enfermedad_genetica = this.shadowRoot.getElementById("enfermedad_genetica").value;
        let enfermedad_digestiva = this.shadowRoot.getElementById("enfermedad_digestiva").value;
        let enfermedad_cerebral = this.shadowRoot.getElementById("enfermedad_cerebral").value;
        let enfermedad_sensorial = this.shadowRoot.getElementById("enfermedad_sensorial").value;
        let mutilacion = this.shadowRoot.getElementById("mutilacion").value;
        let maltrato = this.shadowRoot.getElementById("maltrato").value;
        let inputImagen = this.shadowRoot.getElementById("imagen").value;
    
        if (inputImagen.files.length > 0) {

            let imagenFile = inputImagen.files[0];
            
            // Convertir la imagen a una URL de datos (data URL)
            let reader = new FileReader();

            reader.onload = (e) => {

                let imagenDataURL = e.target.result;

                reader.readAsDataURL(imagenFile);
            
            };
    
                let nuevaMascota = {

                    id: this.mascotas.length,  // Asignar un nuevo ID
                    nombre: nombre_mascota,
                    edad: edad_mascota,
                    especie: especie_mascota,
                    raza: raza_mascota,
                    peso: peso_mascota,
                    imagen: imagenDataURL,  // Almacenar la URL de datos en lugar del nombre de archivo
                    enfermedad_terminal: enfermedad_terminal,
                    enfermedad_cardiovascular: enfermedad_cardiovascular,
                    enfermedad_osea: enfermedad_osea,
                    enfermedad_respiratoria: enfermedad_respiratoria,
                    enfermedad_genetica: enfermedad_genetica,
                    enfermedad_digestiva: enfermedad_digestiva,
                    enfermedad_cerebral: enfermedad_cerebral,
                    enfermedad_sensorial: enfermedad_sensorial,
                    mutilacion: mutilacion,
                    maltrato: maltrato
                };
    
                // Agregar la nueva mascota al array
                this.mascotas.push(nuevaMascota);
    
                // Limpiar los campos del formulario
                nombre_mascota.value = "";
                edad_mascota.value = "";
                especie_mascota.value = "";
                raza_mascota.value = "";
                peso_mascota.value = "";
                imagenInput.value = "";  // Limpiar el input de tipo file
                enfermedad_terminal.value = "";
                enfermedad_cardiovascular.value = "";
                enfermedad_osea.value = "";
                enfermedad_respiratoria.value = "";
                enfermedad_genetica.value = "";
                enfermedad_digestiva.value = "";
                enfermedad_cerebral.value = "";
                enfermedad_sensorial.value = "";
                mutilacion.value = "";
                maltrato.value = "";
    
                // Puedes actualizar tu vista o hacer cualquier otro procesamiento necesario
                this.mascotasCard(2);
            
        };

    }

    adoptar_mascota (id_mascota) {

        let mascotaAdoptada = this.mascotas[id_mascota];

        alert(`¡Has adoptado a ${mascotaAdoptada.nombre}!\n\nDetalles:\nID: ${mascotaAdoptada.id}\nNombre: ${mascotaAdoptada.nombre}\nEdad: ${mascotaAdoptada.edad}\nEspecie: ${mascotaAdoptada.especie}\nRaza: ${mascotaAdoptada.raza}\nPeso: ${mascotaAdoptada.peso}`);
        
        this.mascotas.splice(id_mascota, 1);
    
        this.requestUpdate();

    }
    
        update_mascota(id_mascota_recibido) {

            let id_mascota =  parseInt(id_mascota_recibido, 10)
    
          let nombre_mascota = this.shadowRoot.getElementById("nombre").value;
          let edad_mascota = this.shadowRoot.getElementById("edad").value;
          let especie_mascota = this.shadowRoot.getElementById("especie").value;
          let raza_mascota = this.shadowRoot.getElementById("raza").value;
          let peso_mascota = this.shadowRoot.getElementById("peso").value;
          let enfermedad_terminal = this.shadowRoot.getElementById("enfermedad_terminal").value;
          let enfermedad_cardiovascular = this.shadowRoot.getElementById("enfermedad_cardiovascular").value;
          let enfermedad_osea = this.shadowRoot.getElementById("enfermedad_osea").value;
          let enfermedad_respiratoria = this.shadowRoot.getElementById("enfermedad_respiratoria").value;
          let enfermedad_genetica = this.shadowRoot.getElementById("enfermedad_genetica").value;
          let enfermedad_digestiva = this.shadowRoot.getElementById("enfermedad_digestiva").value;
          let enfermedad_cerebral = this.shadowRoot.getElementById("enfermedad_cerebral").value;
          let enfermedad_sensorial = this.shadowRoot.getElementById("enfermedad_sensorial").value;
          let mutilacion = this.shadowRoot.getElementById("mutilacion").value;
          let maltrato = this.shadowRoot.getElementById("maltrato").value;
        
          this.mascotas[id_mascota].nombre = nombre_mascota;
          this.mascotas[id_mascota].edad = edad_mascota;
          this.mascotas[id_mascota].especie = especie_mascota;
          this.mascotas[id_mascota].raza = raza_mascota;
          this.mascotas[id_mascota].peso = peso_mascota;
          this.mascotas[id_mascota].enfermedad_terminal = enfermedad_terminal;
          this.mascotas[id_mascota].enfermedad_cardiovascular = enfermedad_cardiovascular;
          this.mascotas[id_mascota].enfermedad_osea = enfermedad_osea;
          this.mascotas[id_mascota].enfermedad_respiratoria = enfermedad_respiratoria;
          this.mascotas[id_mascota].enfermedad_genetica = enfermedad_genetica;
          this.mascotas[id_mascota].enfermedad_digestiva = enfermedad_digestiva;
          this.mascotas[id_mascota].enfermedad_cerebral = enfermedad_cerebral;
          this.mascotas[id_mascota].enfermedad_sensorial = enfermedad_sensorial;
          this.mascotas[id_mascota].mutilacion = mutilacion;
          this.mascotas[id_mascota].maltrato = maltrato;
                
          this.mascotasCard(2);
    
        }
    
        eliminar_mascota (id_mascota) {
    
          this.mascotas.splice(id_mascota, 1);
    
        this.requestUpdate();
          
        }

      connectedCallback() {
  
        super.connectedCallback();
        // Llama a la función informacion(0) cuando el componente se conecta al DOM.
        this.bienvenido(0);
    
      }

      bienvenido(y) {
  
        if (y === 0) {
    
          this.info = html ` 
    
            <div class='bg-color-dark  d-flex flex-column m-3 cont1'>
              <div class='cont2  rounded d-flex justify-content-center align-items-center flex-column'>
                <h1 class='color'>Bienvenido Usuario...</h1>
              </div>
                <img class='img rounded' src='https://www.eltiempo.com/files/article_main_1200/uploads/2019/12/13/5df4525ec3073.jpeg'>
            </div>
            </div>
    
            `;
    
          this.requestUpdate();
    
        }
    
      }

      mascotasCard(y) {
        if (y === 2) {
          this.info = html `
            
            <div class="color1 d-flex justify-content-center align-items-center">
              <div class="content2 rounded">
                <div class="m-3">
                  <div class="container text-center">
                    <div class="row">
                      <div class="col">
                        <button @click="${(e) => this.registro_mascota(4)}" type="button" class="btn btn-primary">Registrar</button>
                      </div>
                      <div class="col"></div>
                    </div>
                  </div>
      
                  ${this.mascotas.map(
    
                    (mascota) => html`
                      <div class="card" style="width: 18rem">
                        <img src="${mascota.imagen}" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title">${mascota.nombre}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">especie: ${mascota.especie}</li>
                          <li class="list-group-item">raza: ${mascota.raza}</li>
                          <li class="list-group-item">peso: ${mascota.peso}</li>
                          <li class="list-group-item">edad: ${mascota.edad}</li>
                        </ul>
                        <div class="card-body">
                        <button @click="${(e) => this.actualizar_mascota(5, mascota.id)}" type="button" class="btn btn-primary"> Actualizar </button>
                          <button @click="${(e) => this.eliminar_mascota(mascota.id)}" type="button" class="btn btn-primary"> Eliminar </button>
                          <button @click="${(e) => this.adoptar_mascota(mascota.id)}" type="button" class="btn btn-primary"> adoptar </button>
                        </div>
                      </div>
                    `
                  )}
                  
                </div>
              </div>
            </div>
    
          ` ;
    
          this.requestUpdate();
    
        }
    
      }

      registro_mascota(y) {
  
        if (y === 4) {
    
          this.info = html `
    
    <div>
        <h1 class="mr-3 font">VAMO A REGISTRAR UNA MASCOTA</h1>
        <br /><br />
        <label class="font" id="nombre">nombre</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="edad">edad</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="peso">peso</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="number" />
        <br /><br />
        <label class="font" id="especie">especie</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br />
        <br />
        <label class="font" id="raza">raza</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="enfermedad_terminal"
          >enfermedad_terminal</label
        >
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="enfermedad_cardiovascular"
          >enfermedad_cardiovascular</label
        >
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="enfermedad_osea">enfermedad_osea</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="enfermedad_respiratoria"
          >enfermedad_respiratoria</label
        >
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="enfermedad_genetica"
          >enfermedad_genetica</label
        >
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="enfermedad_digestiva"
          >enfermedad_digestiva</label
        >
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="enfermedad_cerebral"
          >enfermedad_cerebral</label
        >
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="enfermedad_sensorial"
          >enfermedad_sensorial</label
        >
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="mutilacion">mutilacion</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="maltrato">maltrato</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="text" />
        <br /><br />
        <label class="font" id="imagen">imagen de la mascota</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="file" />
        <br /><br />
    
        <button class="btn btn-dark d-flex m-1 font" @click="${(e) => this.insertar_mascota()}">Registrar<i class="fas fa-plus fa-beat-fade"></i></button>
      </div>
    
            
          ` ;
    
          this.requestUpdate();
    
        }
    
      }
    
      actualizar_mascota(y, id_mascota) {

        this.mascota_especifica = parseInt(id_mascota, 10);

        console.log(id_mascota);
            
        if (y === 5) {
    
          this.info = html `
    
            <div>      
        <h1 class="mr-3 font">VAMO A ACTUALIZAR A ${this.mascotas[this.mascota_especifica].nombre.toUpperCase()}</h1>
        <br /><br />
        <label class="font" id="nombre">nombre</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="nombre" type="text" .value = "${this.mascotas[this.mascota_especifica].nombre}"/>
        <br /><br />
        <label class="font" id="edad">edad</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="edad" type="text" .value = "${this.mascotas[this.mascota_especifica].edad}"/>
        <br /><br />
        <label class="font" id="peso">peso</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="peso" type="number" .value = "${this.mascotas[this.mascota_especifica].peso}"/>
        <br /><br />
        <label class="font" id="especie">especie</label>
        <br />
        <input class="w-100 rounded  bg-none border" type="text" id="especie" .value = "${this.mascotas[this.mascota_especifica].especie}"/>
        <br />
        <br />
        <label class="font" id="raza">raza</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="raza" type="text" .value = "${this.mascotas[this.mascota_especifica].raza}"/>
        <br /><br />
        <label class="font" id="enfermedad_terminal">enfermedad_terminal</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="enfermedad_terminal" type="text" .value = "${this.mascotas[this.mascota_especifica].enfermedad_terminal}"/>
        <br /><br />
        <label class="font" id="enfermedad_cardiovascular">enfermedad_cardiovascular</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="enfermedad_cardiovascular" type="text" .value = "${this.mascotas[this.mascota_especifica].enfermedad_cardiovascular}"/>
        <br /><br />
        <label class="font" id="enfermedad_osea">enfermedad_osea</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="enfermedad_osea" type="text" .value = "${this.mascotas[this.mascota_especifica].enfermedad_osea}"/>
        <br /><br />
        <label class="font" id="enfermedad respiratoria">enfermedad_respiratoria</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="enfermedad_respiratoria" type="text" .value = "${this.mascotas[this.mascota_especifica].enfermedad_respiratoria}"/>
        <br /><br />
        <label class="font" id="enfermedad_genetica">enfermedad_genetica</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="enfermedad_genetica" type="text" .value = "${this.mascotas[this.mascota_especifica].enfermedad_genetica}"/>
        <br /><br />
        <label class="font" id="enfermedad_digestiva">enfermedad_digestiva</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="enfermedad_digestiva" type="text" .value = "${this.mascotas[this.mascota_especifica].enfermedad_digestiva}"/>
        <br /><br />
        <label class="font" id="enfermedad_cerebral">enfermedad_cerebral</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="enfermedad_cerebral" type="text" .value = "${this.mascotas[this.mascota_especifica].enfermedad_cerebral}"/>
        <br /><br />
        <label class="font" id="enfermedad_sensorial">enfermedad_sensorial</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="enfermedad_sensorial" type="text" .value = "${this.mascotas[this.mascota_especifica].enfermedad_sensorial}"/>
        <br /><br />
        <label class="font" id="mutilacion">mutilacion</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="mutilacion" type="text" .value = "${this.mascotas[this.mascota_especifica].mutilacion}"/>
        <br /><br />
        <label class="font" id="maltrato">maltrato</label>
        <br />
        <input class="w-100 rounded  bg-none border" id="maltrato" type="text" .value = "${this.mascotas[this.mascota_especifica].maltrato}"/>
        <br /><br />
        <button class="btn btn-dark d-flex m-1 font" @click="${() => this.update_mascota(this.mascota_especifica)}">Actualizar<i class="fas fa-plus fa-beat-fade"></i></button>
      </div>
    
          ` ;
    
          this.requestUpdate();
    
        }
    
      }

    render() {
  
        return html `
    
          <style>
            @import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css");
            @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
          </style>
          <div class="d-flex vw-100 vh-100 font">
          <div class="bg-dark  rounded w-15  m-3 border-20 p-3">
          <div class="bg-color-secondary">
          <button @click="${(e) => this.bienvenido(0)}" class="w-100 mt-5 p-2 border buton rounded border-10">
              <i class="fas fa-user"></i> Inicio
            </button>
            <button @click="${(e) => this.mascotasCard(2)}" class="w-100 mt-5  border buton p-2 rounded border-10">
              <i class="fa-solid fa-paw"></i> Mascotas
            </button>
          </div>
        </div>
            <div class="mt-3 mb-2 m-3" style="border: 1px solid #ccc; padding: 10px;">
                    <div class="bg-color-secondary1 d-flex justify-content-center  align-items-center h-100">
                        <div class="border-dark col w-50">
    
                        ${this.info}
                        
                        </div>
                    </div>
                </div>
          </div>
    
        ` ;
      }

}

customElements.define('usuario-element', usuario)