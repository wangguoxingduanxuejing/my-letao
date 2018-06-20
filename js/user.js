$(function(){

	$.ajax({
		type:'get',
		dataType:'json',
		url:`${baseURL}user/queryUser`,
		data:{page:1,pageSize:10},
		success:function(data){
			var html=template('template',data);
			// console.log(html);
			$('#userlist').html(html);
			statuChange();
		},
		error:function(err){
			console.log(err);
		}
	});

	function statuChange(){
		var btn=$('.statubtn');
		btn.on('click',function(){
			console.log($(this).data('id'));
		});
	}
	
});