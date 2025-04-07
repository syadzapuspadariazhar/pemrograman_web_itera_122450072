document.addEventListener("DOMContentLoaded", function() {
    loadTodos();
});

// To-Do List Functions
function addTodo() {
    let input = document.getElementById("todo-input");
    let task = input.value.trim();
    if (task === "") return;

    let list = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="completeTask(this)">✔</button> <button onclick="deleteTask(this)">❌</button>`;
    list.appendChild(li);
    
    saveTodos();
    input.value = "";
}

function completeTask(button) {
    let li = button.parentElement;
    li.style.textDecoration = "line-through";
    saveTodos();
}

function deleteTask(button) {
    let li = button.parentElement;
    li.remove();
    saveTodos();
}

function saveTodos() {
    let list = document.getElementById("todo-list").innerHTML;
    localStorage.setItem("todos", list);
}

function loadTodos() {
    let list = document.getElementById("todo-list");
    list.innerHTML = localStorage.getItem("todos") || "";
}

// Kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        case "modul":
            hasil = angka1 % angka2;
            break;
        case "pangkat":
            hasil = Math.pow(angka1, angka2);
            break;
        case "akar":
            if (angka1 <= 0) {
                return "Error: Akar negatif tidak diperbolehkan";
            }
            if (angka2 == 0) {
                return "Error: Akar dengan pangkat nol tidak diperbolehkan";
            }
            hasil = Math.pow(angka1, 1 / angka2);
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

document.getElementById("btn-tambah").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "tambah");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kurang");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-kali").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kali");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "bagi");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-mod").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "modul");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} % ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-pangkat").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "pangkat");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ^ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-akar").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2) || angka2 <= 0) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid dan angka pangkat harus lebih dari 0!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "akar");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: (${angka1})^(1/${angka2}) = ${hasil}</p>`;
    }
});

// Form Validation
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = "";
    
    if (name.length < 3) {
        message += "Nama harus lebih dari 3 karakter. "
    };

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message += "Email tidak valid. "
    };

    if (password.length < 8) {
        message += "Password harus minimal 8 karakter. "
    };
    
    document.getElementById("form-message").textContent = message;
    return message === "";
}