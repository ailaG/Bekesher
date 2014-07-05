<?php
	include('php/template.php');
	$template_options = Array(
		'title' => 'Bekesher - Stats',
		'slug' => 'stats'
	);
	echo get_header($template_options);

?>

<h1>Emails:</h1>
<ul ng-controller="archive" id="archive">
	<li ng-repeat="item in emails">To: {{item.email}}, message: {{item.message}}</li>
</ul>




<?php
	echo get_footer($template_options);
?>