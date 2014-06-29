$(document).ready(function(){    
$("#showAll").click(function () {
	$(".feed-entry").removeClass('hidden');
});
}

// This really means hide everything else

$(document).ready(function(){    
$("#showScience").click(function () {
	$(".feed-entry").removeClass('hidden');
	$(".art, .environment, .business").addClass("hidden");
});
}

$(document).ready(function(){    
$("#showArt").click(function () {
	$(".feed-entry").removeClass('hidden');
	$(".science, .business, .environment").addClass("hidden")
});
}

$(document).ready(function(){    
$("#showEnvironment").click(function () {
	$(".box").removeClass('hidden');
	$(".science, .art, .business").addClass("hidden")
});
}

$(document).ready(function(){   
$("#showBusiness").click(function () {
		$(".box").removeClass('hidden');
	$(".science, .art, .environment").addClass("hidden")
});
}