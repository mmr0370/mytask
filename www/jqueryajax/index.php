<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>jquery注册页面</title>
 	<link rel="stylesheet" type="text/css" href="css/reset.css" />
	<link rel="stylesheet" type="text/css" href="css/main.css" />
 	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/scripts.js"></script>	
</head>
<body>
<div id="wrap">

		<div id="blaster">
			<div id="slide1" class="slide">
				<a class="tweetText" href="http://twitter.com/?status=Testing the Tweetblast %23findthis" target="_blank">
					Testing the Tweetblast #findthis				</a> 
				<div class="form">
					<!-- The username of our twitter-er -->
					<label for="username" class="label">Username: @</label>
					<input type="text" size="20" class="input" id="username" name="username" /><br />
					
					<!-- A span this is defult to be hidden but will be show if this field has an error -->
					
					<p class="errorU error">Please enter a username</p><br />
					
					<label for="email" class="label">Email Address:</label>
					<input type="text" size="20" class="input" id="email" name="email" /><br /><p class="errorE error">Please enter a valid email</p>
					<button type="submit" class="next" name="next" value="Next"></button>
			
			
				<!-- 
					Twitter will not add people who's profiles are
					private so if everything is OK and we didn't find 
					the tweet that is probebly why.
				-->
					<p class="errorP error">Your account must not be private, if its not try again.</p>
				</div>
			</div>



			<!-- Our processing side -->
			<div id="slide2" class="slide">
				<p class="tweetText searching">
					Searching Twitter for your Tweet!				</p> 
				<img src="images/loading.gif" class="loading" alt="Loading..." width="32px" height="32px" />			</div>


			<!-- Our thanks for Tweeting side -->
			<div id="slide3" class="slide">
				<p class="tweetText done">
					We found your tweet! Thanks for tweeting!				</p> 
			</div>
		</div>
</div>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-8858828-9");
pageTracker._trackPageview();
} catch(err) {}</script>
<!-- Woopra Code Start -->
<script type="text/javascript" src="//static.woopra.com/js/woopra.v2.js"></script>
<script type="text/javascript">
woopraTracker.track();
</script>
<!-- Woopra Code End -->
<!--
   ┏━━━━━━━━━━━━━━━━━━━━━┓
   ┃             源 码 爱 好 者               ┃
   ┣━━━━━━━━━━━━━━━━━━━━━┫
   ┃                                          ┃
   ┃           提供源码发布与下载             ┃
   ┃                                          ┃
   ┃        http://www.codefans.net           ┃
   ┃                                          ┃
   ┃            互助、分享、提高              ┃
   ┗━━━━━━━━━━━━━━━━━━━━━┛
-->
</body>
</html>