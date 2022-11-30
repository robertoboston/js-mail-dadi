const mail_list=["roberto.bozzo@gmail.com","sergio@gmail.com","alessandro@gmail.com","alfredo@gmail.com","alfredo@tiscali.it"]

let input_mail;

const button= document.getElementById('button-get')

button.addEventListener('click', function(){
    input_mail=document.getElementById('e-mail').value

    let flag=false
    for(let i=0; i<mail_list.length; i++){
        
        const user= mail_list[i]

        if(input_mail==user){
           flag=true
        }
    }
    
    if(flag){
        document.getElementById('mail-space').innerHTML= `La tua mail risulta valida`
    }
    else{
        document.getElementById('mail-space').innerHTML= `La tua mail risulta NON valida`
    }

    
})

