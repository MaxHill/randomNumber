

var randomGenerator = function(config){
	var self = this;

	//Variablar
	self.roof	= config.roof;
	self.floor	= config.floor;
	self.output	= config.output;

	console.log(self.output);

	self.vars = {
		X: new Date().getTime(),
		output:0

	}

	//funktioner
	var funcs = {
		//initierar alla funktioner
		init:function(){
			funcs.generate();
			//initiate everything
		},
		//Genererar ett random tal
		generate:function(){
			self.vars.output = Math.floor((Math.random()*100)+1);
			//console.log((5*vars.X+1)%8);
		},
	}

	funcs.init();
}


//Skriver ut sifran i webbläsaren. (ingen matte bara ux)
randomGenerator.prototype.print = function () {
	var self = this;
	var HTMLvalue = "";

	for (i = 0; i < 10; i++) {
		HTMLvalue += "<span>" + (self.vars.output-i) + "</span>";
	};

	$(self.output).html(HTMLvalue);
	console.log(self.vars.output);
}


var test = new randomGenerator({
	roof:34,
	floor:0,
	output:".output"
});
test.print();