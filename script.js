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
        removeName ()
    } else {
        console.log('invalid')
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
    if (carYear.value) {
        parentEl1.classList.remove('input-invalid')
        parentEl1.classList.add('input-valid')
        console.log('it works')
        removeYear ()
    } else {
        console.log('invalid')
        parentEl1.classList.remove('input-valid')
        parentEl1.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageCarYear ()
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
        removeMake ()
    } else {
        console.log('invalid')
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
        console.log('it works')
        removeModel ()
    } else {
        console.log('invalid')
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
    if (date.value) {
        parentEl4.classList.remove('input-invalid')
        parentEl4.classList.add('input-valid')
        console.log('it works')
        removeDate ()
    } else {
        console.log('invalid')
        parentEl4.classList.remove('input-valid')
        parentEl4.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageDate ()
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
        removeDay ()
    } else {
        console.log('invalid')
        parentEl5.classList.remove('input-valid')
        parentEl5.classList.add('input-invalid')
        markFormInvalid()
        showInvalidMessageDays ()
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
        removeCard ()
    } else {
        console.log('invalid')
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
    if (cvvNum.value) {
        parentEl7.classList.remove('input-invalid')
        parentEl7.classList.add('input-valid')
        console.log('it works')
        removeCVV ()
    } else {
        console.log('invalid')
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
        console.log('it works')
        removeMsg ()
    } else {
        console.log('invalid')
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





// If everything valid, show a message.


// In hindsight, finding a way to make the function apply to the input-field.
// How to then specify for each box? 
// If it had been assigned to input-field, would be easier to remove message. 