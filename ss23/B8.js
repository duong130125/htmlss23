let number = +prompt("Nhập vào một số nguyên dương bất kỳ:");

if (!isNaN(number) && number > 0) {
    console.log(`Các số nguyên tố nhỏ hơn ${number}:`);
    for (let i = 2; i < number; i++) {
        let check = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                check = false;
                break;
            }
        }
        if (check) {
            console.log(i);
        }
    }
} else {
    console.log("Số bạn vừa nhập không phải một số nguyên dương.");
}