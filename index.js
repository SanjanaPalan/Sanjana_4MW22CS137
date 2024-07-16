function findMax(numbers) {
    if (numbers.length === 0) {
      return null;
    }
  
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  

  const array = [1,4,3,8,6,10,45];
  const maxNumber = findMax(array);
  console.log(maxNumber);

 




