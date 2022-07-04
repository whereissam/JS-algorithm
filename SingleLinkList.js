// var date1 = new Date();
// function same(arr1, arr2){
//     var date2 = new Date();
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     for(let i = 0; i<arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//             if(correctIndex === -1){
//                 return false;
//             }
//             console.log(arr2)
//             arr2.splice(correctIndex, 1)
//     }
//     console.log(date1, date2)
//     console.log(date2 - date1)
//     return true
// }

// // var date1 = new Date();
// // var date2 = new Date();
// // var diff = date2 - date1; 

// console.log(same([1,2,1,3],[1,1,4,9]))



// function sames(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] =  (frequencyCounter2[val] || 0) +1
//     }
//     console.log(frequencyCounter1)
//     console.log(frequencyCounter2)
//     for(let key in frequencyCounter1){
//         if(!(key **2 in frequencyCounter2)){
//             return false
//         }
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }
// console.log(sames([1,2,1,3],[1,1,4,9]))

// //Anagram
// function validAnagram(first, second){
//     if(first.length !== second.length){
//         return false;
//     }

//     const lookup = {}

//     for(let i = 0; i<first.length; i++){
//         let letter = first[i]
//         //if letter exist, increment, otherwise set to 1
//         lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//     }

//     for(let i = 0; i<second.length; i++){
//         let letter = second[i]
//         //can't find letter or letter is zero then it's not an anagram
//         if(!lookup[letter]){
//             return false;
//         }else{
//             lookup[letter] -= 1;
//         }
//     }
//     return true
// }

// function sumZero(arr){
//     for(let i =0; arr.length; i++){
//         for(let j = i+1; j< arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// } 

// console.log(sumZero([-9,-4,-3,-2,-1,0,1,2,5,9]))

// function sumZeros(arr){
//     let left = 0
//     let right = arr.length -1
//     while(left < right){
//         let sum = arr[left] + arr[right]
//         if(sum === 0){
//             return [arr[left], arr[right]]
//         }else if(sum > 0){
//             right --
//         }else{
//             left ++
//         }
//     }
// }

// console.log(sumZeros([-4,-3,-2,-1,0,1,2,5]))

// function countUniqueValue(arr){
//     if(arr.length == 0) return 0
//     var i = 0;
//     for(var j =1; j<arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//         console.log(i, j)
//     }
//     return i + 1
// }

// console.log(countUniqueValue([1,2,3,3,4,4,5,6,7]))

// function maxSubarraySum(arr, num){
//     if(num > arr.length){
//         return null;
//     }
//     var max = -Infinity;
//     for(let i = 0; i<arr.length - num + 1; i++){
//         temp = 0;
//         for(let j = 0; j<num; j++){
//             temp+=arr[i+j]
//         }
//         if(temp > max){
//             max = temp;
//         }
//         console.log(temp, max)

//     }
//     return max;
// }

// function maxSubarraySum(arr,num){
//     let maxSum = 0;
//     let tempSum = 0;
//     if(arr.length < num) return null;
//     for(let i = 0; i<num; i++){
//         maxSum += arr[i]
//     }
//     tempSum = maxSum;
//     for(let i = num; i<arr.length;i++){
//         tempSum = tempSum - arr[i - num] + arr[i]
//         maxSum = Math.max(maxSum, tempSum)
//         console.log(tempSum, maxSum)
//     }
//     return maxSum
// }
// console.log(maxSubarraySum([1,0,9,1,1,3,4,6,9], 3))//19

