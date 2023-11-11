// Is Unique: Implement an algorithm to determine if all characters in a string are unique.

function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) return false;
    }
  }

  return true;
}

console.log(isUnique("jump"));
console.log(isUnique("butterfly"));

function isUniqueObject(string) {
  const tracker = {};

  for (let i = 0; i < string.length; i++) {
    //Check object if it has
    let dec = string.charCodeAt(i);
    if (tracker.hasOwnProperty(dec)) return false;
    tracker[dec] = true;
  }

  return true;
}

console.log(isUniqueObject("jump"));
console.log(isUniqueObject("butterfly"));

function isUniqueMap(string) {
  const tracker = new Map();

  for (let i = 0; i < string.length; i++) {
    //Check object if it has
    const holder = tracker.get(string[i]);
    if (holder) return false;

    tracker.set(string[i], true);
  }

  return true;
}

console.log(isUniqueMap("jump"));
console.log(isUniqueMap("butterfly"));
