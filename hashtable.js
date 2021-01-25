class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(item, value) {
    const address = this._hash(item);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push(item, value);
    return this.data;
  }

  get(item) {
    const address = this._hash(item);
    return this.data[address];
  }

  keys() {
    const resoult = [];
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        resoult.push(this.data[i]);
      }
    }
    return resoult;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const findFirstRecurring = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return arr[i];
      } else {
        return undefined;
      }
    }
  }
};

const testing = [0, 3, 6, 1, 9];

const findFirstRecurringHash = (arr) => {
  const map = {};
  for (var i of arr) {
    if (map[i] === false) {
      map[i] = true;
      return i;
    }
    map[i] = false;
  }
  return "Not find";
}; //O(n) space O(n)

console.log(findFirstRecurringHash(testing));
