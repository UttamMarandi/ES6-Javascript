//module 'bubba'
//any function that we want to export is prefixed by export keyword
//also to export multiple funtion 
//export {function1,function2,function3}


/*********************************
1. export { name1, name2, …, nameN }; //export with a list of names
2. export { variable1 as name1, variable2 as name2, …, nameN }; //export with an alias name
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function FunctionName(){...}
export class ClassName {...}

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default } from …;
********************************/

export default function myFunc4(num) {
    return num * 9
}
//export default not working for me..I don't know why

function myFunc(num){
    return num + 1;
}

function myFunc2(num){
    return num * 2;
}

function myFunc3(num){
    return num / 3;
}

//export myFunc2 & myFunc3
// export {myFunc2 , myFunc}

//export a function with an alias name
// export{myFunc3 as x} //in the import file x is written in place of myFunc3


//export default
//export defalut is used if we don't want to mention the function name in import file. in import file we can name that function whatever we want

//to export everything

// export { * } 