

;(function(){
	'use strict'

	var article_list, last_id;
	window.b = {
		article_list: article_list,
		last_id: last_id,
		add: add,
		del: del,
		updata: updata,
		read: read
	};

	
	init_data();
	function init_data(){
		article_list = s.get("article_list");
		last_id = s.get("last_id");

		if (!article_list) {
			article_list = [];
			s.set("article_list",article_list);
		}
		if (!last_id) {
			last_id = 0;
			s.set("last_id",last_id);
		}
	}

	 add({title:1,content:"bug",author:"wo"});
 	 add({title:2,content:"bug",author:"wo"});
	 add({title:3,content:"bug",author:"wo"});
    add({title:4,content:"bug",author:"wo"});
   // updata(34,{title:"测试"});
   console.log("article_list",article_list);

	
	function add(article){
		if (!article) {
			return;
		}
		
		var new_article = article;
		new_article.id = last_id + 1;
		article_list.push(new_article);

		s.set("article_list",article_list);
		last_id ++;
		s.set("last_id",last_id);
	}
	
	
	function del(id){
		var find_del = find_index(id);
		if (find_del === -1) {
			return;
		}
		article_list.splice(find_del,1);
	}
	
	
	function updata(id,pack){
		var updata_id = find_index(id);
		var updata_article = article_list[updata_id];
		if (!updata_article) {
			return;
		}
		// updata_article.id = parseInt(updata_article.id)
    	// pack.id = parseInt(pack.id)
		article_list[updata_id] = Object.assign({},updata_article,pack);
		s.set("article_list",article_list);


	}
	
	function read(id){
		if (id) {
			return find(id);
		}
		return article_list;

		

	}

    
	function find_index(id){
		return  article_list.findIndex(function(item){
			if (item.id === id) {
				return true;
			}
		});
	}
	function find(id){
		return article_list.find(function(item){
			if (item.id == id) {
				return true;
			}
		});
	 
	}
	// console.log("article_list",article_list);
	
})();