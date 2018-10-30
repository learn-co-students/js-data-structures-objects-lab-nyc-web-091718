// Write your solution in this file!
// updateDriverWithKeyAndValue()- this function should take in a driver Object, a key and a value. The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.


  const driver = {}


function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value});
}

// destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}



function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver)
  delete newDriver[key];
  return newDriver
}


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
