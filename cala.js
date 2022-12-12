
 function calculerCalcul() {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let symboles = document.getElementById("symboles").value;
    console.log(symboles);
    
    // if pour calculer en fonction de la valeur du symbole
    
    if (symboles == "+") {
    resultat = number1 + number2;
    } else if (symboles == "-") {
    resultat = number1 - number2;
    } else if (symboles == "*") {
    resultat = number1 * number2;
    } else if (symboles == "/") {
    resultat = number1 / number2;
    }
    
    resultat = number1 + symboles + number2 + "=" + resultat;
    alert(resultat);
    }
    
    let lien1 = document.getElementById("lien1");
    let lien2 = document.getElementById("lien2");
    console.log(lien1);
    console.log(lien2);
    lien1.addEventListener("click", function(){
    let showtableau = document.getElementById('tableau');
    console.log(showtableau);
    showtableau.classList.remove("tableau")
    
    })
    
    lien2.addEventListener("click", function(){
    let showtableau = document.getElementById('tableau');
    console.log(showtableau);
    showtableau.classList.add("tableau")
    })