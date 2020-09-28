var iFileName = "Interception.js";
RequiredSheetVersion(12.999);

SourceList["UA:CF"] = {
	name : "Unearthed Arcana: Class Features",
	abbreviation : "UA:CF",
	group : "Unearthed Arcana",
	url : "https://https://media.wizards.com/2019/dnd/downloads/UA-ClassFeatures.pdf",
	date : "2019/11/04"
};

AddFightingStyle(["fighter", "ranger", "paladin"], "Interception", {
	name : "Interception Fighting Style",
	source : ["UA:CF", 12],
	description : "\n   " + "When a creature you can see hits a target that is within 5 feet of you with an attack," + "\n   " + "you can use your reaction to reduce the damage the target takes by 1d10 + your" + "\n   " + "proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a" + "\n   " + "simple martial weapon to use this reaction.",
	action : ["reaction", ""]
});
