const data = { 
    name: "test", 
    age: 28,
    email: 'test@test.com',
    phone: "(xx)xxxxx-xxxx"
};

function isString(attribute){
    return typeof(attribute) === "string" || attribute === String;
}

function countStringAttributes(object){
    let count = 0;
    for(const key in object){
        if(isString(object[key])){
            count++;
        }
    }
    return count;
}

function main(){
    console.log(countStringAttributes(data));
}

main();