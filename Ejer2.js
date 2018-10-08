scope = "global";

function checkscope2() {
	
	scope = "local";
	myscope = "local";

	return [scope, myscope]
}

console.log(checkscope2());

console.log(scope);
console.log(myscope);
