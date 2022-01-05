//INPUT
let numberArr = []
const numberInputEl = document.querySelector('#number-input')
const btnAddNumber = document.querySelector('#btn-add-number')
//BT1
const btnSumPositive = document.querySelector('#btn-sum-positive')
const resultSumPositiveEl = document.querySelector('#result-sum-positive')
//BT2
const btnCountPositive = document.querySelector('#btn-count-positive')
const resultCountPositiveEl = document.querySelector('#result-count-positive')
//BT3
const btnMinNumber = document.querySelector('#btn-min-number')
const resultMinNumberEl = document.querySelector('#result-min-number')
//BT4
const btnMinPositive = document.querySelector('#btn-min-positive')
const resultMinPositiveEl = document.querySelector('#result-min-positive')
//BT5
const btnLastEven = document.querySelector('#btn-last-even')
const resultLastEvenEl = document.querySelector('#result-last-even')
//BT6
const firstIndexEl = document.querySelector('#first-index')
const secondIndexEl = document.querySelector('#second-index')
const btnChangeValue = document.querySelector('#btn-change-value')
const resultChangeValueEl = document.querySelector('#result-change-value')
//BT7
const btnSort = document.querySelector('#btn-sort')
const resultSortEl = document.querySelector('#result-sort')
//BT8
const btnFirstPrime = document.querySelector('#btn-first-prime')
const resultFirstPrimeEl = document.querySelector('#result-first-prime')
//BT9
const realNumberInputEl = document.querySelector('#real-number-input')
const btnAddRealNumber = document.querySelector('#btn-add-real-number')
const btnCountInt = document.querySelector('#btn-count-int')
const resultCountIntEl = document.querySelector('#result-count-int')
//BT10
const btnCompare = document.querySelector('#btn-compare')
const resultCompareEl = document.querySelector('#result-compare')

//Add Number
btnAddNumber.addEventListener('click', function () {
    let numberInput = numberInputEl.value.trim() * 1
    AddNumber(numberInput, numberInputEl)
})

//Function Add New Number to Array
function AddNumber(numInput, numInputEl) {
    numberArr.push(numInput)
    numInputEl.value = ''  //Clear data input element
}

// BT 1 Tính tổng số dương
btnSumPositive.addEventListener('click', function () {
    resultSumPositiveEl.innerHTML = SumPositive(numberArr)
})

function SumPositive(arr) {
    let sumPositive = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sumPositive += arr[i]
        }
    }
    return sumPositive
}

//BT 2 Đếm số lượng số dương
btnCountPositive.addEventListener('click', function () {
    resultCountPositiveEl.innerHTML = CountPositive(numberArr)
})

function CountPositive(arr) {
    let countPositive = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            countPositive++
        }
    }
    return countPositive
}

//BT 3 Tìm số nhỏ nhất
btnMinNumber.addEventListener('click', function () {
    resultMinNumberEl.innerHTML = MinNumber(numberArr)
})

function MinNumber(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i]
    }
    return min
}

//BT 4 Tìm số dương nhỏ nhất
btnMinPositive.addEventListener('click', function () {
    resultMinPositiveEl.innerHTML = MinPositive(numberArr)
})

function MinPositive(arr) {
    let min
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && (min == undefined || arr[i] < min))
            min = arr[i]
    }
    return min
}

//BT5 Tìm số chẵn cuối cùng
btnLastEven.addEventListener('click', function () {
    resultLastEvenEl.innerHTML = LastEven(numberArr)
})

function LastEven(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0)
            return "Số chẵn cuối cùng là: " + arr[i]
    }
    return -1
}

//BT6 Đổi chỗ 2 giá trị

btnChangeValue.addEventListener('click', function () {
    let changeValueArr = [...numberArr]
    let firstIndex = firstIndexEl.value - 1
    let secondIndex = secondIndexEl.value - 1
    resultChangeValueEl.innerHTML = ChangeValue(firstIndex, secondIndex, changeValueArr, numberArr)

})

function ChangeValue(firstIndex, secondIndex, changeArr, numArr) {
    //Cách 1
    // let temp = changeArr[firstIndex]
    // changeArr[firstIndex]=changeArr[secondIndex]
    // changeArr[secondIndex]=temp

    //Cách 2
    [changeArr[firstIndex], changeArr[secondIndex]] = [changeArr[secondIndex], changeArr[firstIndex]]
    return 'Mảng trước khi đổi là: ' + numArr + '<br>' + 'Mảng đã đổi là ' + changeArr
}

//BT7 Sắp xếp mảng
btnSort.addEventListener('click', function () {
    let sortArr = [...numberArr]
    resultSortEl.innerHTML = 'Mảng trước khi sắp xếp là: ' + numberArr + '<br>' + "Mảng đã sắp xếp là: " + sortArr.sort((a, b) => a - b)
})

//BT8 Tìm số nguyên số đầu tiên
btnFirstPrime.addEventListener('click', function () {
    resultFirstPrimeEl.innerHTML = FirstPrime(numberArr)
})

function FirstPrime(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1) {
            if (isPrime(arr[i]))
                return "Số nguyên tố đầu tiên là: " + arr[i]
        }
    }
    return -1
}

function isPrime(num) {
    if (num == 2 || num == 3)
        return true
    else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0)
                return false
        }
        return true
    }
}

//BT9 Nhập thêm một mảng số thực, tìm số lượng số nguyên.
btnAddRealNumber.addEventListener('click', function () {
    let realNumberInput = realNumberInputEl.value * 1
    AddNumber(realNumberInput, realNumberInputEl)
})

btnCountInt.addEventListener('click', function () {
    resultCountIntEl.innerHTML = CountInt(numberArr)
})

function CountInt(arr) {
    let countInt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == Math.floor(arr[i]))
            countInt++
    }
    return "Số lượng số nguyên là: " + countInt
}

//BT10 So sánh số lượng số dương và số âm
btnCompare.addEventListener('click', function () {
    resultCompareEl.innerHTML=Compare(numberArr)
    console.log(numberArr)
})
function Compare(arr) {
    let positiveNum =0
    let negativeNum =0
    for (let i = 0; i <arr.length ; i++) {
        if(arr[i]>0){
            positiveNum++
        }else if(arr[i]<0){
            negativeNum++
        }
    }
    if(positiveNum>negativeNum)
        return "Số lượng số dương nhiều hơn"
    else if(negativeNum>positiveNum)
        return "Số lượng số âm nhiều hơn"
    else return "Số lượng số dương và số âm bằng nhau"
}