var orders = [
    { amount: 250 },
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

resultado = [];

var totalAmount =  orders.reduce (function(sum, order){
    return sum + order.amount
}, 0)

var totalAmount = 0
for (var i = 0; i < orders.length; i++){
    totalAmount += orders[i].amount
}

console.log(totalAmount)