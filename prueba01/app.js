var transform = function(phrase, criteria) {
    return LTrim(phrase);
}

var toSnakeCase = function(phrase) {

}

var LTrim = function(phrase) {
    let tempString = '';
    for(let chr of phrase) {
        if (/\s/.test(chr)) {
           phrase = phrase.substring(1);
        }
    }
    console.log(phrase);
    
}


console.log(transform('   PePe   pepe   ', 'LTrim->Pack->ToUpper'));