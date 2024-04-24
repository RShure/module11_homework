let x = prompt('введите число', '')
let n = prompt('укажите степень', '')

if (n < 0) {
    alert('степень должна быть больше нуля')
}

function pow(x, n) {
    return x ** n;
}

let result = x ** n
alert(result)
pow(x, n);