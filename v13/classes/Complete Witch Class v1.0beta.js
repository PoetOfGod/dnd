/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://www.flapkan.com/download#charactersheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Witch Class
	Effect:		This script was a commission for Sigmarius for the Complete Witch class published by Mage Hand Press under the OGL.  
	Remarks:	The class can be found at this link: https://store.magehandpress.com/products/complete-witch 
				This class does not provide rules for multiclassing so they were implemented in a format similar to other classes.
	Sheet:		v13.1.0 and newer
	Code by:	Thravieus Windhelm 
	Date: 2022-02-15
*/

var iFileName = "Complete Witch.js"; 
RequiredSheetVersion(13.1); 

SourceList["MHP-CW"] = {
    name : "Mage Hand Press - Complete Witch",
    abbreviation : "M:CW",
    group : "Mage Hand Press",
    url : "https://store.magehandpress.com/products/complete-witch",
};

witchspells = [/*Cantrips: */"acid splash", "candyblast", "chill touch", "dancing lights", "eldritch orb", "hocus pocus", "mage hand", "message", "minor illusion", "minor lifesteal", "prestidigitation", "produce flame", "resistance", "spare the dying", "true strike", /*1st Level: */"animal friendship", "accursed act", "bane", "charm person", "comprehend languages", "curse of chains", "curse of tomes", "detect magic", "disguise self", "expeditious retreat", "face swap", "fairie fire", "flawed reconstruction", "hellish rebuke", "tasha's hideous laughter", "hollowing curse", "protection from evil and good", "psychedelics", "silent image", "sleep", "thunderwave", "unseen servant", /*2nd Level: */"animal messenger", "blindness/deafness", "calm emotions", "curse ward", "darkness", "detect thoughts", "enthrall", "hold person", "intrusive thought", "invisibility", "levitate", "protect threshold", "knock", "misty step", "ray of enfeeblement", "shatter", "suggestion", /*3rd Level: */"bestow curse", "clairvoyance", "counterspell", "curse of blades", "dispel magic", "fear", "hypnotic pattern", "magic circle", "major image", "nondetection", "remove curse", "ruby-eye curse", "sending", "slow", "speak with dead", "speak with plants", "stinking cloud", "tongues", /*4th Level: */"arcane eye", "banishment", "evard's black tentacles", "compulsion", "confusion", "curse of aging", "dimension door", "greater invisibility", "hallucinatory terrain", "locate creature", "phantasmal killer", "polymorph", "soul bond", /*5th Level: */"contagion", "curse weapon", "dispel evil and good", "dominate person", "dream", "geas", "hold monster", "insect plague", "mislead", "modify memory", "pharaoh's curse", "planar binding", "scrying", "seeming", "telekinesis", /*6th Level: */"curruption curse", "demand", "elemental curse", "eyebite", "flesh to stone", "frenzy", "guards and wards", "mass suggestion", "programmed illusion", "true seeing", /*7th Level: */"curse of binding", "etherealness", "mirage arcane", "project image", "plane shift", "sequester", "symbol", "teleport", /*8th Level: */"antipathy/sympathy", "dominate monster", "feeblemind", "glibness", "mind blank", "power word stun", /*9th Level: */"astral projection", "foresight", "identity curse", "imprisonment", "secret enclave", "true polymorph", "weird"];

