// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  newdriver = {...driver}
  newdriver[`${key}`]=value
  return newdriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[`${key}`]=value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  newdriver = {...driver}
  delete newdriver[`${key}`]
  return newdriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[`${key}`]
  return driver
}
