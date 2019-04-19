
let container = document.querySelector('.content');
let type_page = document.querySelector('#type_page')

document.addEventListener('DOMContentLoaded', function(){
    if(type_page.value == 'home'){
        send = document.createElement('input');
        send.type = 'button';
        send.value = 'SEND';
      	send.classList.add('inbox');
      	send.classList.add('decorate_btn');
      	send.id = 'send';
        container.appendChild(send);
    }else{
      	//Вставка
      	let request = new XMLHttpRequest();
 
     	request.open('POST', 'server.php');
		var formData = new FormData();
        formData.append('hash',type_page.value);
        formData.append('type','0');
    	request.send(formData);
        request.addEventListener('readystatechange', function(){
            if(request.readyState === 4 && request.status == 200 && request.response == 'found'){
                 console.log(request.response);//
              	 let textarea = document.querySelector('#secret_text');
              	 textarea.placeholder = "";
                 check = document.createElement('input');
                  del = document.createElement('input');
                  check.type = 'button';
                  del.type = 'button';
                  check.value = 'CHECK';
                  del.value = 'DELETE';
                  check.classList.add('decorate_btn');
                  check.classList.add('check');
                  del.classList.add('decorate_btn');
                  del.classList.add('delete');
                  container.appendChild(check);
                  container.appendChild(del);
              	  
            }else if(request.readyState === 4 && request.status == 200 && request.response == 'not_found'){
              	type_page.value = "not_found";
              	let pass = document.querySelector('#pass');
              	let textarea = document.querySelector('#secret_text');
              	pass.classList.add('hide');
              	textarea.classList.add('hide');
                console.log('not_found');//
              	container.classList.add('hide_cont');
              	container.textContent = "404 page not found";
            }					
        });
      	
      	//Вставка
		
    }
});