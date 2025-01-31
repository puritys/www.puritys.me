/**錯誤內容*/
var KYa="Reconnecting...",LYa="Trying to reach google.com...",MYa="The server is unavailable. Trying to reconnect...",NYa="You no longer have permission to access this document. If this is an error, contact the document owner.",OYa="You have been signed out. Sign into your account from another tab.",PYa="An error has occurred, and we cannot save your changes.不儲存要拿掉.",QYa="This application is out of date, and must be restarted. Your changes cannot be saved.";
//顯示錯誤  JYa ->
function EG_showError(a,b){

	switch(b){
	case DL:
	return KYa;
	case EL:return LYa;
	case FL:return MYa;
	case GL:return NYa;
	case HL:return OYa;
	case JL:return PYa;
	case IL:return QYa;
	default:return j
	}
}


function showObject(o){
	var c='<br />';
	for(pro in o){
		c+=pro+' = '+o[pro]+' <br />';
	}
	 
	document.getElementById('showCheckData').innerHTML+=c;
}