
function inscrir(){
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
     
    for(var i=0; i<=checkField.length; i++){
        if(checkField[i].value == ""){
            checkField[i].style.borderBottomColor = "red";
             // alert("vous devez entrer tous champs obligatoire" );
        }
        else if(checkField[i].value !== ""){
            checkField[i].style.borderBottomColor = ;
        }
    }

    // if(lastName == "" || firstName == "" || email == "" || confEmail == "" ||password == "" || confPassword == "" ||
    // phon == "" || birthYear == "" || birthMonth == "" || birthDay == "" || DriverLicenseNumber == "" ||
    // country ==""||ReleaseYear =="" || ReleaseMonth =="" ||ReleaseDay =="" || CreditCardType ==""  ||
    // CreditCardNumber =="" || CreditCardMonth =="" || CreditCardYear =="" ||adresse =="" ||city =="" ||
    // country =="" || zipCode =="" ||conditions)

  
    // if(checkFields[i] == ""){

    //            alert("vous devez entrer tous champs obligatoire");
    //            console.log("vide")

    // }else{

    //     if(Reg.test(email) == false){
    //         alert("vous devez respécter la forme de email");
    //         console.log("email")
    //     }else{
    //         alert("Merci!");
    //     }
    // }    
    
    // var Reg =  new RegExp(/^[a-z0-9_|.|-]+@[a-z]{4,9}.[a-z]{2,3}$/);

}