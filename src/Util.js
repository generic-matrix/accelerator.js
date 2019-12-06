var Accelerator=require("./Accelerator.js");
class Util{
    constructor(json) {
        this.acc=new Accelerator(json);
    }
    add(vec1,vec2){
        return this.acc.copy_obj(vec1[vec1.var_name].add(vec2[vec2.var_name]));
    }

    sub(vec1,vec2){
        return this.acc.copy_obj(vec1[vec1.var_name].sub(vec2[vec2.var_name]));
    }

    linear_mul(vec1,vec2){
        return this.acc.copy_obj(vec1[vec1.var_name].mul(vec2[vec2.var_name]));
    }

    linear_div(vec1,vec2){
        return this.acc.copy_obj(vec1[vec1.var_name].div(vec2[vec2.var_name]));
    }

    linear_max(vec1,vec2){
        if(vec1>vec2){
            return vec1;
        }else{
            return vec2;
        }
    }

    linear_max_boolean(vec1,vec2){
        return vec1>vec2;
    }

    pow(vec1,vec2){
        return this.acc.copy_obj(vec1[vec1.var_name].pow(vec2[vec2.var_name]));
    }

    exp(vec1){
        return this.acc.copy_obj(vec1[vec1.var_name].exp());
    }

}

module.exports=Util;
