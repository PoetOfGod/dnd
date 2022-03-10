/*  
    This script was written by Thravieus Windhelm and tested on v13.1.0+220114, Printer Friendly
    This is an unofficial script for the Unearthed Arcana: Heroes of Krynn
    This script is a work in progress, currently it adds the Kender race and the Lunar Magic sorcerer subclass
    It also adds the backgrounds and most of the feats (High Sorcery Feats and Divine Favor feats)
    **The Knight of Solamnia Background is not fully functional as the dependent feats are not yet transcribed

    Version : 2.0alpha
    Date : 3/10/2022

    This script should be removed once the official script is released to prevent conflict
*/
var iFileName = "ua_20220308_Heroes-of-Krynn(Unofficial).js";
RequiredSheetVersion("13.1.0");

SourceList["UA:HoK"] = {
    name : "Unearthed Arcana: Heroes of Krynn",
    abbreviation : "UA:HoK",
    group : "Unearthed Arcana",
    url : "https://dnd.wizards.com/articles/unearthed-arcana/heroes-krynn",
    date : "2022/03/08"
};

RaceList["kender-ua"] = {
    regExpSearch : /kender/i,
    name : "Kender",
    source : [["UA:HoK", 2]],
    plural : "Kender",
    size : 3,
    speed : {
        walk : { spd : 30, enc : 20}
    },
    languageProfs : ["Common", 1],
    savetxt : { adv_vs : ["frightened"]},
    scorestxt : "+2 to one ability score and +1 to a different score of my choice, -or- +1 to three different scores of my choice",
    features : {
        "taunt" : {
            name : "Taunt",
            minlevel : 1,
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest",
            action : [["bonus action", ""]]
        },
        "kender ace" : {
            name : "Kender Ace",
            minlevel : 3,
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest",
            action : [["bonus action", ""]],
            toNotesPage : [{
                name : "Kender Ace Table",
                page3notes : true,
                note : [
                    "As a bonus action I can reach into a container and roll a d6 to determine the item I pull out",
                    "  d6\tItem",
                    "   1\t5d6 gold pieces",
                    "   2\t1 simple weapon of my choice that has the light property",
                    "   3\t1 item of my choice from the Adventuring Gear table, no more than 1 gp and 1 lb",
                    "   4\t1 random item from the Trinkets table",
                    "   5\tMy choice of a crowbar or a grappling hook",
                    "   6\t1 item of my choice from the Tools table, no more than 10 gp",
                    "The object glimmers softly and disappears after 1 hour; See the Player's Handbook for tables"
                ]
            }]
        }
    },
    trait : "Kender" + 
    "\n \u2022 Taunt: As a bonus action I can taunt a creature within 60 ft that can hear and understand me. They must make a Wisdom save of DC 8 + Charisma modifier + Proficiency bonus. If failed, they have disadvantage on attack rolls until the start of my next turn. I can do this a number of times per long rest equal to my Proficiency Bonus."+
    "\n \u2022 Kender Ace: Starting at 3rd-level, as a bonus action I can reach into a container and roll on the Kender Aces table to determine the item I pull out. See the 3rd page \"Notes\" section. I can do this a number of times per long rest equal to my Proficiency Bonus."
};

