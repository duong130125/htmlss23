let number = parseInt(prompt("Nhập vào một số bất kỳ:"));

if (!isNaN(number) && number > 0) {
    let sum = 0;

    for (let i = 1; i <= number / 2; i++) {
        if (number % i == 0) {
            sum += i;
        }
    }

    if (sum == number) {
        console.log(`${number} là số hoàn hảo.`);
    } else {
        console.log(`${number} không là số hoàn hảo.`);
    }
}else{
    console.log("Số bạn vừa nhập không phải số nguyên dương.")
}