ClassList["cursed_witch"] = { 
	regExpSearch : /^(?=.*cursed)(?=.*(witch|coven|cabal|hexer)).*$/i, 
	name : "Cursed Witch", 
	source : ["MHP-CW", 1], 
	primaryAbility : "Charisma",
	abilitySave : 6,
    prereqs : "Charisma 13",
    die : 8,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Cha", "Wis"],
    skillstxt : {
        primary : "Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, Nature, and Religion."
    },
    toolProfs : {
        primary : [["Alchemist supplies"], ["Poisoner's kit"]],
    },
    armorProfs : {
        primary : [true, false, false, false],
        secondary : [true, false, false, false],
    },
    weaponProfs : {
        primary : [true, false, ["blowgun", "shortsword", "whip"]],
        secondary : [true, false],
    },
    equipment : "Witch starting equipment:" +
        "\n \u2022 A whip and a blowgun -or- a light crossbow and 20 bolts -or- any simple weapon;" + 
        "\n \u2022 A component pouch -or- an arcane focus;" + 
        "\n \u2022 A scholar's pack -or- a dungeoneer's pack;" +
		"\n \u2022 Leather armor, any simple weapon, and a dagger.",
    subclasses : ["Witch's Craft", []],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	spellcastingFactor : 1,
    spellcastingKnown : {
		cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15]
	},
	spellcastingList : {
		spells : witchspells,
	},
	features : { 
		"spellcasting" : {
			name : "Spellcasting",
			source : ["MHP-CW", 2],
			minlevel : 1,
			description : "\n   " + "I can cast witch cantrips/spells that I know, using Charisma as my spellcasting ability" + "\n   " + "I can use an arcane focus as a spellcasting focus for my witch spells" + "\n   " + "I can cast my known witch spells as rituals if they have the ritual tag",
			additional : levels.map(function (n, idx) {
				var cantr = [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6][idx];
				var splls = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15][idx];
				return cantr + " cantrips \u0026 " + splls + " spells known";
			}),
			// selecting the blue magic subclass before level 3 has consequences on the spell sheet generation, warn the player if they try to do this
			changeeval : function(v) {
				if(classes.known.cursed_witch && classes.known.cursed_witch.subclass.indexOf("blue magic") !== -1 && (v[1] < 3 && v[1] != 0)) {
					app.alert({
						cMsg : toUni("Blue Magic Subclass Warning") + "\nThe Blue Magic Subclass changes the spell automation of the witch.\nSelecting this subclass before level 3 will apply spellcasting options that should not be available until level 3.\nPlease wait until level 3 to select this subclass.",
						nIcon : 1,
						cTitle : "Blue Magic Subclass Warning"
					});
				}
			}
		},
		"witch's curse" : {
			name : "Witch's Curse",
			source : ["MHP-CW", 2],
			minlevel : 1,
			description : "\n   " + "Chose a Witch's Curse using the \"Choose Feature\" button above",
			choices : ["Burned", "Drowned", "Feral", "Hideous", "Hollow", "Infested", "Insanity", "Loveless", "Possessed", "Starving", "Visions"],
			"burned" : {
				name : "Burned",
				description : "\n   " + "I have resistance to fire damage, and I know produce flame as a witch cantrip",
				dmgres : "Fire",
				spellcastingBonus : [{
					name : "Burned (Produce Flame)",
					spells : ["produce flame"],
					selection : ["produce flame"],
				}]
			},
			"drowned" : {
				name : "Drowned",
				description : "\n   " + "I can breathe air and water and I have a swim speed equal to my walking speed",
				speed : { swim : { spd : "walk", enc : "walk"} }
			},
			"feral" : {
				name : "Feral",
				description : "\n   " + "I gain proficiency in Survival and an AC of 12 + Dex without armor or a shield",
				skills : ["Survival"],
				extraAC : [{
					mod : 2,
					name : "Feral Defense",
					text : "I gain a +2 bonus to AC while I'm not wearing any armor or using a shield",
					stopeval : function (v) {
						return (v.usingShield | (v.theArmor != null));
					}
				}]
			},
			"hideous" : {
				name : "Hideous",
				description : "\n   " + "I'm proficient in Intimidation; When I roll initiative I can scare a humanoid I can see" + "\n   " + "They must make a Wisdom save or be frightened until the end of your next turn",
				skills : ["Intimidation"],
				additional : "Spell Save DC",
			},
			"hollow" : {
				name : "Hollow",
				description : levels.map(function (n) {
					return desc([
						"When I or my familiar reduce an enemy to 0 HP, I gain " + n + " + Cha mod (min 1) temp HP"
					]);
				}),
			},
			"infested" : {
				name : "Infested",
				description : levels.map(function (n) {
					if (n < 7) {
						var descr = ["I am immune to disease, my familiar can be a swarm of rats"];
					} else {
						var descr = ["I am immune to disease, my familiar can be a swarm of rats or insects"];
					}
					return desc(descr);
				}),
				savetxt : { immune : ["disease"] }	
			},
			"insanity" : {
				name : "Insanity",
				description : "\n   " + "I can speak telepathically to each creature within 30 feet that understands one language"
			},
			"loveless" : {
				name : "Loveless",
				description : "\n   " + "I am immune to being charmed",
				savetxt : { immune : ["charmed"] }	
			},
			"possessed" : {
				name : "Possessed",
				description : "\n   " + "I learn additional witch spells at levels 1, 4, 8, and 12",
				additional : levels.map(function (n) { 
					return n < 2 ? "1 additional spell" : (n < 5 ? "2" : n < 9 ? "3" : "4") + " additional spells";
				}),
				spellcastingBonus : [{
					name : "Possessed",
					times : [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4],
					spells : witchspells,
					level : [1, 9]
				}]
			},
			"starving" : {
				name : "Starving",
				description : "\n   " + "I don't need to eat or drink and I am immune to being poisoned",
				savetxt : { immune : ["poisoned"] }				
			},
			"visions" : {
				name : "Visions",
				description : "\n   " + "I can add my Charisma modifier to initiative rolls",
				addMod : { type : "skill", field : "Init", mod : "max(Cha|0)", text : "I can add my Charisma modifier to initiative rolls." }
			}
		},
		"hexes" : {
			name : "Hexes",
			source : ["MHP-CW", 4],
			minlevel : 1,
			description : "\n   " + "Use the \"Choose Feature\" button above to add Hexes to the third page" + "\n   "  + "Hexes take concentration, but I can concentrate on both a hex and a spell" + "\n   " + "Whenever I gain a witch level, I can replace a hex I know with another",
			additional : levels.map(function(n) { 
				return (n < 2 ? 2 : n < 5 ? 3 : n < 9 ? 4 : n < 13 ? 5 : n < 17 ? 6 : 7) + " hexes known";
			}),
			extraname : "Hexes",
			extrachoices : ["Abate", "Apathy", "Beckon Familiar (prereq: level 2 witch)", "Bleeding", "Charm", "Cripple", "Dire Familiar (prereq: level 2 witch)", "Disorient", "Doomward", "Duplicity", "Evil Eye", "Fortune", "Go Unseen", "Hesitate", "Knowing", "Mire", "Misfortune", "Obfuscate", "Peacebond", "Pox", "Ruin", "Scurry", "Shriek", "Slumber", "Tremors", "Ward"],
			extraTimes : levels.map(function(n) {
				return n < 2 ? 2 : n < 5 ? 3 : n < 9 ? 4 : n < 13 ? 5 : n < 17 ? 6 : 7;
			}),
			action : ["action", "Hex (See third page)"],
			"abate" : {
				name : "Abate",
				description : "\n   " + "As an action, I can force a creature within 60 ft to make a Charisma save" + "\n   " + "On a failed save, they can't take reactions until the end of my next turn",
				source : ["MHP-CW", 5],
			},
			"apathy" : {
				name : "Apathy",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Charisma save" + "\n   " + "On a failed save, they become indifferent towards one of their enemies of your choice",
				source : ["MHP-CW", 5],
			},
			"beckon familiar (prereq: level 2 witch)" : {
				name : "Beckon Familiar",
				description : "\n   " + "I can cast the find familiar spell as an action without using a spell slot or components" + "\n   " + "Once I cast it in this way, I can't again for 1 minute",
				source : ["MHP-CW", 5],
				spellChanges : {
					"find familiar" : {
						time : "1 a",
						changes : "I can cast find familiar spell as an action without requiring a spell slot with a cooldown of 1 minute"
					}
				},
				prereqeval : function(v) { return classes.known.cursed_witch.level >= 2; }
			},
			"bleeding" : {
				name : "Bleeding",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Constituion save" + "\n   " + "On a failed save, they take an extra 1d4 dmg when damaged until the end of my next turn",
				source : ["MHP-CW", 5],
			},
			"charm" : {
				name : "Charm",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Wisdom save" + "\n   " + "On a failed save, they are charmed by me until the end of my next turn" + "\n   " + "When the hex ends, they know they were charmed by you",
				source : ["MHP-CW", 5],
			},
			"cripple" : {
				name : "Cripple",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Strength save" + "\n   " + "On a failed save, their movement speed is reduced to 10 ft until the end of my next turn" + "\n   " + "If the creature is flying they fall",
				source : ["MHP-CW", 5],
			},
			"dire familiar (prereq: level 2 witch)" : {
				name : "Dire Familiar",
				description : "\n   " + "As an action, I can empower my familiar for 1 minute; it adds my Cha mod to its dmg rolls" + "\n   " + "And its current and max HP increases by twice my witch level" + "\n   " + "I can't cast this hex again until my familiar is dismissed or the duration expires",
				source : ["MHP-CW", 5],
				additional : "No concentration",
				prereqeval : function(v) { return classes.known.cursed_witch.level >= 2; }
			},
			"disorient" : {
				name : "Disorient",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Constitution save" + "\n   " + "On a failed save, they must subtract d6 from their attack rolls",
				source : ["MHP-CW", 5],
			},
			"doomward" : {
				name : "Doomward",
				description : "\n   " + "As an action, I can choose a friendly creature within 60 ft" + "\n   " + "The next time they would drop to 0 HP and not die they drop to 1 HP instead" + "\n   " + "This hex then ends, and can't be used on the same target until a long or short rest",
				source : ["MHP-CW", 5],
			},
			"duplicity" : {
				name : "Duplicity",
				description : "\n   " + "As an action, I create a duplicate self to confuse enemies" + "\n   " + "When I am attacked, I roll a die, on an odd number the attack misses" + "\n   " + "This lasts until the end of my next turn, or until I attack or cast a spell",
				source : ["MHP-CW", 5],
			},
			"evil eye" : {
				name : "Evil Eye",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Wisdom save" + "\n   " + "On a failed save, they are frightened of me until the end of my next turn",
				source : ["MHP-CW", 5],
			},
			"fortune" : {
				name : "Fortune",
				description : "\n   " + "As an action, I can choose another friendly creature within 60 ft" + "\n   " + "They have advantage of saving throws until the end of my next turn",
				source : ["MHP-CW", 5],
			},
			"go unseen" : {
				name : "Go Unseen",
				description : "\n   " + "As an action, my familiar and I become invisible" + "\n   " + "This lasts until the end of my next turn, or until I or my familiar attacks or casts a spell" + "\n   " + "I can't cast this hex again for 1 minute",
				source : ["MHP-CW", 6],
			},
			"hesitate" : {
				name : "Hesitate",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Wisdom saving throw" + "\n   " + "On a failed save, on its turn it must choose to move or take an action" + "\n   " + "This lasts until the end of my next turn",
				source : ["MHP-CW", 6],
			},
			"knowing" : {
				name : "Knowing",
				description : "\n   " + "As an action, I gain adv. on Wisdom rolls until my next turn; for each creature within 30 ft:" + "\n   " + "If they can speak a language; if they are at half or less max HP; their lowest ability score" + "\n   " + "I can only learn one of these things per creature, even if I cast the hex more than once",
				source : ["MHP-CW", 6],
			},
			"mire" : {
				name : "Mire",
				description : "\n   " + "As an action, I create a 30 ft radius of difficult terrain until the end of my next turn" + "\n   " + "I can move freely in this area"
			},
			"misfortune" : {
				name : "Misfortune",
				description : "\n   " + "As an action, I choose one creature within 60 ft" + "\n   " + "Until the end of my next turn, whenever the creature rolls a 20 it instead becomes a 1",
				source : ["MHP-CW", 6],
			},
			"obfuscate" : {
				name : "Obfuscate",
				description : "\n   " + "As an action, I create a 20 ft radius sphere of fog centered around myself" + "\n   " + "The fog spreads around corners and heavily obscures the area" + "\n   " + "This lasts until the end of my next turn or until a wind of at least 10 mph disperses it",
				source : ["MHP-CW", 6],
			},
			"peacebond" : {
				name : "Peacebond",
				description : "\n   " + "As an action, the weapons and ammo of creatures within 30 ft are locked in their retainers" + "\n   " + "They can use an action to free the weapon with a Strength check vs my spell save DC" + "\n   " + "This lasts until the end of my next turn",
				source : ["MHP-CW", 6],
			},
			"pox" : {
				name : "Pox",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Constitution save" + "\n   " + "On a failed save, they are poisoned until the end of my next turn",
				source : ["MHP-CW", 6],
			},
			"ruin" : {
				name : "Ruin",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Constitution save" + "\n   " + "On a failed save, their AC is lowered by 3, to a minimum of 10, until the end of my next turn",
				source : ["MHP-CW", 7],
			},
			"scurry" : {
				name : "Scurry",
				description : "\n   " + "As an action, a nonmagical object less than 10 lbs within 30 ft sprouts legs and runs away" + "\n   " + "This object cannot be held in hand or worn by a creature, and gains a minimum AC of 10" + "\n   " + "Upon casting this hex it moves 20 ft in a direction of my choice" + "\n   " + "It remains animated until the end of my next turn or until it is picked up",
				source : ["MHP-CW", 7],
			},
			"shriek" : {
				name : "Shriek",
				description : "\n   " + "As a bonus action, each large or smaller creature within 5 ft is pushed 5 ft away from you",
				source : ["MHP-CW", 7],
				action : ["bonus action", " (Hex)"]
			},
			"slumber" : {
				name : "Slumber",
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Wisdom save" + "\n   " + "On a failed save, they fall unconscious until they take damage or the end of my next turn" + "\n   " + "Targets that are undead, can't be charmed, or have current HP > 5 \xD7 witch level are immune",
				source : ["MHP-CW", 7],
			},
			"tremors" : {
				name : "Tremors",
				description : "\n   " + "As an action, each creature within 10 ft must make a Dexterity save or be knocked prone",
				source : ["MHP-CW", 7],
			},
			"ward" : {
				name : "Ward",
				description : "\n   " + "As an action, I can choose another friendly creature within 60 ft" + "\n   " + "Until the end of my next turn, each time it takes damage it reduces that damage by 3",
				source : ["MHP-CW", 7],
			}
		},
		"cackle" : {
			name : "Cackle",
			source : ["MHP-CW", 4],
			minlevel : 2,
			description : "\n   " + "As a bonus action, my hex extends by 1 round for each hexed creature within 60 feet",
			action : [["bonus action", ""]]
		},
		"familiar" : {
			name : "Familiar",
			source : ["MHP-CW", 4],
			minlevel : 2,
			description : "\n   " + "I learn Find Familiar, it can also be a death snail, flying book, homunculus, mock, moon jelly," + "\n   " + "pet rock, pseudodragon, rag doll, sprite, tin soldier, winter wolf pup, or yarn golem" + "\n   " + "Each turn I can use my action or bonus action to make my familiar to attack with its reaction", 
			additional : "See Companion page",
			spellcastingBonus : [{
				name : "Familiar",
				spells : ["find familiar"],
				selection : ["find familiar"]
			}],
			spellChanges : {
				"find familiar" : {
					components : "V,S",
					compMaterial : "",
					description : "Gain the services of a familiar; can see through its eyes; it can deliver spells; see B",
					descriptionFull :  "You gain the service of a familiar, a spirit that takes an animal form you choose - bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey or fiend (your choice) instead of a beast." + "\n   " + "Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can't attack on its turn, but it can take other actions as normal." + "\n   " + "When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again. While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar's eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses." + "\n   " + "Once per turn, as an action or a bonus action I can command the familiar to attack with its reaction." +"\n   " + "As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits you summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you." + "\n   " + "You can't have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature." + "\n   " + "Finally, when you cast a spell, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll.",
					changes : "I can cast Find Familiar without requiring material components, the familiar can deliver any spell I cast."
				}
			}
		},
		"subclassfeature3" : {
			name : "Witch's Craft",
			source : ["MHP-CW", 4],
			minlevel : 3,
			description : "\n   " + "Choose your Craft, a learned variety of magic, and put it in the \"Class\" field"
		},
		"insidious spell" : {
			name : "Insidious Spell",
			source : ["MHP-CW", 4],
			minlevel : 5,
			description : "\n   " + "If an enemy is the sole target of my hex, it has disadv. on the first save of my witch spells"
		},
		"improved familiar" : {
			name : "Improved Familiar",
			source : ["MHP-CW", 5],
			minlevel : 7,
			description : "\n   " + "My familiar's attacks count as magical, I can choose one of the following forms for them:" + "\n   " + "Brass Dragon Wyrmling (without breath weapons), Fright, Grep, Imp, or Quasit",
		},
		"dying curse" : {
			name : "Dying Curse",
			source : ["MHP-CW", 5],
			minlevel : 9,
			description : "\n   " + "When I am reduced to 0 HP by a creature, but don't die I can curse that creature for 24 hrs" + "\n   " + "While cursed they have disadv. on attacks, ability checks, and saves." + "\n   " + "This curse ends when I regain conciousness, or with the remove curse spell",
			usages : 1,
			recovery : "long rest",
		},
		"grand hex" : {
			name : "Grand Hex",
			source : ["MHP-CW", 5],
			minlevel : 11,
			description : "\n   " + "Use the \"Choose Feature\" button above to add Grand Hexes to the Notes page",
			toNotesPage : [{
				name : "Grand Hex",
				source : ["MHP-CW", 5],
				popupname : "Grand Hex",
				note : [
					"My Grand Hexes are described as below;"
				]
			}],
			additional : levels.map(function (n) {
				return (n < 11 ? "" : (n < 13 ? 1 : n < 15 ? 2 : n < 18 ? 3 : 4) + " grand hexes known");
			}),
			extraname : "Grand Hex",
			extrachoices : ["Cauldron", "Coven", "Dual Hex", "Forceful Personality", "Hybrid", "Poison Apple", "Possession", "War Hex", "Witch's Broom", "Witch's Hut"],
			extraTimes : levels.map(function (n) {
				return (n < 11 ? 0 : n < 13 ? 1 : n < 15 ? 2 : n < 18 ? 3 : 4);
			}),
			"cauldron" : {
				toNotesPage : [{
					name : "Cauldron",
					source : ["MHP-CW", 7],
					popupname : "Cauldron",
					note : [
						"I gain a pool of alchemy points equal to half my witch level, rounded down",
						"I regain these points after a long rest",
						"I can spend 10 minutes and use any number of alchemy points to brew potions",
						"These potions use your spell save DC, and last for 24 hours",
						"I can make the following potions:",
						"\u2022 Potion of Animal Friendship\t\u2015 1 Point",
						"\u2022 Potion of Growth\t\t\u2015 1 Point",
						"\u2022 Potion of Healing\t\t\u2015 1 Point",
						"\u2022 Potion of Water Breathing\t\u2015 1 Point",
						"\u2022 Oil of Slipperiness\t\t\u2015 2 Points",
						"\u2022 Philter of Love\t\t\u2015 2 Points",
						"\u2022 Potion of Greater Healing\t\u2015 2 Points",
						"\u2022 Potion of Heroism\t\t\u2015 2 Points",
						"\u2022 Potion of Resistance\t\u2015 2 Points",
						"\u2022 Potion of Clairvoyance\t\u2015 3 Points",
						"\u2022 Potion of Diminution\t\u2015 3 Points",
						"\u2022 Potion of Gaseous Form\t\u2015 3 Points"
					],
					amendTo : "Grand Hex"
				}],
				limfeaname : "Alchemy Points",
				usages : levels.map(function (n) { return n < 11 ? "" : Math.floor(n/2); }),
				recovery : "long rest"
			},
			"coven" : {
				toNotesPage : [{
					name : "Coven",
					source : ["MHP-CW", 7],
					popupname : "Coven",
					note : [
						"I can induct up to two willing spellcasters into my coven with an 8 hour ritual",
						"This ritual can be done during a long rest",
						"While at least two of your coven are within 30 ft they can cast Coven Spells",
						"The coven has a shared pool of spell slots, one of each level from 1st to 5th",
						"These slots can be used to cast any spell known to the members",
						"These slots are regained after all members finish a long rest",
						"My coven can cast the following spells, in addition to their own:",
						"\u2022 1st\tBane, Hideous Laughter",
						"\u2022 2nd\tInvisibility, Ray of Enfeeblement",
						"\u2022 3rd\tBestow Curse, Counterspell",
						"\u2022 4th\tBanishment, Polymorph",
						"\u2022 5th\tContagion, Scrying"
					],
					amendTo : "Grand Hex"
				}],
				spellcastingBonus : {
					name : "Coven Spells",
					spells : ["bane", "tasha's hideous laughter", "invisibility", "ray of enfeeblement", "bestow curse", "counterspell", "banishment", "polymorph", "contagion", "scrying"],
					selection : ["bane", "tasha's hideous laughter", "invisibility", "ray of enfeeblement", "bestow curse", "counterspell", "banishment", "polymorph", "contagion", "scrying"],
					firstCol : "C",
					times : 10,
				}
			},
			"dual hex" : {
				toNotesPage : [{
					name : "Dual Hex",
					source : ["MHP-CW", 8],
					popupname : "Dual Hex",
					note : [
						"Whenever I cast a hex which targets one creature, I can target two creatures",
						"For these creatures, I can gain the benefits of Insidious Spell against both"
					],
					amendTo : "Grand Hex"
				}],
			},
			"forceful personality" : {
				toNotesPage : [{
					name : "Forceful Personality",
					source : ["MHP-CW", 8],
					popupname : "Forceful Personality",
					note : [
						"My charisma score increases by 2, to a maximum of 22"
					],
					amendTo : "Grand Hex"
				}],
				scores : [0, 0, 0, 0, 0, 2],
				scoresMaximum : [0, 0, 0, 0, 0, 22]
			},
			"hybrid" : {
				toNotesPage : [{
					name : "Hybrid",
					source : ["MHP-CW", 8],
					popupname : "Hybrid",
					note : [
						"As a bonus action, if my familiar is within 5 ft, I can transform into a hybrid",
						"For the next minute I gain the following benefits:",
						"\u2022 I gain temporary hit points equal to my familiar's hit points",
						"\u2022 My Armor Class equals 10 + my Dex mod + my Cha mod without a shield",
						"\u2022 I gain two natural melee weapons, corresponding to my familiar's attacks",
						"\u2022 I am proficient with these, and use Cha for the attack and damage rolls",
						"\u2022 They deal 1d10 bludgeoning, piercing, or slashing, (my choice)",
						"\u2022 I can attack twice when I take the Attack action, instead of once",
						"\u2022 I can use any action my familiar possesses",
						"I can dismiss the transformation on my turn as a free action",
						"When it ends, I can't summon my familiar again until a short rest"
					],
					amendTo : "Grand Hex"
				}],
				action : ["bonus action", "Magical Hybrid"],
				usages : 1,
				recovery : "short rest",
				weaponsAdd : ["Familiar's Fury"],
				weaponOptions : {
					regExpSearch : /^(?=.*familiar)(?=.*fury).*$/i,
					name : "Familiar's Fury",
					source : ["MHP-CW", 8],
					ability : 6,
					type : "Natural",
					damage : [1, 10, "My choice"],
					range : "Melee",
					description : "Only while hybrid, choose between Bludg, Pierc, Slash",
					abilitytodamage : true
				}
			},
			"poison apple" : {
				toNotesPage : [{
					name : "Poison Apple",
					source : ["MHP-CW", 8],
					popupname : "Poison Apple",
					note : [
						"As an action, I can produce a magical apple, the appearance I control",
						"On my turn, I can spend an= action to eat the apple for the following:",
						"\u2022 I regain HP equal to twice my witch level plus my Charisma modifier",
						"\u2022 I regain an expended spell slot of 5th level or lower",
						"\u2022 I can end one of the following conditions on myself:",
						"\tBlinded, deafened, paralyzed, or poisoned",
						"If another creature eats the apple it must make a Wis save with disadv.",
						"On a failed save, the creature is poisoned for 24 hours",
						"For each hour poisoned, they lose 4d8 HP which can't be reduced or avoided",
						"If they would fall to 0 HP, they instead drop to 1 HP and fall unconscious",
						"They remain unconscious for 7 days, or with a remove curse spell",
						"The apple stays magical for 24 hours, I must long rest before creating another"
					],
					amendTo : "Grand Hex"
				}],
				usages : 1,
				recovery : "long rest",
				action : ["action", "Create Poison Apple"]
			},
			"possession" : {
				toNotesPage : [{
					name : "Possession",
					source : ["MHP-CW", 9],
					popupname : "Possession",
					note : [
						"As an action, I attempt to possess a large or smaller creature within 10 ft",
						"The creature makes a Charisma save, if its CR > my witch level it auto succeeds",
						"On a failed save, I disappear and the target is incapacitated",
						"I control its body and can't be targeted by any attack, spell, or effect",
						"I maintain my Int, Wis, and Cha scores and alignment",
						"I use the creature's statistics; except knowledge, class features, and proficiencies",
						"I am treated as an undead spirit and can be banished from the target",
						"If I am banished my body rematerializes within 5 feet and I return to it",
						"This possession lasts for 1 hour, unless the body drops to 0 HP",
						"I can use this ability once per long rest"
					],
					amendTo : "Grand Hex"
				}],
				usages : 1,
				recovery : "long rest",
				action : ["action", "Possess"]
			},
			"war hex" : {
				toNotesPage : [{
					name : "War Hex",
					source : ["MHP-CW", 9],
					popupname : "War Hex",
					note : [
						"When I cast a single target hex, I can use my bonus action to cast a cantrip",
						"This cantrip must target the same creature"
					],
					amendTo : "Grand Hex"
				}],
				action : ["bonus action", "Cast Cantrip (After Hex)"]
			},
			"witch's broom" : {
				toNotesPage : [{
					name : "Witch's Broom",
					source : ["MHP-CW", 9],
					popupname : "Witch's Broom",
					note : [
						"I can use my action to enchant a mundane object to fly",
						"While holding this item with one hand I gain a fly speed of 60 ft",
						"I lose this bonus if I wear medium or heavy armor, or a shield",
						"I can only enchant one object this way at a time",
						"If I target another object, the previous enchantment ends"
					]
				}],
				action : ["action", "Enchant Broom"],
				speed : { fly : { spd : 20, enc : 0} }
			},
			"witch's hut" : {
				toNotesPage : [{
					name : "Witch's Hut",
					source : ["MHP-CW", 9],
					popupname : "Witch's Hut",
					note : [
						"I can perform a 24 hour long ritual to enchant a structure",
						"This structure must fit within a 15 foot cube",
						"I animate it as a Huge object, as per the animate objects spell",
						"The structure rises up on a pair of magical legs and obeys me",
						"The entrance is linked as per the magnificent mansion spell",
						"I can command the structure while inside this extradimension",
						"If the structure is destroyed, creatures inside are ejected",
						"They appear in adjadent unoccupied spaces to the structure",
						"As an action, I can teleport the structure within 60 ft of me",
						"I can only teleport it this way once per long rest",
						"I can repeat the ritual to end the current enchantment and begin a new one"
					]
				}],
				action : ["action", "Teleport Witch's Hut"]
			}
		},
		"hexmaster" : {
			name : "Hexmaster",
			source : ["MHP-CW", 5],
			minlevel : 20,
			description : "\n   " + "Humanoid creatures have disadv. on saves against my hexes"
		}
	}
};