AddSubClass("sorcerer", "lunar magic-ua", {
    regExpSearch : /^(?=.*(sorcerer|witch))(?=.*(lunar|moon)).*$/i,
    subname : "Lunar Magic",
    source : [["UA:HoK", 2]],
    features : {
        "subclassfeature1" : {
            name : "Moon Fire",
            source : [["UA:HoK", 2]],
            minlevel : 1,
            description : desc([
                "I know the Sacred Flame cantrip; When I cast it I can target up to 2 creatures within 5 ft"
            ]),
            spellcastingBonus : {
                name : "Moon Fire",
                spells : ["sacred flame"],
                selection : ["sacred flame"]
            },
            weaponsAdd : ["Sacred Flame"],
            spellChanges : {
				"sacred flame" : {
					description : "Up to 2 creas w/in 5ft I can see save or 1d8 Radiant dmg; no cover bonus; +1d8 at CL 5, 11, and 17",
                    descriptionShorter : "1 crea that I can see save or 1d8 Radiant dmg; no bonus for cover on save; +1d8 at CL 5/11/17",
                    descriptionCantripDie : "Up to 2 creas w/in 5ft I can see save or `CD`d8 Radiant dmg; no bonus for cover on save",
					changes : "My sacred flame can target up to 2 creatures within 5 ft of each other instead of 1."
				}
			},
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if (v.baseWeaponName == 'sacred flame') {
                            fields.Description += " or 2 creatures within 5 ft of each other";
                        }
                    },
                    "My sacred flame can target up to 2 creatures within 5 ft of each other instead of 1."
                ]
            }
        },
        "subclassfeature1.1" : {
            name : "Lunar Embodiment",
            source : [["UA:HoK", 2]],
            minlevel : 1,
            additional : levels.map(function (n) { return (n < 3 ? 3 : n < 5 ? 6 : n < 7 ? 9 : n < 9 ? 12 : 15) + " additional spells known"}),
            description : levels.map(function(n) { 
                return n < 3 ? desc(["When I finish a long rest I can choose a lunar phase: Full, New, or Crescent Moon", "While in a phase, spells of that phase can be cast 1/LR without using a spell slot", "\u2022 Full: Faerie Fire", "\u2022 New: Dissonant Whispers", "\u2022 Crescent: Sanctuary"]) : n < 5 ? desc(["When I finish a long rest I can choose a lunar phase: Full, New, or Crescent Moon", "While in a phase, spells of that phase can be cast 1/LR without using a spell slot", "\u2022 Full: Faerie Fire, Moonbeam", "\u2022 New: Dissonant Whispers, Darkness", "\u2022 Crescent: Sanctuary, Blindness/Deafness"]) : n < 7 ? desc(["When I finish a long rest I can choose a lunar phase: Full, New, or Crescent Moon", "While in a phase, spells of that phase can be cast 1/LR without using a spell slot", "\u2022 Full: Faerie Fire, Moonbeam, Death Ward", "\u2022 New: Dissonant Whispers, Darkness, Bestow Curse", "\u2022 Crescent: Sanctuary, Blindness/Deafness, Phantom Steed"]) : n < 9 ? desc(["When I finish a long rest I can choose a lunar phase: Full, New, or Crescent Moon", "While in a phase, spells of that phase can be cast 1/LR without using a spell slot", "\u2022 Full: Faerie Fire, Moonbeam, Death Ward, Freedom of Movement", "\u2022 New: Dissonant Whispers, Darkness, Bestow Curse, Evard's Black Tentacles", "\u2022 Crescent: Sanctuary, Blindness/Deafness, Phantom Steed, Hallucinatory Terrain"]) : desc(["When I finish a long rest I can choose a lunar phase: Full, New, or Crescent Moon", "While in a phase, spells of that phase can be cast 1/LR without using a spell slot", "\u2022 Full: Faerie Fire, Moonbeam, Death Ward, Freedom of Movement, Mass Cure Wounds", "\u2022 New: Dissonant Whispers, Darkness, Bestow Curse, Evard's Black Tentacles, Mislead", "\u2022 Crescent: Sanctuary, Blindness/Deafness, Phantom Steed, Hallucinatory Terrain, Dream"])
            }),
            spellcastingBonus : [{
                name : "Lunar Embodiment (1st-level)",
                spells : ["faerie fire", "dissonant whispers", "sanctuary"],
                times : 3,
                selection : ["faerie fire", "dissonant whispers", "sanctuary"]
            }, {
                name : "Lunar Embodiment (3rd-level)",
                spells : ["moonbeam", "darkness", "blindness/deafness"],
                selection : ["moonbeam", "darkness", "blindness/deafness"],
                times : levels.map(function (n) { return n < 3 ? 0 : 3; })
                
            }, {
                name : "Lunar Embodiment (5th-level)",
                spells : ["death ward", "bestow curse", "phantom steed"],
                selection : ["death ward", "bestow curse", "phantom steed"],
                times : levels.map(function (n) { return n < 5 ? 0 : 3; })
            }, {
                name : "Lunar Embodiment (7th-level)",
                spells : ["freedom of movement", "evard's black tentacles", "hallucinatory terrain"],
                selection : ["freedom of movement", "evard's black tentacles", "hallucinatory terrain"],
                times : levels.map(function (n) { return n < 7 ? 0 : 3; })
                
            }, {
                name : "Lunar Embodiment (9th-level)",
                spells : ["mass cure wounds", "mislead", "dream"],
                selection : ["mass cure wounds", "mislead", "dream"],
                times : levels.map(function (n) { return n < 9 ? 0 : 3; })
            }]
        },
        "subclassfeature6" : {
            name : "Lunar Boons",
            source : [["UA:HoK", 3]],
            minlevel : 6,
            description : desc([
                "Each lunar phase is additionally associated with spells of the following schools of magic",
                "- Full: Abjur & Conj - New: Evoc & Necro - Crescent: Div & Trans",
                "When I use Metamagic on a spell of my phase I can reduce the sorcery points by 1 (min 0)",
            ]),
            usages : "Proficiency Bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest"
        },
        "subclassfeature6.1" : {
            name : "Waxing and Waning",
            source : [["UA:HoK", 3]],
            minlevel : 6,
            description : desc([
                "As a bonus action, I can spend 1 sorcery point to change my lunar phase"
            ]),
            action : [["bonus action", "Change Phase"]]
        },
        "subclassfeature14" : {
            name : "Lunar Empowerment",
            source : [["UA:HoK", 3]],
            minlevel : 14,
            description : desc([
                "My current lunar phase grants passive benefits: \u2022 Full: I shed bright light in a 10 ft radius and",
                "   dim light for another 10 ft; Creatures I choose have adv on saves in the bright light",
                "\u2022 New: I have adv on Dex (Stealth) checks; Atks against me have disadv in dim light, darkness",
                "\u2022 Crescent: I have resistance to Necrotic and Radiant damage"
            ])
        },
        "subclassfeature18" : {
            name : "Lunar Phenomenon",
            source : [["UA:HoK", 3]],
            minlevel : 18,
            description : desc([
                "As a bonus action, or while changing phases, I can do the following, depending on my phase",
                "\u2022 Full: Creatures I choose within 30 ft must make a Con save against my spell save DC",
                "   Or they are blinded until the end of their next turn; One crea w/in 30 ft regains 3d8 HP",
                "\u2022 New: Creatures I choose within 30 ft must make a Dex save against my spell save DC",
                "   Or they take 3d10 Necrotic dmg and their spd becomes 0 until the end of their next turn",
                "   I become invisible until the end of my next turn, or until I attack or cast a spell",
                "\u2022 Crescent: I can teleport to an unoccupied space I can see within 60 ft",
                "   I gain resistance to all damage until the start of my next turn",
                "I can use each phase's bonus action 1/LR, unless I spend 5 sorcery points to use it again"
            ]),
            action : [["bonus action", ""]]
        }
    }
});

