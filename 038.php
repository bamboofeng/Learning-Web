<?php
	header('content-type:text/html; charset= utf-8');
    echo "<h1>php 的get 请求演示</h1>";
    echo '用户名：'.$_GET['userName'];
    echo '<br/>';
    echo '邮箱：'.$_GET['userEmail'];
 ?>