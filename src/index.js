//console.log('here')
const driverURL = "http://localhost:3000/drivers"

const carURL = "http://localhost:3000/cars"


const driverForm = document.getElementById('driver-form')

const driverInput = document.getElementById('driver-input')

const driverList = document.getElementById('driver-list')

function fetchDrivers(){
    fetch(driverURL)
    .then(response => response.json())
    //.then(console.log)
    .then(drivers => drivers.forEach(driver => renderDriver(driver.name)))
}

driverForm.addEventListener('submit', submitDriver)

// Submitting New Driver to DB
function submitDriver() {
    event.preventDefault()
   // console.log('sDriver')
    const configObj = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        "accept": "application/json"
     },
     body: JSON.stringify({
         name: driverInput.value
     })
    }
    fetch(driverURL, configObj)
    renderDriver(driverInput.value);
}

function renderDriver(driver) {
   // event.preventDefault();
   // console.log('submited')
   const li = document.createElement('li');
   const p = document.createElement('p');
   p.innerHTML = driver
   li.append(p)
   driverList.appendChild(li)
   driverForm.reset();
}

fetchDrivers();

