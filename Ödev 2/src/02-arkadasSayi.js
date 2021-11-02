/*
Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
*/

console.log("----------------------------------- Arkadaş Sayı Uygulaması ---------------------------------")
function friendNumber(number1, number2) {
    let number1Sum = 0
    let number2Sum = 0
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            number1Sum += i
        }
    }

    for (let j = 1; j < number2; j++) {
        if (number2 % j == 0) {
            number2Sum += j

        }
    }
    console.log(number1 + " sayısının bölenleri toplamı: " + number1Sum)
    console.log(number2 + " sayısının bölenleri toplamı: " + number1Sum)

    if (number1Sum == number2 && number2Sum == number1) {
        console.log(number1 + " ve " + number2 + " Arkadaş Sayıdır")
    } else {
        console.log(number1 + " ve " + number2 + " Arkadaş Sayı Değildir.")
    }
}
friendNumber(220, 284)