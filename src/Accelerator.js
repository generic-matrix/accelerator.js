var binder=require("./Binding");
class Accelerator{
    /*
    JSON -->
        {
        "use_lib":"tf", "tf-cuda"
        }
     */
    constructor(json) {
        if(!json.hasOwnProperty("use_lib")){
                throw new Error("The JSON is invalid ,do refer the docs.");
        }else if(json["use_lib"]==="tf"){
            console.log("Using Tensorflow (tfjs-node) core as backend .");
        }else if(json["use_lib"]==="tf-cuda"){
            console.log("Using Tensorflow (tfjs cuda) core as backend .");
        }else{
            throw new Error("invalid option specified.");
        }
        this.settings=json;
    }

    /*
        A function to load a array to GPU's address space using the library .
     */
    define_array(array){
        return new binder(array,this.settings);
    }

    get_array(elem){
        return elem[elem.var_name].arraySync();
    }
}

module.exports=Accelerator;