<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Home</title>
	<base href="{{base_url}}" />
			<meta name="viewport" content="width=992" />
		<meta name="description" content="" />
	<meta name="keywords" content="" />
		<meta name="generator" content="Zyro - Website Builder" />
	
	<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<link href="css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css" />
	<script src="js/jquery-1.8.3.min.js" type="text/javascript"></script>
	<script src="js/bootstrap.min.js" type="text/javascript"></script>
	<script src="js/main.js" type="text/javascript"></script>

	<link href="css/site.css?v=1.0.10" rel="stylesheet" type="text/css" />
	<link href="css/common.css?ts=1427570988" rel="stylesheet" type="text/css" />
	<link href="css/1.css?ts=1427570988" rel="stylesheet" type="text/css" />
	
	<script type="text/javascript">var currLang = '';</script>		
	<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>


<body>{{ga_code}}<div class="root"><div class="vbox wb_container" id="wb_header">
	
<div id="wb_element_instance0" class="wb_element"><ul class="hmenu"><li class="active"><a href="Home/" target="_self" title="Home">Home</a></li><li><a href="Contato/" target="_self" title="Contato">Contato</a></li></ul></div><div id="wb_element_instance1" class="wb_element"><img alt="" src="gallery/39dbbb2d1937a39e3303dc198ba8c3e3_116x52.png"></div><div id="wb_element_instance2" class="wb_element" style=" line-height: normal;"><h4 class="wb-stl-pagetitle" style="text-align: left;">Cervejaria Prusanto</h4>
</div></div>
<div class="vbox wb_container" id="wb_main">
	
<div id="wb_element_instance5" class="wb_element" style=" line-height: normal;"><h5 class="wb-stl-subtitle">Cervejas Especiais com Qualidade <strong style="color: rgb(255, 255, 255); font-size: 35px; line-height: normal; background-color: transparent;">EXTRAORDINÁRIA</strong></h5>

<p class="wb-stl-normal"> </p>
</div><div id="wb_element_instance6" class="wb_element" style="width: 100%;">
			<?php
				global $show_comments;
				if (isset($show_comments) && $show_comments) {
					renderComments(1);
			?>
			<script type="text/javascript">
				$(function() {
					var block = $("#wb_element_instance6");
					var comments = block.children(".wb_comments").eq(0);
					var contentBlock = $("#wb_main");
					contentBlock.height(contentBlock.height() + comments.height());
				});
			</script>
			<?php
				} else {
			?>
			<script type="text/javascript">
				$(function() {
					$("#wb_element_instance6").hide();
				});
			</script>
			<?php
				}
			?>
			</div></div>
<div class="vbox wb_container" id="wb_footer" style="height: 104px;">
	
<div id="wb_element_instance3" class="wb_element" style=" line-height: normal;"><p class="wb-stl-footer"><span style="color:#ffffff;">© 2015 </span><a href="http://prusanto.com.br"><span style="color:#ffffff;">prusanto.com.br</span></a></p>
</div><div id="wb_element_instance4" class="wb_element"><div class="wb-stl-footer" style="white-space: nowrap;">Powered by <i class="icon-wb-logo"></i><a href="http://zyro.com/catalog/" target="_blank" title="Zyro - Website Builder">Zyro</a></div><script type="text/javascript">
				var _siteProBadge = _siteProBadge || [];
				_siteProBadge.push({hash: "6116a9b1c1ac4c6844165178d9db1c36", cont: "wb_element_instance4"});

				(function() {
					var script = document.createElement("script");
					script.type = "text/javascript";
					script.async = true;
					script.src = "http://zyro.com/catalog/getjs/";
					var s = document.getElementsByTagName("script")[0];
					s.parentNode.insertBefore(script, s);
				})();
				</script></div><div id="wb_element_instance7" class="wb_element" style="text-align: center; width: 100%;"><div class="wb_footer"></div><script type="text/javascript">
			$(function() {
				var footer = $(".wb_footer");
				var html = (footer.html() + "").replace(/^\s+|\s+$/g, "");
				if (!html) {
					footer.parent().remove();
					footer = $("#wb_footer");
					footer.height(50);
				}
			});
			</script></div></div><div class="wb_sbg"></div></div></body>
</html>