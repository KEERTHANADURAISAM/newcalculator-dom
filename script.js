let output=document.getElementById('result')
 function display(Num){
    output.value+=Num;
 }
 function equal(){
    try{
    output.value=eval(output.value);
 }
 catch(err){
alert("invalid")
 }
}
function Clear(){
    output.value='';
}

 function del(){
    output.value=output.value.slice(0,-1);
 }
 