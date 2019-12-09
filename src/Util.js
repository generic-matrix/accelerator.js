var Accelerator=require("./Accelerator.js");
class Util{
    constructor(json) {
        this.acc=new Accelerator(json);
    }
    add(vec1,vec2){
        return this.acc.copy_obj(vec1.obj.add(vec2.obj));
    }

    sub(vec1,vec2){
        return this.acc.copy_obj(vec1.obj.sub(vec2.obj));
    }

    linear_mul(vec1,vec2){
        return this.acc.copy_obj(vec1.obj.mul(vec2.obj));
    }

    linear_div(vec1,vec2){
        return this.acc.copy_obj(vec1.obj.div(vec2.obj));
    }

    transpose(vec){
        return this.acc.copy_obj(vec.obj.transpose());
    }

    linear_max(vec1,vec2){
        if(vec1.obj>vec2.obj){
            return vec1;
        }else{
            return vec2;
        }
    }

    linear_max_boolean(vec1,vec2){
        return vec1.obj>vec2.obj;
    }

    pow(vec1,vec2){
        return this.acc.copy_obj(vec1.obj.pow(vec2.obj));
    }

    exp(vec1){
        return this.acc.copy_obj(vec1.obj.exp());
    }

    abs(vec1){
        return this.acc.copy_obj(vec1.obj.abs());
    }
}

module.exports=Util;