BackgroundList["knight of solamnia-ua"] = {
	regExpSearch : /^(?=.*(knight|champion|warrior))(?=.*solamnia).*$/i,
	name : "Knight of Solamnia",
	source : [["UA:HoK", 3]],
	skills : ["Athletics", "Survival"],
	gold : 10,
    toolProfs : [["Musical instrument", 1]],
    languageProfs : [1],
	equipleft : [
		["Insignia of rank", "", ""],
		["Deck of cards", "", ""]
	],
	equipright : [
		["Common clothes", "", 3],
		["Pouch (with coins)", "", 1]
	],
	feature : "Squire of Solamnia (UA)",
	trait : [
		"I pledge my sword to the greater good. If I must perish in pursuit of that good, so be it.",
		"My comrades-in-arms are my family. I'll do whatever it takes to keep them safe.",
		"The protection of innocent people comes first. All other concerns come second.",
		"I joined the knights for the free meals, but their lessons grew on me over time.",
		"I wish my deeds to become the stuff of legends—just like those of the knighthood's heroic founders.",
		"A dishonorable act drove me to become a knight. I have acted with honor ever since."
	],
	extra : [
		"Knight of Somalia Trinkets",
		"A flat silver disk I record my heroics upon",
		"A piece of a fallen knight's armor",
		"A pendant featuring a crown, a rose, a sword, or combination of all three",
		"The pommel of my mentor's sword",
		"A meaningful favor from someone I defended—perhaps a handkerchief or glove",
		"A brass locket with a sketch of a silver dragon inside"
	],
};

