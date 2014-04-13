

var randomGenerator = function(config){
	var self = this;

	//Variablar
	self.roof	= config.roof;
	self.floor	= config.floor;
	self.output	= config.output;

	self.vars = {
		date: new Date().getTime(),
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
	self.funcs.generate();
	var HTMLvalue = "<div class='output'>";

	for (i = 0; i < 10; i++) {
		HTMLvalue += "<span>" + (self.vars.output-i) + "</span>";
	};

	HTMLvalue += "</div>";

	if ($(".output").length > 0){
		$(".output").addClass('rollOut');
		setTimeout(function() {
			$(self.output).html(HTMLvalue);
		}, 490);
		
	}else{
		$(self.output).html(HTMLvalue);
	}
}


randomGenerator.prototype.uppgA = function () {
	var seedA = 0,
	seedB = 0,
	allValsUppgA = [],
	allValsUppgB = [];

	for (var i = 0; i < 8; i++) {
		allValsUppgA[i] = ((2*(seedA)+1)%8);
		allValsUppgB[i] = ((2*(seedB)+1)%8).toString(2).slice(0, 2);
		
		seedA = allValsUppgA[i];
		seedB = allValsUppgB[i];
	};

	console.log("Uppgift A: \n"+allValsUppgA);
	console.log("Uppgift B: \n"+allValsUppgB);
}

randomGenerator.prototype.uppgC = function () {
 var 	self = this,
 		repeats = [],
 		seeder = self.vars.date;


 for (var i = 0; i <= 10000; i++) {
 	seeder = (seeder * 25713 + 13849) % (Math.pow(2,16));
 	var number = seeder >> 7;
 	
 	repeats[number]?
 		repeats[number] += 1:
 		repeats[number] = 1;
 };
 console.log("Uppgift C: ");
 console.log(repeats);
}