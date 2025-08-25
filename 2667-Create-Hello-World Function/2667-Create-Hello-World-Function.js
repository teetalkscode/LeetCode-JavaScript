/**
 * @return {Function}
 */
var createHelloWorld = function(createHelloWorld) {
    const greeting = "Hello World"
    return function(...args) {
        return greeting;
    }
};
