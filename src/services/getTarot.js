const apiUrl ='https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3';

export default function getCards(){
    const apiUrl ='https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3';

 return(fetch (apiUrl)
    .then(res => res.json())
    .then (response => {
        const data = response
        const cards = data.cards.map(item => {
            console.log(item)
            const {name,name_short,value_int, meaning_up, meaning_rev, desc} = item
            return {name,name_short,value_int, meaning_up, meaning_rev, desc}
        })
        
        return cards
    })
 )
}