class Account {
    static accountInfoList = [];
    #accountName;
    #deposit;
    constructor(accountName,deposit){
        this.#accountName = accountName;
        this.#deposit = deposit;
    }
    setAccount(accountName, deposit){
        this.#accountName = accountName;
        this.#deposit = deposit;
        //Account.accountInfoList.push(this)
    } 
    getAccountName(){
        return this.#accountName;
    }
    setAccountName(name){
        this.#accountName = name;
    }
    getDeposit(){
        return this.#deposit;
    }
    setDeposit(deposit){
        this.#deposit = deposit;
    }
    getAccount(){
        return this.#accountName + "   " + this.#deposit;
    }

}


function localDataToAccount(){
    const accounts = localStorage.getItem('accounts');
    const parseToObj = JSON.parse(accounts);
    for (let i = 0; i < parseToObj.length; i++) {
        var acc = new Account();
        acc.setAccount(parseToObj[i].account);
        acc.setDeposit(parseToObj[i].Deposit);
        Account.accountInfoList.push(acc);
    }
}

if(localStorage.getItem('accounts')){
    localDataToAccount();
}

function storeLocally(){
    var accounts = Account.accountInfoList;
    const arr = [];
    for (let i = 0; i < accounts.length; i++) {
        var obj = {};
        obj["account"] = accounts[i].getAccountName();
        obj["Deposit"] = accounts[i].getDeposit();
        arr.push(obj)
    }
    localStorage.setItem('accounts',JSON.stringify(arr));
    
 }









 


function createAccount(){
    var accountName = document.getElementById('accname').value;
    var deposit = document.getElementById('deposit').value;
    const account = new Account();
    account.setAccount(accountName,deposit);   
    Account.accountInfoList.push(account);
    storeLocally();
    display();
}


function display(){
    var accounts = Account.accountInfoList;
    var textarea = '';
    for (let i = 0; i < accounts.length; i++) {
        textarea+="Account Name: "+ accounts[i].getAccountName()+ ", " + " Deposit: " + accounts[i].getDeposit()+'\n';
    }
    document.getElementById('area').innerHTML = textarea;
}

































function goToDeposit(){
    location.href="deposit.html";
}
function goToDebit(){
    location.href = "debit.html";
}

function loadAccounts(){
    const select = document.getElementById('accountlist');
    var accounts = Account.accountInfoList;
    for (let i = 0; i < accounts.length; i++) {
        var values = accounts[i].getAccountName();
        const option = document.createElement('option');
        option.value = values;
        option.textContent = values;
        select.appendChild(option);
    }

}


function deposit(){
    var accounts = Account.accountInfoList;
    const selectedAccount = document.getElementById('accountlist').selectedIndex;
    if(selectedAccount === 0  ){
        alert("Please select account")
    }
    const depositAmount = document.getElementById('amount').value;
    if (selectedAccount != 0 || depositAmount != null ||depositAmount != '' ) {
        var balance = accounts[selectedAccount-1].getDeposit();
        accounts[selectedAccount-1].setDeposit(parseFloat(depositAmount) + parseFloat(balance));
        storeLocally();
        location.href = "index.html";
    }else{
        alert('Please enter deposit amount' )
    }
}

function debit(){
    var accounts = Account.accountInfoList;
    const selectedAccount = document.getElementById('accountlist').selectedIndex;
    if(selectedAccount === 0){
        alert("Please select account")
    }
    const debitAmount = document.getElementById('amount').value;
    if (selectedAccount != 0 || debitAmount != null || debitAmount != '' ) {
        var balance = accounts[selectedAccount-1].getDeposit();
        if(parseFloat(debitAmount) > parseFloat(balance)){
            alert("Insufficient balance")
        }else{
            accounts[selectedAccount-1].setDeposit(parseFloat(balance)-parseFloat(debitAmount));
            storeLocally();
            location.href = "index.html";
        }
    }else{
        alert('Please enter debit amount' )
    }
}