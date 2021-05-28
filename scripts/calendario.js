let calendar = document.querySelector('.calendar');
var mesActual = 0;
var anioActual = 0;

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // Obtener el mes y el año del calendario

    mesActual = month + 1;
    anioActual = year;

    // get first day of month

    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')



            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
            if (Math.random() * 10 <= 2) {
                day.classList.add('dia_ocupado')
            }
        }
        calendar_days.appendChild(day)
    }
}

let month_list = calendar.querySelector('.month-list')

month_names.forEach((e, index) => {
    let month = document.createElement('div')
    month.innerHTML = `<div data-month="${index}">${e}</div>`
    month.querySelector('div').onclick = () => {
        month_list.classList.remove('show')
        curr_month.value = index
        generateCalendar(index, curr_year.value)
    }
    month_list.appendChild(month)
})

let month_picker = calendar.querySelector('#month-picker')

month_picker.onclick = () => {
    month_list.classList.add('show')
}

let currDate = new Date()

let curr_month = {
    value: currDate.getMonth()
}
let curr_year = {
    value: currDate.getFullYear()
}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let dark_mode_toggle = document.querySelector('.dark-mode-switch')

dark_mode_toggle.onclick = () => {
    document.getElementById("calendar_container").classList.toggle('light')
    document.getElementById("calendar_container").classList.toggle('dark')
}

//----------------------------------

document.getElementsByClassName("calendar-days")[0].onclick = function (evt) {

    var source = "";
    source = evt.target.innerHTML;

    var dia_mes = source.substr(0, source.indexOf('<'));

    var fechaSeleccionada = anioActual + "-" + mesActual + "-" + dia_mes;

    console.log();

    if (new Date(fechaSeleccionada) <= new Date() || evt.target.classList.contains("dia_ocupado")) {

        var mensaje = "No puedes seleccionar una fecha anterior o igual al día de hoy.\n"
        mensaje = mensaje + "Nuestros monitores necesitan tiempo para prepararse, igual que usted <3";
        mensaje = mensaje + "\n\nTampoco puede elegir un día ya ocupado (los marcados en rojo)"

        alert(mensaje);

    } else {

        document.getElementById("fecha_elegida").innerHTML = dia_mes + " / " + mesActual + " / " + anioActual;
        document.getElementById("fecha").value = new Date(fechaSeleccionada);

    }

}

function reservar() {

    var ruta_seleccionada = document.getElementById("lista_rutas").value;
    var fecha_seleccionada = document.getElementById("fecha_elegida").innerHTML;

    if (fecha_seleccionada != "ninguna") {

        var mensaje = "Gracias por reservar una ruta guiada en " + ruta_seleccionada;
        mensaje = mensaje + "\npara la fecha " + fecha_seleccionada;

        alert(mensaje);

    } else {

        var mensaje = "Le falta elegir una fecha valida";

        alert(mensaje);

    }

}