/*
	YSWX
	@Vie
*/

(function($) {
	// $json = {["index":"yswx001.html","title":"yiqie","author":"ce"],["index":"yswx001.html","title":"yiqie","author":"ce"],["index":"yswx001.html","title":"yiqie","author":"ce"]};
	
	$authors = [
		{"index":"#","author":"阿尔贝·加缪", "letters":[{ "index":"#","title":"局外人/鼠疫"}]},
		{"index":"#","author":"塞缪尔·贝克特", "letters":[{ "index":"#","title":"等待戈多"}]},
		{"index":"#","author":"费西廷", "letters":[{ "index":"yswx001.html","title":"一切人的谋杀"},{ "index":"yswx002.html","title":"不说话的王国" }]},
		{"index":"#","author":"匿名", "letters":[{ "index":"#","title":"露珠里的世界"},{ "index":"#","title":"拆散的笔记薄" },{ "index":"#","title":"盲目" }]}
	];
	
	$a_str = '';
	$l_str = '';
	$a_len = $authors.length;
	for ($i  = 0; $i < $a_len; $i += 1) {
		$l_len = $authors[$i].letters.length;
		$a_str += '<li><a href="' + $authors[$i].index + '">' + $authors[$i].author + '</a>';
		if ($l_len > 0) {
			$a_str += '<ul>';
			for ($j = 0; $j < $l_len; $j += 1) {
				$a_str += '<li><a href="' + $authors[$i].letters[$j].index + '">' + $authors[$i].letters[$j].title + '</a></li>';
				$l_str += '<li><a href="' + $authors[$i].letters[$j].index + '">' + $authors[$i].letters[$j].title + '</a></li>';
			}
			$a_str += '</ul>';
		}		
		$a_str += '</li>';		
	}
	
	$("#authors").append($a_str);
	$("#letters").append($l_str); 

})(jQuery);