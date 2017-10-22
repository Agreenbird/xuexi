;(function(){
	'use strict'
	 
	var el_todo_form = document.querySelector("#todo-form");
	
	var el_todo_list = document.querySelector("#el-todo-list");
	var el_del_list =document.querySelector("#el-del-list");
	var el_input_aqi = document.querySelector("#input-aqi");

	init();


	function init(){
		render();
		bind_submit();
	}
	function bind_submit(){
		el_todo_form.addEventListener("submit",function(e){
			e.preventDefault();
			var todo = get_form_value(el_todo_form);

			b.add(todo.title);
			render();
		});
	}

	function get_form_value(el){
		var data = {};
		var val = el_input_aqi.value;
		data.title = val;
		
		return data;
	}
	

	function el_true(el){
		var todo_list = document.createElement("li");
		todo_list.innerHTML = `
		<input type="checkbox" value=true/ >
		${el.title}              
		
		`;
		el_del_list.appendChild(todo_list);
		

	}
	function el_false(el){
		var todo_list = document.createElement("li");
		todo_list.innerHTML = `
		
		${el.title}


		`;
		el_todo_list.appendChild(todo_list);     


	}

	function render(){
		el_todo_list.innerHTML = "";
		el_del_list.innerHTML = "";
		//为什么要这么调
		var el_list = b.read();
		for (var i = 0; i < el_list.length; i++) {
			var el = el_list[i];
			if (el.completed == true) {
				el_true(el_list[i]);
			}else{
				el_false(el_list[i]);
			}
		}


	}


})();
