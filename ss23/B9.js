let number = +prompt("Nhập vào số nguyên dương bất kỳ:");

if (!isNaN(number) && number > 0) {
    console.log(`Dãy Fibonacci với tổng giá trị nhỏ hơn ${number}:`);
    let fib1 = 0, fib2 = 1, temp;
    console.log(fib1); 
    while (fib2 <= number) {
        console.log(fib2);
        temp = fib1 + fib2;
        fib1 = fib2;
        fib2 = temp;
    }
} else {
    console.log("Số bạn vừa nhập khongw phải một số nguyên dương.");
}
