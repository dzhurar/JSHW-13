// 1
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
}

const {
  name,
  age,
  hobby,
  premium,
} = user


console.log(
  name,
  age,
  hobby,
  premium);
  
// 2
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
]

// const [
//   productO = {name, price, quantity}
// ] = products
const [
  productOne, productTwo, productThree, productFour
] = products;
const {name: name1, price: price1, quantity: quantity1} = productOne
const {name: name2, price: price2, quantity: quantity2} = productTwo
const {name: name3, price: price3, quantity: quantity3} = productThree
const {name: name4, price: price4, quantity: quantity4} = productFour

console.log(name1, price1, quantity1);
console.log(name2, price2, quantity2);
console.log(name3, price3, quantity3);
console.log(name4, price4, quantity4);

// 3
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};



const account = {

  balance: 0,


  transactions: [],


  createTransaction(amount, type) {
    return {
        id: this.transactions.length + 1,
        type,
        amount,
    }
  },


  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
    this.balance += amount;
  },


  withdraw(amount) {
    if (amount > this.balance) {
        console.log('Недостатньо коштів на рахунку');
        return
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    this.balance -= amount;
  },


  getBalance() {
    return this.balance;
  },


  getTransactionDetails(id) {
    return this.transactions.find((transaction) => transaction.id === id)
  },


  getTransactionTotal(type) {
    return this.transactions
        .filter((transaction) => transaction.type === type)
        .reduce((total, transaction) => total + transaction.amount, 0)
  },
};

account.deposit(100);
account.withdraw(50);
account.deposit(2000);
account.withdraw(4500);
account.withdraw(1753);

console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));