;(function(){
  'use strict'

  var result = user_list;
  var card_list = document.querySelector('#card-list');

//筛选数据
  function search(keyword){
    //清空结果
    result = [];                  
    for (var i = 0; i < user_list.length; i++) {
      var user = user_list[i];
      //indexOf方法更好一些
      if (user.name.indexOf(keyword) != -1) {
        result.push(user);
      }
    }
  }

//渲染

  function render(){
    //清空遗留的渲染
    card_list.innerHTML = '';
    for (var i = 0; i < result.length; i++) {
      var user = result[i]
      var card = document.createElement('div');
      card.innerHTML = `<div><h4>${user.name}</h4>: <h4>${user.game}</4></div>`;
      card_list.appendChild(card);
    }
  }

//程序入口

  function boot(){
    // 将最开始的数据渲染到页面
    render();
    var form = document.querySelector('form');
    var data = document.getElementById('api-input')
    var keyword;
    
    form.addEventListener('submit',function(e){
      e.preventDefault();
      keyword = data.value;
      //控制输入
      if (!keyword) {
        alert('请输入关键词');
        return;
      }
      search(keyword);
      render();
    })


  }

  //开始调用
  boot();
})();

