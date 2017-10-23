;(function(){
	'use strict'
	var el_todo_form = document.querySelector("#todo-form");
	var el_todo_true = document.querySelector("#todo-true");
	var el_todo_false = document.querySelector("#todo-false");
	function init(){
		render();

	}

	function bind_finsh_btn(){

	}

	function bind_update_btn(){

	}

	function bind_del_btn(){

	}

	function render(){
		el_todo_false.innerHTML = "";
		el_todo_true.innerHTML = "";
		//把任务列表取出来
		var todo_list = b.read();

//判断任务的状态，然后根据状态把它插入不同的div
		todo_list.forEach(function(todo){
			if (todo.completed == flase) {
				var el_list = document.createElement("div");
				var finsh_btn,update_btn,del_btn;
				el_list.innerHTML = `
				<p>${todo.title || '-'}</p>
				<button id="finsh-btn-${todo.id}">完成</button>
				<button id="update-btn-${todo.id}">更改</button>	
				<button id="del-btn-${todo.id}">删除</button>		
				`;
				//选取三个按钮
				finsh_btn = el_list.querySelector("#finsh-btn-" + todo.id);
				update_btn = el_list.querySelector("#update-btn-" + todo.id);
				del_btn = el_list.querySelector("#del-btn-" + todo.id);
				//带入函数中
				bind_finsh_btn(finsh_btn,todo.id);
				bind_update_btn(update_btn,todo);
				bind_del_btn(del_btn,todo.id);
				el_todo_false.appendChild(el_list);

			}else{
				//完成的任务
				var el_list = document.createElement("div");
				var update_btn, del_btn;
				el_list.innerHTML = `
				<p>${todo.title || '-'}</p>

				<button id="update-btn-${todo.id}">更改</button>;
				<button id="del-btn-${todo.id}">删除</button>;

				`;
				//选取按钮
				update_btn = el_list.querySelector("#update-btn-"+todo.id);
				del_btn = el_list.querySelector("#del-btn-"+todo.id);
				//调用函数
				bind_update_btn(update_btn,todo);
				bind_del_btn(del_btn,todo.id);

				el_todo_true.appendChild(el_list);
			}
		});
	}
})();