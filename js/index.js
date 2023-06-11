

function saveExpense(){
    var expenseName = document.getElementById("expenseName")
    var expenseAmount = document.getElementById("expenseAmount")
    var expenses=JSON.parse(localStorage.getItem("expense") || "[]")
    

    const expenseObject ={
        "name":expenseName.value,
        "allocatedAmount":parseInt(expenseAmount.value)
    }
    expenses.push(expenseObject)
    localStorage.setItem("expense", JSON.stringify(expenses))

   
}


var storedValue =JSON.parse(localStorage.getItem("expense"))

// assorting expenses per category

const assortedExpense = storedValue.reduce((acc, current)=>{
    const index = acc.findIndex(item => item.name === current.name)
    index >-1 ? acc[index].allocatedAmount += current.allocatedAmount : acc.push({
        name : current.name,
        allocatedAmount: current.allocatedAmount
    })
    return acc
},[])

// rendering assorted expense array

const dataElement = document.getElementById("DisplaySection")
assortedExpense.map(item=>{
    dataElement.insertAdjacentHTML('afterend', `
    <span class="cell text-teal-400 font-bold " data-title="expenseName"> ${item.name} :</span>
    <spanclass="cell" data-title="allocatedAmount"> ${item.allocatedAmount}</span>
    <br>
    `)
})

// sum up total expenses
const totalExpense = assortedExpense.reduce((total, current)=>{
    return total + current.allocatedAmount
},0)
document.getElementById("totalExpense").innerHTML=` Total Amount Spent : ${totalExpense}`
console.log(totalExpense)

