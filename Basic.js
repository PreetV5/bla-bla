function Login(){
    console.log("Login Page")
    alert("The login page is not available")
    document.write("Back to login page")
}
function calculator(){
    var a = prompt("Enter Number") 
    var b = prompt("Enter Number")

    var sum = parseFloat(a) + parseFloat(b);
    var sub = parseFloat(a) - parseFloat(b);
    var mul = parseFloat(a) * parseFloat(b);
    var div = parseFloat(a) / parseFloat(b);

    console.log("The sum of" + a + "and" + b + "is:" +sum)
    console.log("The sub of" + a + "and" + b + "is:" +sub)
    console.log("The mul of" + a + "and" + b + "is:" +mul)
    console.log("The div of" + a + "and" + b + "is:" +div)
}