AddSubClass("cursed_witch", "black magic", {
	regExpSearch : /^(((?=.*(black|pain|dark))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*necromancer)).*$/i,
	subname : "Black Magic",
	source : ["MHP-CW", 9],
	features : {
		"subclassfeature3" : {
			name : "Hex: Decay",
			source : ["MHP-CW", 9],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["false life", "inflict wounds", "gentle repose", "magic weapon", "animate dead", "vampiric touch", "blight", "death ward", "cloudkill", "contagion"],
			"decay" : {
				name : "Decay",
				extraname : "Black Magic Hex",
				source : ["MHP-CW", 9],
				description : "\n   " + "As an action, I can force a creature within 60 ft to make a Constitution save" + "\n   " + "On a failed save, they are decaying until the end of my next turn" + "\n   " + "While decaying they take 1d4 Necrotic damage at the start of their turns" + "\n   " + "The target's max HP is reduced that much, and they die if their HP max is reduced to 0",
			},
			autoSelectExtrachoices : [{
				extrachoice : "decay"
			}]
		},
		"subclassfeature6" : {
			name : "Undeath Command",
			source : ["MHP-CW", 10],
			minlevel : 6,
			description : "\n   " + "When I use a bonus action to command my familiar, I can also command an undead I control"
		},
		"subclassfeature10" : {
			name : "Life Tether",
			source : ["MHP-CW", 10],
			minlevel : 10,
			description : "\n   " + "As a reaction, when I take damage from a creature I can see I can damage a sole hex target" + "\n   " + "I take half the damage (rounded down), and the hexed creature takes the rest",
			usages : 1,
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"subclassfeature14" : {
			name : "Black Sacrifice",
			source : ["MHP-CW", 10],
			minlevel : 14,
			description : "\n   " + "As an action, if my familiar is within 10 ft, I can dissolve its bond to the plane" + "\n   " + "Each creature I choose within 20 ft must make a Dex save; 8d10 Necrotic dmg, save halves" + "\n   " + "Their HP max is reduced by the Necrotic dmg taken, and dies if their HP max is reduced to 0" + "\n   " + "I can't summon my familiar again until I finish a long rest",
			usages : 1,
			recovery : "long rest",
			action : ["action", ""]
		}
	}
});

AddSubClass("cursed_witch", "blood magic", {
	regExpSearch : /^((?=.*(blood|crimson|mortality|essense|sacrifice|forbidden))(?=.*magic|artist|hexer|witch|coven|cabal)).*$/i,
	subname : "Blood Magic",
	source : ["MHP-CW", 10],
	features : {
		"subclassfeature3" : {
			name : "Hex: Blood Curse",
			source : ["MHP-CW", 10],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["hellish rebuke", "hollowing curse", "melf's acid arrow", "hold person", "ruby-eye curse", "vampiric touch", "blight", "dominate beast", "cloudkill", "dominate person"],
			"blood curse" : {
				name : "Blood Curse",
				extraname : "Blood Magic Hex",
				source : ["MHP-CW", 10],
				description : "\n   " + "As an action, I can force a creature within 60 ft to make a Constitution save" + "\n   " + "On a failed save, they are blood cursed until the end of my next turn" + "\n   " + "If they have less than half max HP and less than twice my witch level, they drop to 0 HP"
			},
			autoSelectExtrachoices : [{
				extrachoice : "blood curse"
			}]
		},
		"subclassfeature3.1" : {
			name : "Novice Hemomancy",
			source : ["MHP-CW", 10],
			minlevel : 3,
			source : ["MHP-CW", 10],
			description : "\n   " + "I can replace the material components without a gold cost of my spells with a drop of blood"
		},
		"subclassfeature3.2" : {
			name : "Arcane Bloodletting",
			source : ["MHP-CW", 10],
			minlevel : 3,
			description : "\n   " + "I can pay 5 HP to cast a spell with a casting time of an action as a bonus action",
			action : ["bonus action", ""],
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest",
			action : ["bonus action", ""]
		},
		"subclassfeature6" : {
			name : "Deathseeker",
			source : ["MHP-CW", 10],
			minlevel : 6,
			description : "\n   " + "I can detect creas with less than half max HP even if heavily obscured, through some barriers" + "\n   " + "I have advantage to track creatures I or my familiar have damaged",
			vision : [["Deathseeker", 60]]
		},
		"subclassfeature10" : {
			name : "Hemomantic Recovery",
			source : ["MHP-CW", 10],
			minlevel : 10,
			description : "\n   " + "When I finish a short rest, I can spend hit dice to regain spell slots below 6th level:" + "\n   " + "1st - 2 hit dice; 2nd - 3 hit dice; 3rd - 5 hit dice; 4th - 6 hit dice; 5th - 7 hit dice",
		},
		"subclassfeature14" : {
			name : "Sanguine",
			source : ["MHP-CW", 10],
			minlevel : 14,
			description : "\n   " + "When I damage the sole target of my hex with a spell, I can lose HP to deal extra damage",
			additional : "+ 2d8 per 5 HP lost, up to 6d8 Necrotic damage"

		}
	}
});

AddSubClass("cursed_witch", "blue magic", {
	regExpSearch : /^((?=.*(blue|essence|arcana|energy|cerulean|turquoise))(?=.*magic|artist|hexer|witch|coven|cabal|imprinter)).*$/i,
	subname : "Blue Magic",
	source : ["MHP-CW", 11],
	spellcastingKnown : {
		cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
		spells : [2, 3, 8, 9, 12, 13, 16, 17, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
	},
	spellcastingList : {
		class : "any",
	},
	features : {
		"subclassfeature3" : {
			name : "Hex: Arcane Awareness",
			source : ["MHP-CW", 11],
			minlevel : 3,
			additional : "See third page",
			"arcane awareness" : {
				name : "Arcane Awareness",
				extraname : "Blue Magic Hex",
				source : ["MHP-CW", 11],
				description : "\n   " + "As an action I can cast a modified detect magic without using a spell slot" + "\n   " + "While active I can use an action or bns a. to detect if a crea visible w/in 60 ft can cast spells" + "\n   " + "These effects last until the end of my next turn"
			},
			autoSelectExtrachoices : [{
				extrachoice : "arcane awareness"
			}]
		},
		"subclassfeature3.1" : {
			name : "Blue Magic Spells",
			source : ["MHP-CW", 11],
			minlevel : 3,
			description : "\n   " + "I no longer learn new spells upon leveling up, but I can learn any spell" + "\n   " + "When I experience/take part in a spell I can use my reaction to learn that spell" + "\n   " + "As an action I can forget a spell I know",
			action : [["reaction", "Learn Spell"], ["action", "Forget Spell"]],
			additional : levels.map(function(n) {
				return n < 3 ? "" : (n < 5 ? 4 : n < 7 ? 6 : n < 9 ? 8 : 10) + " additional spells known";
			}),
			spellcastingBonus : [{
				name : "Blue Magic Overflow",
				times : [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5],
				class : "any",
				level : [1, 9]
			}]
		},
		"subclassfeature6" : {
			name : "Turquoise Efficiency",
			source : ["MHP-CW", 11],
			minlevel : 6,
			description : "\n   " + "I have adv. on saving throws against spells I know" + "\n   " + "If a succeed on one of these saves, I can regain a spell slot of that level",
			savetxt : { text: ["Adv. on saves against spells I know"] },
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature10" : {
			name : "Copycat",
			source : ["MHP-CW", 11],
			minlevel : 10,
			description : "\n   " + "When I see a crea use a skill with proficiency, I gain that proficiency until my next long rest",
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Cerulean Reflection",
			source : ["MHP-CW", 10],
			minlevel : 14,
			description : "\n   " + "My saves vs. spells negate damage on success and halve it on failure" + "\n   " + "If I pass the save by 10 or more I can use my reaction to recast the spell at the caster",
			action : ["reaction", ""],
			usages : 1,
			recovery : "long rest",
			savetxt : { text: ["Save vs. spell: fail \u2015 half dmg, success \u2015 no dmg"] }
		}
	}
});

AddSubClass("cursed_witch", "fragrant magic", {
	regExpSearch : /^(((?=.*(fragrant|scent|perfume|smoke))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*(aromatherapist))).*$/i,
	subname : "Fragrant Magic",
	source : ["MHP-CW", 11],
	features : {
		"subclassfeature3" : {
			name : "Hex: Fragrant Aura",
			source : ["MHP-CW", 11],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["color spray", "fog cloud", "calm emotions", "enhance ability", "gaseous form", "stinking cloud", "compulsion", "hallucinatory terrain", "cloudkill", "hallow"],
			"fragrant aura" : {
				name : "Fragrant Aura",
				extraname : "Fragrant Magic Hex",
				source : ["MHP-CW", 11],
				description : "\n   " + "As an action I create a 30 ft radius until the end of my next turn, I choose one effect:" + "\n   " + "Creas I choose have adv on Wis checks, saves; fiends, undead have disadv on atks, saves;" + "\n   " + "Creas I choose wake if they have HP; creas get adv. on saves vs. charmed or magical sleep;" + "\n   " + "Creas I choose have disadv. on Con checks and saves"
			},
			autoSelectExtrachoices : [{
				extrachoice : "fragrant aura"
			}]
		},
		"subclassfeature3.1" : {
			name : "Smoke Rings",
			source : ["MHP-CW", 12],
			minlevel : 3,
			description : "\n   " + "Whenever I make smoke, I have full control over the shape before it blows away"
		},
		"subclassfeature6" : {
			name : "Aromatherapy",
			source : ["MHP-CW", 12],
			minlevel : 6,
			description : "\n   " + "I can replace all components (V,S,M) of a spell by burning an equivalent cost of incense"
		},
		"subclassfeature10" : {
			name : "Dizzying Fog",
			source : ["MHP-CW", 12],
			minlevel : 10,
			description : "\n   " + "As an action, I create a heavily obscuring 20 ft radius until the end of my turn" + "\n   " + "Creas I choose must make a Wis save or they have disadv. on atks and Dex saves for 1 min" + "\n   " + "Creas immune to stun are immune; creas can repeat save at end of turn to end effect",
			action : ["action", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Olfactory Aurora",
			source : ["MHP-CW", 12],
			minlevel : 14,
			description : "\n   " + "Friendly creas within 30 ft can add d4 to atks, checks, and saves"
		}
	}
});

AddSubClass("cursed_witch", "gingerbread magic", {
	regExpSearch : /^(((?=.*(gingerbread|cookie|sweet|gumdrop))(?=.*magic|artist|hexer|witch|coven|cabal|baker))|(?=.*confectionist)).*$/i,
	subname : "Gingerbread Magic",
	source : ["MHP-CW", 12],
	features : {
		"subclassfeature3" : {
			name : "Hex: Sweet Tooth",
			source : ["MHP-CW", 12],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["tasha's hideous laughter", "sleep", "arcane lock", "protection from poison", "create food and water", "tiny hut", "confusion", "hallucinatory terrain", "animate objects", "dream"],
            "sweet tooth" : {
                name : "Sweet Tooth",
                extraname : "Gingerbread Magic Hex",
				source : ["MHP-CW", 12],
				description : "\n   " + "As an action, I can touch an unattended nonmagic object that would fit within a 1 ft cube" + "\n   " + "It becomes an edible candy replica until the end of your next turn, unless eaten"
            },
			autoSelectExtrachoices : [{
				extrachoice : "sweet tooth",
				
			}]
		},
		"subclassfeature3.1" : {
			name : "Gingerbread Familiar",
			source : ["MHP-CW", 12],
			minlevel : 3,
			description : "\n   " + "I can choose to make my familiar a gingerbread version, see companion page"
		},
		"subclassfeature6" : {
			name : "Sugar Rush",
			source : ["MHP-CW", 13],
			minlevel : 6,
			description : "\n   " + "As a bonus a. I touch an ally, on their next turn as a bonus a. they can Dash or Disengage",
			action : ["bonus action", ""]
		},
		"subclassfeature10" : {
			name : "Candied Decoy",
			source : ["MHP-CW", 13],
			minlevel : 10,
			description : "\n   " + "As an action I can conjure an identical candy duplicate of myself within 5 ft for 1 min" + "\n   " + "It is a construct with 10 AC, 20 HP, my ability scores, immunity to poison and psychic dmg" + "\n   " + "During my move it can move my walking speed, can't do anything else; at 0 HP it collapses",
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Candy Land",
			source : ["MHP-CW", 13],
			minlevel : 14,
			description : "\n   " + "As an action I can choose a point within 120 ft to create a 30 ft radius of candy" + "\n   " + "For 1 min unattended nonmagical objects, terrain, and structures become edible" + "\n   " + "In the area, at the start of my turn, as long as I have 1 HP, my familiar and I heal 5 HP",
			action : ["action", ""],
			usages : 1,
			recovery : "long rest"
		}
	}
});

AddSubClass("cursed_witch", "green magic", {
	regExpSearch : /^(((?=.*(green|nature|druidic|elder|primal))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*arborist)).*$/i,
	subname : "Green Magic",
	source : ["MHP-CW", 13],
	features : {
		"subclassfeature3" : {
			name : "Hex: Elder Tongue",
			source : ["MHP-CW", 13],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["entangle", "goodberry", "barkskin", "beast sense", "conjure animals", "plant growth", "conjure woodland beings", "stoneskin", "awaken", "tree stride"],
			"elder tongue" : {
				name : "Elder Tongue",
				extraname : "Green Magic Hex",
				source : ["MHP-CW", 13],
				description : "\n   " + "As a bonus action until the end of my next turn I can speak with beasts and plants" + "\n   " + "I gain adv. on all Cha checks to influence beasts and plants",
				action : ["bonus action", " (Hex)"]
			},
            autoSelectExtrachoices : [{
                extrachoice : "elder tongue"
            }]
		},
		"subclassfeature3.1" : {
			name : "Primal Ally",
			source : ["MHP-CW", 14],
			minlevel : 3,
			description : "\n   " + "My familiar gets three times my witch level as max HP instead of two"
		},
		"subclassfeature6" : {
			name : "Twin Familiar",
			source : ["MHP-CW", 14],
			minlevel : 6,
			description : "\n   " + "When I summon my familiar I can summon two identical familiars with shared HP" + "\n   " + "They roll once for initiative; I must command them separately; spells and features affect both"
		},
		"subclassfeature10" : {
			name : "Great Oak",
			source : ["MHP-CW", 14],
			minlevel : 10,
			description : "\n   " + "As an action I can grow a 20 ft tall, 5 ft thick tree at my feet" + "\n   " + "It can't destroy structures, but large or smaller creas can be shoved up into its branches" + "\n   " + "These creatures, if unsuspecting, take 6d6 bludgeoning dmg; Dex save halves",
			action : ["action", ""]
		},
		"subclassfeature14" : {
			name : "Sacrificial Familiar",
			source : ["MHP-CW", 14],
			minlevel : 14,
			description : "\n   " + "When I would be targeted by an attack in melee, if my familiar is within 5 ft" + "\n   " + "I can use my reaction to make my familiar the target instead",
			action : ["reaction", ""],
			usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		}
	}
});

AddSubClass("cursed_witch", "lunar magic", {
	regExpSearch : /^(((?=.*(lunar|moon|tide|dream))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*lunatic)).*$/i,
	subname : "Lunar Magic",
	source : ["MHP-CW", 14],
	features : {
		"subclassfeature3" : {
			name : "Hex: Lunacy",
			source : ["MHP-CW", 14],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["faerie fire", "sleep", "darkvision", "moonbeam", "hypnotic pattern", "nondetection", "confusion", "private sanctum", "dream", "seeming"],
			"lunacy" : {
				name : "Lunacy",
				extraname : "Lunar Magic Hex",
				source : ["MHP-CW", 14],
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Charisma save" + "\n   " + "On a failed save, they suffer a random long term madness effect until the end of my next turn"
			},
			autoSelectExtrachoices : [{
				extrachoice : "lunacy"
			}]
		},
		"subclassfeature6" : {
			name : "Under Cover Of Darkness",
			source : ["MHP-CW", 14],
			minlevel : 6,
			description : "\n   " + "I can Hide as a bonus action in dim light or darkness",
			action : ["bonus action", "Hide (Dim light or darkness)"]
		},
		"subclassfeature10" : {
			name : "Everlasting Night",
			source : ["MHP-CW", 14],
			minlevel : 10,
			description : "\n   " + "As an action I reduce the light level of all areas within 300 ft by one for 10 mins",
			action : ["action", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Moonsight",
			source : ["MHP-CW", 14],
			minlevel : 14,
			description : "\n   " + "I gain truesight out to 60 ft, and see a halo of moonlight around shapechangers",
			vision : [["Truesight", 60]]
		}
	}
});

AddSubClass("cursed_witch", "purple magic", {
	regExpSearch : /^(((?=.*(purple|illusory|enchant|puppet|mind|dream|nightmare))(?=.*magic|artist|hexer|witch|coven|cabal|master))|(?=.*enchanter)).*$/i,
	subname : "Purple Magic",
	source : ["MHP-CW", 13],
	features : {
		"subclassfeature3" : {
			name : "Hex: Hallucination",
			source : ["MHP-CW", 14],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["charm person", "silent image", "enthrall", "invisibility", "hypnotic pattern", "major image", "confusion", "private sanctum", "modify memory", "seeming"],
			"hallucination" : {
				name : "Hallucination",
				extraname : "Purple Magic Hex",
				source : ["MHP-CW", 14],
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Wisdom save" + "\n   " + "Creatures immune to being charmed automatically pass the save" + "\n   " + "On a failed save, they get -1 to atks and checks until the end of my next turn" + "\n   " + "At the start of its turn the penalty increases by 1 to a max of -5"
			},
			autoSelectExtrachoices : [{
				extrachoice : "hallucination"
			}]
		},
		"subclassfeature6" : {
			name : "False Authority",
			source : ["MHP-CW", 15],
			minlevel : 6,
			description : "\n   " + "As an action creas perceive me as a figure of authority for 1 hour or until I end it on my turn" + "\n   " + "As an action they can make an Investigation check to see through my illusion",
			action : ["action", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature10" : {
			name : "Deceitful Transposition",
			source : ["MHP-CW", 15],
			minlevel : 10,
			description : "\n   " + "As a bonus action I can create an illusion for 1 min or until the targets take damage" + "\n   " + "Two creas w/in 60 ft are disguised as each other, including sounds, smells, etc." + "\n   " + "As an action other creas can make an Investigation check to see through both illusions",
			action : ["bonus action", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Waking Nightmare",
			source : ["MHP-CW", 15],
			minlevel : 14,
			description : "\n   " + "A crea affected by my Hallucination sees all creas as enemies for 1 min or until the hex ends" + "\n   " + "It must choose random targets for abilities, attacks and must take opportunity attacks",
			usages : 1,
			recovery : "long rest"
		}
	}
});

AddSubClass("cursed_witch", "red magic", {
	regExpSearch : /^(((?=.*(red|wrath|element))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*elementalist)).*$/i,
	subname : "Red Magic",
	source : ["MHP-CW", 15],
	features : {
		"subclassfeature3" : {
			name : "Hex: Imperil",
			source : ["MHP-CW", 15],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["burning hands", "magic missile", "melf's acid arrow", "scorching ray", "fireball", "protection from energy", "ice storm", "wall of fire", "cone of cold", "telekinesis"],
			"imperil" : {
				name : "Imperil",
				extraname : "Red Magic Hex",
				source : ["MHP-CW", 15],
				description : "\n   " + "As an action, I can force one creature within 60 ft to make a Constitution save" + "\n   " + "On a failed save, they lose resistance to a chosen damage type until the end of my next turn" + "\n   " + "If they have immunity it becomes resistance instead"
			},
            autoSelectExtrachoices : [{
                extrachoice : "imperil"
            }]
		},
		"subclassfeature6" : {
			name : "Convolute Energy",
			source : ["MHP-CW", 14],
			minlevel : 6,
			description : "\n   " + "Whenever I cast a spell that deals acid, cold, fire, lightning, poison, or thunder dmg" + "\n   " + "I can gain resistance to that type until the end of my next turn"
		},
		"subclassfeature10" : {
			name : "Invulnerability",
			source : ["MHP-CW", 14],
			minlevel : 10,
			description : "\n   " + "When hit with an atk I can see I can use my reaction to subtract 50 from the dmg (min 0)",
			action : ["reaction", ""],
			usages : 1,
			recovery : "long rest"
		},
		"subclassfeature14" : {
			name : "Elemental Annihilation",
			source : ["MHP-CW", 14],
			minlevel : 14,
			description : "\n   " + "When I cast a witch spell that deals acid, cold, fire, lightning, or thunder dmg" + "\n   " + "I can expend a spell slot of equal or higher level to deal max dmg",
			usages : 1,
			recovery : "long rest"
		}
	}
});

AddSubClass("cursed_witch", "sky magic", {
	regExpSearch : /^((?=.*(sky|cloud|wind|storm|flight))(?=.*magic|artist|hexer|witch|coven|cabal)).*$/i,
	subname : "Sky Magic",
	source : ["MHP-CW", 15],
	features : {
		"subclassfeature3" : {
			name : "Hex: Light Heels",
			source : ["MHP-CW", 16],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["feather fall", "fog cloud", "gust of wind", "misty step", "call lightning", "fly", "hallucinatory terrain", "ice storm", "cloudkill", "commune with nature"],
			"light heels" : {
				name : "Light Heels",
				extraname : "Sky Magic Hex",
				source : ["MHP-CW", 16],
				description : "\n   " + "As an action, until the end of my next turn I get a fly speed = my speed, I fall on end of move"
			},
			autoSelectExtrachoices : [{
				extrachoice : "light heels"
			}]
		},
		"subclassfeature6" : {
			name : "Corvid Familiar",
			source : ["MHP-CW", 16],
			minlevel : 6,
			description : "\n   " + "I can choose to make my familiar a corvid version, see companion page"
		},
		"subclassfeature10" : {
			name : "Hex: Vortex",
			source : ["MHP-CW", 16],
			minlevel : 10,
			additional : "See third page",
			"vortex" : {
				name : "Vortex",
				extraname : "Sky Magic Hex",
				description : "\n   " + "As an action I create a 5 ft radius of difficult terrain for other creatures" + "\n   " + "This disperses gas and small flying creas and objs, and light projectile atks have disadv."
			},
			autoSelectExtrachoices : [{
				extrachoice : "vortex"
			}]
		},
		"subclassfeature14" : {
			name : "Cloud Dancer",
			source : ["MHP-CW", 16],
			minlevel : 14,
			description : "\n   " + "When hit with an atk, if I am flying, falling or levitating I roll a d4, on a 4 it misses"
		}
	}
});

AddSubClass("cursed_witch", "steel magic", {
	regExpSearch : /^((?=.*(steel|metal|blade|battle))(?=.*magic|artist|hexer|witch|coven|cabal)).*$/i,
	subname : "Steel Magic",
	source : ["MHP-CW", 16],
	features : {
		"subclassfeature3" : {
			name : "Hex: Malevolence",
			source : ["MHP-CW", 17],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["heroism", "shield", "heat metal", "magic weapon", "blink", "haste", "death ward", "freedom of movement", "flame strike", "telekinesis"],
			"malevolence" : {
				name : "Malevolence",
				extraname : "Steel Magic Hex",
				source : ["MHP-CW", 17],
				description : "\n   " + "As a bonus action, I gain the following benefits until the end of my next turn" + "\n   " + "My AC without a shield becomes 12 + Dex mod + Cha mod" + "\n   " + "I can use my Cha mod instead of Str or Dex for atks and dmg of non-Heavy melee weapons" + "\n   " + "If I take damage from a visible creature w/in 5 ft I can use my reaction to atk them once",
				action : ["bonus action", " (Hex)"]
			},
			autoSelectExtrachoices : [{
				extrachoice : "malevolence"
			}]
		},
		"subclassfeature3.1" : {
			name : "Bonus Proficiencies",
			source : ["MHP-CW", 17],
			minlevel : 3,
			description : "\n   " + "I gain proficiency with other weapons as shown on the first page",
			weaponProfs : [false, false, ["battleaxe", "flail", "longsword", "morningstar", "rapier", "scimitar", "trident", "warhammer"]],
		},
		"subclassfeature6" : {
			name : "Cackling Killer",
			source : ["MHP-CW", 17],
			minlevel : 6,
			description : "\n   " + "When I use my Cackle, I can atk twice instead of once when I use the atk action on my turn"
		},
		"subclassfeature10" : {
			name : "Soulsword Familiar",
			source : ["MHP-CW", 17],
			minlevel : 10,
			description : "\n   " + "As a bonus action, I can dismiss my familiar until I finish a short rest " + "\n   " + "My weapon now deals an extra 1d8 fire dmg until I resummon my familiar",
			action : ["bonus action", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Shrieking Strike",
			source : ["MHP-CW", 17],
			minlevel : 14,
			description : "\n   " + "Once per turn, when I hit with an atk I can force the target to make a Wisdom save" + "\n   " + "On a fail they are frightened of me until the end of my next turn",
			usages : "Charisma modifier per",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
			recovery : "long rest"
		}
	}
});

AddSubClass("cursed_witch", "tea magic", {
	regExpSearch : /^(((?=.*(tea|caffiene|drink|calm|herb))(?=.*magic|artist|hexer|witch|coven|cabal))|(?=.*(herbalist|barista))).*$/i,
	subname : "Tea Magic",
	source : ["MHP-CW", 17],
	features : {
		"subclassfeature3" : {
			name : "Hex: Tasseography",
			source : ["MHP-CW", 17],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["tasha's hideous laughter", "sanctuary", "augury", "calm emotions", "clairvoyance", "sending", "divination", "private sanctum", "legend lore", "scrying"],
			"tasseography" : {
				name : "Tasseography",
				extraname : "Tea Magic Hex",
				source : ["MHP-CW", 17],
				description : "\n   " + "As an action I can choose an ally within 60 ft, roll a d20, and record the result" + "\n   " + "Until the end of my next turn, I can replace an atk roll, save, or check with the result" + "\n   " + "This must be done before the roll is made, once I replace a roll this way the hex ends"
			},
            autoSelectExtrachoices : [{
                extrachoice : "tasseography"
            }]
		},
		"subclassfeature3.1" : {
			name : "Tea Ceremony",
			source : ["MHP-CW", 17],
			minlevel : 3,
			description : "\n   " + "My allies and I lose an additional level of exhaustion during a short or long rest"
		},
		"subclassfeature6" : {
			name : "Shapes and Omens",
			source : ["MHP-CW", 17],
			minlevel : 6,
			description : "\n   " + "At the end of a long rest my tea leaves form a shape that hints at future events"
		},
		"subclassfeature10" : {
			name : "Herbal Remeby",
			source : ["MHP-CW", 17],
			minlevel : 10,
			description : "\n   " + "Once per short rest, I can cast greater restoration without a spell slot or material components",
			spellcastingBonus : [{
				spells : ["greater restoration"],
				name : "Herbal Remedy",
				selection : ["greater restoration"],
				firstCol : "oncesr",
			}]
		},
		"subclassfeature14" : {
			name : "Invigorate",
			source : ["MHP-CW", 17],
			minlevel : 14,
			description : "\n   " + "As a bonus action, I can give myself or an ally within 5 ft a rush of energy" + "\n   " + "On their next turn, they can take one additional action",
			usages : 1,
			recovery : "long rest"
		}
	}
});

AddSubClass("cursed_witch", "technicolor magic", {
	regExpSearch : /^((?=.*(technicolor|friend|positivity|positive|animal|companion|music))(?=.*magic|artist|hexer|witch|coven|cabal)).*$/i,
	subname : "Technicolor Magic",
	source : ["MHP-CW", 18],
	features : {
		"subclassfeature3" : {
			name : "Hex: Musical Interlude",
			source : ["MHP-CW", 18],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["color spray", "speak with animals", "animal messenger", "enhance ability", "fly", "speak with plants", "freedom of movement", "locate creature", "animate objects", "telepathic bond"],
			"musical interlude" : {
				name : "Musical Interlude",
				extraname : "Technicolor Magic Hex",
				source : ["MHP-CW", 18],
				description : "\n   " + "As an action, each visible willing crea w/in 30 ft gains temp HP until the end of my next turn" + "\n   " + "This temp HP is equal to my Cha mod + half my witch level (rounded down)"
			},
			autoSelectExtrachoices : [{
				extrachoice : "musical interlude"
			}]
		},
		"subclassfeature3.1" : {
			name : "Animal Friends",
			source : ["MHP-CW", 18],
			minlevel : 3,
			description : "\n   " + "I gain adv. on Animal Handling, can use Cha instead of Wis if the creature is small or smaller" + "\n   " + "If I adopt a beast as a pet, I can store them in an extradimensional space like a familiar",
			advantages : [["Animal Handling", true]],
		},
		"subclassfeature6" : {
			name : "Friendship Bracelet",
			source : ["MHP-CW", 18],
			minlevel : 6,
			description : "\n   " + "As an action I can create a bracelet that grants the following benefits to the wearer:" + "\n   " + "I know their location if on the same plane, my spells always have visibility to them"
		},
		"subclassfeature10" : {
			name : "Positivity",
			source : ["MHP-CW", 18],
			minlevel : 10,
			description : "\n   " + "When attacked by a visible crea, as a rea. my AC increases by the number of allies w/in 5 ft",
			action : ["reaction", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Redemptive Arc",
			source : ["MHP-CW", 18],
			minlevel : 14,
			description : "\n   " + "When a visible enemy is reduced to 0 HP, as a reaction I can make them fall unconcious" + "\n   " + "When they wake they are no longer charmed, cursed, frightened or possessed" + "\n   " + "They lose a Bond or Flaw that would make them hostile towards me",
			action : ["reaction", ""],
			usages : 1,
			recovery : "long rest"
		}
	}
});

AddSubClass("cursed_witch", "white magic", {
	regExpSearch : /^(((?=.*(white|heal|hope|gift))(?=.*magic|artist|hexer|witch|coven|cabal|guardian))|(?=.*guardian)).*$/i,
	subname : "White Magic",
	source : ["MHP-CW", 18],
	features : {
		"subclassfeature3" : {
			name : "Hex: Remedy",
			source : ["MHP-CW", 18],
			minlevel : 3,
			additional : "See third page",
			spellcastingExtra : ["bless", "cure wounds", "lesser restoration", "prayer of healing", "beacon of hope", "revivify", "death ward", "guardian of faith", "hallow", "raise dead"],
			"remedy" : {
				name : "Remedy",
				extraname : "White Magic Hex",
				source : ["MHP-CW", 18],
				description : "\n   " + "As an action a creature within 60 ft heals 1d10 + my witch level HP" + "\n   " + "Each creature can only be affected by this hex once per short rest"
			},
			autoSelectExtrachoices : [{
				extrachoice : "remedy"
			}]
		},
		"subclassfeature6" : {
			name : "Talisman of Protection",
			source : ["MHP-CW", 18],
			minlevel : 6,
			description : "\n   " + "I can spend an hour creating a talisman, which can be done over a short rest" + "\n   " + "I can only have one active talisman at a time; the wearer of the talisman adds d4 to all saves"
		},
		"subclassfeature10" : {
			name : "Benevolent Surge",
			source : ["MHP-CW", 18],
			minlevel : 10,
			description : "\n   " + "When myself, my familiar, or a visible ally within 30 ft takes dmg" + "\n   " + "I can use my reaction to heal them 1d10 + Cha mod HP",
			action : ["reaction", ""],
			usages : 1,
			recovery : "short rest"
		},
		"subclassfeature14" : {
			name : "Witch's Gift",
			source : ["MHP-CW", 18],
			minlevel : 14,
			description : "\n   " + "When I cast a spell or hex that heals HP, the target gains +3 AC until the end of my next turn"
		}
	}
});

CompanionList["witch's familiar"] = {
	name : "Witch's Familiar",
	nameMenu : "Familiar (Cursed Witch class feature)",
	nameTooltip : "the Cursed Witch class feature",
	nameOrigin : "variant of the Find Familiar 1st-level conjuration [ritual] spell",
	source : ["MHP-CW", 4],
	includeCheck : function(sCrea, objCrea, iCreaCR) {
		return (objCrea.companion === "familiar" ? true : !!isDisplay("DCI.Text") && objCrea.companion === "familiar_not_al" ? " (if DM approves)" : objCrea.companion === "witch_adv_familiar" || /^(imp|quasit)$/i.test(sCrea) ? " (level 7 Witch)" : /^(pseudodragon|sprite|homunculus)$/i.test(sCrea));
	},
	action : [
		["action", "Familiar (dismiss/reappear/attack)"],
		["action", "Use familiar's senses"],
		["bonus action", "Familiar attack"]
	],
	notes : [{
		name : "Summon a spirit that serves as a familiar",
			description : [
				"appearing in an unoccupied space within 10 ft",
				"It assumes a chosen form (can change at every casting): see the spell or the class feature",
				"It has the chosen form's statistics, but its type changes from beast to celestial, fey, or fiend",
				"When the familiar drops to 0 hit points, it disappears, leaving behind no physical form",
				"It reappears when I cast this spell again (in a new form if so desired)"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "The familiar acts independently of me",
			description : [
				"but it always obeys my commands",
				"In combat, it rolls its own initiative and acts on its own turn, but it can't attack on its turn"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "While it is within 100 ft of me",
			description : "I can communicate with it telepathically",
			joinString : ", "
		}, {
			name : "As an action, I see/hear what it does",
			description : " (but not with my senses) until the start of my next turn",
			joinString : ""
		}, {
			name : "As an action or bonus action",
			description : [
				"I can command my familar to make one attack with its reaction",
				"My familiar uses my spell attack bonus instead of its attack bonus"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "As an action, I can temporarily dismiss it",
			description : "having it disappear into a pocket dimension",
			joinString : ", "
		}, {
			name : "As an action, while it is temporarily dismissed",
			description : "I can cause it to reappear within 30 ft",
			joinString : ", "
		}, {
			name : "I can't have more than one familiar bonded at a time",
			description : "As an action, I can dismiss it forever",
			joinString : "; "
		}, {
			name : "When I cast a spell",
			description : [
				"if my familiar is within 100 ft, it can use it's reaction to deliver the spell",
				"It acts as if it cast the spell, but it can use my modifiers for any attack rolls the spell requires"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "Improved Familiar (Witch 7, M:CW 5)",
			description : "My familiar's attacks count as magical for the purpose of overcoming resistances and immunities",
			joinString : "\n   ",
			minlevel : 7,
			eval : function(prefix, lvl) {
				for (var i = 1; i <= 3; i++) {
					if (!What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")) continue;
					var sDescrFld = prefix + "Comp.Use.Attack." + i + ".Description";
					if (!/(,|;)? ?counts as magical/i.test(What(sDescrFld))) {
						AddString(sDescrFld, "Counts as magical", "; ");
					};
				}
			},
			removeeval : function(prefix, lvl) {
				for (var i = 1; i <= 3; i++) {
					var sDescrFld = prefix + "Comp.Use.Attack." + i + ".Description";
					var sDescr = What(sDescrFld);
					var rCaM = /(,|;)? ?counts as magical/i;
					if (rCaM.test(sDescr)) Value(sDescrFld, sDescr.replace(rCaM, ''));
				}
			}
	}],
	attributesAdd : {
		header : "Familiar",
		minlevelLinked : ["cursed_witch"],
		features : [{
			name : "Witch's Familiar",
			description : "If dropped to 0 HP, the familiar disappears, leaving behind no physical form. The familiar must obey all commmands of its master."
		}]
	},
	attributesChange : function(sCrea, objCrea) {
		if (objCrea.type.toLowerCase() === "beast") {
			objCrea.type = ["Celestial", "Fey", "Fiend"];
			objCrea.subtype = "";
		};
		for (var i = 0; i < objCrea.attacks.length; i++) {
			var oAtk = objCrea.attacks[i];
			oAtk.useSpellMod = "cursed_witch";
			if (!oAtk.modifiers) {
				oAtk.modifiers = ["", "oProf"];
			} else {
				oAtk.modifiers[1] += "+oProf";
			}
		};
	},
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.cursed_witch) return;
			var creaHp = CurrentCompRace[prefix] && CurrentCompRace[prefix].hp ? CurrentCompRace[prefix].hp : 0;
			var creaName = CurrentCompRace[prefix] && CurrentCompRace[prefix].name ? CurrentCompRace[prefix].name : "the creature";
			var wtchLvl = classes.known.cursed_witch.level;
			var wtchCompHp = ((classes.known.cursed_witch && classes.known.cursed_witch.subclass.indexOf("green magic") !== -1 && wtchLvl > 2) ? 3 * wtchLvl : 2 * wtchLvl);
            var wtchfamStr = "'s normal maximum plus " + ((classes.known.cursed_witch && classes.known.cursed_witch.subclass.indexOf("green magic") !== -1 && wtchLvl > 2) ? "three times" : "twice") + " my witch level ("
			HDobj.alt.push((creaHp + wtchCompHp));
			HDobj.altStr.push(" = " + creaHp + " from " + creaName + wtchfamStr + wtchCompHp + ")");
		},
		setAltHp : true,
	},
	changeeval : function(prefix, lvl) {
		var sNameEntity = "Witch's Familiar";
		var sExplanation = "A witch's familiar adds its master's proficiency bonus (oProf) to its AC, all saving throws, and to the damage of its attacks.";
		// Add oProf to the AC, if not already present
		var sACfld = prefix + "Comp.Use.AC";
		if (lvl[0] === 0 && What(sACfld).indexOf("oProf") === -1) {
				AddToModFld(sACfld, "oProf", false, sNameEntity, sExplanation);
		}
		// Add oProf to all Saving Throws
		var sASfld = prefix + "BlueText.Comp.Use.Ability.All.ST.Bonus";
		if (lvl[0] === 0 && What(sASfld).indexOf("oProf") === -1) {
			AddToModFld(sASfld, "oProf", false, sNameEntity, sExplanation)
		}
	},
};

CompanionList["gingerbread familiar"] = {
	name : "Witch's Familiar (Gingerbread)",
	nameMenu : "Gingerbread Familiar (Gingerbread Magic subclass feature)",
	nameTooltip : "the Gingerbread Magic subclass feature",
	nameOrigin : "variant of the Find Familiar 1st-level conjuration [ritual] spell",
	source : ["MHP-CW", 12],
	includeCheck : function(sCrea, objCrea, iCreaCR) {
		return (objCrea.companion === "familiar" ? true : objCrea.companion === "witch's familiar" ? true : !!isDisplay("DCI.Text") && objCrea.companion === "familiar_not_al" ? " (if DM approves)" : objCrea.companion === "witch_adv_familiar" || /^(imp|quasit)$/i.test(sCrea) ? " (level 7 Witch)" : /^(pseudodragon|sprite|homunculus)$/i.test(sCrea));
	},
	action : [
		["action", "Familiar (dismiss/reappear/attack)"],
		["action", "Use familiar's senses"],
		["bonus action", "Familiar attack"]
	],
	notes : [{
		name : "Summon a spirit that serves as a familiar",
			description : [
				"appearing in an unoccupied space within 10 ft",
				"It assumes a chosen form (can change at every casting): see the spell or the class feature",
				"It has the chosen form's statistics, but its type changes from beast to celestial, fey, or fiend",
				"When the familiar drops to 0 hit points, it disappears, leaving behind no physical form",
				"It reappears when I cast this spell again (in a new form if so desired)"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "The familiar acts independently of me",
			description : [
				"but it always obeys my commands",
				"In combat, it rolls its own initiative and acts on its own turn, but it can't attack on its turn"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "While it is within 100 ft of me",
			description : "I can communicate with it telepathically",
			joinString : ", "
		}, {
			name : "As an action, I see/hear what it does",
			description : " (but not with my senses) until the start of my next turn",
			joinString : ""
		}, {
			name : "As an action or bonus action",
			description : [
				"I can command my familar to make one attack with its reaction",
				"My familiar uses my spell attack bonus instead of its attack bonus"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "As an action, I can temporarily dismiss it",
			description : "having it disappear into a pocket dimension",
			joinString : ", "
		}, {
			name : "As an action, while it is temporarily dismissed",
			description : "I can cause it to reappear within 30 ft",
			joinString : ", "
		}, {
			name : "I can't have more than one familiar bonded at a time",
			description : "As an action, I can dismiss it forever",
			joinString : "; "
		}, {
			name : "When I cast a spell",
			description : [
				"if my familiar is within 100 ft, it can use it's reaction to deliver the spell",
				"It acts as if it cast the spell, but it can use my modifiers for any attack rolls the spell requires"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "Improved Familiar (Witch 7, M:CW 5)",
			description : "My familiar's attacks count as magical for the purpose of overcoming resistances and immunities",
			joinString : "\n   ",
			minlevel : 7,
			eval : function(prefix, lvl) {
				for (var i = 1; i <= 3; i++) {
					if (!What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")) continue;
					var sDescrFld = prefix + "Comp.Use.Attack." + i + ".Description";
					if (!/(,|;)? ?counts as magical/i.test(What(sDescrFld))) {
						AddString(sDescrFld, "Counts as magical", "; ");
					};
				}
			},
			removeeval : function(prefix, lvl) {
				for (var i = 1; i <= 3; i++) {
					var sDescrFld = prefix + "Comp.Use.Attack." + i + ".Description";
					var sDescr = What(sDescrFld);
					var rCaM = /(,|;)? ?counts as magical/i;
					if (rCaM.test(sDescr)) Value(sDescrFld, sDescr.replace(rCaM, ''));
				}
			}
	}],
	attributesAdd : {
		header : "Gingerbread Familiar",
		minlevelLinked : ["cursed_witch"],
		senses : "Blindsight 10 ft",
		features : [{
			name : "Witch's Familiar",
			description : "If dropped to 0 HP, the familiar disappears, leaving behind no physical form. The familiar must obey all commmands of its master."
		}, {
			name : "False Appearance",
			description : "While the familiar remains motionless, it is indistinguishable from a gingerbread construction."
		}],
		traits : [{
			name : "Distracting Aroma",
			description : "Hostile creatures within 5 ft have disadv. on atks against other creatures"
		}]
	},
	attributesChange : function(sCrea, objCrea) {
		if (objCrea.type.toLowerCase() === "beast") {
			objCrea.type = ["Celestial", "Fey", "Fiend"];
			objCrea.subtype = "";
		};
		for (var i = 0; i < objCrea.attacks.length; i++) {
			var oAtk = objCrea.attacks[i];
			oAtk.useSpellMod = "cursed_witch";
			if (!oAtk.modifiers) {
				oAtk.modifiers = ["", "oProf"];
			} else {
				oAtk.modifiers[1] += "+oProf";
			}
		};
	},
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.cursed_witch) return;
			var creaHp = CurrentCompRace[prefix] && CurrentCompRace[prefix].hp ? CurrentCompRace[prefix].hp : 0;
			var creaName = CurrentCompRace[prefix] && CurrentCompRace[prefix].name ? CurrentCompRace[prefix].name : "the creature";
			var wtchLvl = classes.known.cursed_witch.level;
			var wtchCompHp = wtchLvl;
			HDobj.alt.push((creaHp + wtchCompHp));
			HDobj.altStr.push(" = " + creaHp + " from " + creaName + "'s normal maximum plus my witch level (" + wtchCompHp + ")");
		},
		setAltHp : true,
	},
	changeeval : function(prefix, lvl) {
		var sNameEntity = "Witch's Familiar";
			var sExplanation = "A witch's familiar adds its master's proficiency bonus (oProf) to its AC, all saving throws, and to the damage of its attacks.";
			// Add oProf to the AC, if not already present
			var sACfld = prefix + "Comp.Use.AC";
			if (lvl[0] === 0 && What(sACfld).indexOf("oProf") === -1) {
				AddToModFld(sACfld, "oProf", false, sNameEntity, sExplanation);
			}
			// Add oProf to all Saving Throws
			var sASfld = prefix + "BlueText.Comp.Use.Ability.All.ST.Bonus"
			if (lvl[0] === 0 && What(sASfld).indexOf("oProf") === -1) {
				AddToModFld(sASfld, "oProf", false, sNameEntity, sExplanation)
			}
		},
};

CompanionList["corvid familiar"] = {
	name : "Corvid Familiar",
	nameMenu : "Corvid Familiar (Sky Magic subclass feature)",
	nameTooltip : "the Sky Magic subclass feature",
	nameOrigin : "variant of the Find Familiar 1st-level conjuration [ritual] spell",
	source : ["MHP-CW", 4],
	includeCheck : function(sCrea, objCrea, iCreaCR) {
		return (objCrea.companion === "familiar" ? true : objCrea.companion === "witch's familiar" ? true : !!isDisplay("DCI.Text") && objCrea.companion === "familiar_not_al" ? " (if DM approves)" : objCrea.companion === "witch_adv_familiar" || /^(imp|quasit)$/i.test(sCrea) ? " (level 7 Witch)" : /^(pseudodragon|sprite|homunculus)$/i.test(sCrea));
	},
	action : [
		["action", "Familiar (dismiss/reappear/attack)"],
		["action", "Use familiar's senses"],
		["bonus action", "Familiar attack"]
	],
	notes : [{
		name : "Summon a spirit that serves as a familiar",
			description : [
				"appearing in an unoccupied space within 10 ft",
				"It assumes a chosen form (can change at every casting): see the spell or the class feature",
				"It has the chosen form's statistics, but its type changes from beast to celestial, fey, or fiend",
				"When the familiar drops to 0 hit points, it disappears, leaving behind no physical form",
				"It reappears when I cast this spell again (in a new form if so desired)"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "The familiar acts independently of me",
			description : [
				"but it always obeys my commands",
				"In combat, it rolls its own initiative and acts on its own turn, but it can't attack on its turn"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "While it is within 100 ft of me",
			description : "I can communicate with it telepathically",
			joinString : ", "
		}, {
			name : "As an action, I see/hear what it does",
			description : " (but not with my senses) until the start of my next turn",
			joinString : ""
		}, {
			name : "As an action or bonus action",
			description : [
				"I can command my familar to make one attack with its reaction",
				"My familiar uses my spell attack bonus instead of its attack bonus"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "As an action, I can temporarily dismiss it",
			description : "having it disappear into a pocket dimension",
			joinString : ", "
		}, {
			name : "As an action, while it is temporarily dismissed",
			description : "I can cause it to reappear within 30 ft",
			joinString : ", "
		}, {
			name : "I can't have more than one familiar bonded at a time",
			description : "As an action, I can dismiss it forever",
			joinString : "; "
		}, {
			name : "When I cast a spell",
			description : [
				"if my familiar is within 100 ft, it can use it's reaction to deliver the spell",
				"It acts as if it cast the spell, but it can use my modifiers for any attack rolls the spell requires"
			].join("\n   "),
			joinString : ", "
		}, {
			name : "Improved Familiar (Witch 7, M:CW 5)",
			description : "My familiar's attacks count as magical for the purpose of overcoming resistances and immunities",
			joinString : "\n   ",
			minlevel : 7,
			eval : function(prefix, lvl) {
				for (var i = 1; i <= 3; i++) {
					if (!What(prefix + "Comp.Use.Attack." + i + ".Weapon Selection")) continue;
					var sDescrFld = prefix + "Comp.Use.Attack." + i + ".Description";
					if (!/(,|;)? ?counts as magical/i.test(What(sDescrFld))) {
						AddString(sDescrFld, "Counts as magical", "; ");
					};
				}
			},
			removeeval : function(prefix, lvl) {
				for (var i = 1; i <= 3; i++) {
					var sDescrFld = prefix + "Comp.Use.Attack." + i + ".Description";
					var sDescr = What(sDescrFld);
					var rCaM = /(,|;)? ?counts as magical/i;
					if (rCaM.test(sDescr)) Value(sDescrFld, sDescr.replace(rCaM, ''));
				}
			}
	}],
	attributesAdd : {
		header : "Corvid Familiar",
		minlevelLinked : ["cursed_witch"],
        senses : "Adv. on Wis (Perception) checks using sight",
        speed : "fly 50 ft (corvid)",
        languages : "Common",
		features : [{
			name : "Witch's Familiar",
			description : "If dropped to 0 HP, the familiar disappears, leaving behind no physical form. The familiar must obey all commmands of its master."
        }, {
            name : "Aerial Agility",
			description : "While the familiar is flying, it has a +2 bonus to its AC."
		}],
        traits : [{
            name : "Keen Sight",
			description : "The familiar has advantage on Wisdom (Perception) checks that rely on sight."
        }]
	},
	attributesChange : function(sCrea, objCrea) {
		if (objCrea.type.toLowerCase() === "beast") {
			objCrea.type = ["Celestial", "Fey", "Fiend"];
			objCrea.subtype = "";
		};
		for (var i = 0; i < objCrea.attacks.length; i++) {
			var oAtk = objCrea.attacks[i];
			oAtk.useSpellMod = "cursed_witch";
			if (!oAtk.modifiers) {
				oAtk.modifiers = ["", "oProf"];
			} else {
				oAtk.modifiers[1] += "+oProf";
			}
		};
	},
	calcChanges : {
		hp : function (totalHD, HDobj, prefix) {
			if (!classes.known.cursed_witch) return;
			var creaHp = CurrentCompRace[prefix] && CurrentCompRace[prefix].hp ? CurrentCompRace[prefix].hp : 0;
			var creaName = CurrentCompRace[prefix] && CurrentCompRace[prefix].name ? CurrentCompRace[prefix].name : "the creature";
			var wtchLvl = classes.known.cursed_witch.level;
			var wtchCompHp = 2 * wtchLvl;
			HDobj.alt.push((creaHp + wtchCompHp));
			HDobj.altStr.push(" = " + creaHp + " from " + creaName + "'s normal maximum plus my witch level (" + wtchCompHp + ")");
		},
		setAltHp : true,
	},
	changeeval : function(prefix, lvl) {
		var sNameEntity = "Witch's Familiar";
		var sExplanation = "A witch's familiar adds its master's proficiency bonus (oProf) to its AC, all saving throws, and to the damage of its attacks.";
		// Add oProf to the AC, if not already present
		var sACfld = prefix + "Comp.Use.AC";
		if (lvl[0] === 0 && What(sACfld).indexOf("oProf") === -1) {
				AddToModFld(sACfld, "oProf", false, sNameEntity, sExplanation);
		}
		// Add oProf to all Saving Throws
		var sASfld = prefix + "BlueText.Comp.Use.Ability.All.ST.Bonus";
		if (lvl[0] === 0 && What(sASfld).indexOf("oProf") === -1) {
			AddToModFld(sASfld, "oProf", false, sNameEntity, sExplanation)
		}
	},
};


CreatureList["brass dragon wyrmling"] = {
	name : "Brass Dragon Wyrmling",
	nameAlt : ["Dragon, Brass Wyrmling"],
	source : ["MHP-CW", 19],
	size : 3,
	type : "Dragon",
	companion : "witch_adv_familiar",
	alignment : "Chaotic Good",
	ac : 16,
	hp : 16,
	hd : [3, 8],
	speed : "30 ft, burrow 15 ft, fly 60 ft",
	proficiencyBonus : 2,
	challengeRating : "1",
	scores : [15, 10, 13, 10, 11, 13],
	saves : ["", 2, 3, "", 2, 3],
	skills : {
		"Perception" : 4,
		"Stealth" : 2
	},
	senses : "Blindsight 10 ft, darkvision 60 ft",
	passivePerception : 14,
	damage_immunities : "fire",
	languages : "Draconic",
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 10, "piercing"],
		range : "Melee (5 ft)",
		description : "",
	}],
};

CreatureList["death snail"] = {
	name : "Death Snail",
	source : ["MHP-CW", 19],
	size : 5,
	type : "Monstrosity",
	companion : "witch's familiar",
	alignment : "Neutral Evil",
	ac : 14,
	hp : 11,
	hd : [2, 4],
	speed : "10 ft, climb 10 ft",
	proficiencyBonus : 2,
	challengeRating : "1/4",
	scores : [14, 6, 16, 10, 11, 6],
	senses : "Blindsight 30 ft (Blind beyond this radius)",
	passivePerception : 10,
	attacksAction : 1,
	attacks : [{
		name : "Leech",
		ability : 1,
		damage : [1, 4, "piercing"],
		range : "Melee (5 ft)",
		description : "+1d8 Poison dmg; DC 13 Con save or poisoned 1 min; repeat save at end of turn",
		tooltip : "The attack deals an additional 1d8 Poison damage; The target hit must succeed on a DC 13 Constitution saving throw or become poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."
	}],
};

CreatureList["flying book"] = {
	name : "Flying Book",
	source : ["MHP-CW", 19],
	size : 5,
	type : "Construct",
	companion : "witch's familiar",
	alignment : "Unaligned",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "0 ft, fly 30 ft (hover)",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [3, 15, 11, 1, 4, 1],
	senses : "Blindsight 60 ft (Blind beyond this radius)",
	passivePerception : 7,
	damage_immunities : "poison, psychic",
	damage_vulnerabilities : "fire",
	condition_immunities : "blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned",
	attacksAction : 1,
	attacks : [{
		name : "Slam",
		ability : 2,
		damage : [1, "", "bludgeoning"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["Str", ""],
		abilitytodamage : false
	}],
	traits : [{
		name : "Antimagic Susceptibility",
		description : "The flying book is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the flying books must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute.",
	}],
	features : [{
		name : "False Appearance",
		description : "While the flying book remains motionless, it is indistinguishable from a normal book.",
	}]
};

CreatureList["fright"] = {
	name : "Fright",
	source : ["MHP-CW", 20],
	size : 4,
	type : "Undead",
	companion : "witch_adv_familiar",
	alignment : "Chaotic Neutral",
	ac : 12,
	hp : 14,
	hd : [4, 6],
	speed : "0 ft, fly 40 ft (hover)",
	proficiencyBonus : 2,
	challengeRating : "1",
	scores : [1, 14, 10, 10, 9, 13],
	senses : "Darkvision 60 ft",
	passivePerception : 9,
	languages : "Understands all languages it knew in life but can't speak",
	damage_immunities : "poison",
	damage_resistances : "acid; cold; fire; lightning; necrotic; thunder; bludgeoning, piercing, and slashing from nonmagical weapons",
	condition_immunities : "charmed, exhaustion, grappled, paralyzed, petrified, poisoned, prone, restrained, unconcious",
	attacksAction : 1,
	attacks : [{
		name : "Life Drain",
		ability : 2,
		damage : [2, 8, "necrotic"],
		range : "Melee (5 ft)",
		description : "DC 10 Con Save or HP max reduced by damage taken until LR; dies if reduced to 0 max HP",
		tooltip : "The target must succeed on a DC 10 Constituion saving throw or its hit points maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0",
		abilitytodamage : false
	}],
	traits : [{
		name : "Incorporeal Movement",
		description : "The fright can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.",
	}]
};

CreatureList["grep"] = {
	name : "Grep",
	source : ["MHP-CW", 20],
	size : 5,
	type : "Monstrosity",
	companion : "witch_adv_familiar",
	alignment : "Neutral",
	ac : 15,
	hp : 19,
	hd : [6, 4],
	speed : "15 ft, fly 50 ft",
	proficiencyBonus : 2,
	challengeRating : "1",
	scores : [3, 18, 13, 13, 15, 10],
	skills : {
		"Perception" : 4,
		"Sleight of Hand" : 6,
		"Stealth" : 6
	},
	senses : "Darkvision 60 ft, Adv. on Wis (Perception) checks using hearing or smell",
	passivePerception : 12,
	languages : "Understands Common and Undercommon but can't speak",
	condition_immunities : "poisoned",
	attacksAction : 1,
	attacks : [{
		name : "Claw",
		ability : 2,
		damage : [1, 4, "slashing"],
		range : "Melee (5 ft)",
		description : ""
	}],
	traits : [{
		name : "Ambusher",
		description : "The grep has advantage on attack rolls against any creature it has surprised.",
	}, {
		name : "Keen Hearing and Smell",
		description : "The grep has advantage on Wisdom (Perception) checks that rely on hearing or smell.",
	}, {
		name : "Mimicry",
		description : "The grep can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check.",
	}],
};

CreatureList["mock"] = {
	name : "Mock",
	source : ["MHP-CW", 22],
	size : 5,
	type : "Monstrosity",
	subtype : "Shapechanger",
	companion : "witch's familiar",
	alignment : "Neutral",
	ac : 11,
	hp : 9,
	hd : [2, 4],
	speed : "15 ft",
	proficiencyBonus : 2,
	challengeRating : "1/2",
	scores : [9, 11, 14, 4, 13, 6],
	skills : {
		"Stealth" : 4
	},
	senses : "Darkvision 60 ft",
	passivePerception : 11,
	damage_resistances : "acid",
	condition_immunities : "prone",
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 1,
		damage : [1, 6, "piercing"],
		range : "Melee (5 ft)",
		description : "+1d6 Acid damage; Can trigger Adhesive"
	}],
	traits : [{
		name : "Shapechanger",
		description : "The mimic can use its action to polymorph into an object or back into its true, amorphous form. It can only take the appearance of Tiny objects and prefers the form of gold coins and jewels. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.",
	}, {
		name : "Adhesive (Object Form Only)",
		description : "The mimic adheres to anything that touches it. A creature which picks up the mimic can't drop it unless it succeeds a DC 9 Strength check, made with disadvantage. The mimic can only adhere to one creature at a time. The mimic has advantage on attack rolls against any creature adhered to it.",
	}],
	features : [{
		name : "False Appearance (Object Form Only)",
		description : "While the mimic remains motionless, it is indistinguishable from an ordinary object.",
	}]
};

CreatureList["moon jelly"] = {
	name : "Moon Jelly",
	source : ["MHP-CW", 22],
	size : 5,
	type : "Beast",
	companion : "witch's familiar",
	alignment : "Unaligned",
	ac : 11,
	hp : 1,
	hd : [1, 4],
	speed : "0 ft, swim 25 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [1, 13, 8, 2, 11, 3],
	senses : "Darkvision 60 ft",
	passivePerception : 10,
	attacksAction : 1,
	traits : [{
		name : "Bioluminescense",
		description : "The moon jelly sheds dim light in a 10 ft radius.",
	}, {
		name : "Water Breathing",
		description : "The moon jelly can only breathe underwater.",
	}]
};

CreatureList["pet rock"] = {
	name : "Pet Rock",
	source : ["MHP-CW", 22],
	size : 5,
	type : "Elemental",
	companion : "witch's familiar",
	alignment : "Unaligned",
	ac : 15,
	hp : 5,
	hd : [1, 4],
	speed : "0 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [1, 1, 16, 1, 5, 1],
	passivePerception : 5,
	damage_vulnerabilities : "thunder",
	damage_immunities : "necrotic; poison; psychic",
	damage_resistances : "fire; lightning; radiant; bludgeoning, piercing, and slashing from nonmagical weapons",
	condition_immunities : "charmed, exhausted, frightened, paralyzed, petrified, poisoned, prone, unconscious",
	attacksAction : 1,
	traits : [{
		name : "Just a Rock",
		description : "The pet rock counts as an object for the purposes of spells and magical effects. Additionally, the rock cannot take actions that are not specified in its statistics.",
	}],
	features : [{
		name : "False Appearance",
		description : "The pet rock is indistinguishable from an ordinary rock with a face drawn on it.",
	}]
};

CreatureList["rag doll"] = {
	name : "Rag Doll",
	source : ["MHP-CW", 24],
	size : 5,
	type : "Construct",
	companion : "witch's familiar",
	alignment : "Neutral Good",
	ac : 11,
	hp : 2,
	hd : [1, 4],
	speed : "20 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [4, 12, 10, 3, 5, 16],
	senses : "Darkvision 60 ft",
	passivePerception : 7,
	skills : {
		"Persuasion" : 5,
		"Stealth" : 5
	},
	damage_vulnerabilities : "fire",
	damage_immunities : "poison; bludgeoning from nonmagical weapons",
	attacksAction : 1,
	attacks : [{
		name : "Headbutt",
		ability : 2,
		damage : [1, "", "bludgeoning"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["Str", ""],
		abilitytodamage : false
	}],
	traits : [{
		name : "Mimicry",
		description : "The rag doll can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.",
	}],
	features : [{
		name : "False Appearance",
		description : "While the rag doll remains motionless, it is indistinguishable from a normal stuffed toy.",
	}]
};

CreatureList["tin soldier"] = {
	name : "Tin Soldier",
	source : ["MHP-CW", 25],
	size : 5,
	type : "Construct",
	companion : "witch's familiar",
	alignment : "Lawful Neutral",
	ac : 14,
	hp : 3,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [7, 12, 12, 5, 10, 10],
	senses : "Darkvision 60 ft",
	passivePerception : 12,
	skills : {
		"Perception" : 2
	},
	damage_immunities : "poison",
	attacksAction : 1,
	attacks : [{
		name : "Bayonet",
		ability : 1,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		abilitytodamage : false
	}, {
		name : "Rifle (Recharge 6)",
		ability : 2,
		damage : [1, 4, "piercing"],
		range : "20/60 ft",
		description : "",
		abilitytodamage : false
	}],
	traits : [{
		name : "Formation",
		description : "The tin soldier has advantage on attack rolls when it is within 5 feet of another tin soldier.",
	}],
	features : [{
		name : "False Appearance",
		description : "While the tin soldier remains motionless, it is indistinguishable from a normal toy.",
	}]
};

CreatureList["winter wolf pup"] = {
	name : "Winter Wolf Pup",
	source : ["MHP-CW", 25],
	size : 5,
	type : "Monstrosity",
	companion : "witch's familiar",
	alignment : "Neutral Evil",
	ac : 13,
	hp : 2,
	hd : [1, 4],
	speed : "45 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [5, 12, 11, 4, 12, 7],
	passivePerception : 13,
	skills : {
		"Perception" : 3,
		"Stealth" : 3
	},
	damage_resistances : "cold",
	attacksAction : 1,
	attacks : [{
		name : "Bite",
		ability : 2,
		damage : [1, "", "piercing"],
		range : "Melee (5 ft)",
		description : "",
		modifiers : ["Str", ""],
		abilitytodamage : false
	}],
	traits : [{
		name : "Snow Camouflage",
		description : "The pup has advantage on Dexterity (Stealth) checks made to hide in snowy terrain.",
	}],
};

CreatureList["yarn golem"] = {
	name : "Yarn Golem",
	source : ["MHP-CW", 25],
	size : 5,
	type : "Construct",
	companion : "witch's familiar",
	alignment : "Chaotic Neutral",
	ac : 12,
	hp : 2,
	hd : [1, 4],
	speed : "30 ft",
	proficiencyBonus : 2,
	challengeRating : "0",
	scores : [8, 15, 10, 1, 10, 8],
	passivePerception : 10,
	damage_resistances : "piercing",
	attacksAction : 1,
	attacks : [{
		name : "Tangle",
		ability : 2,
		damage : [0, "", ""],
		range : "Melee (5 ft)",
		description : "The target is restrained (escape DC 12)",
		abilitytodamage : false,
		modifiers : ["", "None"]
	}],
	traits : [{
		name : "Mutable Form",
		description : "Whenever a spell or effect would alter the golem's form, the effect works as normal, except that the new form is always made out of a tangle of yarn.",
	}],
	features : [{
		name : "False Appearance",
		description : "While the golem remains motionless, it is indistinguishable from a normal ball of yarn.",
	}]
};



SpellsList["accursed act"] = {
	name : "Accursed Act",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 27],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Incense and a black candle",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea save or cursed; save at end of turn; take 1d8+1d8/SL+SC mod Psychic dmg if they atk or cast spell",
	descriptionFull: "Lighting a candle, you speak dark curses in a lost tongue, directed at one creature you can see within range. That creature must make a Wisdom saving throw or be cursed for the duration. While cursed, whenever that creature takes the Attack or Cast a Spell action, it takes psychic damage equal to 1d8 + your spellcasting modifier. The creature can repeat their saving throw at the end of their turn, ending the effect on a success" + "\n   " + "A remove curse spell ends this curse early." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd-level or higher, you deal an additional 1d8 psychic damage for each slot level above 1st."
};

SpellsList["candyblast"] = {
	name : "Candyblast",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 27],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell attack for 1d8 Bludgeoning dmg; 5 ft square becomes difficult terrain; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "Spell attack for `CD`d10 Bludgeoning dmg; 5 ft square becomes difficult terrain",
	descriptionFull: "You summon a handful of hard candy - boiled sweets, mints, jelly beans, etc. - and hurl them at a target you can see within range. Make a ranged spell attack roll. On a hit, the target takes 1d8 bludgeoning damage, and the space it is standing in, up to a 5-foot square, becomes difficult terrain until a creature uses an action to gather up the fallen candy. The candy produced by this spell is edible, but has no nutritional value." + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

SpellsList["corruption curse"] = {
	name : "Corruption Curse",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 27],
	level : 6,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 hr",
	description : "1 crea: disadv to Dex checks, saves; disadv to Con saves, can't regain HP; or disadv to Wis saves, spell atks", // needs length check
	descriptionFull: "With a piercing glare and sinister gesture, you send a ribbon of dark magic into a target's body. A creature you can see within range is cursed for the duration and suffers from one of the following effects of your choice while cursed:" + "\n\n" + toUni("Dull Reflexes") + ": The target has disadvantage on Dexterity checks and saving throws." + "\n\n" + toUni("Feeble Fortitude") + ": The target has disadvantage on Constitution saves and can't regain hit points." + "\n\n" + toUni("Weak Will") + ": The target has disadvantage on Wisdom saving throws as well as spell attack rolls." + "\n\n   " + "A remove curse spell ends this curse early."
};

SpellsList["curse of aging"] = {
	name : "Curse of Aging",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 27],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Touch", // Inconsistent Spell Description
	components : "V,S",
	duration : "Until dispelled",
	save : "Wis",
	description : "1 crea save or cursed; ages twice as fast, disadv on Str saves and checks",
	descriptionFull: "A creature you touch must succeed on a Wisdom saving throw or become cursed to age and wither. While cursed, the target ages at twice their normal rate, becoming two days older for every day that passes. In addition, it has disadvantage on all Strength checks and saving throws." + "\n   " + "A remove curse spell ends this curse."
};

SpellsList["curse of binding"] = {
	name : "Curse of Binding",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 28],
	level : 7,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A body part from the intended target, such as a fingernail, a lock of hair, or a drop of blood",
	duration : "Until dispelled",
	save : "Cha",
	description : "Crea/obj save or bound to loc; start turn > 20 ft from loc, Str save or dragged 60 ft; teleport may fail",
	descriptionFull: "You bind one creature or object to a location, cursing it so that it may never leave. Choose a target and a location within range, both of which you must be able to see. If the target is a creature, it must make a Charisma saving throw (a willing creature may choose to fail this save), or be cursed to be permanently bound to the chosen location. While cursed, the target can act and move around freely, as long as it remains within 20 feet of the point it is bound to. If the target begins its turn outside of this area, it must make a Strength saving throw against your spell save DC or be dragged 60 feet towards the point it was bound to." + "\n   " + "In addition, if the creature attempts to teleport or use any other means of extraplanar travel, it must make another Charisma saving throw. On a failure, the travel attempt fails and any resources used are wasted. On a success, the curse is suppressed until the creature returns to the plane on which is was bound, at which point the dragging effect resumes." + "\n   " + "A remove curse spell ends this curse."
};

SpellsList["curse of blades"] = {
	name : "Curse of Blades",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 28],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea w/ weapon save or cursed; can't drop or stow weapon; makes one extra atk on itself in atk action",
	descriptionFull: "Unholy bands of black energy tie a creature to its weapon. Choose a creature you can see that is holding a weapon within range to make a Wisdom saving throw. On a failed save, the creature is cursed for the duration. A cursed target can't willingly drop or stow its weapon. Additionally, whenever it takes the Attack action on its turn, it makes one additional attack using its weapon targetting itself, against its own AC, dealing damage as normal on a hit" + "\n   " + "A remove curse spell ends this curse early."
};

SpellsList["curse of chains"] = {
	name : "Curse of Chains",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 28],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "2 creas w/in 30 ft save or cursed; can't move away from each other; if 1 crea cursed can curse other crea",
	descriptionFull: "A black brand resembling iron shackles darkens the ankles of two creatures you can see. Choose two creatures you can see within range of the spell and within 30 feet of each other to make a Constitution saving throw. A willing creature can choose to fail this saving throw. On a failed save, a target is cursed for the duration. If only one target is cursed by this spell, you can use your action or bonus action on a subsequent turn to choose another target within 30 feet of the cursed creature to make a saving throw. While two creatures are cursed by this spell, they are unable to willingly move further away from each other." + "\n   " + "A remove curse spell ends this curse early."
};

SpellsList["curse of tomes"] = {
	name : "Curse of Tomes",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 28],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "24 hrs",
	save : "Wis",
	description : "1 crea save or cursed; save/hr; can't read, write, prepare from spellbook, cast rituals or spells w/ writing",
	descriptionFull: "You speak the backward words of a dead language, scrambling the letters in a target's mind. Choose one creature within range to make a Wisdom saving throw. On a failed save, the target is cursed for the duration. A cursed target can't read or write any language for the duration, prepare spells from a spellbook, perform rituals, or cast any spells that involve writing runes or sigils. At the end of each hour, the target can repeat this save, ending the effects early on a success." + "\n   " + "A remove curse spell ends this curse early."
};

SpellsList["curse ward"] = {
	name : "Curse Ward",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 28],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 hr",
	description : "1 willing crea; resist necrotic dmg, can't be cursed, possessed, targetted by hex; max HP can't be lowered",
	descriptionFull: "You reach out your hand and touch a willing target within your reach, raising a smoke-like barrier around it. For the duration, the target has resistance to necrotic damage and can't be cursed, possessed, or targeted by a hex. Also its maximum hit points can't be lowered. If the target is already affected by one of these effects, the effect is suspended until the spell ends."
};

SpellsList["curse weapon"] = {
	name : "Curse Weapon",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 28],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Until dispelled",
	description : "1 weapon becomes cursed; becomes magical and gains a curse property; see book or description",
	descriptionFull: "You touch a weapon. Until the spell ends, the weapon becomes magical (if it wasn't already) and gains the following property in addition to any others it has:" + "\n\n" + toUni("Curse") + ": This weapon is cursed, and touching it extends this curse to you, unless you are a fey creature, in which case you suffer no ill effect. As long as you remain cursed, you are unwilling to part with the weapon, keeping it within reach at all times." + "\n   " + "Whenever you roll a 1 on an attack roll with this weapon, roll a d6 and apply the result from the table below" + "\n\n" + [
		toUni("d6\tEffect"),
		"1\tYou fall prone and your turn ends immediately.",
		"2\tYou are blinded until the end of your next turn.",
		"3\tYou are deafened until the end of your next turn.",
		"4\tYou are immediately teleported 20 feet in a random direction. If you would end up within a solid obstacle, you take 2d6 bludgeoning damage and end up as close to the destination as possible.", // May need formatting help
		"5\tAll food items within ten feet of you immediately spoil, becoming completely inedible.",
		"6\tThe weapon transforms into a live goose (or another animal chosen ny the GM), which is magically bound to your hand and cannot be removed by any means (except by ending the curse). It reverts to its original form after one minute",
	].join("\n") + "\n" + "A remove curse spell ends this curse."
};

SpellsList["demand"] = {
	name : "Demand",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 29],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "Unlimited",
	components : "V,S,M",
	compMaterial : "A snake's tongue and a piece of copper wire",
	duration : "Conc, 8 hrs",
	save : "Wis",
	description : "Send 25-word msg to crea you know; crea can answer; can attempt to compell them, save negates",
	descriptionFull: "You send a short message of twenty-five words or fewer to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message." + "\n   " + "You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn't arrive." + "\n   " + "You can use this message to suggest a reasonable-sounding course of activity to the target, in which case the target must make a Wisdom saving throw or be compelled to follow your instructions for the duration, as per the suggestion spell."
};

SpellsList["eldritch orb"] = {
	name : "Eldritch Orb",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 29],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Spell attack for 1d8 Force dmg; other creas w/in 5 ft save or take half dmg; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "Spell attack for `CD`d8 Force dmg; other creas w/in 5 ft save or take half dmg",
	descriptionFull: "You fling a ball of eldritch energy at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d8 force damage, and each other creature within 5 feet of the target must make a Dexterity saving throw. On a failed save, a creature takes half as much damage" + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

SpellsList["elemental curse"] = {
	name : "Elemental Curse",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 29],
	level : 6,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "1 crea save or cursed; weaker to Acid, Cold, Fire, Lightning, Poison, or Thunder dmg",
	descriptionFull: "A spark leaps from your finger to a creature you touch, spreading in bright cracks across its skin. The target must make a Constitution saving throw or be cursed for the duration. While cursed the target has vulnerability to your choice of acid, cold, fire, lightning, or thunder damage. If the creature has resistance to the chosen damage type, it instead only loses that resistance. If the taget has immunity to the chosen damage type, it is treated as having only resistance to that damage." + "\n   " + "A remove curse spell also ends this curse early."
};

SpellsList["face swap"] = {
	name : "Face Swap",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 29],
	ritual : true,
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A shrunken head",
	duration : "1 hr",
	description : "1 crea or beast is marked; use action to swap faces with the crea; gain basic senses and control when swapped",
	descriptionFull: "You place an invisible mark a Large or smaller beast or a willing humanoid you can see within 60 feet with a special sigil. This sigil lasts for 1 hour, or until you mark another creature." + "\n   " + "For the duration of the spell, you can use your action to trade faces with the marked creature. For the next minute, or until the target dies or you choose to end this spell on your turn (no action required), you are deaf and blind with regard to your own senses, and you cannot move, as your own body has a foreign face. During that time, your face replaces that of the marked creature, and you can see through its eyes, hear what it hears, and speak to those nearby. You gain none of the target's special senses. You can also control where the target moves, but you can't compel it to move into an obviously deadly hazard."
};

