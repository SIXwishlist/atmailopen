function check_email(form)	{

var email;

try {
email = form.value;	
} catch(e) {
	return true;
}

if (email)	{
	if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1)	{
			alert('正しいEメールアドレスを入力してください。');
			form.focus();
			return false;
	}
 }
return true;
}

function check_account(form) {
    var name = form.exusername;
    var domain = form.expop3host;
    var mailserver = form.exmailserver;
    
    var elems = new Array(name, domain, mailserver);
    
    for (i in elems) {
    
        if (!elems[i].value.match(/^\w+[\-.\w]*$/)) {
            elems[i].focus();
	        alert('正しいEメールアドレスを入力してください。');
	        return false;
        }
    }
    
    return true;
}
