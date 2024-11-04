function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    console.log(a)
    a = 2024

    if ((a % 400 == 0) || ((a % 4 == 0) && (a % 100 != 0))) {
        result = " Год является високосным"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = " Год не является високосным"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsById('result')[0].value = result;
        check = false;
    }
    function getCentury(a = 2024) {
        if (a <= 0) {
            return 'Год должен быть положительным';
        }

        century = Math.floor(a / 100);
        return a % 100 > 0 ? century + 1 : century;
    }

    //console.log(getCentury(a))
    century = getCentury(a)
    document.getElementsById('century')[0].value = century;
}

function send() {
    if (check) {

        document.getElementsById('century')[0].value = century;
      
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}
    



function verify_send() {
    verify();
    getCentury
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("a");



const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)


    const nameElement = document.getElementById("century");
    nameElement.addEventListener("click", function () {
        nameElement.textContent = "21";
    });
