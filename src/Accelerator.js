var binder=require("./Binding");
const tf = require("@tensorflow/tfjs-node");
class Accelerator{
    /*
    JSON -->
        {
        "use_lib":"tf", "tf-cuda"
        }
     */
    constructor(json) {
        this.settings=json;
        if(!json.hasOwnProperty("use_lib")){
                throw new Error("The JSON is invalid ,do refer the docs.");
        }else if(json["use_lib"]==="tf"){
            console.log("Using Tensorflow (tfjs-node) core as backend .");
            this.zero_arr=this.define_array([0]);
            this.one_arr=this.define_array([1]);
            this.two_arr=this.define_array([2]);
            this.minus_one_arr=this.define_array([-1]);
            this.zero_one=this.define_array([0.1]);
            this.zero_zero_one=this.define_array([0.01]);
            this.zero_zero_zero_one=this.define_array([0.001]);
        }else if(json["use_lib"]==="tf-cuda"){
            console.log("Using Tensorflow (tfjs cuda) core as backend .");
            const tf_cuda = require("@tensorflow/tfjs-node-gpu");
            this.zero_arr=this.define_array([0]);
            this.one_arr=this.define_array([1]);
            this.two_arr=this.define_array([2]);
            this.minus_one_arr=this.define_array([-1]);
            this.zero_one=this.define_array([0.1]);
            this.zero_zero_one=this.define_array([0.01]);
            this.zero_zero_zero_one=this.define_array([0.001]);
        }else{
            throw new Error("invalid option specified.");
        }
    }


    /*
        A function to load a array to GPU's address space using the library .
     */
    define_array(array){
        return new binder(array,this.settings);
    }

    copy_obj(obj){
        return new binder(obj,"copy");
    }

    get_array(elem){
        return elem.obj.arraySync();
    }


    /*
        Returns A tensordata object.
     */
    get_tensors(tensor){
        var bind=[];
        var t=binder_object[binder_object.var_name];
        var settings=this.settings;
        var tensors=tf.split(t,t.size);
        for(var i=0;i<tensors.length;i++){
            bind.push(this.copy_obj(tensors[i]));
        }
        return bind;
    }
}

module.exports=Accelerator;
