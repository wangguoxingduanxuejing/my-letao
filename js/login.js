$(function(){
	var form =$("#userform");
	var result;
	var btn = $('#loginbtn').on('click',function(){
		result=form.serializeToJson();
		$.ajax({
			type:'post',
			dataType:'json',
			data:result,
			url:`${baseURL}employee/employeeLogin`,
			success:function(data){
				console.log(data);
				if(data.success){
					location.href="user.html";
				}
				else{
					alert(data);
				}
			},
			error:function(err){
				console.log(err);
			}
		});
	});
});
