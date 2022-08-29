// Deep copying Nested object and Array using two different constructor function
let obj = {
    level1: {
        level2:[{
            level3:['level3'], level03:'level03'},
            'level4'
        ],
        level02:'level02',
    },
    level01:'level01',
};

function CloneObj(obj){

    if(!new.target) //if not calling function with 'new'
    {
        if(typeof obj !== 'object' || obj == null) //if paramerter is not an object
        {
            return obj;
        }
        else if(typeof obj == 'object')
        {
            return new CloneObj(obj); //if skiped 'new' while calling function
        }
    }
    else
    {
        if(typeof obj !== 'object' || obj == null)
        {
            return {undefined:undefined};//return statment of constructor can be overwritten if returns object
        }
        for(let key in obj)
        {
            if(typeof obj[key] === 'object'  && !Array.isArray(obj[key]))
            {
                this[key] = new CloneObj(obj[key] ); 
            }
            else if(Array.isArray(obj[key]))
            {
                this[key] = CloneArray(obj[key]);
            }
            else{
                this[key] = obj[key];
            }
        }
    }
}

//function copy array and return copied array
function CloneArray(array)
{
    let copiedArray = [];
        for(let elm of array)
    {
        if(typeof elm == 'object' && !Array.isArray(elm))
        {
            copiedArray.push(new CloneObj(elm));
        }
        else if(Array.isArray(elm))
        {
            copiedArray.push(CloneArray(elm));
        }
        else{
            copiedArray.push(elm);
        }
    }
    return copiedArray;
}
    
//Nested object
let copiedObj = new CloneObj(obj);
console.log(copiedObj.level1.level2[0].level3); //['level3']
console.log(copiedObj.level1.level2[0].level03); //level03
console.log(obj.level1.level2 == copiedObj.level1.level2); //false means array at level2 is not copied by refrence'


let copiedAnotherObj =new CloneObj('hello');
console.log(copiedAnotherObj);//{undefined:undefined}

//Nested array
let nestedArray = [{level1:['level1']}, 'level2', [{level3:'level3', level4:'level4'}]];

let copiedArray = CloneArray(nestedArray);
console.log(copiedArray[2][0].level3); //'level3'
console.log(nestedArray[2][0] == copiedArray[2][0]);//false b/c not copied by refrence