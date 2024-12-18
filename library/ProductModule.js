// ProductModule.js
// Export allows using this module in different files
const msg="Product deatils";
//default: is indicat that function uatomatically loding
 export default function Title(){
    return msg
}

export function detils(){
    return{Name:'samsung TV', price:60560.00};
}