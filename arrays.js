var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  const newArr = array.unshift(element);
  return newArr;
}

function addElementToEndOfArray(array, element) {
  const newArr = array.push(element);
  return newArr;
}
