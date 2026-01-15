const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// filtering all credit transactions suing filetr
const creditrnx = transactions.filter(txn => txn.type ==="credit");
console.log(creditrnx);
//extracting only transaction amount
const transactionamt=transactions.map(txn => txn.amount);
console.log(transactionamt);
//calculating final balanace uisng reduce
const finalBalance = transactions.reduce((balance, txn) => {
return txn.type === "credit" ? balance + txn.amount : balance - txn.amount;}, 0);
console.log(finalBalance)

//finding the first debit trnx
const fdebit = transactions.find(txn => txn.type === "debit");
console.log(fdebit);
// finding the indexof trnx with amt 10k
const amt=transactions.findIndex(trx => trx.amount===10000)
console.log(amt)


