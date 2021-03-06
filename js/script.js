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

// BT 1 T??nh t???ng s??? d????ng
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

//BT 2 ?????m s??? l?????ng s??? d????ng
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

//BT 3 T??m s??? nh??? nh???t
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

//BT 4 T??m s??? d????ng nh??? nh???t
btnMinPositive.addEventListener('click', function () {
    resultMinPositiveEl.innerHTML = MinPositive(numberArr)
})

function MinPositive(arr) {
    let min
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && (min == undefined || arr[i] < min))
            min = arr[i]
    }
    if (min != undefined)
        return "S??? d????ng nh??? nh???t l??: " + min
    else return 'Kh??ng c?? s??? d????ng ch???n trong m???ng'
}

//BT5 T??m s??? ch???n cu???i c??ng
btnLastEven.addEventListener('click', function () {
    resultLastEvenEl.innerHTML = LastEven(numberArr)
})

function LastEven(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0)
            return "S??? ch???n cu???i c??ng l??: " + arr[i]
    }
    return -1
}

//BT6 ?????i ch??? 2 gi?? tr???

btnChangeValue.addEventListener('click', function () {
    let changeValueArr = [...numberArr]
    let firstIndex = firstIndexEl.value
    let secondIndex = secondIndexEl.value
    resultChangeValueEl.innerHTML = 'M???ng tr?????c khi ?????i l??: ' + numberArr.join(', ') + '<br>' + 'M???ng ???? ?????i l?? ' + ChangeValue(firstIndex, secondIndex, changeValueArr).join(', ')
})

function ChangeValue(firstIndex, secondIndex, changeArr) {
    //C??ch 1
    // let temp = changeArr[firstIndex]
    // changeArr[firstIndex]=changeArr[secondIndex]
    // changeArr[secondIndex]=temp

    //C??ch 2
    [changeArr[firstIndex], changeArr[secondIndex]] = [changeArr[secondIndex], changeArr[firstIndex]]
    return changeArr
}

//BT7 S???p x???p m???ng
btnSort.addEventListener('click', function () {
    let sortArr = [...numberArr]
    resultSortEl.innerHTML = 'M???ng tr?????c khi s???p x???p l??: ' + numberArr.join(', ') + '<br>' + "M???ng ???? s???p x???p l??: " + sortArr.sort((a, b) => a - b).join(', ')
})

//BT8 T??m s??? nguy??n s??? ?????u ti??n
btnFirstPrime.addEventListener('click', function () {
    resultFirstPrimeEl.innerHTML = FirstPrime(numberArr)
})

function FirstPrime(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1) {
            if (isPrime(arr[i]))
                return "S??? nguy??n t??? ?????u ti??n l??: " + arr[i]
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

//BT9 Nh???p th??m m???t m???ng s??? th???c, t??m s??? l?????ng s??? nguy??n.
//Th??m s??? th???c
btnAddRealNumber.addEventListener('click', function () {
    let realNumberInput = realNumberInputEl.value * 1
    AddNumber(realNumberInput, realNumberInputEl)
})
//?????m s??? l?????ng s??? nguy??n
btnCountInt.addEventListener('click', function () {
    resultCountIntEl.innerHTML = "S??? l?????ng s??? nguy??n l??: " + CountInt(numberArr)
})

function CountInt(arr) {
    let countInt = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == Math.floor(arr[i]))
            countInt++
    }
    return countInt
}

//BT10 So s??nh s??? l?????ng s??? d????ng v?? s??? ??m
btnCompare.addEventListener('click', function () {
    resultCompareEl.innerHTML = Compare(numberArr)
})

function Compare(arr) {
    let positiveNum = 0
    let negativeNum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNum++
        } else if (arr[i] < 0) {
            negativeNum++
        }
    }
    if (positiveNum > negativeNum)
        return "S??? l?????ng s??? d????ng nhi???u h??n"
    else if (negativeNum > positiveNum)
        return "S??? l?????ng s??? ??m nhi???u h??n"
    else return "S??? l?????ng s??? d????ng v?? s??? ??m b???ng nhau"
}