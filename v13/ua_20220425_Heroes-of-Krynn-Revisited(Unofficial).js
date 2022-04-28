/*  
    -INFORMATION-
    Subject: Race, Subclass, Backgrounds, Feats
    Effect:  This script adds the Kender race and backgrounds and feats for the Dragonlance setting
	     Content is from "Unearthed Arcana: Heroes of Krynn Revisited" article, taken from https://dnd.wizards.com/unearthed-arcana/heroes-krynn-revisited
    Code by: Thravieus Windhelm
    Date: 4/27/2022 (sheet v13.1.0)

    This script was tested on v13.1.0+220114, Printer Friendly
    This is an unofficial script for the Unearthed Arcana: Heroes of Krynn Revisited
    If you find any errors or bugs mention them on the discord
    **This script should be removed once the official script is released to prevent conflict
*/
var iFileName = "ua_20220425_Heroes-of-Krynn-Revisited(Unofficial).js";
RequiredSheetVersion("13.1.0");

SourceList["UA:RHoK"] = {
    name : "Unearthed Arcana: Heroes of Krynn Revisited",
    abbreviation : "UA:RHoK",
    group : "Unearthed Arcana",
    url : "https://dnd.wizards.com/unearthed-arcana/heroes-krynn-revisited",
    date : "2022/04/25"
};

RaceList["kender-r"] = {
    regExpSearch : /kender/i,
    name : "Kender",
    source : [["UA:RHoK", 1]],
    plural : "Kender",
    size : 4,
    speed : {
        walk : { spd : 30, enc : 20}
    },
    languageProfs : ["Common", 1],
    savetxt : { immune : ["frightened"]},
    skillstxt : "Choose one from Insight, Investigation, Sleight of Hand, Stealth, and Survival",
    scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
    features : {
        "taunt" : {
            name : "Taunt",
            minlevel : 1,
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest",
            action : [["bonus action", ""]],
            eval: function () {
                var Options = ["Intelligence", "Wisdom", "Charisma"];
                var choice = AskUserOptions('Taunt', 'The Kender race feature "Taunt" offers a choice of what ability modifier should be used to calculate the saving throw DC. Make the selection to update the sheet accordingly. You can only change this selection by removing the Kender race.', Options, 'radio', true);
                var revisedTaunt = "Taunt: As a bonus action I can taunt a creature within 60 ft that can hear and understand me. They must make a Wisdom save of DC 8 + " + choice + " modifier + Proficiency bonus. If failed, they have disadvantage on attack rolls not made against me until the start of my next turn. I can do this a number of times per long rest equal to my Proficiency Bonus.";
                Value("Racial Traits", What("Racial Traits").replace(/Taunt:.*/, '') + revisedTaunt);
            }

        }
    },
    trait : "Kender" + 
    "\n \u2022 Fearless: I am immune to the frightened condition." +
    "\n \u2022 Taunt: As a bonus action I can taunt a creature within 60 ft that can hear and understand me. They must make a Wisdom save of DC 8 + (Intelligence, Wisdom, or Charisma) modifier + Proficiency bonus. If failed, they have disadvantage on attack rolls not made against me until the start of my next turn. I can do this a number of times per long rest equal to my Proficiency Bonus."
};

