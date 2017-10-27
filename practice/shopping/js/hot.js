;(function(){
	'use strict'

	var hot_list;
	window.hot = {
		add: add,
		remove: remove,
		is_hot: is_hot
	}

	init();
	function init(){
		hot_list = s.get("hot_list") || [];


	}
	
	function add(id){
		//要注意方法的使用
		if (find_index(id) !== -1) {
		
			return;
		}
		hot_list.push(id);
		sync();
	}
	
	function remove(id ){
		var remove_id = find_index(id);
		if (remove_id == -1) {
			return;
		}
		hot_list.splice(remove_id,1);
		sync();

	}
	function is_hot(product_id) {
    return hot_list.indexOf(product_id) !== -1;
  }


	function find_index(id){
			return hot_list.indexOf(id);
	}

	function sync(){
		s.set("hot_list",hot_list);
	}
})();