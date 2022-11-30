const mail_list=["roberto.bozzo@gmail.com","sergio@gmail.com","alessandro@gmail.com","alfredo@gmail.com","alfredo@tiscali.it"]

let input_mail;

const button= document.getElementById('button-get')
button.addEventListener('click', function(){
    input_mail=document.getElementById('e-mail').value

    let flag=false
    for(let i=0; i<mail_list.length; i++){
        if(input_mail==mail_list[i]){
           flag=true
        }
    }
    
    if(flag){
        document.getElementById('mail-space').innerHTML= `${input_mail} La tua mail risulta valida`
    }
    else{
        document.getElementById('mail-space').innerHTML= `${input_mail} La tua mail risulta NON valida`
    }
    
})

