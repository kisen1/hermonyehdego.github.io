class Account{
    static accountList=[];
    #name;
    #deposit;
    conctractor(name, deposit){
        this.#name=name;
        this.#deposit=deposit;
    }

    setName(name){
        this.#name=name;

    }
    getName(){
        return this.#name;
    }

    setDeposit(deposit){
        this.#deposit=deposit;
    }



    getDeposit(){
        return this.#deposit;
    }


    setAccount(name, deposit){
        this.#name = name;
        this.#deposit = deposit;
        //Account.accountInfoList.push(this)
    } 


    getAccount(){
        return this.#name + "   " + this.#deposit;
    }
}



var creatacc=document.getElementById("btn");
creatacc.onclick=creatAccount;


function creatAccount(){


    var namee=document.getElementById("account");
    var depositt=document.getElementById("deposit");

    var account= new Account();

    account.setAccount(namee, depositt);
    Account.accountList.push(account);

}