function findKeys(obj , target , way = '') {
    let result = [];

    for( const key in obj) {
        const newWay = way ? `${way}.${key}` : key;

        if(key === target) result.push(newWay);
        if(typeof obj[key] === 'object' && obj[key] !== null){
            result = result.concat(findKeys(obj(key) , target, newWay))
        }
    }

    return result
}