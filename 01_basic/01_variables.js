const accountId = 2;
let accountEmail = "google@gmail.com"
var accountpassword = "123564";
accountcity = "bokaro"

let accountState
/*prefer not to use var because of block and fumctional scope */

//accountId = 6; not allowed
console.log(accountId);// type of TypeError: Assignment to constant variable.
accountEmail = "kaif@gmail.com0";
accountpassword = "52648";
accountcity = "kollkata"
console.table([accountEmail, accountpassword, accountcity, accountId, accountState]);