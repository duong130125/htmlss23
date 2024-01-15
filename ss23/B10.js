let number = +prompt("Nhập vào số nguyên dương bất kỳ:");
if (!isNaN(number) && number > 0) {
    document.write("<div>");
    document.write("<pre>");
    for (let i = 1; i <= number; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        document.write(row + "\n");
    }
    for (let i = 1; i <= number; i++) {
        let spaces = Array(number - i + 1).join('  ');
        let row = Array(i + 1).join('* ');
        document.write(spaces + row + "\n");
    }
    document.write("</pre>");
    document.write("</div>");
} else {
    console.log("Vui lòng nhập một số nguyên dương.");
}