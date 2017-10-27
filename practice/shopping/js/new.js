;(function(){
	'use strict'

	var new_list;

	window.new_model = {
		add: add,
		remove: remove,
		is_new: is_new
	}

	init();
	function init(){
		new_list = s.get("new_list") || [];
	}

	function add(id){
		if (find_index(id) !== -1) {
			return;
		}
		new_list.push(id);
		sync();
	}

	function remove(id){
		var remove_id = find_index(id);
		if (remove_id == -1) {
			return;
		}
		new_list.splice(remove_id,1);
		sync();

	}

	function find_index(id) {
    return new_list.indexOf(id);
  }

  function is_new(product_id) {
    return new_list.indexOf(product_id) !== -1;
  }

    function sync(){
  	s.set("new_list",new_list);
  }

})();