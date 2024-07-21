export const validation = () => {

 
    var inputEle=document.querySelectorAll('.contact input');
   

   
    for(var i=0;i<inputEle.length;i++){
        inputEle[i].addEventListener("input",(e)=>{
         
            
                
                Regex(e.target)
               
            
        })
    }

    function Regex(e){
        var regex={
            nameInput:/^[a-z ]+$/gi,
            phoneInput:/^01(1|2|5|0)[0-9]{8}$/gi,
            timeInput:/^[0-9]{4}$/gi,
            emailInput:/^[0-9a-zA-Z]+\@(gmail|yahoo)\.com$/gi,
            detailsInput:/^.$/gi
        }
        
        console.log(e.value)
        if(regex[e.id].test(e.value)){
            e.classList.add("is-valid")
            e.classList.remove("is-invalid")
        }
        else{
            e.classList.remove("is-valid")
            e.classList.add("is-invalid")
        }
        if(e.value==""){
            e.classList.remove("is-valid")
            e.classList.remove("is-invalid")
        }

    }

}