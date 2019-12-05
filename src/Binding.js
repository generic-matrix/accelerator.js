const tf = require("@tensorflow/tfjs-node");
const now = require('nano-time');
class Binding{
    constructor(arr,json) {
        var date=new Date();
        this.var_name="t"+now();

        if(json["use_lib"]==="tf"){
            this[this.var_name]=tf.tensor(arr);

        }else if(json["use_lib"]==="tf-cuda"){
            var tf_cuda = require("@tensorflow/tfjs-node-gpu");
            this[this.var_name] = tf_cuda.tensor(arr);
        }else{
            throw new Error("the use_lib setting is invalid");
        }
    }
}

module.exports=Binding;