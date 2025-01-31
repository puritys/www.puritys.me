

function previewImage(files){
	var n=files.length;

	for(var i=0;i<n;i++){
		$("#dragBox").append("<img src='"+files[i]+"' width='150' style='margin:10px;border:1px solid #cecece;' />");
	}
	file_upload.clearFiles();
}

$(document).ready(function(){
	var file_upload=new vjUI_fileUpload({"dragInBox":"#dragBox","loadCallback":previewImage});

});