BackgroundList["knight of solamnia-r"] = {
	regExpSearch : /^(?=.*(knight|champion|warrior))(?=.*solamnia).*$/i,
	name : "Knight of Solamnia",
	source : [["UA:RHoK", 2]],
	skills : ["Athletics", "Survival"],
	gold : 10,
    languageProfs : [2],
	equipleft : [
		["Insignia of rank", "", ""],
		["Deck of cards", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Squire of Solamnia (Revised UA)",
	trait : [
		"I pledge my sword to the greater good. If I must perish in pursuit of that good, so be it.",
		"My comrades-in-arms are my family. I'll do whatever it takes to keep them safe.",
		"The protection of innocent people comes first. All other concerns come second.",
		"I joined the knights for the free meals, but their lessons grew on me over time.",
		"I wish my deeds to become the stuff of legends\xD7just like those of the knighthood's heroic founders.",
		"A dishonorable act drove me to become a knight. I have acted with honor ever since."
	]
};

BackgroundFeatureList["squire of solamnia (revised ua)"] = {
    description : "I gain the Squire of Solamnia feat. In addition, the Knights of Solamnia provide me free, modest lodging and food at any of their fortresses or encampments.",
    eval : function() { AddFeat("Squire of Solamnia"); },
    removeeval : function() { RemoveFeat("Squire of Solamnia"); }
};

BackgroundList["mage of high sorcery-r"] = {
	regExpSearch : /^(?=.*(mage|wizard|magus))(?=.*high)(?=.*sorcery).*$/i,
	name : "Mage of High Sorcery",
	source : [["UA:RHoK", 3]],
	skills : ["Arcana", "History"],
	gold : 10,
    languageProfs : [2],
	equipleft : [
		["Bottle of colored ink", "", ""],
		["Ink pen", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Initiate of High Sorcery (Revised UA)",
	trait : [
		"I wish to use my knowledge of magic to better people's lives.",
		"My study of magic might reveal all manner of secrets.",
		"Magic is a means to power, and I will use it to pursue my ambitions.",
		"I learned magic so I'd be able to protect those I care about.",
		"I use my magic to maintain the balance between all things.",
		"Whether in the past, present, or future, I will be the greatest mage ever known."
	]
};

BackgroundFeatureList["initiate of high sorcery (revised ua)"] = {
    description : "I gain the Initiate of High Sorcery feat. In addition, the Mages of High Sorcery provide you with free, modest lodging and food indefinitely at any occupied Tower of High Sorcery and for one night at the home of an organization member.",
    eval : function() { AddFeat("Initiate of High Sorcery"); },
    removeeval : function() { RemoveFeat("Initiate of High Sorcery"); }
};

FeatsList["adept of the black robes-r"] = {
	name : "Adept of the Black Robes",
	source : [["UA:RHoK", 4]],
	description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Choose an ability for this spell. If creature I can see within 60 ft fails a save vs my dmging spell I can spend HD equal to spell's level. I roll that many HD and the creature takes that much additional dmg.",
	descriptionFull : "You chose the moon Nuitari to influence your magic, and your ambition and loyalty to the Order of the Black Robes has been recognized, granting you these benefits:\n" + toUni("Ambitious Magic.") + " You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the evocation or necromancy school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n" + toUni("Life Channel.") + " You can channel your lifeforce into the power of your magic. When a creature you can see within 60 feet fails on a saving throw against a spell that deals damage that you cast, you can expend a number of Hit Dice equal to the level of the spell. Roll the expended Hit Dice and add them together. The damage that the creature takes increases by an amount equal to that total.",
	prerequisite : "4th level, Initiate of High Sorcery (Nuitari) feat",
	prereqeval : function(v) { 
        var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-r");
        var findChoice = CurrentFeats.known.indexOf("initiate of high sorcery-r") !== -1 ? CurrentFeats.choices[iHghSrcyInit] : false;
        var moonChoice = findChoice ? CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[2] : false;
        return v.characterLevel >= 4 && moonChoice && moonChoice == "nuitari"; 
    },
	spellcastingBonus : {
		name : "2nd-level Evoc/Necro spell",
        "class" : "any",
        school : ["Evoc", "Necro"],
        level : [2, 2],
        firstCol : "oncelr"
	},
    spellcastingAbility : 4,
    allowUpCasting : true,
    choices : ["Intelligence", "Wisdom", "Charisma"],
    selfChoosing : function () {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-r");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
    "intelligence" : {
        description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If creature I can see within 60 ft fails a save vs my dmging spell I can spend HD equal to spell's level. I roll that many HD and the creature takes that much additional dmg.",
        spellcastingAbility : 4
    },
    "wisdom" : {
        description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. If creature I can see within 60 ft fails a save vs my dmging spell I can spend HD equal to spell's level. I roll that many HD and the creature takes that much additional dmg.",
        spellcastingAbility : 5
    },
    "charisma" : {
        description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. If creature I can see within 60 ft fails a save vs my dmging spell I can spend HD equal to spell's level. I roll that many HD and the creature takes that much additional dmg.",
        spellcastingAbility : 6
    }
};

FeatsList["adept of the red robes-r"] = {
	name : "Adept of the Red Robes",
	source : [["UA:RHoK", 4]],
    description : "I learn one 2nd-level Illus or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
	descriptionFull : "You chose the moon Lunitari to influence your magic, and your dedication to maintaining the balance between all things has been recognized by the Order of the Red Robes, granting you these benefits:\n" + toUni("Insightful Magic.") + " You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the illusion or transmutation school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n" + toUni("Magical Balance.") + " When you make an attack roll, an ability check, or a saving throw, and roll a 9 or lower on the d20, you can use your reaction to balance fate and treat the roll as a 10. you can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Initiate of High Sorcery (Lunitari) feat",
	prereqeval : function(v) { 
        var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-r");
        var findChoice = CurrentFeats.known.indexOf("initiate of high sorcery-r") !== -1 ? CurrentFeats.choices[iHghSrcyInit] : false;
        var moonChoice = findChoice ? CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[2] : false;
        return v.characterLevel >= 4 && moonChoice && moonChoice == "lunitari"; 
    },
	spellcastingBonus : {
		name : "2nd-level Illus/Trans spell",
        "class" : "any",
        school : ["Illus", "Trans"],
        level : [2, 2],
        firstCol : "oncelr"
	},
    action : [["reaction", "Magical Balance"]],
    usages : "Proficiency Bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    spellcastingAbility : 4,
    allowUpCasting : true,
    choices : ["Intelligence", "Wisdom", "Charisma"],
    selfChoosing : function () {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-r");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
    "intelligence" : {
        description : "I learn one 2nd-level Illus or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
        spellcastingAbility : 4
    },
    "wisdom" : {
        description : "I learn one 2nd-level Illus or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
        spellcastingAbility : 5
    },
    "charisma" : {
        description : "I learn one 2nd-level Illus or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
        spellcastingAbility : 6
    }
};

FeatsList["adept of the white robes-r"] = {
	name : "Adept of the White Robes",
	source : [["UA:RHoK", 4]],
	description : "I learn one 2nd-level Abjur or Div spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Choose an ability for this spell. When a creature w/in 30 ft takes damage I can use a reaction to expend a spell slot and roll d6s equal to the spell's level and reduce the damage by that much + my SC ability mod.",
	descriptionFull : "You chose the moon Solinari to influence your magic, and your oath to use magic to make the world a better place has been recognized by the Order of the White Robes, granting you these benefits:\n" + toUni("Protective Magic.") + " You learn one 2nd-level spell of you choice. The 2nd-level spell must be from the abjuration or divination school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n" + toUni("Protective Ward.") + " When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to expend a spell slot and weave protective magic around the target. Roll a number of d6s equal to the level of the spell slot expended and reduce the damage the target takes by the total rolled on those dice + your spellcasting ability modifier.",
	prerequisite : "4th level, Initiate of High Sorcery (Solinari) feat",
	prereqeval : function(v) { 
        var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-r");
        var findChoice = CurrentFeats.known.indexOf("initiate of high sorcery-r") !== -1 ? CurrentFeats.choices[iHghSrcyInit] : false;
        var moonChoice = findChoice ? CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[2] : false;
        return v.characterLevel >= 4 && moonChoice && moonChoice == "solinari";  
    },
	spellcastingBonus : {
		name : "2nd-level Abjur/Div spell",
        "class" : "any",
        school : ["Abjur", "Div"],
        level : [2, 2],
        firstCol : "oncelr"
	},
    spellcastingAbility : 4,
    allowUpCasting : true,
    choices : ["Intelligence", "Wisdom", "Charisma"],
    selfChoosing : function () {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-r");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
    "intelligence" : {
        description : "I learn one 2nd-level Abjur or Div spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. When a creature w/in 30 ft takes damage I can use a reaction to expend a spell slot and roll d6s equal to the spell's level and reduce the damage by that much + my SC ability mod.",
        spellcastingAbility : 4
    },
    "wisdom" : {
        description : "I learn one 2nd-level Abjur or Div spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. When a crea w/in 30 ft takes dmg I can use a reaction to expend a spell slot and roll d6s equal to the spell's level and reduce the dmg by that much + my SC ability mod.",
        spellcastingAbility : 5
    },
    "charisma" : {
        description : "I learn one 2nd-level Abjur or Div spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. When a crea w/in 30 ft takes dmg I can use a reaction to expend a spell slot and roll d6s equal to the spell's level and reduce the dmg by that much + my SC ability mod.",
        spellcastingAbility : 6
    }
};

FeatsList["divinely favored-r"] = {
    name : "Divinely Favored",
    source : [["UA:RHoK", 4]],
    description : "I learn a cleric cantrip, a 1st-level spell based on my alignment, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. I choose Int, Wis, or Cha as my spellcasting ability for this. I can use a holy symbol as a spellcasting focus for any spells that use the chosen ability.",
    descriptionFull : "A god has chosen you to carry a spark of their divine power.\n   You learn one cantrip of your choice from the cleric spell list and one 1st-level spell based on the alignment of your character, as specified in the Alignment Spells table below. You also learn the augury spell.\n   You can cast the chosen 1st-level spell and the augury spell without a spell slot, and you must finish a long rest before you can cast either of these spells in this way again. You can also cast these spells using spell slots you have of the appropriate level.\n   Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n\n" + toUni("Alignment Spells") + "\n" + toUni("Alignment") + "   " + toUni("1st-level Spell") + "\nEvil\t     Choose one 1st level warlock spell.\nGood\t     Choose one 1st-level cleric spell.\nNeutral\t     Choose one 1st-level druid spell.\n\n   In addition, you can use a holy symbol as a spellcasting focus for any spell you cast that uses the spellcasting ability you choose when you select this feat.",
    choices : ["Intelligence - Good", "Intelligence - Neutral", "Intelligence - Evil", "Wisdom - Good", "Wisdom - Neutral", "Wisdom - Evil", "Charisma - Good", "Charisma - Neutral", "Charisma - Evil"],
    // nine choices, one for each alignment and ability pair
    "intelligence - good" : {
        description : "I learn a cleric cantrip, a 1st-level cleric spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Cleric Spell",
            "class" : ["cleric"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    },
    "intelligence - neutral" : {
        description : "I learn a cleric cantrip, a 1st-level druid spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Druid Spell",
            "class" : ["druid"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    },
    "intelligence - evil" : {
        description : "I learn a cleric cantrip, a 1st-level warlock spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Warlock Spell",
            "class" : ["warlock"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    },
    "wisdom - good" : {
        description : "I learn a cleric cantrip, a 1st-level cleric spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Cleric Spell",
            "class" : ["cleric"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    },
    "wisdom - neutral" : {
        description : "I learn a cleric cantrip, a 1st-level druid spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Druid Spell",
            "class" : ["druid"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    },
    "wisdom - evil" : {
        description : "I learn a cleric cantrip, a 1st-level warlock spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Warlock Spell",
            "class" : ["warlock"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    },
    "charisma - good" : {
        description : "I learn a cleric cantrip, a 1st-level cleric spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Cleric Spell",
            "class" : ["cleric"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    },
    "charisma - neutral" : {
        description : "I learn a cleric cantrip, a 1st-level druid spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Druid Spell",
            "class" : ["druid"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    },
    "charisma - evil" : {
        description : "I learn a cleric cantrip, a 1st-level warlock spell, and Augury. I can cast the 1st level spell and augury once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Cleric Cantrip",
            "class" : ["cleric"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "1st-level Warlock Spell",
            "class" : ["warlock"],
            level : [1, 1],
            firstCol : "oncelr"
        }, {
            name : "Augury",
            spells : ["augury"],
            selection : ["augury"],
            firstCol : "oncelr"
        }],
    }
};

FeatsList["initiate of high sorcery-r"] = {
    name : "Initiate of High Sorcery",
    source : [["UA:RHoK", 4]],
    description : "I learn a wizard cantrip and a two 1st-levels spell from a list depending on my chosen moon. I can cast each spell once per long rest at its lowest levels without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
    descriptionFull : "You've received training from magic-users affiliated with the Mages of High Sorcery.\n   Choose one of three moons of Krynn to influence your magic: the black moon, Nuitari; the red moon, Lunitari; or the white moon, Solinari. You learn one cantrip of your choice from the wizard spell list and two 1st-level spells based on the moon you choose, as specified in the Lunar Spells table.\n   You can cast each of the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\n   Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n\n" + toUni("Lunar Spells") + "\n" + toUni("Moon") + "\t" + toUni("1st-level Spell") + "\nNuitari\tChoose two from dissonant whispers, false life,\n\thex, and ray of sickness\nLunitari\tChoose two from color spray, disguise self,\n\tfeather fall, and longstrider\nSolinari\tChoose two from comprehend languages, detect\n\tevil and good, protection from evil and good, and\n\tshield",
    prerequisite : "Sorcerer or Wizard Class or Mage of High Sorcery Background",
    prereqeval : function (v) {
        return classes.known.wizard || classes.known.sorcerer || CurrentBackground.known.indexOf('mage of high sorcery-r') !== -1;
    },
    choices : ["Intelligence - Nuitari", "Intelligence - Lunitari", "Intelligence - Solinari", "Wisdom - Nuitari", "Wisdom - Lunitari", "Wisdom - Solinari", "Charisma - Nuitari", "Charisma - Lunitari", "Charisma - Solinari"],
    // nine choices, one for each ability and moon
    "intelligence - nuitari" : {
        description : "I learn a wizard cantrip and two 1st-level spells (Dissonant Whispers, False Life, Hex, Ray of Sickness). I can cast each spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Nuitari 1st-level Spells",
            spells : ["dissonant whispers", "false life", "hex", "ray of sickness"],
            firstCol : "oncelr",
            times : 2
        }]
    },
    "intelligence - lunitari" : {
        description : "I learn a wizard cantrip and two 1st-level spells (Color Spray, Disguise Self, Feather Fall, Longstrider). I can cast each spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Lunitari 1st-level Spells",
            spells : ["color spray", "disguise self", "feather fall", "longstrider"],
            firstCol : "oncelr",
            times : 2
        }]
    },
    "intelligence - solinari" : {
        description : "I learn a wizard cantrip and two 1st-level spells (Comprehend Languages, Detect Evil and Good, Protection from Evil and Good, Shield). I can cast each spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Solinari 1st-level Spells",
            spells : ["comprehend languages", "detect evil and good", "protection from evil and good", "shield"],
            firstCol : "oncelr",
            times : 2
        }]
    },
    "wisdom - nuitari" : {
        description : "I learn a wizard cantrip and two 1st-level spells (Dissonant Whispers, False Life, Hex, Ray of Sickness). I can cast each spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Nuitari 1st-level Spells",
            spells : ["dissonant whispers", "false life", "hex", "ray of sickness"],
            firstCol : "oncelr",
            times : 2
        }]
    },
    "wisdom - lunitari" : {
        description : "I learn a wizard cantrip and two 1st-level spells (Color Spray, Disguise Self, Feather Fall, Longstrider). I can cast each spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Lunitari 1st-level Spells",
            spells : ["color spray", "disguise self", "feather fall", "longstrider"],
            firstCol : "oncelr",
            times : 2
        }]
    },
    "wisdom - solinari" : {
        description : "I learn a wizard cantrip and two 1st-level spells (Comprehend Languages, Detect Evil and Good, Protection from Evil and Good, Shield). I can cast each spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Solinari 1st-level Spells",
            spells : ["comprehend languages", "detect evil and good", "protection from evil and good", "shield"],
            firstCol : "oncelr",
            times : 2
        }]
    },
    "charisma - nuitari" : {
        description : "I learn a wizard cantrip and two 1st-level spells (Color Spray, Disguise Self, Feather Fall, Longstrider). I can cast each spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Nuitari 1st-level Spells",
            spells : ["dissonant whispers", "false life", "hex", "ray of sickness"],
            firstCol : "oncelr",
            times : 2
        }]
    },
    "charisma - lunitari" : {
        description : "I learn a cantrip (Guidance, Message, or Prestidigitation) and a 1st-level Div/Trans spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Lunitari 1st-level Spells",
            spells : ["color spray", "disguise self", "feather fall", "longstrider"],
            firstCol : "oncelr",
            times : 2
        }]
    },
    "charisma - solinari" : {
        description : "I learn a wizard cantrip and two 1st-level spells (Comprehend Languages, Detect Evil and Good, Protection from Evil and Good, Shield). I can cast each spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "High Sorcery Cantrip",
            "class" : ["wizard"],
            level : [0, 0],
            firstCol : "atwill"
        }, {
            name : "Solinari 1st-level Spells",
            spells : ["comprehend languages", "detect evil and good", "protection from evil and good", "shield"],
            firstCol : "oncelr",
            times : 2
        }]
    },
};

