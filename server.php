<?php
	//$hash = mb_strimwidth((string)md5(microtime()),0,6);
	$type = $_POST['type'];

	function encode($unencoded,$key){
        $string=base64_encode($unencoded);

        $arr=array();
        $x=0;
        while ($x++< strlen($string)) {
            $arr[$x-1] = md5(md5($key.$string[$x-1]).$key);
            $newstr = $newstr.$arr[$x-1][3].$arr[$x-1][6].$arr[$x-1][1].$arr[$x-1][2];
        }
        return $newstr;
	}

    function decode($encoded, $key){
        $strofsym="qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM=";
        $x=0;
        while ($x++<= strlen($strofsym)) {
            $tmp = md5(md5($key.$strofsym[$x-1]).$key);
            $encoded = str_replace($tmp[3].$tmp[6].$tmp[1].$tmp[2], $strofsym[$x-1], $encoded);
        }
        return base64_decode($encoded);
    }


	function connect(){
        $link = mysqli_connect('localhost','ca16207_db','55287fax','ca16207_db');
        if(mysqli_connect_errno()){ 
            echo "Ошибка".mysqli_connect_errno().": ".mysqli_connect_error();
    	}
  		return $link;
	}



	if($type == 0){
      $link = connect();
      $key = "key";
      $hash = $_POST['hash'];
      $sql = "SELECT * FROM secret WHERE hash='".encode($hash,$key)."'";
      $re = mysqli_query($link,$sql);
      $num = mysqli_fetch_all($re);
      	if(count($num) > 0){
        	echo 'found';
        }else{
          	echo 'not_found';
        }
    
    }else if($type == 1){
    	$link = connect();
      	$key = "key"; 
      	$text = $_POST['text'];
      	$password = $_POST['pass'];
      	$hash = mb_strimwidth((string)md5(microtime()),0,6);
      	if ($text != "" && $password != "") {
            $sql = "INSERT INTO secret(hash,password,text)				VALUES('".encode($hash,$key)."','".encode($password,$key)."','".encode($text,$key)."')";
        mysqli_query($link,$sql);
        echo $hash; 
        } else {
        	echo 'empty';
        }
	
    }elseif($type == 2){
      	$link = connect();
        $key = "key"; 
      	$hash = $_POST['hash'];
      	$pass = $_POST['pass'];
      	$sql = "SELECT text FROM secret WHERE hash='".encode($hash,$key)."' AND password='".encode($pass,$key)."'";
        $result = mysqli_query($link,$sql);
      	$text = mysqli_fetch_all($result, MYSQLI_ASSOC);
      	if(count($text) > 0) {
          	echo decode($text[0]['text'],$key);
        } else{
          	echo 'wrong_pass';
        }
    }elseif($type == 3){
    	$link = connect();
      	$hash = $_POST['hash'];
      	$key = "key";
      	$pass = $_POST['pass'];
      	$sql = "SELECT * FROM secret WHERE password='".encode($pass,$key)."' AND hash='".encode($hash,$key)."'";
        $re = mysqli_query($link,$sql);
      	$num = mysqli_fetch_all($re);
      	if(count($num) > 0){
        $sql = "DELETE FROM secret WHERE hash='".encode($hash,$key)."' AND password='".encode($pass,$key)."'";
        $result = mysqli_query($link,$sql);
        	echo 'Удален';
        }else{
          	echo 'Ошибка';
        }
    }
?>