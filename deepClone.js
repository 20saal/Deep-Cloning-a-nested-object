// Deep copy Nested object using constructor function
let obj = {
    level01:'level01',
    level1: {
        level2: {
            level03:'level03',
            level3:{
                level4:'level4',
            },
        },
    },
};

function CloneObj(obj){

    for(let key in obj)
    {
        if(typeof obj[key] === 'object')
        {
            this[key] = new CloneObj(obj[key] ); 
        }
        else{
            this[key] = obj[key];
        }
    }
}

let copiedObj = new CloneObj(obj);
console.log(typeof copiedObj.level1.level2.level3.level4); //'level4'
console.log(copiedObj.level1.level2 == obj.level1.level2); //false
console.log(copiedObj.level1.level2.level03); //'level03'