BackgroundFeatureList["squire of solamnia (ua)"] = {
    description : "I gain the Squire of Solamnia feat. In addition, the Knights of Solamnia provide me free, modest lodging and food at any of their fortresses or encampments.",
    eval : function() { AddFeat("Squire of Solamnia"); },
    removeeval : function() { RemoveFeat("Squire of Solamnia"); }
}

BackgroundList["mage of high sorcery-ua"] = {
	regExpSearch : /^(?=.*(mage|wizard|magus))(?=.*high)(?=.*sorcery).*$/i,
	name : "Mage of High Sorcery",
	source : [["UA:HoK", 4]],
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
	feature : "Initiate of High Sorcery (UA)",
	trait : [
		"I wish to use my knowledge of magic to better people's lives.",
		"My study of magic might reveal all manner of secrets.",
		"Magic is a means to power, and I will use it to pursue my ambitions.",
		"I learned magic so I'd be able to protect those I care about.",
		"I use my magic to maintain the balance between all things.",
		"Whether in the past, present, or future, I will be the greatest mage ever known."
	],
	extra : [
		"Mage of High Sorcery Trinkets",
		"An unopened letter from my first teacher",
		"A broken wand made of black, red, or white wood",
		"A scroll bearing an incomprehensible formula",
		"A purposeless device covered in colored stones that can fold into various enigmatic shapes",
		"A pouch or spell book emblazoned with the triple moon symbol of the Mages of High Sorcery",
		"A lens through which I can see Krynn's invisible black moon, Nuitari"
	],
};

BackgroundFeatureList["initiate of high sorcery (ua)"] = {
    description : "I gain the Initiate of High Sorcery feat. In addition, the Mages of High Sorcery provide you with free, modest lodging and food indefinitely at any occupied Tower of High Sorcery and for one night at the home of an organization member.",
    eval : function() { AddFeat("Initiate of High Sorcery"); },
    removeeval : function() { RemoveFeat("Initiate of High Sorcery"); }
}

FeatsList["adept of the black robes-ua"] = {
	name : "Adept of the Black Robes",
	source : [["UA:HoK", 5]],
	description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Choose an ability for this spell. If creature I can see within 60 ft fails a save vs my spell I can spend HD equal to spell's level. I roll half that many HD and the creature takes that much additional damage.",
	descriptionFull : "Your ambition and loyalty to the Order of the Black Robes has been recognized, granting you these benefits:\n \u2022 You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the evocation or necromancy school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n \u2022 You can channel your lifeforce into the power of your magic. When a creature you can see within 60 feet fails on a saving throw against a spell you cast, you can expend a number of Hit Dice equal to the level of the spell. Roll a number of Hit Die equal to half the number of Hit Dice expended (rounded up) and the damage the triggering creature takes increases by an amount equal to the total rolled of those dice.",
	prerequisite : "4th level, Initiate of High Sorcery feat, Any Non-Good Alignment",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("initiate of high sorcery-ua") !== -1 && !(/good/i).test(What("Alignment")); },
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
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-ua");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
    "intelligence" : {
        description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If creature I can see within 60 ft fails a save vs my spell I can spend HD equal to spell's level. I roll half that many HD and the creature takes that much additional damage.",
        spellcastingAbility : 4
    },
    "wisdom" : {
        description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. If creature I can see within 60 ft fails a save vs my spell I can spend HD equal to spell's level. I roll half that many HD and the creature takes that much additional damage.",
        spellcastingAbility : 5
    },
    "charisma" : {
        description : "I learn one 2nd-level Evoc or Necro spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. If creature I can see within 60 ft fails a save vs my spell I can spend HD equal to spell's level. I roll half that many HD and the creature takes that much additional damage.",
        spellcastingAbility : 6
    }
};

