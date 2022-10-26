/*************************************************************************** 
TRACCIA
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

***************************************************************************/

//sintassi
/* const {createApp} = Vue;

createApp ({
    data (){
        return{
            istruzioni
        }
    },

    methods: {
        istruzioni
    }
}).mount('#app') */

const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'step 1 - inserire un testo nel dom con vue js',
        }
    }
}).mount('#app');