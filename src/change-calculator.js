module.exports = function calculateChange(totalPayable, cashPaid) {

    const COINS = [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

    let change = [];

    var remaining = cashPaid - totalPayable;

    COINS.forEach(function(coin) {

        if(remaining/coin >= 1) {
            var coinAmt = Math.floor(remaining/coin);

            change = change.concat(Array(coinAmt).fill(coin));
            remaining = remaining - coin * coinAmt;
        }

    });
    return change;

};

