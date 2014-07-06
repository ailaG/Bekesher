<?php
	include('php/template.php');
	$template_options = Array(
		'title' => 'Bekesher - Main',
		'slug' => 'send'
	);
	echo get_header($template_options);

?>

	<h1>Stay Bekesher</h1>
	<form id="send" ng-submit="saveToPubNub()" ng-controller="submit_form" method="post"
		action="http://www.galiaba.com/tmp/angelhack-bekesher-mail.php" target="last_min_hack">
		<iframe name="last_min_hack" class="sorry" style="height:1px;width:1px;visibility:hidden"></iframe>
		
		<fieldset class="basics">
			<input placeholder="Email to..." type="email" name="email" ng-model="email">

			<input placeholder="Text (optional)" type="text" ng-model="free_text" name="free_text" id="free_text">
		</fieldset>
		
		<fieldset id="focus" ng-controller="greetings_form">
			<h2>Focus</h2>
			<select name="greeting" id="greeting" ng-model="greetingsF.selected" ng-options="greeting as greeting.title for greeting in greetingsF.greetings track by greeting.title">
 			</select>
 			<input type="hidden" name="greeting_text" value="{{greetingsF.selected.text}}">
		</fieldset>
		
		<fieldset ng-controller="portfolio_form">
			<h2>Portfolio</h2>
			<p ng-repeat="item in portfolio_flat">
				<label>
					<input type="checkbox" name="portfolio_items[]" value="{{item}}" checklist-model="portfolioS.checked">{{item}}
				</label>
			</p>
		</fieldset>
		
		
		<input type="submit" value="Send!">
		
		
		<section id="preview">
			<h1>E-mail preview</h1>
			<blockquote>
				<p>To: {{email}}</p>

				<p>Hi,</p>
				<p>We met at the She Codes Demo Day.</p>
				<p ng-show="free_text.length > 0">Regarding: {{free_text}}</p>
				<p ng-controller="greetings_preview">{{greetingsF.selected.text}}</p>
				
				<p>Some example projects:</p><ul>
				<ul>
					<li ng-repeat="item in portfolioS.selected">{{portfolioS.item}}</li>
				</ul>
			</blockquote>
		</section>
		
		<input type="submit" value="Send!">

	</form>

<?php
	echo get_footer($template_options);
?>