$(document).ready(function(){
	  	var cityname = "青岛";
  var x = "https://free-api.heweather.com/s6/weather/forecast?location="+cityname+"&key=4bb9326c00814609b13af594c8378d5d&lang=en";
  var y = "https://free-api.heweather.com/s6/weather/now?location="+cityname+"&key=4bb9326c00814609b13af594c8378d5d&lang=en";
  
 	console.log(x);
 	console.log(y);

 $.getJSON(x,function(json){
 	//当天
	var lo = json["HeWeather6"][0]["basic"]["location"];
	var weather = json["HeWeather6"][0]["daily_forecast"][0]["cond_txt_d"];
	var fengsu =json["HeWeather6"][0]["daily_forecast"][0]["wind_spd"];
	var uv = json["HeWeather6"][0]["daily_forecast"][0]["uv_index"];
	var fengxiang = json["HeWeather6"][0]["daily_forecast"][0]["wind_dir"];
	var max_temperature = json["HeWeather6"][0]["daily_forecast"][0]["tmp_max"];
	var min_temperature = json["HeWeather6"][0]["daily_forecast"][0]["tmp_min"];
	var hum = json["HeWeather6"][0]["daily_forecast"][0]["hum"];
	var vis = json["HeWeather6"][0]["daily_forecast"][0]["vis"];
	//明天
	var weather1 = json["HeWeather6"][0]["daily_forecast"][1]["cond_txt_d"];
	var max_temperature1 = json["HeWeather6"][0]["daily_forecast"][1]["tmp_max"];
	var min_temperature1 = json["HeWeather6"][0]["daily_forecast"][1]["tmp_min"];
	var vis1 = json["HeWeather6"][0]["daily_forecast"][1]["vis"];

	//后天
	var weather2 = json["HeWeather6"][0]["daily_forecast"][2]["cond_txt_d"];
	var max_temperature2 = json["HeWeather6"][0]["daily_forecast"][2]["tmp_max"];
	var min_temperature2 = json["HeWeather6"][0]["daily_forecast"][2]["tmp_min"];
	var vis2 = json["HeWeather6"][0]["daily_forecast"][2]["vis"];
	
	$("#p1").html(lo);
	$("#p3").html(weather);
	$("#p4").html(uv);
	$("#p5").html(fengxiang);
	$("#p6").html(fengsu+"km/h");
	$("#p7").html(hum);
	$("#p8").html(min_temperature+"°c");
	$("#p9").html(max_temperature+"°c");
	$("#p10").html(vis+"Km");
	//明天
	$("#p11").html(weather1);
	$("#p12").html(max_temperature1+"°c");
	$("#p13").html(min_temperature1+"°c");
	$("#p14").html(vis1+"Km");
	//后天
	$("#p15").html(weather2);
	$("#p16").html(max_temperature2+"°c");
	$("#p17").html(min_temperature2+"°c");
	$("#p18").html(vis2+"Km");
 });
 	$.getJSON(y,function(json){
 		var shikuang = json["HeWeather6"][0]["now"]["tmp"];
 		$("#s1").html(shikuang+"°c");
 	});
  $("#b01").click(function(){
  	var cityname = document.getElementById('input-city').value;
  var x = "https://free-api.heweather.com/s6/weather/forecast?location="+cityname+"&key=4bb9326c00814609b13af594c8378d5d&lang=en";
  var y = "https://free-api.heweather.com/s6/weather/now?location="+cityname+"&key=4bb9326c00814609b13af594c8378d5d&lang=en";
  
 	console.log(x);
 	console.log(y);

 $.getJSON(x,function(json){
 	//当天
	var lo = json["HeWeather6"][0]["basic"]["location"];
	var weather = json["HeWeather6"][0]["daily_forecast"][0]["cond_txt_d"];
	var fengsu =json["HeWeather6"][0]["daily_forecast"][0]["wind_spd"];
	var uv = json["HeWeather6"][0]["daily_forecast"][0]["uv_index"];
	var fengxiang = json["HeWeather6"][0]["daily_forecast"][0]["wind_dir"];
	var max_temperature = json["HeWeather6"][0]["daily_forecast"][0]["tmp_max"];
	var min_temperature = json["HeWeather6"][0]["daily_forecast"][0]["tmp_min"];
	var hum = json["HeWeather6"][0]["daily_forecast"][0]["hum"];
	var vis = json["HeWeather6"][0]["daily_forecast"][0]["vis"];
	//明天
	var weather1 = json["HeWeather6"][0]["daily_forecast"][1]["cond_txt_d"];
	var max_temperature1 = json["HeWeather6"][0]["daily_forecast"][1]["tmp_max"];
	var min_temperature1 = json["HeWeather6"][0]["daily_forecast"][1]["tmp_min"];
	var vis1 = json["HeWeather6"][0]["daily_forecast"][1]["vis"];

	//后天
	var weather2 = json["HeWeather6"][0]["daily_forecast"][2]["cond_txt_d"];
	var max_temperature2 = json["HeWeather6"][0]["daily_forecast"][2]["tmp_max"];
	var min_temperature2 = json["HeWeather6"][0]["daily_forecast"][2]["tmp_min"];
	var vis2 = json["HeWeather6"][0]["daily_forecast"][2]["vis"];
	
	$("#p1").html(lo);
	$("#p3").html(weather);
	$("#p4").html(uv);
	$("#p5").html(fengxiang);
	$("#p6").html(fengsu+"km/h");
	$("#p7").html(hum);
	$("#p8").html(min_temperature+"°c");
	$("#p9").html(max_temperature+"°c");
	$("#p10").html(vis+"Km");
	//明天
	$("#p11").html(weather1);
	$("#p12").html(max_temperature1+"°c");
	$("#p13").html(min_temperature1+"°c");
	$("#p14").html(vis1+"Km");
	//后天
	$("#p15").html(weather2);
	$("#p16").html(max_temperature2+"°c");
	$("#p17").html(min_temperature2+"°c");
	$("#p18").html(vis2+"Km");
 });
 	$.getJSON(y,function(json){
 		var shikuang = json["HeWeather6"][0]["now"]["tmp"];
 		$("#s1").html(shikuang+"°c");
 	});
  });
  

	$("#radio").click(function(){
		var weatherindex = $("#p3").html();
 		var url = "radio.html?weather="+weatherindex;
// 		alert(weatherindex);
		window.location.href = url;
	});
});