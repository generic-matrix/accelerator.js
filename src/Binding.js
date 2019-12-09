const tf = require("@tensorflow/tfjs-node");
const now = require('nano-time');
class Binding{
    constructor(arr,json) {

        var date=new Date();
        if(json=="copy"){
            this.obj = arr;
        }else {
            if (json["use_lib"] === "tf") {
                this.obj = tf.tensor(arr);
            } else if (json["use_lib"] === "tf-cuda") {
                var tf_cuda = require("@tensorflow/tfjs-node-gpu");
                this.obj = tf_cuda.tensor(arr);
            } else {
                throw new Error("the use_lib setting is invalid");
            }
        }
    }
}

module.exports=Binding;
