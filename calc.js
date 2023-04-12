
function displayData(n){
    result.value+=n
}

function AllClear(){
    result.value=""
}

function evalExprsn(){
    // n=result.value
    // out=eval(n)
    // result.value=out
    result.value=eval(result.value)

    //eval for evaluating string
}

//slice 

function backspace(){
    s=result.value
    result.value=s.slice(0,-1)
}

