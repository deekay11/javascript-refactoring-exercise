// var txr = [];

// function processTransactions(transActions) {

//     txr = [];

//     if(!validateTransactions(transActions)) {
//         throw new Error("Undefined collection of transactions")
//     }

//     let txCount = {}

//     const numberOfTransactions = transActions.length;

//     for(var i = 0; i < numberOfTransactions; i++) {
//         const transaction = transActions[i];
//         txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
//     }

//     txCount = sortByAmountThenName(txCount);
    
//     // Place them back in array for returning
//     Object.keys(txCount).forEach(function (key, index) {
//         txr[index] = `${key} ${txCount[key]}`;
//     });

//     return txr;
// }
function processTransactions(transActions) {
    if (!validateTransactions(transActions)) {
      throw new Error("Undefined collection of transactions");
    }
  
    const txCount = transActions.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  );
  }
    return sortByAmountThenName(txCount
// reduce() method to count the occurrences 
// of each transaction and store the results in an object



// function sortByAmountThenName(txCount) {
//     let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
//         return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
//     );
//     let sortedResults = {};
//     for(let objectKey of sortedKeys) {
//         sortedResults[objectKey] = txCount[objectKey];
//     }
//     return sortedResults;
// }
function sortByAmountThenName(txCount) {
    return Object.entries(txCount)
      .sort(([aKey, aCount], [bKey, bCount]) => bCount - aCount || aKey.localeCompare(bKey))
      .map(([key, count]) => `${key} ${count}`);
  }

  //Object.entries() method to convert the object into an 
//   array of [key, value] pairs, which can then be sorted and 
//   transformed back into an object using the Array.sort() 
//   and Array.reduce() methods, respectively.






// function validateTransactions(transactions) {
//     if(transactions === undefined) {
//         return false;
//     } 

//     return true;
// }
function validateTransactions(transactions) {
    return transactions !== undefined && transactions !== null;
  }
  
module.exports = processTransactions;