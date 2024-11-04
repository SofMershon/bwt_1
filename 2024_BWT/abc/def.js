function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    console.log(a)

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

function verify_getCentury_send() {
    verify();
    getCentury();
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