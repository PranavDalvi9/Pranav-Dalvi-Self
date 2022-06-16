// var arr = [1,2,3,4]

function timee (){
for(var i=0; i<5; i++){

    function ajit(j){
        setTimeout(function (){
            console.log(j)
        },j*1000)
    }
       
    ajit(i)
    
}

   
}

timee()
