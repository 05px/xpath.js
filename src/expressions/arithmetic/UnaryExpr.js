/*
 * XPath2.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2012 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

function cUnaryExpr(sOperation, oExpr) {
	this.operation	= sOperation;
	this.expression	= oExpr;
};

cUnaryExpr.prototype.operation	= null;
cUnaryExpr.prototype.expression	= null;

//
//cUnaryExpr.operators	= {};
//cUnaryExpr.operators['-']	= {};
//cUnaryExpr.operators['+']	= {};

// Static members
// UnaryExpr	:= ("-" | "+")* ValueExpr
cUnaryExpr.parse	= function (oLexer, oResolver) {
	if (!(oLexer.peek() == '-' || oLexer.peek() == '+'))
		return cValueExpr.parse(oLexer, oResolver);

	// Unary expression
	var sOperation	= oLexer.peek();
	oLexer.next();
	if (oLexer.eof())
		throw "UnaryExpr.parse: Expected ValueExpr expression";
	var oUnaryExpr	= new cUnaryExpr(sOperation, cValueExpr.parse(oLexer, oResolver));
	return oUnaryExpr;
};

cUnaryExpr.prototype.evaluate	= function (oContext) {
	return new cXPathSequence((this.operation == '-' ? -1 : 1) * this.expression.evaluate(oContext).toNumber());
};