let number = parseInt(prompt("Nhập một số nguyên dương:"));

if (!isNaN(number) && number >= 0) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    console.log(`Giai thừa của ${number} là: ${result}`);
} else {
    console.log("Số bạn vừa nhập không phải số nguyên dương.");
}
