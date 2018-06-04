// const times1 = require('./frank').times1 // named import
const times1 = require('./frank') // default import

function timesItFive(n){
    
    return times1(5 * n);
}

//module.exports = timesItFive; // default export
module.exports.timesItFive = timesItFive; //named export
