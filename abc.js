function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    console.log(a)

    if ((a % 400 == 0) || ((a % 4 == 0) && (a % 100 != 0))) {
        result = " Год является високосным"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = " Год не является високосным"
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
    function getCentury(a) {
        if (a <= 0) {
            return 'Год должен быть положительным';
        }

        century = Math.floor(a / 100);
        return a % 100 > 0 ? century + 1 : century;
    }

    //console.log(getCentury(a))
    century = getCentury(a)
    document.getElementsByName('result')[0].value = century;
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('century')[0].value = century;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}
    


function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
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