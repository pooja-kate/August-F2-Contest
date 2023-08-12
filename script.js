let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  let copy = [
    { id: 4, name: 'Pooja', age: 22, profession: 'Trainee' },
    { id: 5, name: 'Pranali', age: 24, profession: 'developer' },
    { id: 6, name: 'Mom', age: 19, profession: 'Engineer' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    const developers = arr.filter(arr => arr.profession === "developer");
    console.log(developers);

    //Write your code here , just console.log
  }
  
  function addData() {
    let obj = {id:4,name:"susan",age:"20",profession:"intern"}
    arr.push(obj)
    console.log(arr);
    //Write your code here, just console.log

  }
  
  function removeAdmin() {
    const filteredEmployees = arr.filter(arr => arr.profession !== "admin");

  console.log(filteredEmployees)
    //Write your code here, just console.log
  }
  
  function concatenateArray() {
    console.log(arr.concat(copy))
    //Write your code here, just console.log
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }