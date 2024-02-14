require('./includes/scripts.js') // include the scripts used by the chapter

function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none");
  let total = scripts.reduce((n, { count }) => n + count, 0);
  let highest = scripts[0]
  for (let i = 0; i < scripts.length; i++) {
    if (Math.round(scripts[i].count * 100 / total > highest.count)) {
      highest = scripts[i]
    }
  }
  return highest.name
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl