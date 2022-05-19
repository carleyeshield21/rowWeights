// This is the link of this JavaScript Challenge
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

function rowWeights(array){
    arr1 = []
    arr2 = []
    arr3 = []

    for(i=0; i<=array.length-1; i=i+2){
        arr1.push(array[i])
    }
    // console.log(arr1)
    sumOfarr1 = arr1.reduce(
        (a, b) => a + b,
      )
    // console.log(sumOfarr1)  

    // console.log('=====')

    for(i=1; i<=array.length-1; i=i+2){
        arr2.push(array[i])
    }
    // console.log(arr2)
    sumOfarr2 = arr2.reduce(
        (a, b) => a + b,
      )
    // console.log(sumOfarr2)

    arr3.push(sumOfarr1, sumOfarr2)
    console.log(arr3)
}
rowWeights([50, 60, 70, 80])
console.log('=====')
rowWeights([13, 27, 49])