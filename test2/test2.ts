class test2{
    array:number [];
   constructor(array:number[]){
    this.array =array;
   }
   sort(){
    const length = this.array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.array[j] > this.array[j + 1]) {
            // Swap elements
            const temp = this.array[j];
            this.array[j] = this.array[j + 1];
            this.array[j + 1] = temp;
          }
        }
      }
   }
   display(){
    console.log("Sorted Numbers:", this.array);
   }
}

// Create an instance of the test2class with an array of numbers
const sorter = new test2([12,3,5,78,32,89,2,1,56]);

// Sort the array using bubble sort
sorter.sort();
// Display the sorted array
sorter.display();