// function search(arr, val){
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] === val){
//             return i;
//         }
//     }
//     return -1
// }

// function search(array, val){
//     let min = 0;
//     let max = array.length -1;

//     while (min <= max){
//         let middle = Math.floor((min + max) /2)
//         let currentElement = array[middle]

//         if(array[middle] < val){
//             min = middle + 1
//         }
//         else if(array[middle] > val){
//             max = middle -1
//         }
//         else{
//             return middle;
//         }
//     }
//     return -1
// }

// function takeShower() {
//     return 'Showing'
// }

// function eatBreakfast() {
//     let meal = cookFood()
//     return `Eating ${meal}`
// }

// function cookFood() {
//     let items = ["Oatmeal","Eggs","Protein shake"]
//     return items[Math.floor(Math.random()*items.length)]
// }

// function wakeUP() {
//     takeShower()
//     eatBreakfast()
//     console.log('Ok ready to go to walk')
// }

// wakeUP()

// function countDown(num){
//     if(num <= 0){
//         console.log("All down")
//         return 
//     }
//     console.log(num)
//     num--
//     countDown(num)
// }

// function countDown(num){
//     for(let i = num; i>0; i--){
//         console.log(i)
//     }
//     console.log("All down")
// }

// countDown(5)

// function sumRange(num){
//     if(num === 1) return 1;
//     return num + sumRange(num-1)
// }

// console.log(sumRange(4)) //10

// function factorial(num){
//     let total = 1
//     for(let i = num; i>1; i--){
//         total *= i
//     }
//     return total;
// }

// function factorial(num){
//     if(num === 1) return 1
//     return num * factorial(num-1)
// }

// console.log(factorial(5))

function outer (input) {
    var outerScopedVariable = []

    function helper (helperInput) {
        //modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
}

// function collectOdds(arr){
//     let result = []

//     function helper(helperInput){
//         if(helperInput.length === 0){
//             return
//         }

//         if(helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }

//         helper(helperInput.slice(1))
//     }

//     helper(arr)

//     return result

// }

// function collectOddsValue(arr){
//     let newArr = []

//     if(arr.length === 0){
//         return newArr
//     }

//     if(arr[0] % 2 !== 0){
//         newArr.push(arr[0])
//     }

//     newArr = newArr.concat(collectOddsValue(arr.slice(1)))
//     return newArr
// }

// function linearSearch(arr, val){
//     for(var i =0; i<arr.length; i++){
//         if(arr[i] === val){
//             return i;
//         }
//     }
//     return -1
// }

// linearSearch([34,56,1,2],1)

// function binarySearch(arr, val){
//     let start = 0;
//     let end = arr.length -1;
//     let middle = Math.floor((start + end) / 2)
//     // console.log(start, middle, end)
//     while(arr[middle] !== val && start <= end){
//         if(arr[middle] > val){
//             end = middle - 1
//         }else{
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2)
//     }
//     console.log(start, middle, end)
//     if(arr[middle] === val){
//         return middle
//     }
//     return -1;
// }

// binarySearch([2,5,6,9,14,15,28], 15)

// function naiveSearch(long, short){
//     let count = 0
//     for(let i =0;i<long.length; i++){
//         for(let j = 0;j<short.length; j++){
//             console.log(short[j],long[i+j])
//             if(short[j] !== long[i+j]){
//                 break
//             }
//             if(j === short.length - 1){
//                 console.log('Find one')
//                 count++ ;
//             }
//         }

//     }
//     return count
// }

// naiveSearch("lorie loled", "lo")

// function numberCompare(num1, num2){
//     return num2 - num1
// }

// console.log([6,4,15,10].sort(numberCompare))

// function compareByLen(str1, str2){
//     return str2.length - str1.length
// }

// console.log(["Steele", "Colt","Data structure", "Algorithm"].sort(compareByLen))

// function bubbleSort(arr){
//     for(var i = arr.length; i > 0 ; i--){
//         for(var j =0; j< i - 1; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 //swap
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([37,45,29,8]))

// function bubbleSort(arr){
//     let noSwaps;
//     for(var i = arr.length; i > 0 ; i--){
//         noSwaps = true
//         for(var j =0; j< i - 1; j++){
//             console.log(arr, arr[j], arr[j+1])
//             if(arr[j] > arr[j+1]){
//                 //swap
//                 var temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//                 noSwaps = false
//             }
//         }
//         if(noSwaps) break
//     }
//     return arr
// }

// console.log(bubbleSort([37,45,29,8]))

// function selectionSort(arr){
//     for(let i = 0; i<arr.length; i++){
//         let lowest = i
//         for(var j = i+1; j<arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             let temp = arr[i]
//             arr[i] = arr[lowest]
//             arr[lowest] = temp
//         }
//     }
//     return arr;
// }

// selectionSort([34,22,10,19,7])

// function selectionSort(arr){
//     const swap = (arr, idx1, idx2) => ([arr[idx1], arr[idx2] = [arr[idx2], arr[idx1]]])

//     for(let i = 0; i<arr.length; i++){
//         let lowest = i
//         for(var j = i+1; j<arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest) swap(arr, i, lowest)
//     }
//     return arr;
// }

