//for the given JSON iterate over all for loops(for, for of, for in , forEach)


let jsonobject  = [{"name" : "siva", "age" : 30, "salary" : 1000, "car" : "no car", "city": "chennai", "home" : "rental"}];

//for loop

/* for (let i = 0; i < jsonobject.length; i++){
    console.log(jsonobject[i]);
} */


/* ******************************************************************************************** */

//for in 

/* for(i in jsonobject){
    console.log(jsonobject[i]);
} */


/* *************************************************************************************************** */

// for of

/* for (elements of jsonobject){
    console.log(elements);
} */


/* ************************************************************************************************************** */

// foeEach

jsonobject.forEach((element)=>{
    console.log(element);
})