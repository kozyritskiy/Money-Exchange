// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    coins = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0
    };
    sortCoins = {};
    obj = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }

    if (currency > 10000) {
      return obj;
    } else if (currency === 0 || currency < 0) {
             return sortCoins;
           } else {
        while (currency !== 0) {
            if (currency >= 50) {
                currency = currency - 50;
                 coins.H++;
               }
            if (currency >= 25 && currency < 50) {
                currency = currency - 25;
              coins.Q++;
            }
            if (currency >= 10 && currency < 25) {
                currency = currency - 10;
              coins.D++;
            }
            if (currency >= 5 && currency < 10) {
                currency = currency - 5;
              coins.N++;
            }
            if (currency >= 1 && currency < 5) {
                currency = currency - 1;
              coins.P++;
            }
             }

             for (key in coins) {
               if (coins[key] > 0) {
                 sortCoins[key] = coins[key];
               }
             }
             return sortCoins;
           }
}
