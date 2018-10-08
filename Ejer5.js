
var scope = "global";

function f() {

	//var scope = "almibar";
	console.log(scope);
	var scope = "local";
	console.log(scope);
}

f();

console.log(scope);