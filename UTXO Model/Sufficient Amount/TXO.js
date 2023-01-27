class TXO {
    constructor(owner, amount) {
        this.owner = owner;
        this.amount = amount;
        this.spent = false
    }
    
    //The constructor should store the values passed into it on properties of the same name. 
    //It should also create a property spent and default it to false.
    //The spend function should set the spent property to true.
    
    spend() {
        this.spent = true;
    }
}

module.exports = TXO;

// Notice how spent is initially false when we create the new TXO. 
// After invoking the spend function, spent should be set to true.