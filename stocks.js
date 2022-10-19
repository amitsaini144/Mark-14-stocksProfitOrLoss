var intialPrice = document.querySelector("#intial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var showBtn = document.querySelector("#show-btn");
var result = document.querySelector("#result");

showBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(intialPrice.value);
    var sq = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value)

    checkProfitOrLoss(ip, sq, curr);
}

function checkProfitOrLoss(intial, quantity, current) {
    if (intial && quantity && current) {
        if (intial > 0 && quantity > 0 && current > 0) {
            if (intial > current) {
                var loss = (intial - current) * quantity;
                var lossPercentage = ((loss / (intial * quantity)) * 100).toFixed(2);
                result.innerText = "The total loss is " + loss + " and the loss percentage is " + lossPercentage + "%";
            }
            else if (intial < current) {
                var profit = (current - intial) * quantity;
                var profitPercentage = ((profit / (intial * quantity)) * 100).toFixed(2);
                result.innerText = "The total profit is " + profit + " and the profit percentage is " + profitPercentage + "%";
            }
            else {
                result.innerText = "NO Loss No Profit";
            }
        }
        else {
            result.innerText = "All values must be positive";
        }
    }
    else {
        result.innerText = "Please fill every section";
    }

}