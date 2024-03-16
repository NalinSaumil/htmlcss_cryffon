(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._332948822ce6e93c7273ef64d79171ac_0 = function() {
	this.initialize(img._332948822ce6e93c7273ef64d79171ac_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib._332948822ce6e93c7273ef64d79171ac_1 = function() {
	this.initialize(img._332948822ce6e93c7273ef64d79171ac_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib._332948822ce6e93c7273ef64d79171ac_2 = function() {
	this.initialize(img._332948822ce6e93c7273ef64d79171ac_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib._332948822ce6e93c7273ef64d79171ac_3 = function() {
	this.initialize(img._332948822ce6e93c7273ef64d79171ac_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib._332948822ce6e93c7273ef64d79171ac_4 = function() {
	this.initialize(img._332948822ce6e93c7273ef64d79171ac_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.mario = function() {
	this.initialize(img.mario);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,208);


(lib.Untitleddrawing = function() {
	this.initialize(img.Untitleddrawing);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,720);


(lib.Waluigi = function() {
	this.initialize(img.Waluigi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,303);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Waluigi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,166,303), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mario();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,94,208), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("Shielding Your Data From the Reaches of the Hacking Hands", "45px 'Viner Hand ITC'", "#0099FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 75;
	this.text.lineWidth = 745;
	this.text.parent = this;
	this.text.setTransform(426.1,2,1,1.04,0,16,0);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,801.1,182.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Untitleddrawing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,960,720), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhGvg76MCNfAAAMAAAB31MiNfAAAg");
	this.shape.setTransform(452.8,383.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhGvA77MAAAh31MCNfAAAMAAAB31g");
	this.shape_1.setTransform(452.8,383.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,907.6,769), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(452.8,383.5,1,1,0,0,0,452.8,383.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhZCXIlWAAIAAp4IFWAAIAA4yIIJAAMAAABAnIoJAAIAA99IAAp4");
	this.shape.setTransform(460.8,234.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(68,68,68,0)").s().p("EgEEAgUIAA99IAAp4IAA4yIIJAAMAAABAng");
	this.shape_1.setTransform(477.9,234.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().p("AiqE8IAAp3IFVAAIAAJ3g");
	this.shape_2.setTransform(434.7,218.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-0.5,-0.5,906.6,768), null);


// stage content:
(lib.RECOVER_10secpromo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mario
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(401,748,1,1,0,0,0,47,104);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(202).to({_off:false},0).wait(1).to({y:739.3},0).wait(1).to({y:730.6},0).wait(1).to({y:721.9},0).wait(1).to({y:713.2},0).wait(1).to({y:704.6},0).wait(1).to({y:695.9},0).wait(1).to({y:687.2},0).wait(1).to({y:678.5},0).wait(1).to({y:669.8},0).wait(1).to({y:661.1},0).wait(1).to({y:652.4},0).wait(1).to({y:643.7},0).wait(1).to({y:635},0).wait(1).to({y:626.3},0).wait(1).to({y:617.7},0).wait(1).to({y:609},0).wait(1).to({y:600.3},0).wait(1).to({y:591.6},0).wait(1).to({y:582.9},0).wait(1).to({y:574.2},0).wait(1).to({y:565.5},0).wait(1).to({y:556.8},0).wait(1).to({y:548.1},0).wait(1).to({y:539.5},0).wait(1).to({y:530.8},0).wait(1).to({y:522.1},0).wait(1).to({y:513.4},0).wait(1).to({y:504.7},0).wait(1).to({y:496},0).wait(11));

	// Text
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(399.5,290.3,1,1,0,0,0,400.6,91.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(177).to({_off:false},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.208},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.292},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.458},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.542},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.708},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.792},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:1},0).wait(41));

	// Cryffon Shield
	this.instance_2 = new lib.Untitleddrawing();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-48,-714);

	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(432,-354,1,1,0,0,0,480,360);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},120).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120).to({_off:false},0).wait(1).to({y:-339.8},0).wait(1).to({y:-325.6},0).wait(1).to({y:-311.4},0).wait(1).to({y:-297.2},0).wait(1).to({y:-283},0).wait(1).to({y:-268.9},0).wait(1).to({y:-254.7},0).wait(1).to({y:-240.5},0).wait(1).to({y:-226.3},0).wait(1).to({y:-212.1},0).wait(1).to({y:-198},0).wait(1).to({y:-183.8},0).wait(1).to({y:-169.6},0).wait(1).to({y:-155.4},0).wait(1).to({y:-141.2},0).wait(1).to({y:-127.1},0).wait(1).to({y:-112.9},0).wait(1).to({y:-98.7},0).wait(1).to({y:-84.5},0).wait(1).to({y:-70.3},0).wait(1).to({y:-56.1},0).wait(1).to({y:-42},0).wait(1).to({y:-27.8},0).wait(1).to({y:-13.6},0).wait(1).to({y:0.6},0).wait(1).to({y:14.8},0).wait(1).to({y:28.9},0).wait(1).to({y:43.1},0).wait(1).to({y:57.3},0).wait(1).to({y:71.5},0).wait(1).to({y:85.7},0).wait(1).to({x:431.9,y:99.8},0).wait(1).to({y:114},0).wait(1).to({y:128.2},0).wait(1).to({y:142.4},0).wait(1).to({y:156.6},0).wait(1).to({y:170.8},0).wait(1).to({y:184.9},0).wait(1).to({y:199.1},0).wait(1).to({y:213.3},0).wait(1).to({y:227.5},0).wait(1).to({y:241.7},0).wait(1).to({y:255.8},0).wait(1).to({y:270},0).wait(1).to({y:284.2},0).wait(1).to({y:298.4},0).wait(1).to({y:312.6},0).wait(1).to({y:326.7},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.913},0).wait(1).to({alpha:0.87},0).wait(1).to({alpha:0.826},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.739},0).wait(1).to({alpha:0.696},0).wait(1).to({alpha:0.652},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.522},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.348},0).wait(1).to({alpha:0.304},0).wait(1).to({alpha:0.261},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.174},0).wait(1).to({alpha:0.13},0).wait(1).to({alpha:0.087},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0},0).wait(51));

	// White Back
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(404.7,313.3,1,1,0,0,0,452.8,383.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({_off:false},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(131));

	// Waluigi
	this.instance_5 = new lib.Symbol10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(401,399.5,1,1,0,0,0,83,151.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleX:1.08,skewX:-14.2,skewY:-9.9,x:237.1,y:465.5},0).wait(1).to({scaleX:1.17,skewX:-28.3,skewY:-19.9,x:73.2,y:531.5},0).wait(1).to({scaleX:1.25,skewX:-42.5,skewY:-29.8,x:225.3,y:461.3},0).wait(1).to({scaleX:1.33,skewX:-56.7,skewY:-39.7,x:377.4,y:391},0).wait(1).to({scaleX:1.41,skewX:-70.8,skewY:-49.7,x:529.5,y:320.8},0).wait(1).to({scaleX:1.49,skewX:-85,skewY:-59.6,x:681.6,y:250.6},0).wait(1).to({scaleX:1.58,skewX:-74.3,skewY:-44.7,x:690.7,y:290.2},0).wait(1).to({scaleX:1.66,skewX:-63.7,skewY:-29.8,x:699.7,y:329.8},0).wait(1).to({scaleX:1.74,skewX:-53,skewY:-15,x:708.8,y:369.3},0).wait(1).to({scaleX:1.82,skewX:-42.4,skewY:-0.1,x:717.8,y:408.9},0).wait(1).to({scaleX:1.91,skewX:-31.7,skewY:14.8,x:726.9,y:448.5},0).wait(1).to({scaleX:1.99,skewX:-21,skewY:29.7,x:626,y:404.5},0).wait(1).to({scaleX:2.07,skewX:-10.4,skewY:44.6,x:525,y:360.5},0).wait(1).to({scaleX:2.15,skewX:0.3,skewY:59.5,x:424,y:316.5},0).wait(1).to({scaleX:2.24,skewX:10.9,skewY:74.4,x:323,y:272.6},0).wait(1).to({scaleX:1.82,scaleY:1,skewX:21.6,skewY:63.8,x:319.9,y:269.1},0).wait(1).to({scaleX:1.41,skewX:32.3,skewY:53.3,x:316.7,y:265.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:42.9,skewY:42.8,x:313.6,y:262.2},0).wait(1).to({scaleX:1.26,scaleY:1.55,skewX:53.6,skewY:48.5,x:310.5,y:258.7},0).wait(1).to({scaleX:1.53,scaleY:2.11,skewX:64.2,skewY:54.3,x:307.3,y:255.3},0).wait(1).to({scaleX:1.79,scaleY:2.67,skewX:74.9,skewY:60,x:304.2,y:251.9},0).wait(1).to({scaleX:2.06,scaleY:3.22,skewX:85.5,skewY:65.8,x:301,y:248.4},0).wait(1).to({scaleX:2.32,scaleY:3.78,skewY:60.9,x:297.9,y:245},0).wait(1).to({scaleX:2.59,scaleY:4.33,skewY:56,x:294.7,y:241.5},0).wait(1).to({scaleX:2.85,scaleY:4.89,skewY:51.1,x:291.6,y:238.1},0).wait(1).to({scaleX:4.06,scaleY:0.76,skewY:46.2,x:288.4,y:234.7},0).wait(1).to({scaleX:5.27,scaleY:3.36,skewX:-94.5,skewY:41.3,x:285.3,y:231.3},0).wait(1).to({scaleX:6.47,scaleY:7.48,skewY:36.3,x:282.2,y:227.8},0).wait(1).to({scaleX:7.21,scaleY:5.01,skewY:31.4,x:278.8,y:224.4},0).wait(1).to({scaleX:7.95,scaleY:2.53,skewY:26.5,x:275.3,y:220.9},0).wait(1).to({scaleX:8.7,scaleY:0.06,skewY:21.6,x:271.9,y:217.5},0).wait(1).to({scaleX:9.44,scaleY:2.41,skewX:85.5,skewY:16.7,x:268.5,y:214},0).wait(1).to({scaleX:10.18,scaleY:4.89,skewY:11.8,x:265,y:210.6},0).wait(1).to({scaleX:10.18,scaleY:4.24,skewX:77.8,x:265.1},0).wait(1).to({scaleX:10.18,scaleY:3.6,skewX:70,x:265.3},0).wait(1).to({scaleX:10.17,scaleY:2.96,skewX:62.3,x:265.5},0).wait(1).to({scaleX:10.17,scaleY:2.31,skewX:54.5,x:265.6},0).wait(1).to({scaleX:10.17,scaleY:1.67,skewX:46.8,x:265.8},0).wait(1).to({scaleX:7.94,scaleY:1.52,x:237.6,y:386.5},0).wait(1).to({scaleX:5.71,scaleY:1.38,x:209.4,y:562.4},0).wait(1).to({scaleX:3.48,scaleY:1.23,x:227.9,y:445.1},0).wait(1).to({scaleX:1.25,scaleY:1.08,skewX:46.7,x:246.3,y:327.8},0).wait(1).to({scaleX:0.98,scaleY:0.93,skewY:-168.2,x:264.8,y:210.5},0).wait(1).to({scaleY:1.27,x:392.1,y:301.8},0).wait(1).to({scaleY:1.62,x:519.4,y:393.2},0).wait(1).to({scaleY:1.96,x:646.6,y:484.4},0).wait(1).to({scaleX:0.98,scaleY:2.3,x:559.3,y:428.2},0).wait(1).to({scaleY:2.65,x:471.9,y:371.9},0).wait(1).to({scaleY:2.99,x:384.5,y:315.7},0).wait(1).to({scaleY:3.33,x:297.1,y:259.4},0).wait(1).to({scaleX:1.84,scaleY:3.33,skewY:-148.6,x:209.7,y:203.1},0).wait(1).to({scaleX:2.7,scaleY:3.33,skewY:-129.1,x:122.3,y:146.9},0).wait(1).to({scaleX:3.56,scaleY:3.33,skewY:-109.5,x:34.9,y:90.5},0).wait(1).to({scaleX:4.42,scaleY:3.33,skewY:-89.9,x:60,y:118.7},0).wait(1).to({scaleX:5.29,scaleY:3.33,skewY:-70.4,x:85,y:146.9},0).wait(1).to({scaleX:6.15,scaleY:3.33,skewY:-50.8,x:110.1,y:175.1},0).wait(1).to({scaleX:6.14,scaleY:2.75,skewX:64.7,x:135.1,y:203.2},0).wait(1).to({scaleX:6.14,scaleY:2.17,skewX:82.7,x:160.1,y:231.4},0).wait(1).to({scaleX:6.14,scaleY:1.59,skewX:100.7,x:185.2,y:259.5},0).wait(1).to({scaleX:6.14,scaleY:1.02,skewX:118.7,x:210.2,y:287.7},0).wait(1).to({scaleX:6.14,scaleY:0.44,skewX:136.7,x:235.4,y:315.9},0).wait(1).to({scaleX:3.43,skewX:134.4,skewY:-55,x:402.5,y:232.1},0).wait(1).to({scaleX:0.72,skewX:132.2,skewY:-59.1,x:569.8,y:148.3},0).wait(1).to({scaleX:2,skewX:130,skewY:116.7,x:737.1,y:64.5},0).wait(1).to({scaleX:3.76,scaleY:1.46,skewX:127.8,skewY:112.5,x:627.1,y:124.4},0).wait(1).to({scaleX:5.52,scaleY:2.48,skewX:125.5,skewY:108.4,x:517.2,y:184.3},0).wait(1).to({scaleX:7.28,scaleY:3.51,skewX:123.3,skewY:104.2,x:407.2,y:244.2},0).wait(1).to({scaleX:9.05,scaleY:4.53,skewX:121.1,skewY:100.1,x:297.3,y:304},0).wait(1).to({scaleX:10.81,scaleY:5.55,skewX:118.9,skewY:95.9,x:187.3,y:363.9},0).wait(1).to({scaleX:12.57,scaleY:6.58,skewX:116.6,skewY:91.8,x:77.4,y:423.8},0).wait(1).to({scaleX:14.34,scaleY:7.6,skewX:114.4,skewY:87.6,x:146,y:307.8},0).wait(1).to({scaleX:16.1,scaleY:8.62,skewX:112.2,skewY:83.4,x:214.6,y:191.9},0).wait(1).to({scaleX:17.86,scaleY:9.65,skewX:110,skewY:79.3,x:283.2,y:75.9},0).wait(1).to({scaleX:19.62,scaleY:10.67,skewX:107.7,skewY:75.1,x:351.2,y:151.2},0).wait(1).to({scaleX:21.39,scaleY:11.69,skewX:105.5,skewY:71,x:419.2,y:226.5},0).wait(1).to({scaleX:23.15,scaleY:12.72,skewX:103.3,skewY:66.8,x:487.2,y:301.8},0).wait(1).to({scaleX:24.91,scaleY:13.74,skewX:101.1,skewY:62.6,x:555.2,y:377.2},0).wait(1).to({scaleX:26.68,scaleY:14.76,skewX:98.8,skewY:58.5,x:623.1,y:452.4},0).wait(1).to({scaleX:28.44,scaleY:15.78,skewX:96.6,skewY:54.3,x:691.1,y:527.7},0).wait(1).to({scaleX:30.2,scaleY:16.81,skewX:94.4,skewY:50.2,x:640.3,y:518.2},0).wait(1).to({scaleX:31.96,scaleY:17.83,skewX:92.2,skewY:46,x:589.6,y:508.5},0).wait(1).to({scaleX:33.73,scaleY:18.85,skewX:89.9,skewY:41.9,x:538.7,y:499},0).wait(1).to({scaleX:35.49,scaleY:19.88,skewX:87.7,skewY:37.7,x:488,y:489.3},0).wait(1).to({scaleX:37.25,scaleY:20.9,skewX:85.5,skewY:33.5,x:437.2,y:479.8},0).wait(1).to({scaleX:39.02,scaleY:21.92,skewX:83.3,skewY:29.4,x:400.2,y:388.8},0).wait(1).to({scaleX:40.78,scaleY:22.95,skewX:81,skewY:25.2,x:363.2,y:297.8},0).wait(1).to({scaleX:42.54,scaleY:23.97,skewX:78.8,skewY:21.1,x:326.2,y:206.9},0).wait(1).to({scaleX:44.31,scaleY:24.99,skewX:76.6,skewY:16.9,x:289.2,y:115.9},0).wait(1).to({scaleX:46.07,scaleY:26.02,skewX:74.4,skewY:12.8,x:351.7,y:181.9},0).wait(1).to({scaleX:47.83,scaleY:27.04,skewX:72.1,skewY:8.6,x:414.2,y:247.8},0).wait(1).to({scaleX:49.59,scaleY:28.06,skewX:69.9,skewY:4.4,x:476.6,y:313.8},0).wait(1).to({scaleX:51.36,scaleY:29.09,skewX:67.7,skewY:0.3,x:539.1,y:379.8},0).wait(1).to({scaleX:53.12,scaleY:30.11,skewX:65.5,skewY:-3.9,x:441.1,y:335.4},0).wait(1).to({scaleX:54.88,scaleY:31.13,skewX:63.2,skewY:-8,x:343.2,y:291},0).wait(1).to({scaleX:56.65,scaleY:32.15,skewX:61,skewY:-12.2,x:245.2,y:246.7},0).wait(1).to({scaleX:58.41,scaleY:33.18,skewX:58.8,skewY:-16.4,x:147.2,y:202.3},0).wait(1).to({scaleX:60.17,scaleY:34.2,skewX:56.6,skewY:-20.5,x:49.3,y:157.9},0).wait(1).to({scaleX:61.93,scaleY:35.22,skewX:54.3,skewY:-24.7,x:173.1,y:157.2},0).wait(1).to({scaleX:63.7,scaleY:36.25,skewX:52.1,skewY:-28.8,x:296.9,y:156.5},0).wait(1).to({scaleX:65.46,scaleY:37.27,skewX:49.9,skewY:-33,x:420.7,y:155.8},0).wait(1).to({scaleX:67.22,scaleY:38.29,skewX:47.7,skewY:-37.1,x:544.5,y:155.1},0).wait(1).to({scaleX:68.99,scaleY:39.32,skewX:45.4,skewY:-41.3,x:668.3,y:154.5},0).wait(1).to({x:265.9,y:371.7},0).wait(1).to({x:-136.4,y:588.8},0).wait(1).to({x:-538.7,y:806},0).wait(1).to({x:-941.1,y:1023.1},0).wait(1).to({x:-789.6,y:995.4},0).wait(1).to({x:-638.2,y:967.7},0).wait(1).to({x:-486.8,y:940},0).wait(1).to({x:-335.3,y:912.2},0).wait(1).to({x:-171.4,y:1408},0).wait(1).to({x:-7.4,y:1903.9},0).wait(1).to({_off:true},1).wait(128));

	// Hack
	this.instance_6 = new lib._332948822ce6e93c7273ef64d79171ac_0();
	this.instance_6.parent = this;

	this.instance_7 = new lib._332948822ce6e93c7273ef64d79171ac_1();
	this.instance_7.parent = this;

	this.instance_8 = new lib._332948822ce6e93c7273ef64d79171ac_2();
	this.instance_8.parent = this;

	this.instance_9 = new lib._332948822ce6e93c7273ef64d79171ac_3();
	this.instance_9.parent = this;

	this.instance_10 = new lib._332948822ce6e93c7273ef64d79171ac_4();
	this.instance_10.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},10).to({state:[{t:this.instance_9}]},10).to({state:[{t:this.instance_10}]},10).to({state:[{t:this.instance_6}]},10).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_7}]},9).to({state:[]},11).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(352,-414,960,1314);
// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_332948822ce6e93c7273ef64d79171ac_0.png", id:"_332948822ce6e93c7273ef64d79171ac_0"},
		{src:"images/_332948822ce6e93c7273ef64d79171ac_1.png", id:"_332948822ce6e93c7273ef64d79171ac_1"},
		{src:"images/_332948822ce6e93c7273ef64d79171ac_2.png", id:"_332948822ce6e93c7273ef64d79171ac_2"},
		{src:"images/_332948822ce6e93c7273ef64d79171ac_3.png", id:"_332948822ce6e93c7273ef64d79171ac_3"},
		{src:"images/_332948822ce6e93c7273ef64d79171ac_4.png", id:"_332948822ce6e93c7273ef64d79171ac_4"},
		{src:"images/mario.jpg", id:"mario"},
		{src:"images/Untitleddrawing.png", id:"Untitleddrawing"},
		{src:"images/Waluigi.jpg", id:"Waluigi"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;