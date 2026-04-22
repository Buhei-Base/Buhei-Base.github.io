$(document).on('click', '#MenuCloseBtn', function(){
  MenuHidden();
});

function MenuHidden ( Action ){
  $(".Menu-CloseBtn-Icon").toggleClass('active');
  $(".Menu").toggleClass('active');
}
function MenuAction ( Action ){
	switch (Action){
		case 'Top':
		  TopPage ();
		  MenuHidden();
	    break;
		case 'Service':
			ServicePage ();
		  MenuHidden();
	    break;
		case 'Infomation':
			InfomationPage();
		  MenuHidden();
	    break;
  	default:
		  TopPage ();
		  MenuHidden();
	    break;
	}
}

