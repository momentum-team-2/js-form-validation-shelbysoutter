// Assign variable for name field. Set default value to Valid

let form = document.querySelector('#parking-form')
let formIsValid

form.addEventListener('submit', function(event) {
    event.preventDefault()
    validateName ()
    validateCarYear ()
    validateCarMake ()
    validateCarModel ()
    dateParking ()
    numDays ()
    cardNum ()
    cvv ()
    expDate ()
})

formIsValid = true



// Each field is required. If there is no user input in that field, mark it as invalid.
// Validate: 1) name 2) car 3) date 4) # days 5) credit card 6) CVV 7) expiration.

// If invalid, add message to invalid field, "is required" - can add as <div>. 
// Message should NOT repeat itself and should go away once field is marked valid.


// Invalid function
function markFormInvalid () {
    formIsValid = false
}

//Name validation
function validateName () {
    let nameInput = document.querySelector('#name')
    let parentEl = nameInput.parentElement   
    if (nameInput.value) {
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        markFormInvalid()
    }
}

//Car Year Validation
function validateCarYear () {
    let carYear = document.querySelector('#car-year')
    let parentEl1 = carYear.parentElement
    if (carYear.value) {
        parentEl1.classList.remove('input-invalid')
        parentEl1.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl1.classList.remove('input-valid')
        parentEl1.classList.add('input-invalid')
        markFormInvalid()
    }    
}

// Car Make Validation 
function validateCarMake () {
    let carMake = document.querySelector('#car-make')
    let parentEl2 = carMake.parentElement
    if (carMake.value) {
        parentEl2.classList.remove('input-invalid')
        parentEl2.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl2.classList.remove('input-valid')
        parentEl2.classList.add('input-invalid')
        markFormInvalid()
    }
}

// Car Model Validation
function validateCarModel () {
    let carModel = document.querySelector('#car-model')
    let parentEl3 = carModel.parentElement
    if (carModel.value) {
        parentEl3.classList.remove('input-invalid')
        parentEl3.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl3.classList.remove('input-valid')
        parentEl3.classList.add('input-invalid')
        markFormInvalid()
        // TODO - fix valid input appearing when 1 of 3 entries is valid
    }
}

// Date Parking Validation
function dateParking () {
    let date = document.querySelector('#start-date')
    let parentEl4 = date.parentElement
    if (date.value) {
        parentEl4.classList.remove('input-invalid')
        parentEl4.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl4.classList.remove('input-valid')
        parentEl4.classList.add('input-invalid')
        markFormInvalid()
    }
} 
   
// # of Days Validation
function numDays () {
    let dayNum = document.querySelector('#days')
    let parentEl5 = dayNum.parentElement
    if (dayNum.value) {
        parentEl5.classList.remove('input-invalid')
        parentEl5.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl5.classList.remove('input-valid')
        parentEl5.classList.add('input-invalid')
        markFormInvalid()
    }
}

// Card # Validation
function cardNum () {
    let card = document.querySelector('#credit-card')
    let parentEl6 = card.parentElement
    if (card.value) {
        parentEl6.classList.remove('input-invalid')
        parentEl6.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl6.classList.remove('input-valid')
        parentEl6.classList.add('input-invalid')
        markFormInvalid()
    }
}

// CVV Validation
function cvv () {
    let cvvNum = document.querySelector('#cvv')
    let parentEl7 = cvvNum.parentElement
    if (cvvNum.value) {
        parentEl7.classList.remove('input-invalid')
        parentEl7.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl7.classList.remove('input-valid')
        parentEl7.classList.add('input-invalid')
        markFormInvalid()
    }
}

// Expiration Validation
function expDate () {
    let expiration = document.querySelector('#expiration')
    let parentEl8 = expiration.parentElement
    if (expiration.value) {
        parentEl8.classList.remove('input-invalid')
        parentEl8.classList.add('input-valid')
        console.log('it works')
    } else {
        console.log('invalid')
        parentEl8.classList.remove('input-valid')
        parentEl8.classList.add('input-invalid')
        markFormInvalid()
    }
}


// If everything valid, show a message



