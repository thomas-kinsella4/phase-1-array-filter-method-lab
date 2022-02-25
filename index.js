// Code your solution here

function findMatching(array, string) {
     let result = array.filter((str) => {
        return str.toUpperCase() === string.toUpperCase();
    });
    return result;
};

function fuzzyMatch(array, string) {
    let result = array.filter((str) => {
        return str.startsWith(string) === string.startsWith(string);
    });
    return result;
}

function matchName(array, string) {
    let result = array.filter((str) => {
        return str.name === string;
    } );
    return result;
}




