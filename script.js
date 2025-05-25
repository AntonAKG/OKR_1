// Функція діалогу з користувачем
function userDialog() {
    alert("Привіт! Ласкаво просимо на сайт.");

    let name = prompt("Як тебе звати?");
    let confirmAction = confirm("Хочеш побачити привітання ще раз?");

    if (confirmAction) {
        alert("Привіт ще раз, " + name + "!");
    } else {
        alert("Гаразд, йдемо далі!");
    }

    for (let i = 0; i < 2; i++) {
        alert(`Це повідомлення номер ${i + 1}`);
    }
}

userDialog();

// Функція з параметрами (один — за замовчуванням)
function developerInfo(lastName, firstName, position = "Front-end Developer") {
    alert(`Розробник: ${lastName} ${firstName}, посада: ${position}`);
}

developerInfo("Sydorchuk", "Anton");

// Функція порівняння рядків
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакової довжини");
    }
}

compareStrings("JavaScript", "HTML");
