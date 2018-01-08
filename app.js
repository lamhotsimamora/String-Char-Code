$txt_char = __({
	el:"txt_char"
});
$btn_copy = __({
	el:"btn_copy"
});
$txt_code = __({
	el:"txt_code"
});

$txt_result = __({
	el:"txt_result"
});

$txt_char.when("keyup",$=>{
	$o = $txt_char.getValue;
	$v = _charToDec($o);
	
	$txt_result.setValue($v);
});


$txt_code.when("keyup",$=>{
	$o = $txt_code.getValue;
	$v = _decToChar($o);
	
	$txt_result.setValue($v);
});

$btn_copy.when("click",$=>{
	$txt_result.copy();
});

$txt_char.focus();
