const names = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const age = document.querySelector("#age");
const group = document.querySelector("#group");

const btn = document.querySelector(".btnInicio");

const divTable = document.querySelector("#divTable");
const table = document.createElement("table");
table.setAttribute("border", "1")
divTable.appendChild(table);

const titulos = ["Nombre", "Apellido", "Edad", "Grupo", ""];
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
    btnEliminar.append("Eliminar");
    btnEditar.append("Editar");
    
    if (nombre != "" && apellido != "" && edad != null && grupo != "Elegir grupo" && grupo != "") {
        const info = [nombre, apellido, edad, grupo, btnEditar, btnEliminar];
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

        table.appendChild(infoRow);
        titulosRow.classList.remove("hidden");
    
        btnEditar.addEventListener("click", () => {
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
            table.removeChild(infoRow)

            if (table.childElementCount < 2) {
                titulosRow.classList.add("hidden");
            }
        })

        clearInputs();
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
