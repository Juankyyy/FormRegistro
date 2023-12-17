const names = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const age = document.querySelector("#age");
const group = document.querySelector("#group");

const btn = document.querySelector(".btnInicio");

const divTable = document.querySelector("#divTable");
const table = document.createElement("table");
table.setAttribute("border", "1")
divTable.appendChild(table);

const titulos = ["Nombre", "Apellido", "Edad", "Grupo Etario", "Grupo", "Editar", "Eliminar"];
const titulosRow = document.createElement("tr");
titulosRow.classList.add("hidden");

titulos.forEach((titulo) => {
    const th = document.createElement("th");
    th.textContent = titulo;
    titulosRow.appendChild(th);
})
table.appendChild(titulosRow);



btn.addEventListener("click", () => {
    const nombre = names.value;
    const apellido = lastName.value;
    const edad = age.value;
    const grupo = group.value;

    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");
    btnEliminar.id = "btnTable";
    btnEliminar.className = "btnDelete"
    btnEditar.id = "btnTable";
    btnEditar.className = "btnEdit"
    btnEliminar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#ffffff" d="M7 21q-.825 0-1.413-.588T5 19V6q-.425 0-.713-.288T4 5q0-.425.288-.713T5 4h4q0-.425.288-.713T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5q0 .425-.288.713T19 6v13q0 .825-.588 1.413T17 21H7Zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.713T10 8q-.425 0-.713.288T9 9v7q0 .425.288.713T10 17Zm4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.713T14 8q-.425 0-.713.288T13 9v7q0 .425.288.713T14 17Z"/></svg>`;
    btnEditar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#ffffff"><path d="m5.433 13.917l1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"/><path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"/></g></svg>`;

    
    if (nombre != "" && apellido != "" && edad != null && grupo != "Elegir grupo" && grupo != "") {
        if (edad >= 0 && edad <= 115) {

            if (edad >= 0 && edad <= 5) {
                grupoEtario = "Bebé";
            } else if (edad >= 6 && edad <= 11) {
                grupoEtario = "Niñx";
            } else if (edad >= 12 && edad <= 18) {
                grupoEtario = "Adolescente";
            } else if (edad >= 19 && edad <= 26) {
                grupoEtario = "Joven";
            } else if (edad >= 27 && edad <= 59) {
                grupoEtario = "Adulto";
            } else if (edad >= 60 && edad <= 99) {
                grupoEtario = "Adulto Mayor";
            } else if (edad >= 100 && edad <= 115) {
                grupoEtario = "Con un pie en la tumba";
            };
            
            const info = [nombre, apellido, edad, grupoEtario, grupo, btnEditar, btnEliminar];
            const infoRow = document.createElement("tr");
    
            info.forEach((infoText) => {
                const td = document.createElement("td");
                
                if (infoText == btnEditar || infoText == btnEliminar) {
                    td.appendChild(infoText);
                    infoRow.appendChild(td)
                } else {
                    td.textContent = infoText;
                    infoRow.appendChild(td);
                }
            })
    
            if (grupo == "Jobs") {
                infoRow.style = "background-color: #c93232"
            } else if (grupo == "Ritchie") {
                infoRow.style = "background-color: #00a7d1"
            }  else if (grupo == "Lovelace") {
                infoRow.style = "background-color: #790097"
            }  else if (grupo == "Tesla") {
                infoRow.style = "background-color: #439600"
            }
    
            table.appendChild(infoRow);
            titulosRow.classList.remove("hidden");
        
            btnEditar.addEventListener("click", () => {
                // if (nombre != "" && apellido != "" && edad != null && grupo != "Elegir grupo" && grupo != "") {

                // }
                names.value = nombre;
                lastName.value = apellido;
                age.value = edad;
                group.value = grupo;
    
                table.removeChild(infoRow)
    
                if (table.childElementCount < 2) {
                    titulosRow.classList.add("hidden");
                }
            })
    
            btnEliminar.addEventListener("click", () => {
                const confirmar = confirm(`¿Estás seguro que quieres eliminar a ${nombre} ${apellido}?`)
    
                if (confirmar) {
                    table.removeChild(infoRow)
    
                    if (table.childElementCount < 2) {
                        titulosRow.classList.add("hidden");
                    }
                }
            })
            clearInputs();

        } else {
            alert("Ingresa una edad correcta (0-115)")
        }
    } else {
        alert("Hay algunos datos vacíos :(")
    }

    divTable.appendChild(table);
});


function clearInputs() {
    const inputs = [names, lastName, age, group];
    inputs.forEach((input) => {
        input.value = "";

        if (input == group) {
            input.value = "Elegir grupo";
        }
    })
};

function maxlength(element, max) {
    if (element.value.length > max) {
        element.value = element.value.slice(0, max);
    }
};

const classroom = document.querySelector("#notes");
const form = document.querySelector("#form");

classroom.addEventListener("click", () => {
    location.href = "./Classroom/index.html";
})

form.addEventListener("click", () => {
    location.href = "../index.html";
})