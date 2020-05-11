// input fields
const lastName =document.getElementById("lastName"),
    firstName =document.getElementById("firstName"),
    email =document.getElementById("email"),
    confirmEmail =document.getElementById("confirmEmail"),
    password =document.getElementById("password"),
    confirmPassword =document.getElementById("confirmPassword"),
    phon =document.getElementById("phon"),
    birthYear =document.getElementById("birthYear"),
    birthMonth =document.getElementById("birthMonth"),
    birthDay =document.getElementById("birthDay"),
    DriverLicenseNumber = document.getElementById("DriverLicenseNumber"),
    licenseCountry = document.getElementById("LicenseCountry"),
    ReleaseYear = document.getElementById("ReleaseYear"),
    ReleaseMonth = document.getElementById("ReleaseMonth"),
    ReleaseDay = document.getElementById("ReleaseDay"),
    CreditCardType = document.getElementById("CreditCardType"),
    CreditCardNumber = document.getElementById("CreditCardNumber"),
    CreditCardMonth = document.getElementById("CreditCardMonth"),
    CreditCardYear = document.getElementById("CreditCardYear"),
    adresse = document.getElementById("adresse"),
    city = document.getElementById("city"),
    country =document.getElementById("country"),
    zipCode = document.getElementById("zipCode"),
    conditions = document.getElementById("conditions");
//form
const form = document.getElementById('registerForm');
//validation color
const lightBrown = '#cbb9a5',
      brown      = '#987d5e',
      red        = 'F44336';
// Handle form
form.addEventListener('submit', function(event) {
    // Prevent default behaviour
    event.preventDefault();
    if (
      validateFirstName() && 
      validateLastName() && 
      validateEmail() && 
      validateConfirmEmail() &&
      validatePassword() &&
      validateConfirmPassword() && 
      validatePhon() && 
      validateBirthYear() && 
      validateBirthMonth() &&
      validateBirthDay() && 
      validateDriverLicenseNumber() &&
      validateLicenseCountry() &&
      validateReleaseYear() &&
      validateReleaseMonth() &&
      validateReleaseDay() &&
      validateCreditCardType() &&
      validateCreditCardNumber() &&
      validateCreditCardMonth() &&
      validateCreditCardYear() &&
      validateAdresse() &&
      validateCity() &&
      validateCountry() &&
      validateZipCode() &&
      validateConditions()

    ) {
      const name = firstName.value;
      alert(`Inscription réussie, bienvenue ${name} sur KainouchCars`);
    }
});

