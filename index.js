// code your solution here
function saturdayFun( task = "roller-skate"){
     return (`This Saturday, I want to ${task}!`)
}
saturdayFun();

saturdayFun("bathe my dog");

const mondayWork = function (plan = 'go to the office'){
    return (`This Monday, I will ${plan}.`)
}
mondayWork();
mondayWork("work from home");



function wrapAdjective(wrap = "*") {
    return function(msg = "special" ){ 
     return `You are ${wrap}${msg}${wrap}!`;
   };
   
   }
   wrapAdjective("%")("a dedicated programmer");