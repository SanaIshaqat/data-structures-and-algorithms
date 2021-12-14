const leftJoin=(leftHash, rightHash) =>{

    let leftJoinArr = [];
    let commonData = [];
    for (let i = 0; i < leftHash.storage.length; i++) {
      commonData = [];
      if (leftHash.storage[i]) {
        const leftKey = Object.keys(leftHash.storage[i].head.value);
        const leftVal = Object.values(leftHash.storage[i].head.value);
        commonData = commonData.concat(leftKey);
        commonData = commonData.concat(leftVal);
        if (rightHash.storage[i]) {
          const rightKey = Object.keys(rightHash.storage[i].head.value);
          const rightVal = Object.values(rightHash.storage[i].head.value);
          if (rightKey[0] === leftKey[0]) {
            commonData = commonData.concat(rightVal);
          }
        } else {
          commonData.push("null");
        }
        leftJoinArr.push(commonData);
      }
    }
    return leftJoinArr;
  };
  module.exports=leftJoin