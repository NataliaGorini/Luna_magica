import zodiac from '../data/zodiac';
function getSign (data){
    
    let date = Math.floor(new Date(data).getTime() / 1000);
    let signs= [];
    zodiac.forEach((item) => {
        if(date <= item.end_date && date >= item.start_date){
            signs.push(item);
        }
    });
    if (signs.length === 0){
        signs.push(zodiac[9])
    }
    
    return signs
}
export default getSign;