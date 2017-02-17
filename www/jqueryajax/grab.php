<?php
	
	$twitterUsername = $_POST['username'];
	$emailAdd = $_POST['email'];
	$tag = "findthis"; // The #tag that the use will find for
	
	
	
	function reply($type, $username, $email, $private){ // function to reply to the javascript
			/*
			
				This function shows if there was an error in 
				1. overall
				2. username
				3. email
				4. didn't find it
			
			*/
			$replying = array("error"=>"{$type}", "username"=>"$username", "email"=>"$email", "private"=>"$private");
			echo(json_encode($replying)); // json encode the responce
	}
	
	
	// Defult everything to OK
	$error = false;	
	$username = 0;
	$email = 0;
	$private = 0;
	
	if( strlen($twitterUsername) < 1 ){
		$username = 1;
		$error = true;
	}
		
	if( !preg_match('/^[a-z0-9]+([_\.-][a-z0-9]+)*@([a-z0-9]+([.-][a-z0-9]+)*)+\.[a-z]{2,}$/i', $emailAdd) ){
		$email = 1;
		$error = true;	
	}
	
	if( $error == true ){
		reply(1, $username, $email, $private);
		die(); // stop running the script
	}
	
	/*
	
		If a user has JUST tweeted then it takes a few seconds for it to appear in
		Twitter's search. Because of this I have made it sleep for a few seconds to 
		allow time for this to happen.
		It will help a bit agains mass attacks of people clicking over and over again. 
		
	*/	
	sleep(4);
	
	
	// search for the tweet				JSON format    The tag	   Who its from
	$search = "http://search.twitter.com/search.json?q=&tag={$tag}&from={$twitterUsername}";
	$curlhandle = curl_init();
	curl_setopt($curlhandle, CURLOPT_URL, $search);
    curl_setopt($curlhandle, CURLOPT_RETURNTRANSFER, 1);

	// execute the search
    $response = curl_exec($curlhandle);
    curl_close($curlhandle);

	// decode the responce
    $json = json_decode($response);
	// cound the amount of "results" that have been found
    $numb = count($json->results);


    if($numb != 0){ // if a result has been found reply with no error
    	reply(0, 0, 0, 0);
    	
    	/*
    	
    		If you are going to use this scrip put all your code
    		to happen when a use has successfully tweeted here

    	
    	*/
    	
    	die();
    
    }else{ 
    	reply(1, 0, 0, 1); // no result was found so the user is mostlikey private
    	die();
    }