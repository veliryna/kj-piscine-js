const deepCopy = (inObject) => {
    let outObject, value, key
    if (typeof inObject !== "object" || inObject === null || inObject instanceof RegExp) {
      return inObject
    }
  
    outObject = Array.isArray(inObject) ? [] : {}
    for (key in inObject) {
      value = inObject[key]
      outObject[key] = deepCopy(value)
    }
  
    return outObject
  }