FeatsList["knight of the crown-r"] = {
    name : "Knight of the Crown",
    source : [["UA:RHoK", 5]],
    calculate : "event.value = 'I learn the Distracting Strike or Goading Attack maneuver, save DC ' + (8 + Number(What('Proficiency Bonus')) + Math.max(What('Str Mod'), What('Dex Mod'))) + '. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.';",
    descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Crown, a group that extols the virtues of cooperation, loyalty, and obedience. You excel in group combat and gain these benefits:\n" + toUni("Ability Score Increase.") + " Increase your Strength or Dexterity score by 1, to a maximum of 20.\n" + toUni("Crown Maneuvers.") + " You learn the Distracting Strike or the Goading Attack maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it.\n" + toUni("Superiority Dice.") + " You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s.",
    prerequisite : "4th level, Squire of Solamnia feat",
    prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-r") !== -1; },
    scorestxt : "+1 Strength or Dexterity",
    extraLimitedFeatures : [{
        name : "Knight Superiority",
        usages : 2,
        recovery : "long rest",
        addToExisting : true
    }],
    choices : ["Distracting Strike", "Goading Attack"],
    "distracting strike" : {
        calculate : "event.value = 'I learn the Distracting Strike maneuver, see third page. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.';",
        toNotesPage : [{
            name : "Distracting Strike",
            source : [["P", 74]],
            note : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "The next attack of an ally before my next turn has adv. against the creature",
            page3notes : true
        }]
    },
    "goading attack" : {
        calculate : "event.value = 'I learn the Goading Attack maneuver, save DC ' + (8 + Number(What('Proficiency Bonus')) + Math.max(What('Str Mod'), What('Dex Mod'))) + ', see third page. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.';",
        toNotesPage : [{
            name : "Goading Attack",
            source : [["P", 74]],
            note : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wis save or has disadv. vs. other targets until the end of my next turn",
            page3notes : true
        }]
    }
};

