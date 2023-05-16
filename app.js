var input_field=document.getElementById("field")

function input_num(num){
    input_field.value += num
    // console.log(input_field.value)
}

function clearAll(){
    input_field.value=""
}

var signs=["++","--","**","//"]

function result(){
    var result=input_field.value
    var invalid=false
    for( var i=0; i<signs.length;i++){

        if (result.includes(signs[i])){
            clearAll()
            alert("Invalid operator")
            invalid=true
            break
        }
        
    }
    if(!invalid)
{

    console.log(result)
    result=eval(result)
    input_field.value=result
    
}
}

function Remove(){
    var currentvalue=input_field.value
    input_field.value=currentvalue.slice(0,-1)
}


document.addEventListener("keydown",function(event){

    if (event.key.toLowerCase() === "c"){
        event.preventDefault();
        clearAll()
    }
})

document.addEventListener("keydown",function(event){

    if(event.keyCode === 13){
        event.preventDefault()
        result()
    }
})