;(function(){
	'use strict'

	new Vue({
		el:"#app",
		data:{
			current_product:{},
			current_page:"admin_product",
			product_list:[],
			last_product_id:0,

		},
		mounted:function(){
			this.product_list = s.get("product_list") || [];
			this.last_product_id = s.get("last_product_id") || 0;
		},
		methods:{
			sync:function(){
				s.set("product_list",this.product_list);
			},
			inc:function(){
				this.last_product_id++;
				s.set("last_product_id",this.last_product_id);
				return this.last_product_id;
			},
			find_index(id){
				return this.product_list.findIndex(function(product){
					if (product.id == id) {
						return true;
					}
				});
			},
			add_or_update:function(){
				
				var row = this.current_product;
				if (!row.title || !row.price) return;
				if (row.id) {
					var i = this.find_index(id);
					if (i === -1) return;
					this.product_list[i] = Object.assign({},row);

				}else{
					row.id = this.inc();
					this.product_list.push(Object.assign({},this.current_product));
					
				}
				row = {};
			},
			remove:function(id){
				var remove_id = this.find_index(id);
				this.product_list.splice(remove_id,1);
			},

		},
		watch:{
			product_list:{
				deep:true,
				handler:function(){
					this.sync();
				}
			}
		}
	})
})();