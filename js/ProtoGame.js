var ProtoGame = {
	version: '0.0.1',
	libPath: 'js/libs/',
	libs: {}
};

ProtoGame.init = function(callback) {
	callback = callback || function() {};

	callback();
};

ProtoGame.require = function(lib) {
	var elem = document.createElement('script');
	elem.setAttribute('src', this.libPath + lib);
	document.getElementsByTagName('head')[0].appendChild(elem);
	this.libs[lib] = this.libPath + lib;
};

