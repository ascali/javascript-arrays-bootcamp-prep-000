var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const array = [1]; 

function addElementToBeginningOfArray(array, element){
  const arrays = [1]; 
  arrays.unshift(element);
  return arrays;
}
addElementToBeginningOfArray([1], 'foo')
addElementToBeginningOfArray(array, 'foo')

function destructivelyAddElementToBeginningOfArray(array, element){
  const arrays = array; 
  array.unshift(element);
  return arrays;
}
destructivelyAddElementToBeginningOfArray([1], 'foo')

function addElementToEndOfArray(array, element){
  const arrays = [1]; 
  arrays.push(element);
  return arrays;
}

addElementToEndOfArray([1], 'foo') 
addElementToEndOfArray(array, 'foo')

function destructivelyAddElementToEndOfArray(arr, elem){
    var a = arr;
    a.push(elem)
    return a;
}

destructivelyAddElementToEndOfArray([1], 'foo')
const array1 = [1];
destructivelyAddElementToEndOfArray(array1, 'foo')


function accessElementInArray(arr, elem){
  return arr[elem];
}

accessElementInArray([1, 2, 3], 2)


function destructivelyRemoveElementFromBeginningOfArray(array){
  var a = array.slice(-2);
  a = array;
  return a;
}
destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])
const array2 = [1, 2, 3];
destructivelyRemoveElementFromBeginningOfArray(array2);