SpellsList["flawed reconstruction"] = {
	name : "Flawed Reconstruction",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 29],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A needle and thread",
	duration : "Instantaneous",
	description : "1 willing creature heals 4d6+1d6/SL HP; loses that much max HP until long rest; gain permanent scars",
	descriptionFull: "You stitch together the wounds of a willing creature you touch, which regains 4d6 hit points. However, the mending is imperfect, and the target's maximum hit points is decreased by the same amount until it finishes a long rest. A creature that regains hit points due to this spell will be left with some permanent scars." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d6 for each slot level above 1st."
};

SpellsList["frenzy"] = {
	name : "Frenzy",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 30],
	level : 6,
	school : "Ench",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M",
	compMaterial : "A drop of fresh blood",
	duration : "Conc, 1 min",
	description : "Creas in 20 ft rad save or frenzied; save at end of turn; must attack crea in reach, if none then hits itself",
	descriptionFull: "With a gesture, you reduce a crowd to base instinct and violence. Choose a point you can see within range. Each creature within 20 feet of that point must make a Wisdom saving throw. On a failed save, a creature is frenzied for the duration" + "\n   " + "When a creature is frenzied, it draws a melee weapon, if it has one. If it does not have a melee weapon, the creature must use an improvised weapon or unarmed strikes for attacks" + "\n   " + "A frenzied creature must use its action at the beginning of its turn to attack a creature within its reach. It uses a melee weapon, if it has one, or an improvised weapon or unarmed strike, if it does not. If multiple targets are within the creature's reach, it chooses its target randomly. If there is no target within the creature's reach, it attacks itself, and automatically succeeds such an attack roll." + "\n   " + "At the end of its turn, a frenzied creature can repeat its saving throw, ending the effect on it early on a success."
};

