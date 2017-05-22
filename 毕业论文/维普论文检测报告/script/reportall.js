$(function () {
		$('#cqvip-jianceorgan-paperreport-highcharts').highcharts({
				exporting: {
						enabled: false
				},
				chart: {
						plotBackgroundColor: null,
						plotBorderWidth: null,
						plotShadow: false,
						backgroundColor: '#fefcf1',
						width: 320,
						height: 190
				},
				colors: ['#32cd32', '#FF0000', '#FFFF66'],
				title: {
						text: ''
				},
				tooltip: {
						pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
				},
				plotOptions: {
						pie: {
								allowPointSelect: true,
								cursor: 'pointer',
								dataLabels: {
										enabled: true,
										color: '#000000',
										connectorColor: '#000000',
										format: '<b>{point.name}</b>: {point.percentage:.1f} %'
								},
								showInLegend: true
						}
				},
				series: [{
						type: 'pie',
						name: '百分比',
						data: [
						['自写率', ownpercentage],
						['复写率', duplicatepercentage],
						['引用率', quotepercentage]
				]
				}]
		});
});