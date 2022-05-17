const apiKey ='';
export default function getCards(){
 fetch (apiUrl)
    .then(res => res.json())
    .then (response => {
        const {data} = response
        //ver response de api---------------
        const cards = data.map(img => img.img.data)
        return cards
    })
}
//despues pasar esto a Useeffect getCards().then(cards => nuevo estado(cards))