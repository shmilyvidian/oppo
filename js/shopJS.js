addLoadEvent(SelectCity);
function Ajax(url,fnSucc,fnFail){
	var oAjax=new XMLHttpRequest();
	oAjax.open("get",url,true);
	oAjax.send(null);
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if (oAjax.status==200) {
				fnSucc(oAjax.responseText);
			}else{
				fnFail(oAjax.status);
			}
		}
	}
}

function SelectCity(){
	var oProvice=document.getElementById('provice');
	var oCity=document.getElementById('city');
	Ajax("pro.txt",function(str){
		var arr=eval(str);
		for(i in arr){
			oProvice.add(new Option(arr[i].name,i));
		};
		oProvice.options[7].selected=true;
	});
	function City(){
		Ajax("city.txt",function(str){
			var city=eval(str);
			var pro=oProvice.value;
			var Local=city[pro];
			for(i in Local){
				oCity.add(new Option(Local[i].local,i));
			}
			oCity.options[1].selected=true;
		});
	}
	City();
	oProvice.onchange=function(){
		oCity.options.length=1;
		City();
	}
}

