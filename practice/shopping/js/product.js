;(function(){
	'use strict'

	var product_list, last_product_id;
	window.product = {
		add: add,
		remove: remove,
		update: update,
		read: read
	}

	init();
	function init(){
		product_list = s.get("product_list") || [];
		last_product_id = s.get("last_product_id") || 0;

	}

	// add({title:"茶叶",price:2});
	// add({title:"鼠标",price:2});
	// add({title:"鞋",price:1});




	function add(product){
		if (!product.title || !product.price) {
			return;
		}
		var new_product = product;
		new_product.id = last_product_id +1;
		product_list.push(new_product);
		int();
		sync();
	}
	
	function remove(id) {
	    var shit_index = find_index(id);
//这个等于号是真坑啊
	    if (shit_index === -1){
	    	return;
	     }

	    product_list.splice(shit_index, 1);
	    sync();
	  }
	    

	function update(id,patch){
		var update_id = find_index(id);
		var update_product = product_list[update_id];
		product_list[update_id ] = Object.assign({},update_product,patch);
		sync();
	}

	function read(id){
		if (!id) {
			return product_list;
		}
		return find(id);
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
			return product.id === id;
		});
	}

	function int(){
		last_product_id++;
		s.set("last_product_id",last_product_id);
	}
	function sync(){
		s.set("product_list",product_list);
	}
})();