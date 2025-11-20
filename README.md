

# Per importare la chiave segreta possiamo fare cosí

 dichiaro una variabile  per usare la API Key
 esempio:
` const api_key =import.meta.env.VITE_MOVIE_DB_API_KEY`



 continuiamo con lésempio per usarlo:
 richiamando un API link con axios inseriamo il nome della variabile che contiene la nostra chiave segreta alla fine del Link.
 esempio:

 <!-- function fetchData(){

    axios.get(`Esempio chiamata:
https://api.themoviedb.org/3/search/movie?api_key=${api_key}`)
    .then(response =>{
        ....................rest of the code
    })
} -->