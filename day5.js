// function Declaration
function checkEvenOdd(value)
{
    if(value % 2==0) 
        console.log("value is even")
    else
       console.log("value is odd")
}
function square(number)
{
    return number * number;
}
// functions expression
const findMaxValue = function(value1,value2)
{
    if(value1 > value2)
        console.log(value1)
    else
        console.log(value2)
}
const concatinate = function(value1,value2)
{
    return value1 + value2;
}

// Arrow functions
const findSum = (val1,val2) => {
    return val1 + val2;
}

const checkCharacter = (value,character) => {
    for(i=0;i<=value.length;i++)
    {
        if(value[i] == character)
        {
            return true;
        }
    }
    return false;
}

// function parameters and default values
function product(val1,val2=1)
{
    return val1 * val2
}


function greeting(name,age=18)
{
    return `Welcome ${name} and your age is ${age}`;
}


// Higher Order function
function hoc1(callback,param,number)
{
    for(i=0;i<=number;i++)
    {
        console.log(callback(param))
    }
}

hoc1(greeting,"Haider",10)

function hoc2(callback1,callback2)
{
    let response = callback1(10,10);
    console.log(callback2(response))
}

hoc2(product,square)