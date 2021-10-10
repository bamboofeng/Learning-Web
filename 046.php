<?php
	// 设置 返回的为 xml
	header('content-type:text/xml; charset= utf-8');

	// 读取xml文件 并返回
	echo file_get_contents('046.xml');

 ?>
