/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let ogCount = init;

    function increment() {
        return ++ogCount
    }

    function decrement() {
        return --ogCount;
    }

    function reset() {
        ogCount = init;
        return ogCount;
    }
        return {increment, reset, decrement}
};
