/*1000'e kadarki tüm asal sayıları listeleyen programı yazınız. */
console.log("----------------------------------- 1'den 1000'e kadar Asal Sayılar ---------------------------------")

function  primeNumber(number) {
  let counter = 0
  let primeNumbers = []

  for (let i = 2; i <= number; i++) {
    let checkPrimeNumber = 0
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        checkPrimeNumber = 1
      }
    }

    if (checkPrimeNumber == 0) {
      primeNumbers.push(i)
      counter++
    }
  }

  console.log(primeNumbers)
  console.log("1'den 1000'e kadar olan asal sayıların sayısı: " + counter)

}

primeNumber(1000)