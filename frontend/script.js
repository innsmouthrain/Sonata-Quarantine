// get DOM elements
const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const reset = document.querySelector('.reset');
const count = document.querySelector('.count');
const error = document.querySelector('.error');

function currentCount() {
    return document.querySelector('.count').textContent;
}

function increment(number) {
    number = Number(number);
    if (isNaN(number)) {
        return updateDom(
            'Error: Argument passed to increment was not a number',
            error
        );
    }
    return number + 1;
}

function decrement(number) {
    number = Number(number);
    if (isNaN(number)) {
        return updateDom(
            'Error: Argument passed to decrement was not a number',
            error
        );
    }
    return number - 1;
}

function resetFunc() {
    return 0;
}

function updateDom(text, node) {
    node.textContent = text;
}

// attach event listeners

inc.addEventListener('click', function() {
    updateDom(increment(currentCount()), count);
});

dec.addEventListener('click', function() {
    updateDom(decrement(currentCount()), count);
});

reset.addEventListener('click', function() {
    updateDom(resetFunc(), count);
});

updateDom(0, count);

/*istanbul ignore next*/
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        increment: increment,
        decrement: decrement,
        resetFunc: resetFunc,
        updateDom: updateDom,
        currentCount: currentCount,
    };
}
