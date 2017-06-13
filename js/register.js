// JavaScript Document
$(document).ready(function(){
	$('table input').blur(function(){//丢失焦点
		$(this).parent().find('.inp2').remove();//删除多余的警告
		
		if($(this).is('#username'))//判断这个text是不是用户名
		{
			if(this.value===''||this.value.length<3)
			{
				var hdw1=$('<span class="inp2 error">用户名不得小于3位</span>');//创建一个span
				$(this).parent().append(hdw1);
			}
			else
			{
				var hdw1=$('<span class="inp2 right">正确</span>');
				$(this).parent().append(hdw1);
			}
		}
		//用户框结束
		if($(this).is('#password'))
		{
			if(this.value===''||this.value.length<6)
			{
			   var hdw1='<span class="inp2 error">输入至少6位密码</span>';
			   $(this).parent().append(hdw1);
			}
			else
			{
				var hdw1='<span class="inp2 right">正确</span>';
				$(this).parent().append(hdw1);
			}
		}
		//密码框结束
		if($(this).is('#passwords'))
		{
			if($(this).val()!==$('#password').val()||this.value==='')
			{
				var hdw1='<span class="inp2 error">两次密码不一致</span>';
				$(this).parent().append(hdw1);
			}
			else
			{
				var hdw1='<span class="inp2 right">正确</span>';
				$(this).parent().append(hdw1);
			}
		}
		//再次输入密码框结束
		if($(this).is('#email'))
		{
			if(this.value==''||(this.value!=''&&!/^\w+@[a-zA-Z0-9]+\.[a-z]{2,3}$/.test(this.value)))    
			{
				var hdw1='<span class="inp2 error">邮箱格式错误</span>';
				$(this).parent().append(hdw1);
			}
			else
			{
				var hdw1=$('<span class="inp2 right">正确</span>');
				$(this).parent().append(hdw1);
			}
		}
		//邮箱结束
	});
	
	$('#send').click(function(){
			$('table input').trigger('blur');           //聚集所有焦点
			var hdw4=$('.error').length;
			if(hdw4)
			{
				return false;
			}
			alert('注册成功');
			$('.inp2').remove();
			});
			
		$('#res').click(function(){
			$('.inp2').remove();
			});
});