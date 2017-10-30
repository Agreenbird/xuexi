;(function(){
	'use strict'
	var el_cat_form = document.querySelector("#cat-form");
	var el_cat_entry = document.querySelector("#cat-entry");
	init();
	function init(){
		render();
		bind_submit();
	}

	function bind_submit(){
		el_cat_form.addEventListener("submit",function(e){
			e.preventDefault();
			var data = get_data_value(el_cat_form);
			if (!data.id){
				cat.add(data);

			}else{
				cat.update(data);
			}
			render();
		});
	}

	function get_data_value(form){
		var data = {};
		var input_list = el_cat_form.querySelectorAll("[name]");
		input_list.forEach(function(input){
			var key = input.name;
			var val = input.value;
			data[key] = val;
		});
		return data;
	}

	function set_data_value(form, patch){
		var input_list = el_cat_form.querySelectorAll("[name]");
		input_list.forEach(function(input){
			for(var key in patch){
				if (key == input.name) {
					var val = patch[key];
					input.value =  val;
				}
			}
		});
	}

	function render(){
		el_cat_entry.innerHTML = "";
		var row_list = cat.read();
		row_list.forEach(function(row){
			var row = document.createElement("tr");
			
			row.innerHTML = `
			<td>ID</td>
			<td>分类名称</td>
			<td>cat_id</id>
			<button class="remove-btn">删除</button>
			<button class="update-btn">更改</button>
			`;

			var remove_btn = row.querySelector(".remove-btn");
			var update_btn = row.querySelector(".update-btn");

			remove_btn.addEventListener("click",function(){
				cat.remove(row.id);
				render();
			});

			update_btn.addEventListener("click",function(){
				set_data_value(el_cat_form,row);
			});

			el_cat_entry.appendChild(row);
		});
	}
})();