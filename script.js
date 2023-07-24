let celcius = document.querySelector('.celcius > input');
let fahrenheit = document.querySelector('.fahrenheit > input');
let kelvin = document.querySelector('.kelvin > input');
let btn = document.querySelector('.btn button')

function roundNumber(number)
{
    return Math.round(number*100)/100
}

/*Celcius to Fahrenheit and Kelvin*/
celcius.addEventListener('input', function()
{
    let cel = parseFloat(celcius.value)
    let fah = (cel*(9/5)) + 32
    let kel = cel + 273.15

    fahrenheit.value = roundNumber(fah)
    kelvin.value = roundNumber(kel)
})

/*Fahrenheit to Celcius and Kelvin*/
fahrenheit.addEventListener('input', function()
{
    let fah = parseFloat(fahrenheit.value)
    let cel = (fah - 32) * (5/9)
    let kel = (fah - 32) * (5/9) + 273.15

    celcius.value = roundNumber(cel)
    kelvin.value = roundNumber(kel)
})

/*Kelvin to Celcius and Fahrenheit*/
kelvin.addEventListener('input', function()
{
    let kel = parseFloat(kelvin.value)
    let cel = kel - 273.15
    let fah = (kel - 273.15) * (9/5) + 32

    celcius.value = roundNumber(cel)
    fahrenheit.value = roundNumber(fah)
})

btn.addEventListener('click', ()=>
{
    celcius.value = ""
    fahrenheit.value = ""
    kelvin.value = ""
})