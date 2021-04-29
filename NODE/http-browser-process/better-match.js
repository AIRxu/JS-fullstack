function match(string) {
  state = start;
  // console.log(state);
  for( let a of string) {
    state = state (a);
  }
  return state === end;
}

function start(char) {
  if (char === 'a') { 
    return findA;
  } else {
    return start;
  }
}
function findA(char) {
  if (char === 'b') {
    return findB;
  } else {
    return start;
  }
}
function findB(char) {
  if (char === 'c') {
    return end;
  } else {
    return start;
  }
}
function end (){
  state = end;
}

console.log(match('a abc good'));