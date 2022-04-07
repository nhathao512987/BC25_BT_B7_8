/* Nhập Số Nguyên Và Lưu Trữ Trong Mảng */
function getArray () {
    var array = document.getElementById("integergnumber").value;
    console.log(array.split(","));
    console.log(array.split(",").map( number => number*1));

    return array.split(",").map( number => number*1);
}

/*
*       i          0  1  2   3  4    => Index
* integerArray = [-1, 3, 5, -6, 8]   => Value 
* integerArray[3] = -6
* integerArray[0] = -1
*/

// Tính Tổng Các Số Nguyên Dương
function summary(integerArray) 
{
    var total = 0;
    for ( i = 0 ; i < integerArray.length; i++ ) {
        if ( integerArray[i] > 0 ) {
            total += integerArray[i]
        }   
    }
    return total;
}

document.getElementById("btnTotal").onclick = function () {
    var t = getArray();
    document.getElementById("noti1").innerHTML = summary(t);
} 


// Đếm các số nguyên dương
function countPositiveNumber (integerArray) 
{
    var count= 0;
    for ( i = 0 ; i < integerArray.length; i++ ) {
        if ( integerArray[i] > 0 ) {
            count += 1;
        }   
    }
    return count;
}

document.getElementById("btnCount").onclick = function () {
    var c = getArray();
    document.getElementById("noti2").innerHTML = countPositiveNumber(c);
} 

// Tìm số nhỏ nhất trong mảng
function searchMinNumber (integerArray) 
{

    var min = integerArray[0];
    for ( i = 1 ; i < integerArray.length; i++ ) {
        if ( min > integerArray[i]) {
            min = integerArray[i];
        }   
    }
    return min;
}

/* Giải thích
*       i          0  1  2   3  4    => Index
* integerArray = [-1, 3, 5, -6, 8]   => Value 


* integerArray[0] > integerArray[1] - false
* min = integerArray[0] 
* integerArray[0] > integerArray[3] - true
* min = integerArray[3] 
*/

document.getElementById("btnMin").onclick = function () {
    var smn = getArray();
    document.getElementById("noti3").innerHTML = searchMinNumber(smn);
}

// Tìm số dương nhỏ nhất trong mảng
function searchMinPositiveNumber (integerArray) 
{

    var positiveMin = -1;
    for ( i = 0 ; i < integerArray.length; i++ ) {
        if (( positiveMin > integerArray[i] || positiveMin == -1) && integerArray[i]  > 0 ) {
              positiveMin = integerArray[i] ;
        }   
    }
    return positiveMin;
}

/* Giải thích
*       i          0  1  2   3  4    => Index
* integerArray = [-1, 3, 5, -6, 8]   => Value 
* vơi i = -1, -1 < 0 , không hiển thị
* vơi i = 1 , 3 > 0 , positiveMin = 3 , 3 là số dương nhỏ nhất
*/

document.getElementById("btnPositiveMin").onclick = function () {
    var spmn = getArray();
    var positiveMin = searchMinPositiveNumber(spmn);

    if (positiveMin > 0) {
        document.getElementById("noti4").innerHTML = positiveMin;
    } else {
        document.getElementById("noti4").innerHTML = "không có số dương nhỏ nhất";
    }
}

// Số chẵn cuối cùng trong mảng
function searchLastEvenNumber (integerArray)
{
    var lastEvenNumber = null ;
    for ( i = 0 ; i < integerArray.length ; i++ ) {
        if ( integerArray [i] % 2 == 0 ) {
            lastEvenNumber = integerArray [i];
        }   
    }
    return lastEvenNumber;
}

document.getElementById("btnLastEven").onclick = function () {
    var slen = getArray();
    var lastEvenNumber = searchLastEvenNumber(slen)
    if (lastEvenNumber !== null) {
        document.getElementById("noti5").innerHTML = lastEvenNumber;
    } else {
        document.getElementById("noti5").innerHTML = "-1";
    }
}

// Đổi 2 vị trí trong mảng theo vị trí
function changePositionTwoNbumer(integerArray, posA, posB) 
{
    let tmp = integerArray[posA];
    integerArray[posA] = integerArray[posB];
    integerArray[posB] = tmp;

    return integerArray;
}

document.getElementById("btnSwap").onclick = function () {
    var posA = document.getElementById("vtm").value;
    var posB= document.getElementById("vth").value;
    var cptn = getArray();
    cptn = changePositionTwoNbumer(cptn, posA, posB);
    document.getElementById("noti6").innerHTML = cptn;

    // không cần đặt biến tạm
    a = a + b; // a = 5; b = 4
    b = a - b; b // a = 5; b = 1;
    a = a - b; // a = 4; b = 1;
}

// Sắp xếp thứ tự trong mảng
function sortPotion (integerArray) {
    integerArray.sort ((a,b) => a - b );
    return integerArray;
}

document.getElementById("btnArray").onclick = function () {
    document.getElementById("noti7").innerHTML = sortPotion(getArray());
}

// tìm số nguyên tố đầu tiên trong mảng
function checkPrimeNumber (x)
{
    if (x < 2) {
        return false;
    } else {
        var result = true; i = 2; 
        while ( i < x) {
            if ( x % i == 0) {
                result = false;
                break;
            }
            i++;
        } 
        return result;
    }
}

function searchFirstNumber (integerArray) 
{   
    var firstNumber = -1, i;
    for ( i = 0 ; i < integerArray.length; i++) {
        if (checkPrimeNumber(integerArray[i])) {
            firstNumber = integerArray[i];
            break;
        }
    }
    return firstNumber;
}

document.getElementById("btnFirstPrimer").onclick = function () {
    document.getElementById("noti8").innerHTML = searchFirstNumber(getArray());
}

// tìm có bao nhiêu số dương
function getArGay () {
    var array = document.getElementById("realnumber").value;
    console.log(array.split(","));
    console.log(array.split(",").map( number => number*1));

    return array.split(",").map( number => number*1);
}


function countIntegerNumber (integerArray) {
    var integerNumber = 0 , i = 0; 
    for ( i= 0; i < integerArray.length; i++) { 
        console.log(integerArray[i]) 
        if ( Number.isInteger(integerArray[i]) == true) {
            integerNumber += 1;
        }
    }
    return integerNumber;
}

document.getElementById("btnRealNumber").onclick = function () {
    var lumber = getArGay();
    document.getElementById("noti9").innerHTML = countIntegerNumber(lumber);
}

// so sánh số lượng số dương, số âm 
function countNegativeNumber (integerArray) 
{
    var count= 0;
    for ( i = 0 ; i < integerArray.length; i++ ) {
        if ( integerArray[i] < 0 ) {
            count += 1;
        }   
    }
    return count;
}

document.getElementById("btnCompare").onclick = function () {
    var myArray = getArray();
    var countPositive = countPositiveNumber(myArray);
    var countNegative = countNegativeNumber(myArray);
     if ( countPositive > countNegative  ) {
        document.getElementById("noti10").innerHTML = " Rất là Dương luôn";
     }  else if ( countPositive < countNegative ) {
        document.getElementById("noti10").innerHTML = " Rất là Âm luôn"; 
     }  else {
        document.getElementById("noti10").innerHTML = " Rất là Âm Dương luôn"; 
     }
}