;(function(){
	'use strict'

	var cat_list, last_cat_id;

	window.cat = {
		add: add,
		remove: remove,
		update: update,
		read: read
	}

	init_data();

	function init_data(){
		cat_list = s.get("cat_list") || [];
		last_cat_id = s.get("last_cat_id") || 0;
	}

	function add(row){
		if (!row.title ) {
			return;
		}

		var new_cat = row;
		new_cat.id = last_cat_id + 1;
		cat_list.push(new_cat);
		sync();
		int();
	}

	function remove(id){
		var remove_id = find_index(id);
		if (remove_id == -1) {
			return;
		}

		cat_list.splice(remove_id, 1);
		sync();

	}

	function read(id){
		if (id) {
			return find(id);
		}

		return cat_list;
	}

	function update(id,pack){
		var update_id = find_index(id);
		if (update_id == id) {
			return;
		}
		var update_cat = cat_list[update_id];
		cat_list[update_id] = Object.assign({},update_cat,pack);
		sync();
	}

	function find_index(id){
		return  cat_list.findIndex(function(row){
			return row.id == id;
		});
	}

	function find(id){
		return cat_list.find(function(row){
			return row.id == id;
		});
	}

	function int(){
		last_cat_id ++ ;
		s.set("last_cat_id",last_cat_id);
	}

	function sync(){
		s.set("cat_list",cat_list);
	}
})();