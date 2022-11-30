let num_utente= Math.floor(Math.random() * 6 + 1)
console.log(`il tuo numero è ${num_utente}`)
let num_pc= Math.floor(Math.random() * 6 + 1)
console.log(`il numero del pc è ${num_pc}`)

if(num_utente > num_pc){
    console.log('Hai vinto!!')
}
else if (num_utente == num_pc){
    console.log('Avete pareggiato!!')
}
else{
    console.log('Hai perso!!')
}