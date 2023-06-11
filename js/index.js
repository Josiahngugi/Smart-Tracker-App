

function saveExpense(){
    var expenseName = document.getElementById("expenseName")
    var expenseAmount = document.getElementById("expenseAmount")
    var expenses=JSON.parse(localStorage.getItem("expense") || "[]")
    

    const expenseObject ={
        "name":expenseName.value,
        "allocatedAmount":expenseAmount.value
    }
    expenses.push(expenseObject)
    
    localStorage.setItem("expense", JSON.stringify(expenses))
   
}

var storedValue =localStorage.getItem("expense")
console.log(JSON.parse(storedValue))

