// Deep copy of Nested object using constructor-function

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
            if(typeof obj[key] === 'object')
            {
                this[key] = new CloneObj(obj[key] ); 
            }
            else{
                this[key] = obj[key];
            }
        }
        
    }
}

let copiedObj = new CloneObj(obj);
console.log(typeof copiedObj.level1.level2.level3.level4); //'level4'
console.log(copiedObj.level1.level2 == obj.level1.level2); //false
console.log(copiedObj.level1.level2.level03); //'level03'


let copiedAnotherObj =new CloneObj('hello');
console.log(copiedAnotherObj);//{undefined:undefined}