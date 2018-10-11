var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  const newArr = array;
  return newArr.unshift(element);
}

function addElementToEndOfArray(array, element) {
  const newArr = array;
  return newArr.push(element);
}
