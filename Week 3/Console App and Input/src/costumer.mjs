class costumer {
  constructor(balance) {
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
  depositMoney(amount) {
    this.balance = this.balance + amount;
    return this.balance;
  }
  withdrawMoney(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds.");
      return this.balance;
    }
    this.balance = this.balance - amount;
    return this.balance;
  }
}
export default costumer;
