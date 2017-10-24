


;(function(){
  'use strict'

   var el_article_form =  document.querySelector("#article-form");
   var el_article_list = document.querySelector("#article-list");

   init();
   function init(){
      render();
      bind_submit();
   }

      function bind_submit(){
      el_article_form.addEventListener("submit",function(event){
        event.preventDefault();
        var article = get_form_value(el_article_form);
        if (article.id) {
          b.updata(parseInt(article.id),article);
          render();
        }else{
          b.add(article);
          render();
        }
        
      });
   }

   function get_form_value(el){
      var data = {};
      var input_list = el.children;

    
      
      for (var i = 0; i < input_list.length; i++) {
        var input = input_list[i];
        
        if (input.nodeName == "INPUT" || input.nodeName == "TEXTAREA") {
          var key = input.getAttribute('name');
          var val = input.value;
          input.val = "";
          data[key] = val;
        }
      }
      return data;
   }

   function bind_del_btn(el,id){
      el.addEventListener("click",function(){
        b.del(id);
        render();
      });

   }
   function bind_updata_btn(el,pack){
      el.addEventListener("click",function(){
         set_form_value(el_article_form,pack);
      });
   }
   function set_form_value(el,pack){
      for( var key in pack){
        var val = pack[key];
        var input = el.querySelector("[name=" + key + "]");
         if (!input) {
           continue;
         }
         input.value = val;

      }
   }

   function render(){
    
    el_article_list.innerHTML = "";

    var list = b.read();
    list.forEach(function(article){
      var del_btn,updata_btn;
      var el_list = document.createElement("div")
      el_list.classList.add('article-item');

      el_list.innerHTML = `
        <h3>${article.title || '-'}-${article.id}</h3>
        作者：<p>${article.author || '-'}</p>
        内容：<p>${article.content || '-'}</p>
      <div>
          <button id="del-btn-${article.id}">删除</button>
          <button id="updata-btn-${article.id}">更改</button>
      </div>
      `;
       del_btn = el_list.querySelector("#del-btn-" + article.id);
       updata_btn = el_list.querySelector("#updata-btn-" + article.id);
      
      bind_del_btn(del_btn,article.id);
      bind_updata_btn(updata_btn,article);

      el_article_list.appendChild(el_list);


    });
   }
})();