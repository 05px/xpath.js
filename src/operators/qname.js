/*
 * XPath.js - Pure JavaScript implementation of XPath 2.0 parser and evaluator
 *
 * Copyright (c) 2012 Sergey Ilinsky
 * Dual licensed under the MIT and GPL licenses.
 *
 *
 */

/*
	11.2 Functions and Operators Related to QNames
		op:QName-equal

*/

// 11.2 Operators Related to QNames
// op:QName-equal($arg1 as xs:QName, $arg2 as xs:QName) as xs:boolean
hStaticContext_operators["QName-equal"]	= function(oLeft, oRight) {
	return new cXSBoolean(oLeft.localName == oRight.localName && oLeft.namespaceURI == oRight.namespaceURI);
};