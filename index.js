function receivesAFunction(callback) {
    // Call the callback function
    callback();
}
// 2. returnsANamedFunction
function returnsANamedFunction() {
    function namedFunction() {
        console.log("This is a named function.");
    }
    return namedFunction;
}

// 3. returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function.");
    };
}