FeatsList["adept of the red robes-ua"] = {
	name : "Adept of the Red Robes",
	source : [["UA:HoK", 5]],
    description : "I learn one 2nd-level Div or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
	descriptionFull : "Your pursuit of truth and dedication to maintaining the balance between all things has been recognized by the Order of the Red Robes, granting you these benefits:\n \u2022 You learn one 2nd-level spell of your choice. The 2nd-level spell must be from the divination or transmutation school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n \u2022 When you make an attack roll, an ability check, or a saving throw, and roll a 9 or lower on the d20, you can use your reaction to balance fate and treat the roll as a 10. you can use this reaction a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
	prerequisite : "4th level, Initiate of High Sorcery feat",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("initiate of high sorcery-ua") !== -1; },
	spellcastingBonus : {
		name : "2nd-level Div/Trans spell",
        "class" : "any",
        school : ["Div", "Trans"],
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
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-ua");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
    "intelligence" : {
        description : "I learn one 2nd-level Div or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
        spellcastingAbility : 4
    },
    "wisdom" : {
        description : "I learn one 2nd-level Div or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
        spellcastingAbility : 5
    },
    "charisma" : {
        description : "I learn one 2nd-level Div or Trans spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. If I roll less than a 10 on an atk, check, or save, I can use my reaction to treat it as a 10. I can do this a number of times equal to my proficiency bonus per long rest.",
        spellcastingAbility : 6
    }
};

FeatsList["adept of the white robes-ua"] = {
	name : "Adept of the White Robes",
	source : [["UA:HoK", 5]],
	description : "I learn one 2nd-level Abjur or Conj spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Choose an ability for this spell. When a creature w/in 30 ft takes damage I can use a reaction to expend a spell slot and roll d4s equal to the spell's level and reduce the damage by that much + my SC ability mod.",
	descriptionFull : "Your oath to use magic to make the world a better place has been recognized by the Order of the White Robes, granting you these benefits:\n \u2022 You learn one 2nd-level spell of you choice. The 2nd-level spell must be from the evocation or necromancy school of magic. You can cast this feat's 2nd-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast this spell using spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gain the Initiate of High Sorcery feat.\n \u2022 When you or a creature you can see within 30 feet of you takes damage, you can use your reaction to expend a spell slot and weave protective magic around the target. Roll a number of d4s equal to the level of the spell slot expended and reduce the damage the target takes by the total rolled on those dice + your spellcasting ability modifier.",
	prerequisite : "4th level, Initiate of High Sorcery feat, Any Non-Evil Alignment",
	prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("initiate of high sorcery-ua") !== -1 && !(/evil/i).test(What("Alignment")); },
	spellcastingBonus : {
		name : "2nd-level Abjur/Conj spell",
        "class" : "any",
        school : ["Abjur", "Conj"],
        level : [2, 2],
        firstCol : "oncelr"
	},
    spellcastingAbility : 4,
    allowUpCasting : true,
    choices : ["Intelligence", "Wisdom", "Charisma"],
    selfChoosing : function () {
		var iHghSrcyInit = CurrentFeats.known.indexOf("initiate of high sorcery-ua");
		if (iHghSrcyInit !== -1 && CurrentFeats.choices[iHghSrcyInit]) {
			return CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iHghSrcyInit].toString().split(" ")[0].slice(1);
		}
	},
    "intelligence" : {
        description : "I learn one 2nd-level Abjur or Conj spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Int is my ability for this spell. When a creature w/in 30 ft takes damage I can use a reaction to expend a spell slot and roll d4s equal to the spell's level and reduce the damage by that much + my SC ability mod.",
        spellcastingAbility : 4
    },
    "wisdom" : {
        description : "I learn one 2nd-level Abjur or Conj spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Wis is my ability for this spell. When a crea w/in 30 ft takes dmg I can use a reaction to expend a spell slot and roll d4s equal to the spell's level and reduce the dmg by that much + my SC ability mod.",
        spellcastingAbility : 5
    },
    "charisma" : {
        description : "I learn one 2nd-level Abjur or Conj spell. I can cast this spell 1/LR w/out using a spell slot, and can cast it normally. Cha is my ability for this spell. When a crea w/in 30 ft takes dmg I can use a reaction to expend a spell slot and roll d4s equal to the spell's level and reduce the dmg by that much + my SC ability mod.",
        spellcastingAbility : 6
    }
};

