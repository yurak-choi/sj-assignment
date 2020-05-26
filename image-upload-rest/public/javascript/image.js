
$(document).ready(function() {
	$('input[name=imgFile]').change(function() {
		var files = this.files;
		var file = files[0];
		
		if(file) {
			$('#name').val(file.name);
			$('#size').val(file.size);
			
			var reader = new FileReader();
			reader.onload = function(readerEvt){
				var binaryString = readerEvt.target.result;
				$('#content_base64').val(btoa(binaryString));
			}
			reader.readAsBinaryString(file);
		}
	});
	
	$('#submitBtn').click(function(e) {
		e.preventDefault();
		
		var data = $('#imageForm').serialize();
		$.ajax({
            type : 'post',
            url : '/image',
            data : data,
            dataType : 'json',
            success : function(data){
            	$('#uploadsuccess').show();
            	$('#uploadError').hide();
            	$('#img_id').text(data.id);
            },
            error: function(xhr, status, error) {
            	$('#uploadsuccess').hide();
            	$('#uploadError').show();
            	$('#error_msg').text(error);
            }
		});
	});
});
