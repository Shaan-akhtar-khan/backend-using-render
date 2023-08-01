//module created specifically to get the date and day

module.exports= getDay;


function getDay(){
const today =new Date();
let day= today.getDay();

switch (day) {
    case 1: 
    day = "monday";    
    break;
    
    case 2: 
    day = "tuesday";    
    break;

    case 3: 
    day = "wednesday";    
    break;

    case 4: 
    day = "thursday";    
    break;

    case 5: 
    day = "friday";    
    break;

    case 6: 
    day = "saturday";    
    break;

    case 7: 
    day = "sunday";    
    break;

    default:
        break;
}

const option =
{
    weekday : "long",
    day:"numeric",
    month : "long"
};

day = today.toLocaleDateString("en-IN",option);
// this uses the options const  to format the data in the day const suc that it  meeds the needs of options const. and this whole is in 
// the US date format.
return day;
}