FeatsList["divine communications-ua"] = {
    name : "Divine Communications",
    source : [["UA:HoK", 5]],
    description : "I learn Augury and Commune. I can cast these spells without a spell slot, then must wait 1d4 long rests before doing so again, and I can cast it normally. My chosen ability from Divinely Favored is my spellcasting ability for these spells",
    descriptionFull : "Your connection to your god deepens, granting you these benefits:\n \u2022 Increase the ability score of the spellcasting ability chosen when you gained the Divinely Favored feat by 1, to a maximum of 20.\n \u2022 You learn to speak, read, and write Celestial, and two other languages of your choice.\n \u2022 You can cast the augury and commune spell without a spell slot, and you must finish 1d4 long rests before you can cast it in this way again. You can also cast the spell using the spell slots you have of the appropriate level. The spell's spellcasting ability is the one chosen when you gained the Divinely Favored feat.",
    languageProfs : ["Celestial", 2],
    spellcastingBonus : {
        name : "Augury and Commune",
        spells : ["augury", "commune"],
        selection : ["augury", "commune"],
        times : 2
    },
    choices : ["Intelligence", "Wisdom", "Charisma"],
    selfChoosing : function () {
        // extract just the ability from the divinely favored choices
		var iDvnFav = CurrentFeats.known.indexOf("divinely favored-ua");
		if (iDvnFav !== -1 && CurrentFeats.choices[iDvnFav]) {
			return CurrentFeats.choices[iDvnFav].toString().split(" ")[0].charAt(0).toUpperCase() + CurrentFeats.choices[iDvnFav].toString().split(" ")[0].slice(1);
		}
	},
    "intelligence" : {
        description : "I learn Augury and Commune. I can cast these spells without a spell slot, then must wait 1d4 long rests before doing so again, and I can cast it normally. Intelligence is my spellcasting ability for these spells",
        spellcastingAbility : 4,
        scores : [0, 0, 0, 1, 0, 0]
    },
    "wisdom" : {
        description : "I learn Augury and Commune. I can cast these spells without a spell slot, then must wait 1d4 long rests before doing so again, and I can cast it normally. Wisdom is my spellcasting ability for these spells",
        spellcastingAbility : 5,
        scores : [0, 0, 0, 0, 1, 0]
    },
    "charisma" : {
        description : "I learn Augury and Commune. I can cast these spells without a spell slot, then must wait 1d4 long rests before doing so again, and I can cast it normally. Charisma is my spellcasting ability for these spells",
        spellcastingAbility : 6,
        scores : [0, 0, 0, 0, 0, 1]
    },
};

