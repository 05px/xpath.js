function cXSYearMonthDuration(nYear, nMonth, bNegative) {
	cXSDuration.call(this, nYear, nMonth, 0, 0, 0, 0, bNegative);
};

cXSYearMonthDuration.RegExp	= /^(-)?P(?:([0-9]+)Y)?(?:([0-9]+)M)?$/;

cXSYearMonthDuration.prototype	= new cXSDuration;

cXSYearMonthDuration.prototype.toString	= function() {
	return (this.negative ? '-' : '') + 'P'
			+ fXSDuration_getYearMonthComponent(this);
};

cXSYearMonthDuration.parse	= function(sValue) {
	if (sValue.match(cXSYearMonthDuration.RegExp))
		return new cXSYearMonthDuration;
	throw new cXPath2Error("FORG0001");
};