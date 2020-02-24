$(document).ready(function(){
	var getIDTemplate = document.getElementById('IDhbs-template').innerHTML;   //get/find the hbs template div/script
	var compileData = Handlebars.compile(getIdTemplate);			   //get the content inside that template: all the {{abc}}, {{xyz}}
	var addObjects = {abc:"", xyz:""};					   //add data to the object that will be added to the templates
	var dataCompiled = compiledData.addObjects;				   //put the object data into hbs template
	var getIDhtml = document.getELementById('HTMLdivID').innerHTML;		   //get/find the html div id
	getIDhtml = dataCompiled;						   //set the html div id to now contain the hbs template data content
})
