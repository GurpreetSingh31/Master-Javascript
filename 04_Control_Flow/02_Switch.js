// Switch 


/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

        const month = 3 


        switch (month) {
            case 1:
                console.log("January");
                break;
            case 2:
                console.log("Feburary");
                
        
            case 3:
                console.log("March");
                break;
        
            case 4:
                console.log("April");
                break;
        
            default: 
            console.log("default jo hai else ki tarah kam karta hai switch mai");
                break;
        }

        /* NOTE : -  To switch mai jaha par case match hota hai to voh useke baad ka sara code execute krta hai
        except default ko choodh ke or to isko rok ne ki liye hum break; ko use krte hai  
*/


// another example

const user = "Preet"
/* when we passing and finding a stting value so in this case please look after for case sensitivity */
switch (user) {
    case "Meet":
        console.log("You are not the boss man");
        break;

    case "Preet":
        console.log("yes the your are preet");
        break;

    default:
        console.log("none of you are the boss");
        break;
}
