function dafunct(youup) {
    return youup;
}
function receivesAFunction (dafunct) {
    dafunct();
}
function returnsANamedFunction() {
    return function returnsANamedFunction(thing) {return thing};
}
function returnsAnAnonymousFunction() {
   return function (thing) {return thing}; 
}