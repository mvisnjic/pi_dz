let zagrade = (s) => {
    let otvorene = ["(","{","["]
    let zatvorene = [")","}","]"]
    let stog = []
    for (const i of s) {
        console.log(zatvorene.includes(i))
        if(otvorene.includes(i)){
            stog.push(i);
        } else if(zatvorene.includes(i)) {
            let par = otvorene[zatvorene.indexOf(i)]
            if(stog[stog.length-1] === par){
                stog.splice(-1,1)
            }else{
                stog.push(i)
                break
            }
        }
    }
    return (stog.length === 0)
};
console.log(zagrade("[()]()()")); // → true
console.log(zagrade("{[((()))]}")); // → true
console.log(zagrade("({)}")); // → false