FeatsList["knight of the sword-r"] = {
    name : "Knight of the Sword",
    source : [["UA:RHoK", 5]],
    calculate : "event.value = 'I learn the Maneuvering Attack or Menacing Attack maneuver, save DC ' + (8 + Number(What('Proficiency Bonus')) + Math.max(What('Str Mod'), What('Dex Mod'))) + '. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.';",
    descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Sword, a group devoted to heroism and courage. Bravery steels your spirit, granting you these benefits:\n" + toUni("Ability Score Increase.") + " Increase your Intelligence, Wisdom, or Charisma score by 1, to a maximum of 20.\n" + toUni("Sword Maneuvers.") + " You learn the Maneuvering Attack or the Menacing Attack maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it.\n" + toUni("Superiority Dice.") + " You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s.",
    prerequisite : "4th level, Squire of Solamnia feat",
    prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-r") !== -1; },
    scorestxt : "+1 Intelligence, Wisdom, or Charisma",
    extraLimitedFeatures : [{
        name : "Knight Superiority",
        usages : 2,
        recovery : "long rest",
        addToExisting : true
    }],
    choices : ["Maneuvering Attack", "Menacing Attack"],
    "maneuvering attack" : {
        calculate : "event.value = 'I learn the Maneuvering Attack maneuver, see third page. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.';",
        toNotesPage : [{
            name : "Maneuvering Attack",
            source : [["P", 74]],
            note : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Ally can use reaction to move half speed without opportunity attack from the target",
            page3notes : true
        }]
    },
    "menacing attack" : {
        calculate : "event.value = 'I learn the Menacing Attack maneuver, save DC ' + (8 + Number(What('Proficiency Bonus')) + Math.max(What('Str Mod'), What('Dex Mod'))) + ', see third page. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.';",
        toNotesPage : [{
            name : "Menacing Attack",
            source : [["P", 74]],
            note : "\n   " + "Use after hitting a creature; I add the superiority die to my attack's damage" + "\n   " + "Target makes a Wisdom save or is frightened of me until the end of my next turn",
            page3notes : true
        }]
    },
};

