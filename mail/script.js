const mail_list=["roberto.bozzo@gmail.com","sergio@gmail.com","alessandro@gmail.com","alfredo@gmail.com","alfredo@tiscali.it"]

let user_mail=prompt("inserisci qui la tua mail")

let flag=false
for(let i=0; i<mail_list.length; i++){
    if(user_mail==mail_list[i]){
       flag=true
    }
}

if(flag){
    console.log("La tua mail risulta valida all'accesso")
}
else{
    console.log("La tua mail risulta non valida all'accesso")
}

