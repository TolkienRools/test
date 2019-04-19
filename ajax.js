let page = document.querySelector('#type_page');


function pop_mess(message){
		let popup = document.querySelector('.popup');
                  	popup.textContent = message;
                  	popup.style.transitionDelay = '0.5s';
                  	popup.style.visibility = 'visible';
                  	popup.style.opacity = '1';
                  	setTimeout(function(){
                      	popup.style.opacity = '0';
                    	popup.style.visibility = 'hidden';
                      	popup.style.transition = 'opacity 0.5s, visibility 0s linear 0.3s';
                    }, 3500);
  					
}


document.addEventListener('DOMContentLoaded', function(){
	setTimeout(function(){
  	if (page.value == 'home'){
    	let sent_to = document.querySelector('#send');
      	let secret_text = document.querySelector('#secret_text');
      	let pass = document.querySelector('#pass');
      
      	sent_to.addEventListener('click', function(){
        	let request = new XMLHttpRequest();
 
     		request.open('POST', 'server.php');
			var formData = new FormData();
          	formData.append('text',secret_text.value);
          	formData.append('pass',pass.value);
          	formData.append('type','1');
    		request.send(formData);
          	request.addEventListener('readystatechange', function(){
            	if(request.readyState === 4 && request.status == 200 && request.response != 'empty'){
                  	secret_text.value = 'http://ca16207.tmweb.ru/' + request.response;
                  	console.log(2);
                }else if(request.readyState === 4 && request.status == 200 && request.response == 'empty'){
              		pop_mess('Укажите пароль');//'Укажите пароль'
   
    
                }					
            });
        });
    }else if(page.value != "not_found"){
      	console.log(111);
    	let check = document.querySelector('.check');
      	let del = document.querySelector('.delete');
      	let pass = document.querySelector('#pass');
      	let secret_text = document.querySelector('#secret_text');
      
      	check.addEventListener('click', function(){
        	
          	let request = new XMLHttpRequest();
 
     		request.open('POST', 'server.php');
			var formData = new FormData();
          	formData.append('hash',page.value);
          	formData.append('pass',pass.value);
          	formData.append('type','2');
          	
    		request.send(formData);
          	request.addEventListener('readystatechange', function(){
            	if(request.readyState === 4 && request.status == 200 && request.response != 'wrong_pass'){
                  	secret_text.value = request.response;
                }else if(request.readyState === 4 && request.status == 200 && request.response == 'wrong_pass'){
                	pop_mess('Не верный пароль');//'wrong_pass'
                }
            });		
        });
      
      	del.addEventListener('click', function(){
        	
          	let request = new XMLHttpRequest();
 
     		request.open('POST', 'server.php');
			var formData = new FormData();
          	formData.append('type','3');
          	formData.append('pass',pass.value);
          	formData.append('hash',page.value);
          	
    		request.send(formData);
          	request.addEventListener('readystatechange', function(){
            	if(request.readyState === 4 && request.status == 200){
                  		pop_mess(request.response); //всплывающее request.response
                }
                
            });
          	
        });
    }else{
    	console.log(222);
      	
    }
    },1000);
});