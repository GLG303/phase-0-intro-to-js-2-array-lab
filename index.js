const cats = ["Milo", "Otis", "Garfield",];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield);
}
function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
}
function appendCat(name){
    const newCat = [...cats,name];
    return newCat;
}
function prependCat(name){
    const newCat1 = [name, ...cats];
    return newCat1;
}
function removeLastCat() {
    const remove = cats.slice(0, length-1);
    return remove;
}
function removeFirstCat() {
    const removes = cats.slice(1);
    return removes;
}