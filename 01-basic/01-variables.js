const accountId =144553
let accountEmail = "meet@github.com"
var accountPassword = "testPass123"
accountCity = "Rajkot"

// accountId = 234 // this is not allowed
accountEmail = "ad@ad.com"
accountPassword = "23232"
accountCity = "jamnagar"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])

/*
prefer not to use var
because of issue in block scope and functional scope
*/