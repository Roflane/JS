function f(n1, n2) {
    console.log(n1 + n2);
}

function _bind(fn, thisCtx, ...boundArgs) {
    return function (...args) {
        return fn.apply(thisCtx, [...boundArgs, ...args]);
    };
}

(() => {
    let b = _bind(f, {}, 1, 2, 3);
    b();
})();
