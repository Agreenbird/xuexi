;(function(){
	'use strict'

	var task_list ;
	var last_id ;
	window.b = {
		task_list: task_list,
		last_id: last_id,
		add: add,
		del: del,
		update: update,
		read: read,
		sync:sync
	};
	init_data();

	
	function init_data(){
		task_list = s.get("task_list");
		last_id = s.get("last_id");
		if (! task_list) {
			task_list = [];
			sync();
		};
		if (! last_id) {
			last_id = 0;
			s.set("last_id",last_id);
		};
	}

	function add(title,completed){
		if (!title) {
			return;
		}
		completed = completed ? completed : false;
		var new_task = {
			title:title,
			completed: completed,
			id: last_id + 1
		};
		task_list.push(new_task);
		last_id ++;
		s.set("last_id",last_id);
		sync();

	}
	function del(id){
		var find_id = find_index(id);
		task_list.splice(find_id,1);
		sync();
	}
	function update(id,title){
		var find_up = find(id);
		find_up.title = title;
		sync();

		 
	}
	function read(){
		return task_list;
	}
	function find_index(id){
		return task_list.findIndex(function(item){
			if (item.id == id) {
				return true;
			} 
		});

	}
	function find(id){
		return task_list.find(function(item){
			if (item.id == id) {
				return true;
			}
		})
	}
	
	function sync(){
		s.set("task_list",task_list);
	}
})();