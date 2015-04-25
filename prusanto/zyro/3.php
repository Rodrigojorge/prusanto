<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title>Contato</title>
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
	<link href="css/3.css?ts=1427570988" rel="stylesheet" type="text/css" />
	
	<script type="text/javascript">var currLang = '';</script>		
	<!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
	  <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>


<body>{{ga_code}}<div class="root"><div class="vbox wb_container" id="wb_header">
	
<div id="wb_element_instance8" class="wb_element"><ul class="hmenu"><li><a href="Home/" target="_self" title="Home">Home</a></li><li class="active"><a href="Contato/" target="_self" title="Contato">Contato</a></li></ul></div><div id="wb_element_instance9" class="wb_element"><img alt="" src="gallery/39dbbb2d1937a39e3303dc198ba8c3e3_116x52.png"></div><div id="wb_element_instance10" class="wb_element" style=" line-height: normal;"><h4 class="wb-stl-pagetitle" style="text-align: left;">Cervejaria Prusanto</h4>
</div></div>
<div class="vbox wb_container" id="wb_main">
	
<div id="wb_element_instance13" class="wb_element" style=" line-height: normal;"><h1 class="wb-stl-heading1"><span style="color:#ffffff;">Contato</span></h1>

<p> </p>
</div><div id="wb_element_instance14" class="wb_element"><form class="wb_form" method="post"><input type="hidden" name="wb_form_id" value="49b5ac7d"><textarea name="message" rows="3" cols="20" class="hpc"></textarea><table><tr><th class="wb-stl-normal">Nome&nbsp;&nbsp;</th><td><input type="hidden" name="wb_input_0" value="Nome"><input class="form-field" type="text" value="" name="wb_input_0"></td></tr><tr><th class="wb-stl-normal">E-mail&nbsp;&nbsp;</th><td><input type="hidden" name="wb_input_1" value="E-mail"><input class="form-field" type="text" value="" name="wb_input_1"></td></tr><tr class="area-row"><th class="wb-stl-normal">Messagem&nbsp;&nbsp;</th><td><input type="hidden" name="wb_input_2" value="Messagem"><textarea class="form-field form-area-field" rows="3" cols="20" name="wb_input_2"></textarea></td></tr><tr class="form-footer"><td colspan="2"><button type="submit" class="btn">Enviar</button></td></tr></table></form><script type="text/javascript">
			var formValues = <?php echo json_encode($_POST); ?>;
			var formErrors = <?php global $formErrors; echo json_encode($formErrors); ?>;
			wb_form_validateForm("49b5ac7d", formValues, formErrors);
			<?php global $wb_form_send_state; if (isset($wb_form_send_state) && $wb_form_send_state) { ?>
				setTimeout(function() {
					alert("<?php echo addcslashes($wb_form_send_state, "\\'\"&\n\r\0\t<>"); ?>");
				}, 1);
			<?php } ?>	
			</script></div><div id="wb_element_instance15" class="wb_element" style="width: 100%;">
			<?php
				global $show_comments;
				if (isset($show_comments) && $show_comments) {
					renderComments(3);
			?>
			<script type="text/javascript">
				$(function() {
					var block = $("#wb_element_instance15");
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
					$("#wb_element_instance15").hide();
				});
			</script>
			<?php
				}
			?>
			</div></div>
<div class="vbox wb_container" id="wb_footer" style="height: 104px;">
	
<div id="wb_element_instance11" class="wb_element" style=" line-height: normal;"><p class="wb-stl-footer"><span style="color:#ffffff;">© 2015 </span><a href="http://prusanto.com.br"><span style="color:#ffffff;">prusanto.com.br</span></a></p>
</div><div id="wb_element_instance12" class="wb_element"><div class="wb-stl-footer" style="white-space: nowrap;">Powered by <i class="icon-wb-logo"></i><a href="http://zyro.com/catalog/" target="_blank" title="Zyro - Website Builder">Zyro</a></div><script type="text/javascript">
				var _siteProBadge = _siteProBadge || [];
				_siteProBadge.push({hash: "6116a9b1c1ac4c6844165178d9db1c36", cont: "wb_element_instance12"});

				(function() {
					var script = document.createElement("script");
					script.type = "text/javascript";
					script.async = true;
					script.src = "http://zyro.com/catalog/getjs/";
					var s = document.getElementsByTagName("script")[0];
					s.parentNode.insertBefore(script, s);
				})();
				</script></div><div id="wb_element_instance16" class="wb_element" style="text-align: center; width: 100%;"><div class="wb_footer"></div><script type="text/javascript">
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