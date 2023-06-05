function handleForm (event) {
    event.preventDefault();
    const grocerySelection = document.querySelectorAll("input[name=groceryItemName]:checked");
    const grocerySelectionsArray = Array.from(grocerySelection);
    

    const resultHeading = document.createElement("h3");
    resultHeading.append("You need these groceries:");
    document.body.append(resultHeading);

    let newArray= [];
    grocerySelectionsArray.forEach(function(element) {
        newArray.push(element.value);
        
    })

    newArray.sort();
    console.log(newArray)
    newArray.forEach(function(grocery) {
        const paragraph = document.createElement("p")
        paragraph.append(grocery[0].toUpperCase() + grocery.slice(1))
        document.body.append(paragraph);
    });

    

    const form = document.getElementById("groceriesFormID");
    form.setAttribute("class", "hidden");
    
}

window.addEventListener("load", function() {
    document.querySelector("form#groceriesFormID").addEventListener("submit", handleForm)
    console.log(document.querySelector("form#groceriesFormID"));

});


 
/* document.getElementById("your form id").style.display="none";
*/
