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

    console.log(currentAmount)

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

    else if(pin != userPin){
        alert("Pin is invalid");
        return;
    }
    else{

       const totalAmount = currentAmount + amount;
       const h1 = document.getElementById('current-amount');
       h1.innerText = totalAmount;
       alert(`${amount} tk added sucsessfully`)

       
    }
    
})