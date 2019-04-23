
// ----- CALCULATE PI -----

// The formula for calculating PI is
// Pi = 4/1 - 4/3 + 4/5 - 4/7...

// A function is a block of code that you give a name to
// You can pass the function a value that will be 
// assigned to the name iterations
function calcPI(iterations){

    // This is a constant which has a value that can't change
    const piVal = 3.14159;

    // You assign names to numbers, text and functions
    // Variable names can't start with a number, contain
    // spaces, but can contain letters, numbers, underscores
    // or $ (Are case sensitive)
    let pi = 0, divisor = 1;

    // Numbers have 16 digits of precision so our PI
    // can't be bigger than that
   //  v5 = 0.11111111111111111;
    // console.log(v5 + 0.11111111111111111);

    // This loop will execute the code between { }
    // as long as the condition is true
    for(i = 0; i <= iterations; i++){
        pi = pi + (4/divisor) - (4/(divisor + 2));
        divisor += 4;
    }

    // You can change the value in an HTML element
    // by referring to its id with getElementById()
    // toFixed returns value to 10 decimal places
    document.getElementById("output1").value = pi.toFixed(10);
}


  // ----- CREATE A FIBONACCI SEQUENCE -----

  // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

  // This array can hold multiple values
  let fibList = [];

  function getFibList(howMany){

    
    for(i = 0; i < howMany; i++){
        fibList[i] = fib(i);
    }
    // Remove 1st item in array
    // fibList.pop() removes the last
    // fibList.splice(index, 1) woudl remove the item 
    // starting at the given index followed by the number of 
    // items to remove
    fibList.shift();

    // join will turn the array into a string whose values
    // a separated by commas
    document.getElementById("output1").value = fibList.join(", ");
  }

  // Will return individual numbers
  function fib(whichNum){
    let num1 = 1, num2 = 0, temp, i = 0;

    // The code between { } is executed as long as the
    // condition is true
    while(i < whichNum){
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
        i++;
    }
    return num2;
  }

  // ----- MADLIB GENERATOR -----

  // Create the MadLib using a ~ every place we want to 
  // enter a user supplied string
  let mLText = "My dear old ~ sat me down to hear some words of wisdom \n 1. Give a man a ~ and you ~ him for a day ~ a man to ~ and he'll ~ forever \n 2. He who ~ at the right time can ~ again \n 3. Always wear ~ ~ in case you're in a ~ \n 4. Don't use your ~ to wipe your ~ Always have a clean ~ with you";

  // Convert the string into an array where spaces determine
  // the individual pieces to put in each array cell
  let mLArray = mLText.split(" ");

  // Array that will hold user input
  let inputArray = [];

  function madLibGenerator(){
    createInputArray();

    // If this function returns true we know the user
    // didn't supply new data
    if(checkForMissingInput()){
        document.getElementById("output1").value = "Enter all values above";

    // If they did supply new data we can create the
    // custom MadLib
    } else {
        createMLSentence();
    }
  }

  function createInputArray(){
    
    // Get all the values the user entered by incrementing
    // from 0 to 13 to match the given ids 
    for(i = 0; i <= 13; i++){
        inputArray[i] = document.getElementById("i" + i).value;
    }
  }

  function checkForMissingInput(){
    
    // Create an array with the default values
    let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective", "Plural Verb", "Body Part", "Event"];

    // length tells us how many values the array has
    for(i=0; i < inputArray.length; i++){
        // Checks to see if input matches any of the defaults
        // If there are no matches a -1 is returned
        if(defaultArrayVals.indexOf(inputArray[i]) > -1 ){
            return true;
        }
    }
       return false;
  }

  // Cycle through all words in our default MadLib and
  // every place there is a ~ put in the user supplied 
  // values
  function createMLSentence(){
    let arrIndex = 0;
    for(i=0; i < mLArray.length; i++){
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrIndex];
        arrIndex++;
    }

    document.getElementById("output1").value = mLArray.join(" ");
  }