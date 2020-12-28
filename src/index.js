//console.log('here')
const carsURL = "http://localhost:3000/cars"
const driversURL = "http://localhost:3000/drivers"

const driverForm = document.getElementById('driver-form')

const driverInput = document.getElementById('driver-input')

const driverList = document.getElementById('driver-list')

driverForm.addEventListener('submit', submitDriver)

function submitDriver() {
    event.preventDefault()
    console.log('sDriver')
}

function renderDriver() {
    event.preventDefault();
   // console.log('submited')
   const li = document.createElement('li');
   const p = document.createElement('p');
   p.innerHTML = driverInput.value
   li.append(p)
   driverList.appendChild(li)
   driverForm.reset();
}

