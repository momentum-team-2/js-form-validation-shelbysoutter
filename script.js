// Assign variable for name field. Set default value to Valid

let form = document.querySelector('#parking-form')
let formIsValid

form.addEventListener('submit', function(event) {
    event.preventDefault()
    validateName ()
})

formIsValid = true



// Each field is required. If there is no user input in that field, mark it as invalid.
// Validate: 1) name 2) car 3) date 4) # days 5) credit card 6) CVV 7) expiration.

// If invalid, add message to invalid field, "is required" - can add as <div>. 
// Message should NOT repeat itself and should go away once field is marked valid.



function validateName () {
    let nameInput = document.querySelector('#name')
    let parentEl = nameInput.parentElement   
    if (nameInput.value) {
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
    }
}

  
let carYear = document.querySelector('#car-year')
let parentEl1 = carYear.parentElement

if (carYear.value) {
    parentEl1.classList.remove('input-invalid')
    parentEl1.classList.add('input-valid')
    console.log('it works')
}


// validateName()
// validateCar()
// validateDate() 
// validateDays()
// validateCard()
// validateCVV()
// validateExpiration()


// If everything valid, show a message



