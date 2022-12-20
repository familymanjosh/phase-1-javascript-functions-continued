function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
let mondayWork = (function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
})
function wrapAdjective(visualFlair = "*"){
    function child (activity = "special"){
        return `You are ${visualFlair}${activity}${visualFlair}!`;
    }
    return child;
}
console.log(wrapAdjective("*"))