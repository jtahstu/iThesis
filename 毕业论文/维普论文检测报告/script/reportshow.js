$(function(){
	$('.cqvip-jiance-paperreportpart').click(function(){
		var partid=$(this).attr('partid');
		$('.partInfo').hide();
		$('#detail_'+partid).show();
	});
	$('.cqvip-jiance-reportdrop').live('click',function(){
		if(!confirm('您确认进行此操作吗？')){return;}
		var paperid=$(this).attr('paperid');
		var partid=$(this).attr('partid');
		var dropsign=$(this).attr('dropsign');
		
		$('.cqvip-jiance-paperreportpart').each(function(i){
			var curobj=$(this);
			var curpartid=$(this).attr('partid');
			if(curpartid == partid){
				$.ajax({
					dataType: 'json',
					url: 'organpartdrop.aspx?paperid=' + paperid + '&partid=' + partid + '&dropsign=' + dropsign,
					cache: false,
					success: function(data){
						if(data.success){
							curobj.replaceWith(curobj.html());
							$('#detail_'+partid).hide();
							$('.cqvip-jiance-percentage').html((Number($('.cqvip-jiance-percentage').text())-data.schedule).toFixed(2));
							$('.cqvip-jiance-partnum').html(Number($('.cqvip-jiance-partnum').text())-1);
						}else{
							alert(data.message);
						}
					}
				});
			}
		});
	});
});