FeatsList["knight of the rose-r"] = {
    name : "Knight of the Rose",
    source : [["UA:RHoK", 5]],
    description : "I learn the Commander's Strike or Rally maneuver. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.",
    descriptionFull : "You are a Knight of Solamnia aligned with the Order of the Rose, a group known for leadership, justice, and wisdom. Your resolve grants you these benefits:\n" + toUni("Ability Score Increase.") + " Increase your Constitution or Charisma score by 1, to a maximum of 20.\n" + toUni("Rose Maneuvers") + " You learn the Commander's Strike or Rally maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with the other maneuver offered by it." + toUni("Superiority Dice.") + " You gain two superiority dice, which you add to the dice you have from the Squire of Solamnia feat. All the dice are now d8s.",
    prerequisite : "4th level, Squire of Solamnia feat",
    prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("squire of solamnia-r") !== -1; },
    scorestxt : "+1 Constitution or Charisma",
    extraLimitedFeatures : [{
        name : "Knight Superiority",
        usages : 2,
        recovery : "long rest",
        addToExisting : true
    }],
    choices : ["Commander's Strike", "Rally"],
    "commander's strike" : {
        description : "I learn the Commander's Strike maneuver. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.",
        action : ["bonus action", "Commander's Strike (with Attack action)"],
        toNotesPage : [{
            name : "Commander's Strike",
            source : [["P", 74]],
            note : "\n   " + "I forgo one attack of my Attack action to use a bonus action to direct an ally I see/hear" + "\n   " + "The ally can use a reaction to make an attack, adding the superiority die to damage",
            page3notes : true
        }]
    },
    "rally" : {
        calculate : "event.value = 'I learn the Rally maneuver, see third page. I can replace this with another after a long rest. I add two superiority dice (d8) to those from the Squire of Solamnia feat, and my existing dice become d8.';",
        action : ["bonus action", "Rally"],
        toNotesPage : [{
            name : "Rally",
            source : [["P", 74]],
            note : "\n   " + "Ally that can see/hear me gets temporary HP equal to superiority die + Charisma mod",
            page3notes : true
        }]
    },
};

