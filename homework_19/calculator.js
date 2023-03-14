const operations = {
    "sum": (a, b) => a + b,
    "sub": (a, b) => a - b,
    "mult": (a, b) => a * b,
    "div": (a, b) => a / b
  };

function createCalculator(number) {
    let result = number;    

    return {        
        add: (n) => result += n,   
        sub: (n) => result -= n,    
        mult: (n) => result *= n,
        div: (n) => result /= n, 
    };
}

module.exports = {
    createCalculator
};
