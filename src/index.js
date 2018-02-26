class Sorter {
  constructor() {
    this.sorter = [];
    }

  add(element) {
    this.sorter.push(element);

  }

  at(index) {
    return this.sorter[index];
  }

  get length() {
    return this.sorter.length;
  }

  toArray() {
    return this.sorter;
  }

  sort(indices) {
      var sorter2 = [];
			for (var i = 0; i < indices.length; i++){
				sorter2[i] = this.sorter[indices[i]]
        }
      function sort(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        }
        sorter2.sort(sort);
        indices.sort(sort);
        for (i = 0; i < indices.length; i++){
          this.sorter[indices[i]] = sorter2[i];
        }
        return this.sorter;

  }

  setComparator(compareFunction) {
    var age = new Sorter;// your implementation
  }
}

module.exports = Sorter;
