;(function(){
	'use strict'

	var  product_form = document.querySelector("#product-form");
	var product_table = document.querySelector("#product-table");
	var product_list = product.read();

	init();
	function init(){
		render();
		bind_submit();
	}

	function bind_submit(){
		product_form.addEventListener("submit",function(e){
			e.preventDefault();
			var data = get_data_form(product_form);
			if (data.id) {
			product.update(parseInt(data.id),data);

		 }else{
			product.add(data);
		 }
		 	
		clear_form(product_form);
		render();
		});

	
	}

	function clear_form(form){
		var input_list = form.querySelectorAll("[name]");
		input_list.forEach(function(input){
			input.value = "";
		});

	}

	function get_data_form(el){
		var data = {};
		var input_list = el.querySelectorAll("[name]");
		input_list.forEach(function(input){
			var key = input.name;
			var val = input.value;
			data[key] = val;
		});
		return data;

	}

	function set_data_value(form,patch){
		var input_list = document.querySelectorAll("[name]");
		input_list.forEach(function(input){
			for(var key in patch){
				if (input.name == key) {
					input.value = patch[key];
				}
			}
		});
	}

	function render(){
		product_table.innerHTML = "";
		product_list.forEach(function(row){
			var el_row = document.createElement("tr");
			
			el_row.innerHTML = `
			<td>${row.title}</td>
			<td>${row.price}</td>
			<label>
				<input type="checkbox" name="hot-product">热卖
			</label>
			<label>
				<input type="checkbox" name="new-product">新品
			</label>
			<button class="remove-btn">删除</button>
			<button class="update-btn">更改</button>

			`;
			var hot_product = el_row.querySelector("[name=hot-product]");
			var new_product = el_row.querySelector("[name=new-product]");
			var remove_btn = el_row.querySelector(".remove-btn");
			var update_btn = el_row.querySelector(".update-btn");

			hot_product.checked = hot.is_hot(row.id);
			new_product.checked = new_model.is_new(row.id);

			remove_btn.addEventListener("click",function(){
				product.remove(row.id);
				render();
			});

			update_btn.addEventListener("click",function(){
				set_data_value(product_form,row);
			});

			hot_product.addEventListener("change",function(){
				if (hot_product.checked) {
					hot.add(row.id);
				}else{
					hot.remove(row.id);
				}
			});

			new_product.addEventListener("change",function(){
				if (new_product.checked) {
					new_model.add(row.id);
				}else{
					new_model.remove(row.id);
				}
			});

			product_table.appendChild(el_row);

		});
	}
})();