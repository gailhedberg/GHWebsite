	// 
	// welcome.js 
	//
	// this is the javascript file for the Home page on:
	//		www.gailhedberg.prosperitacademy.com
	//
	//	written by gail hedberg Ma, USA
	//
	//	modification history: 5/17/2015 - put up on wp server
	//  --> 5/18/15 - GH - added onmousein, onmouseover event handling
	//
	var $ = function(id) {
		return document.getElementById(id);
	}
	
	jQuery().ready(function() {
	//window.onload = function() { // onload
		alert("got here - 0");
		
		var day_name = getDayOfWeek();
		//alert(day_name);
		$("dayofweek1").innerHTML = day_name;
		$("dayofweek2").innerHTML = day_name;
	
		$("link").onmouseover  = function() {
			//alert("mouse over " + day_name);
			showList(day_name);
		}
		
		$("link").onmousein  = function() {
			//alert("mouse in " + day_name);
			showList(day_name);
		}
		
		$("link").onclick  = function() {
			//alert('onclick');
			$("divlist").setAttribute("class", "closed");
		}
		
		$("link").onmouseout  = function() {
			//alert('mouse out');
			$("divlist").setAttribute("class", "closed");
		}
	});
		
	getDayOfWeek = function() {
		var d = new Date();
		var days = [];
		days[0] = "Sunday";
		days[1] = "Monday";
		days[2] = "Tuesday";
		days[3] = "Wednesday";
		days[4] = "Thursday";
		days[5] = "Friday";
		days[6] = "Saturday";
		var txt = days[d.getDay()];
		return txt;
	}
	
	showList = function(day_name) {
		//alert("showList " + day_name);
		$("divlist").setAttribute("class", "open");
					
		switch (day_name) {
		case "Sunday":
			$("first").innerHTML = "study early";
			$("second").innerHTML = "review week ahead";
			$("third").innerHTML = "get outside and have some fun";
			break;
		case "Monday":
			$("first").innerHTML = "back to studying";
			$("second").innerHTML = "household chores";
			$("third").innerHTML = "evening with my kids";
			break;
		case "Tuesday":
			$("first").innerHTML = "study study study";
			$("second").innerHTML = "fun break";
			$("third").innerHTML = "power walk with the dog";
			break;
		case "Wednesday":
			$("first").innerHTML = "food prep - early am";
			$("second").innerHTML = "afternoon meeting and errands";
			$("third").innerHTML = "power walk with the dog";
			break;
		case "Thursday":
			$("first").innerHTML = "thursday coding";
			$("second").innerHTML = "couch to 5k";
			$("third").innerHTML = "dinner with the boys";
			break;
		case "Friday":
			$("first").innerHTML = "friday fun day";
			$("second").innerHTML = "couch to 5k";
			$("third").innerHTML = "coding and catch up";
			break;
		case "Saturday":
			$("first").innerHTML = "customer follow up";
			$("second").innerHTML = "couch to 5k";
			$("third").innerHTML = "coding, and more studying";
			break;
		}
	}
	
