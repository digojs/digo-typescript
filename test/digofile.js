var digo = require("digo");

exports.default = function () {
	digo.src("fixtures/*.ts", "fixtures/*.tsx").pipe("../").dest("_build");
};
