;(function(){
    'use strict'

    window.Event = new Vue();
    Vue.component('page-product',{
        template:'#tpl-page-product',
        data:function(){
            return {
                input_current:{},
            }
        },
        mounted:function(){
            var me = this;
            Event.$on("finsh",function(){
                me.input_current = {};
            });
        },
        props:['list'],
        methods:{
            trigger:function(name,data){
                Event.$emit(name,data);
            }
        }
    })

    Vue.component('page-cat',{
        template:'#tpl-page-cat',
    })

    new Vue({
        el:'#app',
        data:{
            product_list:[],
            last_product_id:0,
        },
        mounted:function(){
          
            this.product_list = s.get("product_list") || [];
            this.last_product_id = s.get("last_product_id") || 0;
            
            var me = this;
            Event.$on("add-or-update",function(data){
                me.add_or_update(data);
            }) ;
            Event.$on("remove",function(id){
                me.remove(id);
            })
        },
        methods:{
            add_or_update:function(product){
                console.log(product);
                if (!product || !product.price || !product.title) {
                    throw "错了";
                }
                if (product.id) {
                    
                }else{
                    product.id = this.inc();
                    this.product_list.push(product);
                  
                    this.sync();
                   Event.$emit("finsh");
                }
            },
            remove:function(id){
                var remove_id = this.find_index(id);
                this.product_list.splice(remove_id,1);
                this.sync();
            },
            find_index:function(id){
                return this.product_list.findIndex(function(product){
                    if (product.id == id) {
                        return true;
                    };
                });
            },
            sync:function(){
                s.set("product_list",this.product_list);
            },
            inc:function(){
                this.last_product_id++;
                s.set("last_product_id",this.last_product_id);
                return this.last_product_id;
            }
        }
    })
})();
function newFunction_1() {
    newFunction();
}

function newFunction() {
    this.inc();
}
