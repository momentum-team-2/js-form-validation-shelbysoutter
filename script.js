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
    if (nameInput.value, isNaN(nameInput.value)) {
        parentEl.classList.remove('input-invalid')
        parentEl.classList.add('input-valid')
        removeName ()
    } else {
        parentEl.classList.remove('input-valid')
        parentEl.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageName ()
    }
}

//Car Year Validation
function validateCarYear () {
    let carYear = document.querySelector('#car-year')
    let parentEl1 = carYear.parentElement
    if (carYear.value && !isNaN(carYear.value) && carYear.value >= 1900 && carYear.value <= 2020) {
        parentEl1.classList.remove('input-invalid')
        parentEl1.classList.add('input-valid')
        removeYear ()
    } else {
        parentEl1.classList.remove('input-valid')
        parentEl1.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageCarYear ()
    }    
}

//TODO: returns valid box when left empty and another box is filld out

// Car Make Validation 
function validateCarMake () {
    let carMake = document.querySelector('#car-make')
    let parentEl2 = carMake.parentElement
    if (carMake.value) {
        parentEl2.classList.remove('input-invalid')
        parentEl2.classList.add('input-valid')
        removeMake ()
    } else {
        parentEl2.classList.remove('input-valid')
        parentEl2.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageCarMake ()
    }
}

// Car Model Validation
function validateCarModel () {
    let carModel = document.querySelector('#car-model')
    let parentEl3 = carModel.parentElement
    if (carModel.value) {
        parentEl3.classList.remove('input-invalid')
        parentEl3.classList.add('input-valid')
        removeModel ()
    } else {
        parentEl3.classList.remove('input-valid')
        parentEl3.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageCarModel ()
        // TODO - fix valid input appearing when 1 of 3 entries is valid
    }
}

// Date Parking Validation
function dateParking () {
    let date = document.querySelector('#start-date')
    let parentEl4 = date.parentElement
    let currentDate = new Date ()
    if (date.value) {
        parentEl4.classList.remove('input-invalid')
        parentEl4.classList.add('input-valid')
        removeDate ()
    } else {
        parentEl4.classList.remove('input-valid')
        parentEl4.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageDate ()
    }
} 

// Is date valid:

// function checkDate () {
//     let today = new Date ()
//     date1 = date1.split('/')
//     date1 = new Date (date1[2], date1[1] -1, date[0])
//     return (today - date1) < 0
// }




   
// # of Days Validation
function numDays () {
    let dayNum = document.querySelector('#days')
    let parentEl5 = dayNum.parentElement
    if (dayNum.value && !isNaN(dayNum.value) && dayNum.value <= 30) {
        parentEl5.classList.remove('input-invalid')
        parentEl5.classList.add('input-valid')
        removeDay ()
    } else {
        parentEl5.classList.remove('input-valid')
        parentEl5.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageDays ()
    }
}

// TODO: dayNum.value != '' -- play around to solve issue of empty box validating 

// Card # Validation
function cardNum () {
    let card = document.querySelector('#credit-card')
    let parentEl6 = card.parentElement
    if (card.value) {
        parentEl6.classList.remove('input-invalid')
        parentEl6.classList.add('input-valid')
        removeCard ()
    } else {
        parentEl6.classList.remove('input-valid')
        parentEl6.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageCreditCard ()
    }
}

// CVV Validation
function cvv () {
    let cvvNum = document.querySelector('#cvv')
    let parentEl7 = cvvNum.parentElement
    if (cvvNum.value && !isNaN(cvvNum.value) && cvvNum.value.length === 3) {
        parentEl7.classList.remove('input-invalid')
        parentEl7.classList.add('input-valid')
        removeCVV ()
    } else {
        parentEl7.classList.remove('input-valid')
        parentEl7.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageCVV () 
    }
}

// Expiration Validation
function expDate () {
    let expiration = document.querySelector('#expiration')
    let parentEl8 = expiration.parentElement
    if (expiration.value) {
        parentEl8.classList.remove('input-invalid')
        parentEl8.classList.add('input-valid')
        removeMsg ()
    } else {
        parentEl8.classList.remove('input-valid')
        parentEl8.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageExpiration ()
    }
}


// If invalid, have '<div> is required' displayed. The message should go away once validated and should not repeat. 

function showInvalidMessageName () {
    removeName ()
    let existingEl = document.querySelector('#name-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('Name is required.')
    newElement.classList.add('message8')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

function showInvalidMessageCarYear () {
    removeYear ()
    let existingEl = document.querySelector('#car-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('Car year is required.')
    newElement.classList.add('message7')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

function showInvalidMessageCarMake () {
    removeMake ()
    let existingEl = document.querySelector('#car-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('Car make is required.')
    newElement.classList.add('message6')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

function showInvalidMessageCarModel () {
    removeModel ()
    let existingEl = document.querySelector('#car-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('Car model is required.')
    newElement.classList.add('message5')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

function showInvalidMessageDate () {
    removeDate ()
    let existingEl = document.querySelector('#start-date-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('Date is required.')
    newElement.classList.add('message4')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

function showInvalidMessageDays () {
    removeDay ()
    let existingEl = document.querySelector('#days-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('Number of days is required.')
    newElement.classList.add('message3')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

function showInvalidMessageCreditCard () {
    removeCard ()
    let existingEl = document.querySelector('#credit-card-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('Credit card is required.')
    newElement.classList.add('message2')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

function showInvalidMessageCVV () {
    removeCVV ()
    let existingEl = document.querySelector('#cvv-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('CVV number is required.')
    newElement.classList.add('message1')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

function showInvalidMessageExpiration () {
    removeMsg ()
    let existingEl = document.querySelector('#expiration-field')
    let newElement = document.createElement('p')
    let invalidMessage = document.createTextNode('Expiration date is required.')
    newElement.classList.add('message')
    newElement.appendChild(invalidMessage)
    existingEl.appendChild(newElement)
}

// Functions to remove invalid message and delete message so it doesn't repeat.

function removeMsg () {
    let pElement = document.querySelector('.message')
    if (pElement != null) {
        pElement.remove ()
    }
}

function removeCVV () {
    let pElement = document.querySelector('.message1')
    if (pElement != null) {
        pElement.remove ()
    }
}

function removeCard () {
    let pElement = document.querySelector('.message2')
    if (pElement != null) {
        pElement.remove ()
    }
}

function removeDay () {
    let pElement = document.querySelector('.message3')
    if (pElement != null) {
        pElement.remove ()
    }
}

function removeDate () {
    let pElement = document.querySelector('.message4')
    if (pElement != null) {
        pElement.remove ()
    }
}

function removeModel () {
    let pElement = document.querySelector('.message5')
    if (pElement != null) {
        pElement.remove ()
    }
}

function removeMake () {
    let pElement = document.querySelector('.message6')
    if (pElement != null) {
        pElement.remove ()
    }
}

function removeYear () {
    let pElement = document.querySelector('.message7')
    if (pElement != null) {
        pElement.remove ()
    }
}

function removeName () {
    let pElement = document.querySelector('.message8')
    if (pElement != null) {
        pElement.remove ()
    }
}


// Add the following validations:




// Car year must be after 1900.
// Car year cannot be in the future.
// Date parking must be in the future.
// Number of days must be a number.
// Number of days must be between 1 and 30.
// CVV must be a three-digit number.


// In hindsight, finding a way to make the function apply to the input-field.
// How to then specify for each box? 
// If it had been assigned to input-field, would be easier to remove message. 