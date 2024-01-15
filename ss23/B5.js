let randomNumber = Math.floor(Math.random() * 10) + 1;
let check = false;

while (!check) {
    let inputNumber = +prompt("Nhập một số từ 1 đến 10:");
    if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 10) {
        console.log("Vui lòng nhập một số hợp lệ từ 1 đến 10.");
    } else {
        if (inputNumber > randomNumber) {
            console.log("Số vừa nhập lớn hơn số ngẫu nhiên.");
        } else if (inputNumber < randomNumber) {
            console.log("Số vừa nhập nhỏ hơn số ngẫu nhiên.");
        } else {
            console.log("Kết quả đúng chúc mừng bạn.");
            check = true;
        }
    }
}
