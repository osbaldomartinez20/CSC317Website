"use strict";

var tester = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Thanks to:
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
exports.validate = function(email)
{
	if (!email)
		return false;
		
	if(email.length>254)
		return false;

	var valid = tester.test(email);
	if(!valid)
		return false;

	// Further checking of some things regex can't handle
	var parts = email.split("@");
	if(parts[0].length>64)
		return false;

	var domainParts = parts[1].split(".");
	if(domainParts.some(function(part) { return part.length>63; }))
		return false;

	return true;
}