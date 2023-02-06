function processTransactions(transActions) {
    if (!validateTransactions(transActions)) {
      throw new Error("Undefined collection of transactions");
    }
  
    const txCount = transActions.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  
    return sortByAmountThenName(txCount);
  }
// reduce() method to count the occurrences 
// of each transaction and store the results in an object



function sortByAmountThenName(txCount) {
    return Object.entries(txCount)
      .sort(([aKey, aCount], [bKey, bCount]) => bCount - aCount || aKey.localeCompare(bKey))
      .map(([key, count]) => `${key} ${count}`);
  }

  //Object.entries() method to convert the object into an 
//   array of [key, value] pairs, which can then be sorted and 
//   transformed back into an object using the Array.sort() 
//   and Array.reduce() methods, respectively.


function validateTransactions(transactions) {
    return transactions !== undefined && transactions !== null;
  }
  
module.exports = processTransactions;