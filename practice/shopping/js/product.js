;(function(){
	'use strict'

	var product_list,last_prouduct_id;
	init_data();
	
	// add({title:"茶叶",price:1});
	// console.log(product_list);
	// remove(1);
	// console.log(product_list);
	function init_data(){
		product_list = s.get("product_list");
		last_prouduct_id = s.get("last_prouduct_id");

		if (!product_list) {
			product_list = [];
			sync(product_list);

		}
		if (!last_prouduct_id) {
			last_prouduct_id = 0
			s.set("last_prouduct_id",last_prouduct_id);
		}

	}

	function add( product){
		var new_product = product;
		new_product.id = last_prouduct_id + 1;
		product_list.push(new_product);
		sync();
		last_prouduct_id ++ ;
		s.set("last_prouduct_id",last_prouduct_id);
	}
	
	function remove(id){
		var remove_id = find_index(id);
		product_list.splice(remove_id,1);
		sync();
	}

	function update(id,pack){
		var update_id = find_index(id);
		var update_product = product_list[update.id];
		if (!update_product) {
			return;
		}
		product_list[update_id] = Object.assign({},update_product,pack);
		sync();

	}

	function read(id){
		var read_product = find(id);
		if (!read_product) {
			return product_list;
		}else{
			return read_product;
		}

	}
	

	function find_index(id){
		return product_list.findIndex(function(product){
			if (product.id == id) {
				return true;
			}
		});
	}

	function find(id){
		return product_list.find(function(product){
			if (product.id == id) {
				return true ;
			}
		});
	}

	function sync(){
		s.set("product_list",product_list);
	}
})();