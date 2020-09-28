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
	description : "\n   " + "As a reaction, I can reduce the damage dealt to a target I can see within 5 ft of me" + "\n   " + "The damage is reduced by 1d10 + my proficiency bonus (to a minimum of 0 damage)" + "\n   " + "I must be wielding a shield or a simple or martial weapon to use this reaction",
	action : ["reaction", ""]
});
