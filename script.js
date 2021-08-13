// ------расчет курсы валют-----------
const valueList = document.querySelector('.value-list')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const sum = document.querySelector('.sum')
const valIcon = document.querySelector('.val-icon')


btn.addEventListener('click', () => {
    fetch('https://api.exchangerate.host/latest?base=KGS')
        .then(res => res.json())
        .then(data => {
            sum.value = (input.value * data.rates[valueList.value]).toFixed()
            //
        })

    const icon = {
        EUR: '€',
        USD: '$',
        RUB: '₽'
    }
    valIcon.innerText = icon[valueList.value]
})