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

// userDialog();

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

// Призначення обробника через властивість DOM
document.getElementById("ShareBtn").onclick = function() {
    alert("thanks");
};


// Використання addEventListener з кількома обробниками
function firstHandler() {
    console.log("First handler executed.");
}

function secondHandler() {
    console.log("Second handler executed.");
}

var shareButton = document.getElementById("ShareBtn");
shareButton.addEventListener("click", firstHandler);
shareButton.addEventListener("click", secondHandler);

//  Використання об'єкта з методом handleEvent
var bookHandler = {
    handleEvent: function(event) {
        alert("Event handled by bookHandler on element: " + event.currentTarget.tagName);
    }
};

shareButton.addEventListener("click", bookHandler);

// Видалення обробника події
shareButton.removeEventListener("click", secondHandler);

var menu = document.getElementById("menu");

menu.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        var action = event.target.getAttribute("data-action");
        switch (action) {
            case "home":
                window.location.href = "index.html";
                break;
            case "about":
                window.location.href = "about.html";
                break;
            case "books":
                window.location.href = "books.html";
                break;
            case "contact":
                window.location.href = "contact.html";
                break;
        }
    }
});
