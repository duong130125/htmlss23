let number1 = +prompt("Nhập vào số nguyên dương thứ nhất:");
let number2 = +prompt("Nhập vào số nguyên dương thứ hai:");
for(let i=1; i<=number1; i++){
    if(i%number2 == 0){
        console.log(`Số ${i} chia hết cho ${number2}`);
    }
}