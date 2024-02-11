function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) && typeof livingCost !== 'number') {
    return 'invalid input';
  }
  let totalEarning = 0;
  for (let num of arr) {
    if (num >= 3000) {
      let taxExcluded = num - num * 0.2;
      totalEarning += taxExcluded;
    } else {
      totalEarning += num;
    }
  }
  const totalSaving = totalEarning - livingCost;
  if (totalSaving >= 0) {
    return totalSaving;
  } else {
    return 'Earn More';
  }
}

// console.log(monthlySavings([1000, 2000, 2500], 5000));
