function handleIncreaseOrDecrease(isIncrease, classType) {
    const ticketInput = document.getElementById(classType + "-class-ticket");
    const previousInput = parseInt(ticketInput.value);
    let newInput = previousInput;
    if (isIncrease == true) {
        newInput = previousInput + 1;
    }
    else if (isIncrease == false && newInput > 0) {
        newInput = previousInput - 1;
    }
    document.getElementById(classType + "-class-ticket").value = newInput;
    const firstSubTotal = calculateSubTotal("first");
    const economySubTotal = calculateSubTotal("economy");
    document.getElementById("sub-total").innerText = firstSubTotal + economySubTotal;
    const vat = Math.round((firstSubTotal + economySubTotal) * .1);
    document.getElementById("vat").innerText = vat;
    document.getElementById("total").innerText = firstSubTotal + economySubTotal + vat;
}

function calculateSubTotal(classType) {
    let TicketCost = document.getElementById(classType + "-class-ticket");
    TicketCost = parseInt(TicketCost.value);
    if (classType == "first") {
        const SubTotal = TicketCost * 150;
        return SubTotal;
    }
    if (classType == "economy") {
        const SubTotal = TicketCost * 100;
        return SubTotal;
    }
}

function confirmBook(ticketType) {
    if (ticketType == "first") {
        const ticket = document.getElementById(ticketType + "-class-ticket").value;
        return ticket;
    }
    if (ticketType == "economy") {
        const ticket = document.getElementById(ticketType + "-class-ticket").value;
        return ticket;
    }
}
document.getElementById("first-class-increase").addEventListener('click', function () {
    handleIncreaseOrDecrease(true, "first");
});

document.getElementById("first-class-decrease").addEventListener('click', function () {
    handleIncreaseOrDecrease(false, "first");
});

document.getElementById("economy-class-increase").addEventListener('click', function () {
    handleIncreaseOrDecrease(true, "economy");
});

document.getElementById("economy-class-decrease").addEventListener('click', function () {
    handleIncreaseOrDecrease(false, "economy");
});

document.getElementById("confirm").addEventListener("click", function () {
    const amount = document.getElementById("total").innerText;
    const firstClassTicket = confirmBook("first");
    const economyClassTicket = confirmBook("economy");
    //const firstClassTicket = document.getElementById("first-class-ticket").value;
    //const economyClassTicket = document.getElementById("economy-class-ticket").value;
    if (amount == "00" || amount == "0") {
        window.alert("please select at least one ticket sir.");
    }
    else {
        window.confirm("Please Confirm Your " + firstClassTicket + " first class ticket and " + economyClassTicket + " economy class ticket for Total Amount $" + amount + " including VAT");
    }
});





// document.getElementById("first-class-increase").addEventListener('click',function(){
// const ticketInput = document.getElementById("first-class-ticket");
// const previousInput = parseInt(ticketInput.value);
// const newInput = previousInput+1;
// document.getElementById("first-class-ticket").value = newInput;
// });


// document.getElementById("first-class-decrease").addEventListener('click',function(){
//     const ticketInput = document.getElementById("first-class-ticket");
//     const previousInput = parseInt(ticketInput.value);
//     const newInput = previousInput-1;
//     document.getElementById("first-class-ticket").value = newInput;
//     });


// document.getElementById("economy-class-increase").addEventListener('click',function(){
//         const ticketInput = document.getElementById("economy-class-ticket");
//         const previousInput = parseInt(ticketInput.value);
//         const newInput = previousInput+1;
//         document.getElementById("economy-class-ticket").value = newInput;
//         });

// document.getElementById("economy-class-decrease").addEventListener('click',function(){
//             const ticketInput = document.getElementById("economy-class-ticket");
//             const previousInput = parseInt(ticketInput.value);
//             const newInput = previousInput-1;
//             document.getElementById("economy-class-ticket").value = newInput;
//             });