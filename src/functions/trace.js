/*
 * XPath2.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2012 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

/*
	4 The Trace Function
		trace
*/

// fn:trace($value as item()*, $label as xs:string) as item()*
cFunctionCall.functions["trace"]	= function(oSequence1, oSequence2) {
	var oConsole	= window.console;
	if (oConsole && oConsole.log)
		oConsole.log((oSequence2 ? oSequence2.items[0] : ''), oSequence1.items);
	return oSequence1;
};