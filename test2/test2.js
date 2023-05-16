var test2 = /** @class */ (function () {
    function test2(array) {
        this.array = array;
    }
    test2.prototype.sort = function () {
        var length = this.array.length;
        for (var i = 0; i < length - 1; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    // Swap elements
                    var temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                }
            }
        }
    };
    test2.prototype.display = function () {
        console.log("Sorted Numbers:", this.array);
    };
    return test2;
}());
// Create an instance of the test2class with an array of numbers
var sorter = new test2([12, 3, 5, 78, 32, 89, 2, 1, 56]);
// Sort the array using bubble sort
sorter.sort();
// Display the sorted array
sorter.display();
