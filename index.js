// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver,key,value)
{
  let driver2 =  Object.assign({},driver);
  driver2[key] = value;
  return driver2;
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value)
{
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver,key)
{
  let driver2 = Object.assign({},driver);
  delete driver2[key];
  return driver2;
}

function destructivelyDeleteFromDriverByKey(driver,key)
{
  delete driver[key];
  return driver;
}
