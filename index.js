let a1
let b1
let c1
let end
while (true) {
    const a = +prompt('Введите первое число') //-1000 - 1000
    if (a < -1000 || a > 1000) {
        console.log("Неверный ввод")
    }
    else{
        a1 = a
        break
    }
}
console.log(a1)
while(true)
{
    const b = prompt('Введите знак') // + -
    if (b == "+" || b == "-") {
        b1 = b
        break
    }
    else{
        console.log("Неверный ввод")
    }
}
console.log(b1)
while(true)
{
    const c = +prompt('Введите второе число')
    if (c < -1000 || c > 1000) {
        console.log("Неверный ввод")
    }
    else{
        c1 = c
        break
    }
}
console.log(c1)
if (b1 == "+") {
    end = a1 + c1
}
else {
    end = a1 - c1
}
console.log(end)