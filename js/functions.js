

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
	self.funcs = {
		//initierar alla funktioner
		init:function(){
			self.funcs.generate();
			//initiate everything
		},
		//Genererar ett random tal
		generate:function(){
			self.vars.output = Math.floor((Math.random()*100)+1);
			//console.log((5*vars.X+1)%8);
		},
	}
	self.funcs.init();
}


//Skriver ut sifran i webbläsaren. (ingen matte bara ux)
randomGenerator.prototype.print = function () {
	var self = this;
	console.log(self);
	self.funcs.generate();
	var HTMLvalue = "<div class='output'>";

	for (i = 0; i < 10; i++) {
		HTMLvalue += "<span>" + (self.vars.output-i) + "</span>";
	};

	HTMLvalue += "</div>";

	$(self.output).html(HTMLvalue);
	console.log(self.vars.output);
}


randomGenerator.prototype.uppgA = function () {
	var seed = 0,
	allVals = [];

	for (var i = 0; i < 8; i++) {
		allVals[i] = ((2*(seed)+1)%8);//.toString(2).slice(0, 2);
		seed = allVals[i];
	};

	console.log(allVals);
}