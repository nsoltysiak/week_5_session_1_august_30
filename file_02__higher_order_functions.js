// Function that takes in another function

function processString(str, func)
{
    //str is the string we are manipulating

    //func is a function we control but processString controls when that function runs
}

function processArray(arr, operation)
{
    const results = [];
    for (let item of arr)
    {
        // processArray decides when to call the operation function
        results.push(operation(item)); // Calling addTwo function here
    }
    return results;
}

function addTwo(x)
{
    return x + 2;
}

console.log(processArray([1, 2, 3, 4, 5], addTwo));