SpellsList["hocuspocus"] = {
	name : "Hocuspocus",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 30],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "1 min",
	description : "Minor effect; flicker flames, quiet sound, glowing orbs, chill/warm 10-ft cube, rattle/levitate small objects",
	descriptionFull: "You conjure minor paranormal phenomena and other ominous effects. You create one of the following magical effects within range for 1 minute:" + "\n\n " + "\u2022 You cause all candles, torches, and other open flames to darken and flicker." + "\n " + "\u2022 You create a quiet sound that originates from a point of your choice within range, such as  ominous whispers, the drone of insects, or the sound of crying" + "\n " + "\u2022 You create up to four torch-sized spectral, glowing orbs, which float around within range. The orbs do not provide light, apart from a dim glow." + "\n " + "\u2022 You can chill or warm the air in a 10-foot cube by 10 degrees." + "\n   " + "\u2022 Cause small, unattended objects to rattle or levitate an inch off the ground." + "\n\n" + "If you cast this spell multiple times, you can have up to three of its effects active at a time, and you can dismiss such an effect as an action."
};

SpellsList["hollowing curse"] = {
	name : "Hollowing Curse",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 30],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "1 crea save or take 1d12+1d12/SL Necrotic dmg and cursed; use action to deal 1d12 Necrotic dmg or curse ends",
	descriptionFull: "Tendrils of black mist extend from your fingertips, latching onto a creature and draining its vitality. Choose a creature you can see within range to make a Dexterity saving throw. On a failed save, the target takes 1d12 necrotic damage and is cursed for up to one minute. While the target is cursed, you can use your action to deal 1d12 necrotic damage to it automatically. The curse ends early if you use your action to do anything else, or if the target is ever outside the spell's range or if it has total cover from you." + "\n   " + "A remove curse spell also ends this curse" + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st."
};

