class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size)
  }

  _hash (key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  set (key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }
  get (key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
      return this.keyMap[index]
    }
    return undefined
  }
  values () {
    let valueArr = []
    for (let i = 0; i < this.keyMap.length; i++) { //check the first array
      console.log(this.keyMap[i])
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) { //check subarray
          if (!valueArr.includes(this.keyMap[i][j][1])) {
            valueArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valueArr
  }
  keys () {
    let keysArr = []
    for (let i = 0; i < this.keyMap.length; i++) { //check the first array
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) { //check subarray
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
}

let ht = new HashTable(5)
ht.set('Hello world', 'goodbye')
ht.set('dogs', 'are cool')
ht.set('cats', 'are cute')
ht.set('wow', 'is wow')
ht.set('LLLooolll', 'is Lol')