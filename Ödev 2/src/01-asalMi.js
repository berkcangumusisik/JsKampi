/*
JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
Örnek kullanım : findPrime(2,5,8,21, 13) findPrime(3,5)
*/

console.log("----------------------------------- Asal Sayı Uygulaması ---------------------------------")
function findPrime(...numbers) {
  let counter
  for (let i = 0; i < numbers.length; i++) {
    counter = 0
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        counter++
      }
    }
    if (counter == 2) {
      console.log(numbers[i] + " asal sayıdır")
    } else {
      console.log(numbers[i] + " asal sayı değildir")
    }
  }
}

findPrime(2, 5, 8, 21, 13);
findPrime(3, 5);
