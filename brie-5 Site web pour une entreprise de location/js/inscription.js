
var lastName =document.getElementById("lastName"),
firstName =document.getElementById("firstName"),
email =document.getElementById("email"),
confEmail =document.getElementById("confEmail"),
password =document.getElementById("password"),
confPassword =document.getElementById("confPassword"),
phon =document.getElementById("phon"),
birthYear =document.getElementById("birthYear"),
birthMonth =document.getElementById("birthMonth"),
birthDay =document.getElementById("birthDay"),
DriverLicenseNumber = document.getElementById("DriverLicenseNumber"),
country =document.getElementById("country"),
ReleaseYear = document.getElementById("ReleaseYear"),
ReleaseMonth = document.getElementById("ReleaseMonth"),
ReleaseDay = document.getElementById("ReleaseDay"),
CreditCardType = document.getElementById("CreditCardType"),
CreditCardNumber = document.getElementById("CreditCardNumber"),
CreditCardMonth = document.getElementById("CreditCardMonth"),
CreditCardYear = document.getElementById("CreditCardYear"),
adresse = document.getElementById("adresse"),
city = document.getElementById("city"),
country = document.getElementById("country"),
zipCode = document.getElementById("zipCode"),
conditions = document.getElementById("conditions");

var checkField = [lastName, firstName, email, confEmail, password,
               confPassword, phon, birthYear, birthMonth, birthDay, 
               DriverLicenseNumber, country, ReleaseYear, ReleaseMonth, 
               ReleaseDay, CreditCardType, CreditCardNumber, CreditCardMonth, 
               CreditCardYear, adresse, city, country, zipCode, conditions];

function inscrir(){
    
    var msg='test test test';

    for(var i = 0; i <= checkField.length; i++){
        if(checkField[i].value == ""){
            checkField[i].style.borderBottomColor = "red";
            document.getElementById('requiredFields').innerHTML=msg;
            document.getElementById('requiredFields').style.marginBottom = "48px";
            document.getElementById('requiredFields').style.color= "red";
            document.getElementById('requiredFields').style.fontSize = "24px";

        }else{
            var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
            if(email.match(emailReg)){
            alert("vous devez respécter la forme de"+RegExpression[j]);
            }else{
                alert("Merci!");
                }            
        } 
    }
}
for(var i = 0; i <= checkField.length; i++){
    checkField[i].onkeyup = function(){
        checkField[i].style.borderBottomColor = "green";
} }

