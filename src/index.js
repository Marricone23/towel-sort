
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix){
    return []
  }
  const newMatrix = [];
  matrix.map((item, index) =>
  index % 2 == 1 ? newMatrix.push(item.reverse()) : newMatrix.push(item)
);
 
 return newMatrix.flat();
  
}