SpellsList["identity curse"] = {
	name : "Identity Curse",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 30],
	level : 9,
	school : "Ench",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Until dispelled",
	save : "Wis",
	description : "1 crea save or cursed; falls unconscious for 1 hr; forgets name and memories; retains stats",
	descriptionFull: "You extend a finger to a creature's temple, who then forgets its own name. Choose one creature you can touch to make a Wisdom saving throw. On a failed save, the target falls unconscious for 1 hour and is cursed to forget its identity. When the target awakes, it loses all its personal memories, though the target retains all of its general knowledge, proficiencies, and other statistics. The target will not realize it has any class features or special abilities, and so does not willingly make use of them. If left to its own devices, the target will quickly adopt a new name and begin to build a new identity." + "\n   " + "A remove curse spell ends this curse. When this curse ends, the target regains all its past memories."
};

SpellsList["intrusive thought"] = {
	name : "Intrusive Thought",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 30],
	level : 2,
	school : "Trans",
	time : "1 rea",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "When crea takes Attack, Dash, Dodge, Disengage must save or take action of your choice instead",
	descriptionFull: "As a reaction when a creature you can see within range takes the Attack, Dash, Dodge, or Disengage action, you can attempt to distort its thinking. The target makes a Wisdom saving throw. On a failed save, the creature instead takes your choice of those actions."
};

