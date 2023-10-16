const originArray = [32, 14, 42, 4, 97, 32];

console.log('Масив до видалення елемента:',originArray);

function removeElement (array, itemToRemove) {
    let arrayWithRemoveElement = array.splice(array.indexOf(itemToRemove), 1);
    return arrayWithRemoveElement;
};

removeElement(originArray, 97);
console.log('Масив після видалення елемента:',originArray);
