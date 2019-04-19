<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
	html, body{
		height: 100%;
		margin:0px;
		padding:0px;
	}
	body{
		display:flex;
		justify-content: center;
		align-items:center;
      	flex-direction:column;
	}

	.content{
		padding:10px;
		border:1px solid black;
		flex-basis: 25%;	
      	border-radius: 5px;
      	margin-bottom:20px;
		
	}
	.inbox{
		display: block;
		margin:5px auto;
      	border-radius: 5px;
	}
	#secret_text{
		resize:none;
        
      	
      }
    .decorate_btn{
      background-color: white;
      padding:5px 10px;
    }
    .check{
      float:left;
      border-radius: 5px;
    }
    .delete{
      float:right;
      border-radius: 5px;
    }
    .popup{
    width:300px;
    height:30px;
    border:1px solid gray;
    border-radius:3px;
    text-align:center;
	opacity: 0;
  	visibility: hidden;
  	transition: opacity 0.5s, visibility 0s linear 0.3s;
 	font-size:18px;
    }
      .hide{
        display:none;
      }
      .hide_cont{
      	font-size:40px;
        font-weight:900;
     
      }
    </style>
</head>
<body>
	
		<div class="content">
			<input type="hidden" id="type_page" value="<?php $page = $_GET['page'];
                                              	if(!$page){
                                                  echo 'home';
                                                }else{
                                                  echo strval($page);
                                                }?>">
<textarea placeholder="Введите текст на английском(250)..." class="inbox" id="secret_text" cols="48" rows="10" maxlength="250"></textarea>
			<input placeholder="Введите пароль" maxlength="8" class="inbox" type="password" id="pass">
		
		
		</div>
  		<div class="popup"><p><span></span></p></div>
		<script src="creator.js"></script>
  		<script src="ajax.js"></script>
</body>
</html>