FeatsList["divinely favored-ua"] = {
    name : "Divinely Favored",
    source : [["UA:HoK", 5]],
    description : "I learn Thaumaturgy and one 1st-level spell based on my alignment. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. I choose Int, Wis, or Cha as my spellcasting ability for this. I can use a holy symbol as a spellcasting focus for any spells that use the chosen ability.",
    descriptionFull : "A god has chosen you to carry a spark of their divine power.\n \u2022 You learn the thaumaturgy cantrip and one 1st-level spell based on the alignment of your character, as specified in the Alignment Spells table.\n \u2022 Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n\n" + toUni("Alignment") + "   " + toUni("1st-level Spell") + "\nEvil\t     Choose one 1st level warlock or wizard spell.\nGood\t     Choose one 1st-level cleric or wizard spell.\nNeutral\t     Choose one 1st-level druid or wizard spell.\n\n \u2022 In addition, you can use a holy symbol as a spellcasting focus for any spell you cast that uses the spellcasting ability you choose when you select this feat.",
    choices : ["Intelligence - Good", "Intelligence - Neutral", "Intelligence - Evil", "Wisdom - Good", "Wisdom - Neutral", "Wisdom - Evil", "Charisma - Good", "Charisma - Neutral", "Charisma - Evil"],
    // nine choices, one for each alignment and ability pair
    "intelligence - good" : {
        description : "I learn Thaumaturgy and one 1st-level cleric or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Cleric/Wizard Spell",
            "class" : ["cleric", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    },
    "intelligence - neutral" : {
        description : "I learn Thaumaturgy and one 1st-level druid or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Druid/Wizard Spell",
            "class" : ["druid", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    },
    "intelligence - evil" : {
        description : "I learn Thaumaturgy and one 1st-level warlock or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Intelligence is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Intelligence.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Warlock/Wizard Spell",
            "class" : ["warlock", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    },
    "wisdom - good" : {
        description : "I learn Thaumaturgy and one 1st-level cleric or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Cleric/Wizard Spell",
            "class" : ["cleric", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    },
    "wisdom - neutral" : {
        description : "I learn Thaumaturgy and one 1st-level druid or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Druid/Wizard Spell",
            "class" : ["druid", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    },
    "wisdom - evil" : {
        description : "I learn Thaumaturgy and one 1st-level warlock or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Wisdom is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Wisdom.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Warlock/Wizard Spell",
            "class" : ["warlock", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    },
    "charisma - good" : {
        description : "I learn Thaumaturgy and one 1st-level cleric or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Cleric/Wizard Spell",
            "class" : ["cleric", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    },
    "charisma - neutral" : {
        description : "I learn Thaumaturgy and one 1st-level druid or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Druid/Wizard Spell",
            "class" : ["druid", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    },
    "charisma - evil" : {
        description : "I learn Thaumaturgy and one 1st-level warlock or wizard spell. I can cast the 1st level spell once per long rest without a spell slot, and I can cast it normally. Charisma is my spellcasting ability for these spells. I can use a holy symbol as a spellcasting focus for all my spells that use Charisma.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Thaumaturgy",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"],
            firstCol : "atwill"
        }, {
            name : "1st-level Warlock/Wizard Spell",
            "class" : ["warlock", "wizard"],
            level : [1, 1],
            firstCol : "oncelr"
        }],
    }
};

FeatsList["initiate of high sorcery-ua"] = {
    name : "Initiate of High Sorcery",
    source : [["UA:HoK", 6]],
    description : "I learn a cantrip and a first level spell from a list depending on my chosen moon. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I can choose Int, Wis, or Cha as my spellcasting ability for this.",
    descriptionFull : "You've received training from magic-users affiliated with the Mages of High Sorcery.\n \u2022 Choose one of three moons of Krynn, each of which is associated with a distinct type of magic: the black moon, Nuitari; the red moon, Lunitari; or the white moon, Solinari. You learn one cantrip and one 1st-level spell based on the moon you choose, as specified in the Lunar Spells table.\n \u2022 You can cast the chosen 1st-level spell without a spell slot, and you must finish a long rest before you can cast it in this way again. You can also cast the spell using any spell slots you have.\n \u2022 Your spellcasting ability for this feat's spells is Intelligence, Wisdom, or Charisma (choose when you select this feat).\n\n" + toUni("Moon") + "\t" + toUni("Cantrips") + "\t\t" + toUni("1st-level Spell") + "\nNuitari\tChoose one from\tChoose one 1st-level wizard\n\tchill touch, mage\tspell from the evocation or\n\thand, and vicious\tnecromany school of magic.\n\tmockery\nLunitari\tChoose one from\tChoose one 1st-level wizard\n\tguidance,\t\tspell from the school of\n\tmessage, and\tdivination or transmutation.\n\tprestidigitation\nSolinari\tChoose one from\tChoose one 1st-level wizard\n\tproduce flame,\tspell from the abjuration or\n\tresistance, and\tconjuration school of magic.\n\tspare the dying",
    prerequisite : "Apprentice of High Sorcery",
    choices : ["Intelligence - Nuitari", "Intelligence - Lunitari", "Intelligence - Solinari", "Wisdom - Nuitari", "Wisdom - Lunitari", "Wisdom - Solinari", "Charisma - Nuitari", "Charisma - Lunitari", "Charisma - Solinari"],
    // nine choices, one for each ability and moon
    "intelligence - nuitari" : {
        description : "I learn a cantrip (Chill Touch, Mage Hand, or Vicious Mockery) and a 1st-level Evoc/Necro spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Nuitari Cantrip",
            spells : ["chill touch", "mage hand", "vicious mockery"],
            firstCol : "atwill"
        }, {
            name : "Nuitari 1st-level Spell",
            "class" : "wizard",
            school : ["Evoc", "Necro"],
            firstCol : "oncelr"
        }]
    },
    "intelligence - lunitari" : {
        description : "I learn a cantrip (Guidance, Message, or Prestidigitation) and a 1st-level Div/Trans spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Lunitari Cantrip",
            spells : ["guidance", "message", "prestidigitation"],
            firstCol : "atwill"
        }, {
            name : "Lunitari 1st-level Spell",
            "class" : "wizard",
            school : ["Div", "Trans"],
            firstCol : "oncelr"
        }]
    },
    "intelligence - solinari" : {
        description : "I learn a cantrip (Produce Flame, Resistance, or Spare the Dying) and a 1st-level Abjur/Conj spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Intelligence as my spellcasting ability for this.",
        spellcastingAbility : 4,
        spellcastingBonus : [{
            name : "Solinari Cantrip",
            spells : ["produce flame", "resistance", "spare the dying"],
            firstCol : "atwill"
        }, {
            name : "Solinari 1st-level Spell",
            "class" : "wizard",
            school : ["Abjur", "Conj"],
            firstCol : "oncelr"
        }]
    },
    "wisdom - nuitari" : {
        description : "I learn a cantrip (Chill Touch, Mage Hand, or Vicious Mockery) and a 1st-level Evoc/Necro spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Nuitari Cantrip",
            spells : ["chill touch", "mage hand", "vicious mockery"],
            firstCol : "atwill"
        }, {
            name : "Nuitari 1st-level Spell",
            "class" : "wizard",
            school : ["Evoc", "Necro"],
            firstCol : "oncelr"
        }]
    },
    "wisdom - lunitari" : {
        description : "I learn a cantrip (Guidance, Message, or Prestidigitation) and a 1st-level Div/Trans spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Lunitari Cantrip",
            spells : ["guidance", "message", "prestidigitation"],
            firstCol : "atwill"
        }, {
            name : "Lunitari 1st-level Spell",
            "class" : "wizard",
            school : ["Div", "Trans"],
            firstCol : "oncelr"
        }]
    },
    "wisdom - solinari" : {
        description : "I learn a cantrip (Produce Flame, Resistance, or Spare the Dying) and a 1st-level Abjur/Conj spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Wisdom as my spellcasting ability for this.",
        spellcastingAbility : 5,
        spellcastingBonus : [{
            name : "Solinari Cantrip",
            spells : ["produce flame", "resistance", "spare the dying"],
            firstCol : "atwill"
        }, {
            name : "Solinari 1st-level Spell",
            "class" : "wizard",
            school : ["Abjur", "Conj"],
            firstCol : "oncelr"
        }]
    },
    "charisma - nuitari" : {
        description : "I learn a cantrip (Chill Touch, Mage Hand, or Vicious Mockery) and a 1st-level Evoc/Necro spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Nuitari Cantrip",
            spells : ["chill touch", "mage hand", "vicious mockery"],
            firstCol : "atwill"
        }, {
            name : "Nuitari 1st-level Spell",
            "class" : "wizard",
            school : ["Evoc", "Necro"],
            firstCol : "oncelr"
        }]
    },
    "charisma - lunitari" : {
        description : "I learn a cantrip (Guidance, Message, or Prestidigitation) and a 1st-level Div/Trans spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Lunitari Cantrip",
            spells : ["guidance", "message", "prestidigitation"],
            firstCol : "atwill"
        }, {
            name : "Lunitari 1st-level Spell",
            "class" : "wizard",
            school : ["Div", "Trans"],
            firstCol : "oncelr"
        }]
    },
    "charisma - solinari" : {
        description : "I learn a cantrip (Produce Flame, Resistance, or Spare the Dying) and a 1st-level Abjur/Conj spell from wizard spell list. I can cast the spell once per long rest at its lowest level without expending a spell slot, and can cast it if I have a spell slot to do so. I use Charisma as my spellcasting ability for this.",
        spellcastingAbility : 6,
        spellcastingBonus : [{
            name : "Solinari Cantrip",
            spells : ["produce flame", "resistance", "spare the dying"],
            firstCol : "atwill"
        }, {
            name : "Solinari 1st-level Spell",
            "class" : "wizard",
            school : ["Abjur", "Conj"],
            firstCol : "oncelr"
        }]
    },
};
