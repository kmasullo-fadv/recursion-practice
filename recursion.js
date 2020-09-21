function countingSheep(sheep){
    if(sheep === 0){
      console.log('all sheep jumped over the fence');
      return;
    }
    console.log(`${sheep}:another sheep jumps over the fence`);
    countingSheep(sheep - 1);
}
  
function powerCalculator(base, exponent) {
    if (exponent <= 0){
        return 'exponent should be > 0';        
    }
    else if(exponent > 1){
        return base * powerCalculator(base, exponent - 1);
    }
    return base;
    }
  
function reverseString(str){
    if(str === ''){
        return '';
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}
  
function triangle(n){
    if(n <= 1){
        return n;
    } else {
        return n + triangle(n-1);
    }
}
  
function splitString(string,separator){
    let index = string.indexOf(separator);
    if(index === -1){
        return [string];
    }
    let word = string.slice(0, index);
    let remaining = string.slice(index+separator.length);
    return [word].concat(splitString(remaining, separator));
}
  
function fibonacci(n) {
    if(n === 1 || n === 2){
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
  
function factorial(number) {
    if (number === 0){
        return 1;
    }
    return number * factorial(number-1);
}

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
  
function solveMaze(maze,x=0,y=0,visited = [], steps = ''){
    if(maze[y][x] === 'e'){
        return steps;
    }
    visited.push(`[${y}][${x}]`);

    let hasPath = false;
    if(y + 1 < maze.length){
        const space = maze[y+1][x];
        if(space !== '*' && !visited.includes(`[${y+1}][${x}]`)){
        hasPath = true;
        let path = solveMaze(maze,x,y+1,[...visited],steps + 'D');
        if(path){
            console.log('Path to exit:'+ path);
        }
        }
    }
    if(x + 1 < maze[y].length){
        const space = maze[y][x+1];
        if(space !== '*' && !visited.includes(`[${y}][${x+1}]`)){
        hasPath = true;
        let path = solveMaze(maze,x+1,y,[...visited],steps+'R');
        if(path){
            console.log('Path to exit:' + path);
        }
        }
    }
    if(x - 1 >= 0 ){
        const space = maze[y][x-1];
        if(space !== '*' && !visited.includes(`[${y}][${x-1}]`)){
        hasPath = true;
        let path = solveMaze(maze,x-1,y,[...visited],steps + 'L');
        if(path) {
            console.log('Path to exit:' + path);
        }
        }
    }
    if(y - 1 >= 0){
        const space = maze[y-1][x];
        if(space !== '*' && !visited.includes(`[${y-1}][${x}]`)){
        hasPath = true;
        let path = solveMaze(maze,x,y-1,[...visited],steps + 'U');
        if(path){
            console.log('Path to exit:' + path);
        }
        }
    }
    if(!hasPath){
        return false;
    }
}
  
function allAnagrams(word,length){
    let wordLength;
    if(length) wordLength = length;
    if(word.length < 2){
        return [word];
    } else {
        let allAnswers = [];
        let before,focus,after;
        let shortWord, subAnagrams,newEntry;
        let i=0;
        for(let i = 0; i < word.length; i++){
        before = word.slice(0,i);
        focus = word[i];
        after = word.slice(i+1,word.length +1); 
        shortWord= before + after;
        subAnagrams = allAnagrams(shortWord);
        for(let j=0;j<subAnagrams.length;j++){
            newEntry = focus + subAnagrams[j];
            allAnswers.push(newEntry);
        }
        }
        return allAnswers;
    }
}
  
let orgChart = {
'Zuckerberg': {		
    'Schroepfer': {
    'Bosworth': {
        'Steve':{},
        'Kyle':{},
        'Andra':{}
    },
    'Zhao': {
        'Richie':{},
        'Sofia':{},
        'Jen':{}
    },
    'Badros': {
        'John':{},
        'Mike':{},
        'Pat':{}
    },
    'Parikh': {
        'Zach':{},
        'Ryan':{},
        'Tes':{}
    }
    },
    'Schrage': {
    'VanDyck': {
        'Sabrina':{},
        'Michelle':{},
        'Josh':{}
    },
    'Swain': {
        'Blanch':{},
        'Tom':{},
        'Joe':{}
    },
    'Frankovsky': {
        'Jasee':{},
        'Brian':{},
        'Margaret':{}
    }
    },
    'Sandberg': {
    'Goler': {
        'Eddie':{},
        'Julie':{},
        'Annie':{}
    },
    'Hernandez': {
        'Rowi':{},
        'Inga':{},
        'Morgan':{}
    },
    'Moissinac': {
        'Amy':{},
        'Chuck':{},
        'Vinni':{}
    },
    'Kelley': {
        'Eric':{},
        'Ana':{},
        'Wes':{}
    }
}}};
  
function file(node, space=0) {
    for (let key in node) {
        console.log(' '.repeat(space), key);
        file(node[key], space + 4);
    }
}
  
function toBinary(x){
    if(x < 0 )
        throw new Error('Only enter positive numbers');
    if( x <= 1 ) {
        return x.toString();
    } else {
        const lsb = (x % 2).toString();
        const restOfBits = math.floor(x / 2);
        return toBinary(restOfBits) + lsb;
    }
}