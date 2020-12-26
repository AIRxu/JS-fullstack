// 发红包的功能
// total 钱数 num 人数
function hongbao(total,num) {
    // 定义一个用来显示红包金额的数组
    let arr = [];
    // 定义剩余钱数 剩余人数
    let restAmount = total;
    let restNum = num;
    // 循环39次，0-38
    for(let i = 0; i < num - 1; i++)
    {
        // 红包金额等于钱数除以人数
        let amount = total / num;
        // 将算出来的红包金额添加到数组中
        arr.push(amount);
        // 剩余钱数等于total减去一个红包的钱数
        restAmount -= amount
    }
    // 将最后一个红包放入数组
    arr.push(restAmount);
    return arr;
}

console.log(hongbao(5,40));