(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata?[
		{name:"Final_atlas_", frames: [[0,0,1200,1788],[0,1790,103,72],[105,1817,25,22],[370,1790,47,18],[316,1790,52,19],[469,1790,27,23],[257,1790,57,22],[419,1790,48,17],[105,1790,74,25],[257,1814,27,23],[181,1790,74,25]]}
];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != null && cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != null && cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != null && cur != exportRoot) {
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



(lib.Background = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blink = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Fly = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.LeftEye = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.LeftEyeLid = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.LeftPupil = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.leftunderlid = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.RightEye = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.righteyelid = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.RightPupil = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.rightunderlid = function() {
	this.spriteSheet = ss["Final_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RightPupil();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-11.5,27,23);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LeftPupil();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-11.5,27,23);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LeftPupil();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,-11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-11.5,27,23);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LeftEyeLid();
	this.instance.parent = this;
	this.instance.setTransform(-26,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-9.5,52,19);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.LeftEyeLid();
	this.instance.parent = this;
	this.instance.setTransform(-26,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-9.5,52,19);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Fly();
	this.instance.parent = this;
	this.instance.setTransform(-12.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-11,25,22);


// stage content:
(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1234.3,393.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({startPosition:0},0).to({x:493.1,y:525.1},10).to({x:146.1,y:606.2},8).to({x:-57,y:464.1},7).to({startPosition:0},8).wait(39));

	// Fly
	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-57.5,201.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:739.6,y:258.1},12).to({x:924.7,y:343.1},7).to({x:1223.8,y:309.1},8).to({_off:true},1).wait(71));

	// Left underlid
	this.instance_2 = new lib.leftunderlid();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453,419);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99));

	// Left Eye Lid
	this.instance_3 = new lib.Tween8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(479,406.5);

	this.instance_4 = new lib.Tween9("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(479,406.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},17).to({state:[{t:this.instance_4}]},42).to({state:[{t:this.instance_4}]},6).wait(34));

	// Left Pupil
	this.instance_5 = new lib.Tween10("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(479.5,417.5);

	this.instance_6 = new lib.Tween11("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(489.5,415.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true,x:489.5,y:415.5},17).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:false},17).to({x:490.4,y:417.1},15).to({x:479.5,y:418.5},4).to({x:475.5},7).to({x:472.5,y:416.5},16).to({x:489.5},6).to({startPosition:0},12).wait(22));

	// Left Eye
	this.instance_7 = new lib.LeftEye();
	this.instance_7.parent = this;
	this.instance_7.setTransform(453,409);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(99));

	// Blink
	this.instance_8 = new lib.blink();
	this.instance_8.parent = this;
	this.instance_8.setTransform(551,379);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(77).to({_off:false},0).wait(22));

	// Right underlid
	this.instance_9 = new lib.rightunderlid();
	this.instance_9.parent = this;
	this.instance_9.setTransform(562,416);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(99));

	// Right Eye Lid
	this.instance_10 = new lib.righteyelid();
	this.instance_10.parent = this;
	this.instance_10.setTransform(562,394);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(99));

	// Right Pupil
	this.instance_11 = new lib.Tween12("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(601.5,414.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:615.5,y:415.5},32).to({x:600.5,y:416.5},4).to({x:595.5,y:415.5},7).to({x:590.5,y:416.5},16).to({x:600.5,y:414.5},6).wait(34));

	// Right Eye
	this.instance_12 = new lib.RightEye();
	this.instance_12.parent = this;
	this.instance_12.setTransform(578,407);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(99));

	// Background
	this.instance_13 = new lib.Background();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(530,400,1316.8,1788);
// library properties:
lib.properties = {
	id: 'A7F274EAA802D14D96452E55924B752B',
	width: 1200,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Final_atlas_.png", id:"Final_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A7F274EAA802D14D96452E55924B752B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