FeatsList["squire of solamnia-r"] = {
    name : "Squire of Solamnia",
    source : [["UA:RHoK", 5]],
    calculate : "event.value = 'Mounting/Dismounting takes a 5ft move. I learn the Lunging Attack, Precision Attack, or Pushing Attack maneuver, save DC ' + (8 + Number(What('Proficiency Bonus')) + Math.max(What('Str Mod'), What('Dex Mod'))) + '. I can replace this with another after a long rest. I gain Superiority Dice (d6) equal to my Prof Bonus to use with these, I regain them after a long rest.';",
    descriptionFull : "Your training in the ways of the Knights of Solamnia grants you these benefits:\n" + toUni("Mount Up.") + " Mounting or dismounting costs you only 5 feet of movement\n" + toUni("Squire Maneuvers.") + " You learn the Lunging Attack, Precision Attack, or Pushing Attack maneuver from the Battle Master subclass of the fighter in the Player's Handbook (choose the maneuver when you gain this feat). If the maneuver requires a saving throw, the save's DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice). Whenever you finish a long rest, you can replace the maneuver you learned from this feat with another one from the list above.\n" + toUni("Superiority Dice.") + " You gain a number of superiority dice equal to your proficiency bonus. These dice are d6s, and you can use them only with the maneuver you gain from this feat and with any maneuvers you gain from feats that have this feat as a prerequisite. A superiority die is expended when you use it, and you regain all expended superiority dice when you finish a long rest.",
    prerequisite : "Fighter or Paladin Class or Knight of Solamnia Background",
    prereqeval : function (v) {
        return classes.known.fighter || classes.known.paladin || CurrentBackground.known.indexOf('knight of solamnia-r') !== -1;
    },
    limfename : "Knight Superiority",
    usages : "Proficiency bonus per",
    usagescalc : "event.value = How('Proficiency Bonus')",
    recovery : "long rest",
    choices : ["Lunging Attack", "Precision Attack", "Pushing Attack"],
    "lunging attack" : {
        calculate : "event.value = 'Mounting/Dismounting takes a 5ft move. I know the Lunging Attack maneuver, see third page. I can replace this with another after a long rest. I gain Superiority Dice (d6) equal to my Prof Bonus to use with these, I regain them after a long rest.';",
        toNotesPage : [{
            name : "Lunging Attack",
            source : [["P", 74]],
            note : "\n   " + "I can spend a superiority die to increase the reach of a melee weapon attack by 5 ft" + "\n   " + "If the attack hits, I add the superiority die to my attack's damage",
            page3notes : true
        }],
    },
    "precision attack" : {
        calculate : "event.value = 'Mounting/Dismounting takes a 5ft move. I know the Precision Attack maneuver, see third page. I can replace this with another after a long rest. I gain Superiority Dice (d6) equal to my Prof Bonus to use with these, I regain them after a long rest.';",
        toNotesPage : [{
            name : "Precision Attack",
            source : [["P", 74]],
            note : "\n   " + "I add the superiority die to my attack roll, either before or after rolling",
            page3notes : true
        }],
    },
    "pushing attack" : {
        calculate : "event.value = 'Mounting/Dismounting takes a 5ft move. I know the Pushing Attack maneuver, save DC ' + (8 + Number(What('Proficiency Bonus')) + Math.max(What('Str Mod'), What('Dex Mod'))) + ', see third page. I can replace this with another after a long rest. I gain Superiority Dice (d6) equal to my Prof Bonus to use with these, I regain them after a long rest.';",
        toNotesPage : [{
            name : "Pushing Attack",
            source : [["P", 74]],
            note : "\n   " + "Use after hitting a creature; I add the superiority die to the attack's damage" + "\n   " + "If target is Large or smaller, it must make a Strength save or be pushed up to 15 ft away",
            page3notes : true
        }],
    }
};