// Validators
function validateFirstName() {
    // check if is empty
    if (checkIfEmpty(firstName)) return;
    // is if it has only letters
    if (!checkIfOnlyLetters(firstName)) return;
    return true;
  }
  function validateLastName() {
    // check if is empty
    if (checkIfEmpty(lastName)) return;
    // is if it has only letters
    if (!checkIfOnlyLetters(lastName)) return;
    return true;
  }
  function validatePassword() {
    // Empty check
    if (checkIfEmpty(password)) return;
    // Must of in certain length
    if (!meetLength(password, 4, 100)) return;
    // check password against our character set
    // 1- a
    // 2- a 1
    // 3- A a 1
    // 4- A a 1 @
    if (!containsCharacters(password, 4)) return;
    return true;
  }
  function validateConfirmPassword() {
    if (password.className !== 'valid') {
      setInvalid(confirmPassword, 'Le mot de passe doit être valide');
      return;
    }
    // If they match
    if (password.value !== confirmPassword.value) {
      setInvalid(confirmPassword, 'Les mots de passe doivent correspondre');
      return;
    } else {
      setValid(confirmPassword);
    }
    return true;
  }
  function validateEmail() {
    if (checkIfEmpty(email)) return;
    if (!containsCharacters(email, 5)) return;
    return true;
  }
  function validateConfirmEmail() {
    if (email.className !== 'valid') {
      setInvalid(confirmEmail, 'E-mail doit être valide');
      return;
    }
    // If they match
    if (email.value !== confirmEmail.value) {
      setInvalid(confirmEmail, 'E-mail doivent correspondre');
      return;
    } else {
      setValid(confirmEmail);
    }
    return true;
  }
  function validatePhon() {
    // check if is empty
    if (checkIfEmpty(phon)) return;
    // is if it has only numbers
    if (!checkIfOnlyNumbers(phon)) return;

    if (phon.value.length == 10) {
        setValid(phon);
        return true;
      } else if (phon.value.length < 10 || phon.value.length > 10) {
        setInvalid(
          phon,`Numéro de téléphone doit être 10 chiffres`);
        return false;
        }
    }
    function validateBirthYear() {
        if (checkIfEmpty(birthYear)) return;
        return true;
      }
      function validateBirthMonth() {
        if (checkIfEmpty(birthMonth)) return;
        return true;
      }
      function validateBirthDay() {
        if (checkIfEmpty(birthDay)) return;
        return true;
      }function validateDriverLicenseNumber() {
        if (checkIfEmpty(DriverLicenseNumber)) return;
        return true;
      }
      function validateLicenseCountry() {
        if (checkIfEmpty(licenseCountry)) return;
        return true;
      }
      function validateReleaseYear() {
        if (checkIfEmpty(ReleaseYear)) return;
        return true;
      }
      function validateReleaseMonth() {
        if (checkIfEmpty(ReleaseMonth)) return;
        return true;
      }
      function validateReleaseDay() {
        if (checkIfEmpty(ReleaseDay)) return;
        return true;
      }
      function validateCreditCardType() {
        if (checkIfEmpty(CreditCardType)) return;
        return true;
      }
      function validateCreditCardNumber() {
        if (checkIfEmpty(CreditCardNumber)) return;
        return true;
      }
      function validateCreditCardMonth() {
        if (checkIfEmpty(CreditCardMonth)) return;
        return true;
      }
      function validateCreditCardYear() {
        if (checkIfEmpty(CreditCardYear)) return;
        return true;
      }
      function validateAdresse() {
        if (checkIfEmpty(adresse)) return;
        return true;
      }
      function validateCity() {
        if (checkIfEmpty(city)) return;
        return true;
      }
      function validateCountry() {
        if (checkIfEmpty(country)) return;
        return true;
      }
      function validateZipCode() {
        if (checkIfEmpty(zipCode)) return;
        return true;
      }
      function validateConditions() {
        if (checkIfEmpty(conditions)) return;
        return true;
      }
      
  // Utility functions
  function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
      // set field invalid
      setInvalid(field, `${field.name} ne doit pas être vide`);
      return true;
    } else {
      // set field valid
      setValid(field);
      return false;
    }
  }
  function isEmpty(value) {
    if (value === '') return true;
    return false;
  }
  function setInvalid(field, message) {
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
    field.style.borderBottomColor = lightBrown;
  }
  function setValid(field) {
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    field.style.borderBottomColor = brown;
  }
  function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} ne doit contenir que des lettres`);
      return false;
    }
  }
  function checkIfOnlyNumbers(field) {
    if (/^[0-9 ]+$/.test(field.value)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, `${field.name} ne doit contenir que des chiffres`);
      return false;
    }
  }
  function meetLength(field, minLength, maxLength) {
    if (field.value.length >= minLength && field.value.length < maxLength) {
      setValid(field);
      return true;
    } else if (field.value.length < minLength) {
      setInvalid(
        field,
        `${field.name} doit être au moins ${minLength} caractères`
      );
      return false;
    } else {
      setInvalid(
        field,
        `${field.name} doit être plus court que ${maxLength} caractères`
      );
      return false;
    }
  }
  function containsCharacters(field, code) {
    let regEx;
    switch (code) {
      case 1:
        // letters
        regEx = /(?=.*[a-zA-Z])/;
        return matchWithRegEx(regEx, field, 'Doit contenir au moins une lettre');
      case 2:
        // letter and numbers
        regEx = /(?=.*\d)(?=.*[a-zA-Z])/;
        return matchWithRegEx(
          regEx,
          field,
          'Doit contenir au moins une lettre et un chiffre'
        );
      case 3:
        // uppercase, lowercase and number
        regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        return matchWithRegEx(
          regEx,
          field,
          'Doit contenir au moins une majuscule, une lettre minuscule et un chiffre'
        );
      case 4:
        // uppercase, lowercase, number and special char
        regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
        return matchWithRegEx(
          regEx,
          field,
          'Doit contenir au moins une majuscule, une lettre minuscule, un chiffre et un caractère spécial'
        );
      case 5:
        // Email pattern
        regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return matchWithRegEx(regEx, field, 'Doit être une adresse e-mail valide');
      default:
        return false;
    }
  }
  function matchWithRegEx(regEx, field, message) {
    if (field.value.match(regEx)) {
      setValid(field);
      return true;
    } else {
      setInvalid(field, message);
      return false;
    }
  }

















// var checkField = [lastName, firstName, email, confEmail, password,
//                confPassword, phon, birthYear, birthMonth, birthDay, 
//                DriverLicenseNumber, licenseCountry, ReleaseYear, ReleaseMonth, 
//                ReleaseDay, CreditCardType, CreditCardNumber, CreditCardMonth, 
//                CreditCardYear, adresse, city, country, zipCode, conditions];

// function inscrir(){
//     for(var i = 0; i <= checkField.length; i++){
//         if(checkField[i].value == ""){
//             checkField[i].style.borderBottomColor = "red";
//             document.getElementById('requiredFields').innerHTML="msg";
//             document.getElementById('requiredFields').style.marginBottom = "48px";
//             document.getElementById('requiredFields').style.color= "red";
//             document.getElementById('requiredFields').style.fontSize = "24px";

//         }else{
//             var regName = RegExp("^[a-zA-Z]{3,20}$");
//             if(regName.test(firstName.value)){
//                 document.getElementById('firstNameConf').innerHTML = firstName.value;
//             }else{
//                 firstName.style.borderBottomColor = "red";
//                 document.getElementById("firstNameP").innerHTML = "vous devez respécter la forme de";
//                 }    
//             if(regName.test(lastName.value)){
//                 document.getElementById('lastNameConf').innerHTML = lastName.value; 
//             }else{
//                 lastName.style.borderBottomColor = "red";
//                 document.getElementById("lastNameP").innerHTML = "vous devez respécter la forme de";
//                 }    
//             var regEmail = RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$");
//             if(regEmail.test(email.value)){
//             }else{
//                 email.style.borderBottomColor = "red";
//                 document.getElementById("emailP").innerHTML = "vous devez respécter la forme de";
//                 }   
//             if(email.value == confEmail.value){
//                 document.getElementById('emailConf').innerHTML = confEmail.value;
//             } else{
//                 confEmail.style.borderBottomColor = "red";
//                 document.getElementById("confEmailP").innerHTML = "votre emile est incorrect";
//             }
//             // var regPass = RegExp("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/");
//             // if(regPass.test(password.value)){
//             // }else{
//             //     password.style.borderBottomColor = "red";
//             //     document.getElementById("passwordP").innerHTML = "vous devez respécter la forme de";
//             //     }   
//             // if(confPassword.value == password.value){
//             // }else{
//             //     confPassword.style.borderBottomColor = "red";
//             //     document.getElementById("confPasswordP").innerHTML = "vous devez respécter la forme de";
//             //     }   
//             // var regPhon = RegExp("^\0([5-6])+([0-9]){8})+$");
//             // if(regPhon.test(phon.value)){
//             //     document.getElementById('phonConf').innerHTML = phon.value;
//             // }else{
//             //     phon.style.borderBottomColor = "red";
//             //     document.getElementById("phonP").innerHTML = "vous devez respécter la forme de";
//             //     }   
                
//             document.getElementById('birthYearConf').innerHTML =birthYear.value;
//             document.getElementById('birthMonthConf').innerHTML =birthMonth.value;
//             document.getElementById('birthDayConf').innerHTML =birthDay.value;
//             document.getElementById('DriverLicenseNumberConf').innerHTML =DriverLicenseNumber.value;
//             document.getElementById('ReleaseYearConf').innerHTML =ReleaseYear.value;
//             document.getElementById('ReleaseMonthConf').innerHTML =ReleaseMonth.value;
//             document.getElementById('ReleaseDayConf').innerHTML =ReleaseDay.value;
//             document.getElementById('CreditCardTypeConf').innerHTML =CreditCardType.value;
//             document.getElementById('CreditCardNumberConf').innerHTML =CreditCardNumber.value;
//             document.getElementById('CreditCardMonthConf').innerHTML =CreditCardMonth.value;
//             document.getElementById('CreditCardYearConf').innerHTML =CreditCardYear.value;
//             document.getElementById('adresseConf').innerHTML =adresse.value;
//             document.getElementById('cityConf').innerHTML =city.value;
//             document.getElementById('countryConf').innerHTML =country.value;
//             document.getElementById('zipCodeConf').innerHTML =zipCode.value;


            


    
            // document.getElementById('containerInput').style.visibility= "hidden";
            // document.getElementById('confirmation').style.visibility = "visible";
//         } 
//     }
// }
// function myfunction(){
//     checkField[i].style.borderBottomColor = "green";
// }
// for(var i = 0; i <= checkField.length; i++){
//     checkField[i].onkeyup = myfunction ();
//     }

// var reg = RegExp("^[a-zA-Z]{3,20}$");
// var n = "hhhhh6h";
// if(reg.test(n)){
//     console.log("hello");
// }else console.log("noooooooooooo");