SpellsList["minor lifesteal"] = {
	name : "Minor Lifesteal",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 31],
	level : 0,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea save or take 1d4 Necrotic damage; gain temp HP equal to that amount; +1d4 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea save or take `CD`d4 Necrotic damage; gain temp HP equal to that amount",
	descriptionFull: "You drain life energy from a creature you can see within range. The target must succeed on a Constitution saving throw or take 1d4 necrotic damage. You then gain temporary hit points equal to the amount of damage dealt. This spell has no effect on undead or constructs." + "\n   " + "This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
};

SpellsList["pharaoh's curse"] = {
	name : "Pharaoh's Curse",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 31],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Until dispelled",
	description : "1 crea save or cursed with mummy rot; can't regain HP; HP max decreases over time until they die",
	descriptionFull: "Opening your palm, you release a puff of dust, the pestilence of mummy rot. Choose one creature within range to make a Constitution saving throw. On a failed save, the target is cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust." + "\n   " + "The curse lasts until removed by the remove curse spell or any other spell or magical effect that cures mummy rot."
};

SpellsList["prehensile hair"] = {
	name : "Prehensile Hair",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 31],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A braided rope",
	duration : "1 hr",
	description : "Can use hair to interact with objects up to 10 ft away; cast Touch spells with hair up to 10 ft away",
	descriptionFull: "You grow unduly long and tough hair (even from your eyebrows) which you can manipulate at will. You can use your hair to perform simple tasks within 10 feet of you, such as manipulating an object, opening an unlocked door or container, stowing or retrieving an item from an open computer, or pouring the contents out of a vial. You can cast spells with a range of Touch using your hair, out to a range of 10 feet. Your hair returns to its normal length when this spell ends."
};

