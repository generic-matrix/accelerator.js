var Accelerator=require("/Users/kaustubhb/Desktop/accelerator/index.js");
const now = require('nano-time');

var init_time=now();
var settings=
    {
        "use_lib":"tf",
    };
let acc=new Accelerator.accelerator(settings);
let util=new Accelerator.util(settings);
var t1=acc.define_array([10,20,0.30,0.40]);
var t2=acc.define_array([10,20,0.30,0.40]);

var add_t=util.add(t1,t2);
var sub_t=util.sub(t1,t2);
var linear_t=util.linear_mul(t1,t2);
var pow_t=util.pow(t1,t2);
var exp_t=util.exp(t1);

console.log(acc.get_array(add_t));
console.log(acc.get_array(sub_t));
console.log(acc.get_array(linear_t));
console.log(acc.get_array(pow_t));
console.log(acc.get_array(exp_t));

var final_time=now();
console.log("Time taken : "+(final_time-init_time)/1000000000+" sec");