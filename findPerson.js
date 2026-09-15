function findPerson(data , source) {

let srcKeys = Object.keys(source);

return data.filter(obj => {
    for(let i = 0 ; i < srcKeys.length ; i++) {

        if(obj.hasOwnProperty(srcKeys[i]) === false || obj[srcKeys[i]] !== source[srcKeys[i]]) {

            return false
        }
    }
    return true;
}
    
)


}


console.log(findPerson(
    [
        {prenom : "Tom" , nom : "Durand"},
        {prenom : "Juliete" , nom : "Garcia"},
        {prenom : "Jean" , nom : "Lefite"},
        {prenom : "Lucien" , abc : "Lafite"}
    ],
    {nom : "Lafite"}
))