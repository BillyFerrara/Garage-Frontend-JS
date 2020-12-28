//console.log('here')
const driverURL = "http://localhost:3000/drivers"

const carURL = "http://localhost:3000/cars"


const driverForm = document.getElementById('driver-form')

const driverInput = document.getElementById('driver-input')

const driverList = document.getElementById('driver-list')

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
    renderDriver();
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

