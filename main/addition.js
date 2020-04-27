
class Add {
    add(x,y) {
        console.log("value of x in add", x);
        console.log("value of y in add", y);
        return new Promise(function(resolve , reject) {
            if(x < 0){
                reject("x should be greater than 0")
            }
            else {
                resolve(x + y);
            }
        })
        
    }
}
module.exports = new Add();