// function insertionSort (arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i]
//         console.log(currentVal)
//         for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             console.log(j)
//             arr[j + 1] = arr[j]
//             console.log(arr)
//         }
//         console.log('j', j)
//         arr[j + 1] = currentVal
//         console.log('Arr ', arr)
//     }
//     return arr
// }

// console.log(insertionSort([2, 1, 9, 6, 15, 76, 4]))

// function merge (arr1, arr2) {
//     let i = 0
//     let j = 0
//     let results = []
//     while (i < arr1.length && j < arr2.length) {
//         if (arr2[j] > arr1[i]) {
//             results.push(arr1[i])
//             i++
//         } else {
//             results.push(arr2[j])
//             j++
//         }
//     }
//     while (i < arr1.length) {
//         results.push(arr1[i])
//         i++
//     }
//     while (j < arr2.length) {
//         results.push(arr2[j])
//         j++
//     }

//     return results
// }

// // console.log(merge([1, 10, 50], [2, 14, 99, 100]))

// function mergeSort (arr) {
//     if (arr.length <= 1) return arr
//     let mid = Math.floor(arr.length / 2)
//     let left = mergeSort(arr.slice(0, mid))
//     let right = mergeSort(arr.slice(mid))
//     return merge(left, right)
// }

// console.log(mergeSort([10, 5, 1, 36, 24, 76, 73]))

// function pivot (arr, start = 0, end = arr.length + 1) {
//     function swap (array, i, j) {
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }

//     //assuming the pivot is always the first element
//     var pivot = arr[start]
//     var swapIdx = start
//     for (let i = start + 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             swapIdx++
//             swap(arr, swapIdx, i)
//             console.log(arr)
//         }
//     }
//     //Swap the pivot from the start the swapPoint
//     swap(arr, start, swapIdx)
//     console.log(arr)
//     return swapIdx
// }

// function quicksort (arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         let pivotIndex = pivot(arr, left, right) //3
//         //left
//         quicksort(arr, left, pivotIndex - 1)
//         //right
//         quicksort(arr, pivotIndex + 1, right)
//     }
//     return arr
// }

// quicksort([4, 8, 2, 1, 5, 7, 6, 3]) //[1, 2, 3, 4, 5, 6, 7, 8]

// function getDigit (num, i) {
//     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// }

// function digitCount (num) {
//     if (num === 0) return 1
//     return Math.floor(Math.log(Math.log10(Math.abs(num)))) + 1
// }

// function mostDigits (nums) {
//     let maxDigits = 0
//     for (let i = 0; i < nums.length; i++) {
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]))
//     }
//     return maxDigits
// }

// function radixSort (nums) {
//     let maxDigitsCount = mostDigits(nums)
//     for (let k = 0; k < maxDigitsCount; k++) {
//         let digitBuckets = Array.from({ length: 10 }, () => [])
//         for (let i = 0; i < nums.length; i++) {
//             let digit = getDigit(nums[i], k)
//             digitBuckets[digit].push(nums[i])
//         }
//         console.log(digitBuckets)
//         nums = [].concat(...digitBuckets)
//         console.log(nums)
//     }
//     return nums
// }

// console.log(radixSort([23, 354, 6547497, 20, 4, 111, 9746]))

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
// var first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('how')
// first.next.next.next = new Node('you')
// first.next.next.next.next = new Node('how')


class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push (val) {
        var newNode = new Node(val)
        if (!this.head) {//first time get the head
            this.head = newNode
            this.tail = this.head
        } else { //next time update only tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop () {
        if (!this.head) return undefined
        var current = this.head
        var newTail = current //current and tail will begin in the same place
        while (current.next) { //record the next, if there has new node, set newTail new value
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }

    shift () {
        if (!this.head) return undefined
        var currentHead = this.head
        this.head = currentHead.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift (val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
    }

    get (index) {
        if (index < 0 || index >= this.length) return null
        var counter = 0
        var current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    set (index, val) {
        var foundNode = this.get(index)
        if (foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert (index, val) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return !!his.push(val)
        if (index === 0) return !!this.unshift(val)
        var newNode = new Node(val)
        var prev = this.get(index - 1)
        var temp = pre.next
        prev.next = newNode
        newNode.next = temp
        this.length++
        return true
    }

    remove (index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        var previousNode = this.get(index - 1)
        var removed = previousNode.next()
        previousNode.next = removed.next()
        this.length--
        return removed
    }

    reverse () {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

    print () {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

var list = new SinglyLinkedList()
list.push("hello")
list.push('Goodbye')
list.push('!')




