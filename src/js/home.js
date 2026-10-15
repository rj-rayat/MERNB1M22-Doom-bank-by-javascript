function activeBtn(id){
    document.getElementById('cashout-btn').classList.remove('bg-red-400')
    document.getElementById('add-money-btn').classList.remove('bg-red-400')
    document.getElementById('history-btn').classList.remove('bg-red-400')
    document.getElementById(id).classList.add('bg-red-400')
};


function togglePage(id){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cashout-section').classList.add('hidden');
    document.getElementById('histoy-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}

function alert(text){
     document.getElementById("my_modal_3").showModal();
       const alert = document.getElementById("alert-text")
       alert.innerText = text
}
document.getElementById('cashout-btn').addEventListener('click', function(){
   
   
   togglePage('cashout-section')
   activeBtn('cashout-btn')
    
})

document.getElementById('add-money-btn').addEventListener('click', function(){
    
    togglePage('add-money-section')
    
    activeBtn('add-money-btn')
   
})
document.getElementById('history-btn').addEventListener('click', function(){
    
    togglePage('histoy-section')
    
    activeBtn('history-btn')
   
})



// Add Money feature
document.getElementById('add-money-feature-btn').addEventListener('click', function(event){
    event.preventDefault()
    const bankSelect = document.getElementById('bank-selector').value;
    const account = document.getElementById('account').value;
    const accountNumber = parseInt(account);
    const balance = document.getElementById('balance').value;
    const amount = parseInt(balance);
    const userPin = document.getElementById('userPin').value
    console.log(userPin)
    const pin = '1234';

    const currentAmount = parseInt(document.getElementById('current-amount').innerText);


    if (bankSelect == 'Select Bank'){
        alert("Kindly select your baper bank");
        return ;
    }

    else if (account != accountNumber){
        alert("Kindly enter numeric number");
        return ;
    } 
    else if(account.length < 11){
        alert("Kindly input 11 digit number");
        return;
    }

    else if(amount == 0 || amount < 0){
        alert("Kindly add more than 0");
        return ;
    }

    else if (balance.length == 0)
    {
        alert("Kindly add money");
        return 0;
    }

    else if(pin != userPin){
        alert("Pin is invalid");
        return;
    }
    else{

       const totalAmount = currentAmount + amount;
       const h1 = document.getElementById('current-amount');
       h1.innerText = totalAmount;

        const date = new Date();
        const localTime = date.toString();
       const div = document.getElementById('histoy-section')
       const p = document.createElement('p')
       p.innerText =  `Added ${amount} tk at ${localTime}`
        p.classList.add("bg-amber-100");
        p.classList.add("p-2.5");
        p.classList.add("rounded-lg");
        p.classList.add("mt-2.5")

       

       div.appendChild(p)
      
        alert(`${amount} tk added at ${localTime}`)
       
    }
    
});


// cashout money feature

document.getElementById("cashout-form-btn").addEventListener('click', function(event){
    event.preventDefault();

    const account = document.getElementById('agent-number').value;
    const accountNumber = parseInt(account);
    const balance = document.getElementById('cashout-balance').value;
    const amount = parseInt(balance);
    const userPin = document.getElementById('user-cashout-pin').value
    const pin = '1234';

    if (account != accountNumber){
        alert("Kindly enter numeric number");
        return ;
    } 
    else if(account.length < 5){
        alert("Kindly input 11 digit number");
        return;
    }

    else if(amount == 0 || amount < 0){
        alert("Kindly add more than 0");
        return ;
    
    }

     else if (balance.length == 0)
    {
        alert("Kindly add money");
        return 0;
    }
    else if(pin != userPin){
        alert("Pin is invalid");
        return;
    }
    else{

       const h1 = document.getElementById('current-amount').innerText;
       const currentBalance = parseInt(h1);
       if (amount > currentBalance)
       {
            alert("You are gorib plz sopno dekha bondo koro");
            return;
       }

       else {
            const totalAmount = currentBalance - amount;
            document.getElementById("current-amount").innerText = totalAmount;
           
            const date = new Date();
            const localTime = date.toString();
       
            const div = document.getElementById('histoy-section')
            const p = document.createElement('p');

            p.innerText =  `Cashout ${amount} tk at ${localTime}`
            p.classList.add("bg-red-100");
            p.classList.add("p-2.5");
            p.classList.add("rounded-lg");
            p.classList.add("mt-2.5")

            div.appendChild(p);
            alert(`Cashout ${amount} tk at ${localTime}`)
       }

      
    }
});