SpellsList["protect threshold"] = {
	name : "Protect Threshold",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 32],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	duration : "1 min",
	save : "Wis",
	description : "Ward entry; crea attempts to pass through must save or take 4d6+1d6/SL Psychic dmg; save halves",
	descriptionFull: "Tracing arcane sigils along its boundary, you can ward a doorway, window, or other portal from entry. For the duration, an invisible eldritch creature stalks the warded portal. Any creature that attempts to pass through the portal must make a Wisdom saving throw or take 4d6 psychic damage, or half as much on a successful save." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};

SpellsList["psychedelics"] = {
	name : "Psychedelics",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 32],
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "Self (60 ft rad)",
	components : "V,S,M",
	compMaterial : "A mushroom",
	duration : "1 hr",
	save : "Dex",
	description : "Chosen creas/objs change color randomly; those creas save or disadv on atk rolls until end of their next turn",
	descriptionFull: "For a moment, the colors around you shift in a rainbow swirl, before coming to rest far from their original hues. The colors of all creatures and objects you choose within range change randomly and remain brightly and unnaturally colored for the duration. Additionally, each affected creature you choose must make a Dexterity saving throw. On a failed save, a creature has disadvantage on attack rolls until the end of its next turn."
};

SpellsList["restore youth"] = {
	name : "Restore Youth",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 32],
	level : 3,
	school : "Trans",
	time : "8 hrs",
	range : "Touch",
	components : "V,S,M\u2020",
	compMaterial : "Gold dust worth at least 500 gp, which the spell consumes",
	duration : "Instantaneous",
	description : "Reduce apparent age of another crea by 3d10 years, minimum 13 years; does not extend lifespan",
	descriptionFull: "You perform a long, complex ritual on another creature, reducing its apparent age by 3d10 years, to a minimum of 13 years. This effect does not extend the creature's lifespan." 
};

SpellsList["ruby-eye curse"] = {
	name : "Ruby-Eye Curse",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 32],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 10 min",
	save : "Con",
	description : "1 crea save or cursed; becomes blind beyond a 5 ft radius",
	descriptionFull: "A red haze clouds the eyes of a creature that meets your gaze. Choose one creature you can see within range to make a Constitution saving throw. On a failed save, the creature is cursed for the duration. A cursed target can see normally out to 5 feet, but is blind beyond this radius." + "\n   " + "A remove curse spell ends this curse early."
};

SpellsList["secret enclave"] = {
	name : "Secret Enclave",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 32],
	level : 9,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A tiny, silver bell",
	duration : "10 min",
	description : "Create a portal to a pocket dimension; see book or description for details",
	descriptionFull: "You conjure a shimmering, multicolored portal, large enough to admit Large or smaller creatures, which connects to a pocket dimension, much like the demiplane spell. The enclave is a cube with 900 foot sides and behaves as if it were part of the Feywild. The floor is made of earth that is fertile but cannot be burrowed through. When the spell ends, the portal into the enclave disappears, but the portal exiting it remains, appearing as an ornate gateway that cannot be destroyed by any means." + "\n   " + "As long as you are within an enclave that you originally created, you can freely control the weather inside it, as per the control weather spell." + "\n   " + "You or anyone else can create another portal leading back to the enclave by casting this spell again. However, once an enclave has been created, its location is fixed, and the portal can only be opened from that same location (or from within the enclave). The location of a secret enclave cannot be detected by divination magic of any kind, though a wish spell can reveal the location of the nearest enclave." + "\n   " + "You can create secret enclaves within secret enclaves, but only if the original enclave was created by you."
};

SpellsList["soul bond"] = {
	name : "Soul bond",
	classes : ["cursed_witch"],
	source : ["MHP-CW", 32],
	level : 4,
	school : "Necro",
	ritual : true,
	time : "1 min",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Two nails from a coffin",
	duration : "24 hrs",
	save : "Con",
	description : "Create bond with target crea; if either drops to 0 HP the other drops to 0 HP; dismiss with action",
	descriptionFull: "This spell forges a mortal connection between yourself and a humanoid creature that you touch. A target creature must be present for the entire time of casting. If the creature is unwilling, it must make a Constitution saving throw to resist the spell's effects." + "\n   " + "For the duration, if you are reduced to 0 hit points, the target is also reduced to 0 hit points, and vice versa. This spell ends if you cast it again, or if you choose to dismiss it as an action."
};