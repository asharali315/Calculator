var result = document.getElementById("result");

var number = "", count = 0, count1 = 0;
function get(num) {
	if (count1 >= 1) {
		count1 = 0;
		result.value = "";
		number = "";
		number += num;
		if (num == "/" || num == "+" || num == "-" || num == "%" || num == "*") {
			result.value = "";
			count = 0;
		}
		else {
			result.value += num;
		}
	}
	else {
		number += num;
		if (num == "/" || num == "+" || num == "-" || num == "%" || num == "*") {
			result.value = "";
			count = 0;
		}
		else {
			result.value += num;
		}
	}
}

function getPoint(point) {
	if (count < 1) {
		count++;
		result.value += point;
		number+=point;
	}
}

function Clear() {
	result.value = "";
	number = "";
	count = 0;
}

function getResult() {
	var result = document.getElementById("result");
	result.value = number;
	console.log(result.value);
	result.value = eval(result.value);
	count1++;
}
