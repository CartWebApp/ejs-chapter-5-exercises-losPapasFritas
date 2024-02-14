// Your code here.
function loop(value, check, update, action) {
    while (check(value)) {
        action(value);
        value = update(value);
    }
}
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1