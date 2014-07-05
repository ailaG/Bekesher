<?php
/* Temporary template files, until we move to node */


/***** HEADER *****/

function get_header($options=Array()) {

	?>
	
	<!DOCTYPE html>
<html ng-app="bekesher">
<head>
	<meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php echo $options['title']; ?></title>
	
	<!-- CSS -->
	<link href="//fonts.googleapis.com/css?family=Oswald:300,400,700" rel="stylesheet" type="text/css">
	<link rel="stylesheet" href="css/common.css">
	
	<!-- JavaScript -->
	<!-- All in <head> to avoid FOUC -->
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.18/angular.min.js"></script>
	<script src="http://cdn.pubnub.com/pubnub.min.js"></script>
	<script src="http://pubnub.github.io/angular-js/scripts/pubnub-angular.js"></script>
	
	<script src="scripts/bekesher.js"></script>
	<script src="scripts/pubnub.js"></script>
	
	
</head>
<body>

<header id="header">
	<h1>
		<img src="images/logo.png" alt="Bekesher logo">
	</h1>
	<nav>
		<?php 
			$active = function($slug, $options_slug) {
				echo ($slug == $options_slug) ? 'class="active"' : ''; // TOOD minihack
			}
		?>
		<a <?php $active('send', $options['slug']);  ?> data-slug="send"  href="send.php">Send!</a>
		<a <?php $active('setup', $options['slug']); ?> data-slug="setup" href="setup.php">Setup</a>
		<a <?php $active('stats', $options['slug']); ?> data-slug="stats" href="stats.php">Stats</a>
	</nav>
</header>

<div id="content">
	
	<?php
}

/***** FOOTER *****/
function get_footer($options=Array()) {
	?>
	
</div><!-- Content -->		
</body>
</html>
	
	<?php
}


?>