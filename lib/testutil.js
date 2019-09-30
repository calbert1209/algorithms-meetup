const {blowSmoke} = require("./smoke");
const clc = require("cli-color");
const green = clc.green;
const red = clc.red;

function areEqual(a, b) {
  return a === b;
}

function areEqualArrays(a, b) {
  if (!Array.isArray(a) || !Array.isArray) {
    return false;
  }
  if (a.length !== b.length) {
    return false;
  }

  for(let i = 0, j = a.length; i < j; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
}

function showResult(passes) {
  return passes ? green("OK") : red("NO");
}

function assert(a,b, comment) {
  return {
    a,
    b,
    comment,
    areEqual: function() {
      const test = areEqual(this.a, this.b);
      console.log(`  ${showResult(test)} ${this.comment}`);
    },
    areEqualArrays: function () {
      const test = areEqualArrays(this.a, this.b);
      console.log(`  ${showResult(test)} ${this.comment}`);
    }
  };
}

module.exports = {
  assert
}