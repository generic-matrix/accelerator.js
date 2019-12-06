var Accelerator=require("/content/accelerator.js/index.js");

const now = require('nano-time');

var init_time=now();
var settings=
    {
        "use_lib":"tf",
    };
var acc=new Accelerator.accelerator(settings);
var util=new Accelerator.util(settings);
var t1=acc.define_array([10,20,0.30,0.40]);
var t2=acc.define_array([10,20,0.30,0.40]);

var add_t=util.add(t1,t2);
var sub_t=util.sub(t1,t2);
var linear_t=util.linear_mul(t1,t2);
var pow_t=util.pow(t1,t2);
var exp_t=util.exp(t1);

console.log(acc.get_array(add_t));
console.log(acc.get_array(sub_t));
//console.log(acc.get_array(linear_t));
//console.log(acc.get_array(pow_t));
//console.log(acc.get_array(exp_t));

var final_time=now();
console.log("Time taken GPU : "+(final_time-init_time)/1000000000+" sec");


console.log("\n ------------------------------------ \n");

init_time=now();
var settings=
    {
        "use_lib":"tf-cuda",
    };
var acc=new Accelerator.accelerator(settings);
var util=new Accelerator.util(settings);
var t1=acc.define_array([10,20,0.30,0.40]);
var t2=acc.define_array([10,20,0.30,0.40]);

var add_t=util.add(t1,t2);
var sub_t=util.sub(t1,t2);
//var linear_t=util.linear_mul(t1,t2);
//var pow_t=util.pow(t1,t2);
//var exp_t=util.exp(t1);

console.log(acc.get_array(add_t));
console.log(acc.get_array(sub_t));
//console.log(acc.get_array(linear_t));
//console.log(acc.get_array(pow_t));
//console.log(acc.get_array(exp_t));

final_time=now();
console.log("Time taken CUDA : "+(final_time-init_time)/1000000000+" sec");

console.log("\n ------------------------------------ \n");

init_time=now();
var A=[10,20,0.30,0.40];
var B=[10,20,0.30,0.40];
var C=[];
for(var i=0;i<A.length;i++){
    C.push(A[]);
}
final_time=now();
console.log("Time taken CPU : "+(final_time-init_time)/1000000000+" sec");
