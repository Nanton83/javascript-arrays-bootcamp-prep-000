var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(chocolateBars, element){
  return["Goodbar", ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBar, element){
chocolateBars.unshift('wonka');
return chocolateBars;
}
