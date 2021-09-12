/*	-INFORMATION-
	Subject:	Skywatcher Class
	Effect:		This script adds Nines' homebrew skywatcher class (version 1.9) that takes inspiration from Fire Emblem.
	Remarks:	The class can be found at this link: https://www.gmbinder.com/share/-MWF4Oa6SPge7TtfQ568
	Sheet:		v13.0.4 and newer
    Code by:	PoetOfGod
    Date: 08/06/2021
  Extra:
    This script also adds the Kinshi Knight subclass, coded by Dangerous-Wolf-515.
*/

var iFileName = "The Skywatcher.js";
RequiredSheetVersion("13.0.4");

SourceList["SW:C"] = {
    name : "GMBinder: The Skywatcher - 5E Homebrew Class",
    abbreviation : "SW:C",
    group : "GMBinder",
    url : "https://www.gmbinder.com/share/-MWF4Oa6SPge7TtfQ568",
};

ClassList["skywatcher"] = {
    name : "Skywatcher",
    regExpSearch : /^(?=.*sky)(?=.*watcher).*$/i,
    source : [["SW:C", 2]],
    primaryAbility : "Dexterity and Charisma",
    prereqs : "Dexterity 13 and Charisma 13",
    die : 8,
    improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
    saves : ["Dex", "Cha"],
    skillstxt : {
        primary : "Choose two from Acrobatics, Animal Handling, Athletics, Insight, Intimidation, Perception, Persuasion, and Survival."
    },
    toolProfs : {
        primary : [["Artisan's tool or musical instrument", 1]],
    },
    armorProfs : {
        primary : [true, true, false, true],
        secondary : [true, true, false, true],
    },
    weaponProfs : {
        primary : [true, false, ["glaive", "halberd", "longsword", "pike", "rapier", "shortsword", "whip"]],
        secondary : [true, false],
    },
    equipment : "Skywatcher starting equipment:" +
        "\n \u2022 Hide -or- leather armor;" + 
        "\n \u2022 A rapier -or- two shortswords -or- a simple weapon and a shield;" + 
        "\n \u2022 Four javelins -or- a shortbow and a quiver of 20 arrows;" + 
        "\n \u2022 A diplomat's pack -or- an explorer's pack.",
    subclasses : ["Skywatcher's Bond", []],
    attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    abilitySave : 6,
    features : {
        "bonded mount" : {
            name : "Bonded Mount",
            source : [["SW:C", 4]],
            minlevel : 1,
            description : desc([
                "As a bonus action, I can summon my bonded mount, a large translucent form of my choice",
                "See the \"Notes\" page for more details"
            ]),
            toNotesPage : [{
                name : "Bonded Mount",
                source : [["SW:C", 4]],
                popupName : "Bonded Mount",
                note : [
                "While mounted on my Bonded Mount, I gain the following benefits:",
                " \u2022 My movement speed increases by 10 ft",
                " \u2022 I can use Dex instead of Str for one-handed, non-reach weapons I'm prof in",
                " \u2022 I can use Bond's Grace to gain advantage on a Dexterity check",
                " \u2022 I inhabit the space my mount would, attacks directed at it target me instead",
                "I can dismiss my mount any time during my turn",
                "At the end of my turn if I am incapacitated or no longer mounted it is dismissed"
                ],
            }],
            action : ["bonus action", "Summon Mount"],
            usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            additional : "Bond's Grace",
            limfeaname : "Bond's Grace",
            recovery : "long rest",
        },

        "canto" : {
            name : "Canto (Skywatcher 1, SW:C 5) & Clear Vision",
            source : [["SW:C", 5]],
            minlevel : 1,
            description : desc([
                "I can grapple and move a creature without a movement penalty",
                "I can see up to a mile away as though it were only 100 ft; I ignore the effects of dim light"
            ]),
        },

        "darting blow" : {
            name : "Darting Blow",
            source : [["SW:C", 5]],
            minlevel : 2,
            description : desc([
                "When I hit with a weapon attack I can use my bonus action to Dash or Disengage"
            ]),
            action : ["bonus action", " (after weapon hit)"],
        },

        "fighting style" : {
            name : "Fighting Style",
            source : [["SW:C", 5]],
            minlevel : 2,
            description : "\n   " + "Choose a Fighting Style for the skywatcher using the \"Choose Feature\" button above",
            choices : ["Arcane Warrior", "Archery", "Defense", "Dueling", "Great Weapon Fighting", "Interception", "Protection", "Thrown Weapon Fighting", "Two-Weapon Fighting"],
            "arcane warrior" : {
                name : "Arcane Warrior Fighting Style",
	            source : [["SW:C", 5]],
	            description : desc([
		            "I learn two sorcerer cantrips that count as sorcerer spells for me and use Cha for spellcasting",
		            "Whenever I gain a skywatcher level, I can swap one of these for another sorcerer cantrip"
	            ]),
	            spellcastingBonus : {
		            name : "Arcane Warrior",
		            "class" : "sorcerer",
		            level : [0, 0],
		            times : 2
	            }
            },
            "archery" : FightingStyles.archery,
            "defense" : FightingStyles.defense,
            "dueling" : FightingStyles.dueling,
            "great weapon fighting" : FightingStyles.great_weapon,
            "interception" : {
                name : "Interception Fighting Style",
                source : [["SW:C", 5]],
                description : desc([
                    "As a reaction when a creature I can see hits a target within 5 ft of me, I can intercept",
                    "I reduce the damage the target takes by 1d10 + my Proficiency Bonus (min 0 damage)",
                    "I can only do this while wielding a shield, or a simple or martial weapon"
                ]),
                action : [["reaction", ""]]
            },
            "protection" : FightingStyles.protection,
            "thrown weapon fighting" : {
                name : "Thrown Weapon Fighting Style",
                source : [["SW:C", 5]],
                description : desc([
                    "I can draw a weapon with the thrown property as part of the attack I make with it",
                    "In addition, my ranged attacks made with thrown weapons deal +2 damage"
                ]),
                calcChanges : {
                    atkAdd : [
                        function (fields, v) {
                            if (v.isMeleeWeapon && (/thrown/i).test(fields.Description)) {
                                if (v.isMeleeWeapon) fields.Description += (fields.Description ? '; ' : '') + '+2 damage when thrown';
                            };
                        },
                        "I deal +2 damage when I hit a ranged attack made with a thrown weapon."
                    ]
                }
            },
            "two-weapon fighting" : FightingStyles.two_weapon
        },

        "rallying command" : {
            name : "Rallying Command",
            source : [["SW:C", 6]],
            minlevel : 2,
            description : "\n   " + "Use the \"Choose Feature\" button above to add Rallying Commands to the third page" + "\n   " + "Whenever I gain a skywatcher level, I can replace a command I know with another",
            additional : levels.map( function(n) {
                return n < 2 ? "" : (n < 6 ? "3" : "4") + " known"
            }),
            extraname : "Rallying Command",
            extrachoices : ["Rally Attack", "Rally Defense", "Rally Fear (prerequisite: draco knight 6)", "Rally Luck", "Rally Magic (prerequisite: dark flier 6)", "Rally Movement", "Rally Resistance", "Rally Speed", "Rally Wind (prerequisite: falco knight 6)", "Rally Skill (prerequisite: kinshi knight 6)"],
            extraTimes : 3,
            action : ["action", ""],
            usages : "Charisma modifier per ",
			usagescalc : "event.value = Math.max(1, What('Cha Mod'));",
            recovery : "long rest",
            "rally attack" : {
                name : "Rally Attack",
                source : [["SW:C", 6]],
                description : desc([
                    "Creatures I choose within 30 ft gain adv on atk rolls against creatures within 5 ft of me",
                    "This lasts until the start of my next turn"
                ]),
            },
            "rally defense" : {
                name : "Rally Defense",
                source : [["SW:C", 6]],
                description : desc([
                    "Creatures I choose within 30 ft gain temp Hit Points equal to 1d8 * my prof bonus",
                    "These last until the start of my next turn"
                ]),
            },
            "rally fear (prerequisite: draco knight 6)" : {
                name : "Rally Fear (prerequisite: Draco Knight 6)",
                source : [["SW:C", 12]],
                description : desc([
                    "Creatures I choose within 30 ft must make a Wis Save or be frightened until my next turn",
                    "If they pass, they are immune to this feature for the next 24 hours"
                ])
            },
            "rally luck" : {
                name : "Rally Luck",
                source : [["SW:C", 6]],
                description : desc([
                    "Creatures I choose within 30 ft may add my proficiency bonus to their next check",
                    "This must be used before the start of my next turn"
                ])
            },
            "rally magic (prerequisite: dark flier 6)" : {
                name : "Rally Magic (prerequisite: Dark Flier 6)",
                source : [["SW:C", 11]],
                description : "\n   " + "Creatures I choose within 30 ft treat spells cast as one level higher until my next turn"
            },
            "rally movement" : {
                name : "Rally Movement",
                source : [["SW:C", 6]],
                description : desc([
                    "Creatures I choose within 30 ft may use their reaction to move half their movement speed",
                    "This movement does not provoke Attacks of Opportunity"
                ])
            },
            "rally resistance" : {
                name : "Rally Resistance",
                source : [["SW:C", 6]],
                description : desc([
                    "Creatures I choose within 30 ft may add my proficiency bonus to their next save",
                    "This must be used before the start of my next turn"
                ])
            },
            "rally speed" : {
                name : "Rally Speed",
                source : [["SW:C", 6]],
                description : desc([
                    "Creatures I choose within 30 ft gain 15 ft of movement and +2 AC",
                    "This lasts until the start of my next turn"
                ])
            },
            "rally wind (prerequisite: falco knight 6)" : {
                name : "Rally Wind (prerequisite: Falco Knight 6)",
                source : [["SW:C", 13]],
                description : desc([
                    "Creatures I choose within 30 ft gain a fly speed of 30 ft until the end of my next turn",
                    "Any creature airborne at the end of this duration descends safely at 60 ft/rnd"
                ]),
            },
            "rally skill (prerequisite: kinshi knight 6)" : {
                name : "Rally Skill (prerequisite: Kinshi Knight 6)",
                source : [["SW:C", 14]],
                description : desc([
                    "The reflexes of each creature I choose within 30 feet of me are enhanced greatly.",
                    "Until the start of your next turn, weapon attacks made against those creatures have disadvantage.",
                ])
            }
        },
        "born to the sky" : {
            name : "Born to the Sky",
            source : [["SW:C", 6]],
            minlevel : 3,
            toNotesPage : [{
                name : "Born to the Sky",
                popupName : "Born to the Sky",
                note : [
                    "I gain advantage on saves to avoid falling off my mount",
                    "If I fall less than 10 ft off, I can land on my feet",
                    "Mounting or dismounting a creature only takes 5 ft of my movement",
                    "While my Bonded Mount is active, I gain a flying speed of 30 ft",
                    "I can fly for a number of hours equal to half my skywatcher level",
                    "This can be used all at once or in small intervals (minimum 1 min)",
                    "If I am airborne when the duration ends, I descend 30 ft per round until I land",
                    "At 9th level this duration becomes unlimited"
                ],
                amendTo : "Bonded Mount",
            }],
            additional : levels.map(function (n) {
                return n < 3 ? "" : n < 4 ? "1 hour of flight" : (n < 9 ? Math.floor(n/2) : "Unlimited") + " hours of flight, See the \"Notes\" page";
            }),
        },
        "subclassfeature3" : {
            name : "Skywatcher's Bond",
            source : [["SW:C", 6]],
            minlevel : 3,
            description : desc([
                "Choose a Skywatcher's Bond you strive to emulate and put it in the \"Class\" field",
                "Choose either Dark Flier, Draco Knight, or Falco Knight"
            ]),
        },
        "swiftwings" : {
            name : "Swiftwings",
            source : [["SW:C", 7]],
            minlevel : 3,
            speed : { allModes : "+10" },
            additional : "+ 10 movement speed",
        },
        "slow fall" : {
            name : "Slow Fall",
            source : [["SW:C", 7]],
            minlevel : 4,
            description : "\n   " + "As a reaction, I can reduce any falling damage I take by five times my skywatcher level",
            action : ["reaction", ""],
            additional : levels.map(function (n) { return n < 4 ? "" : (n*5) + " less falling damage" })
        },
        "evasion" : {
            name : "Evasion",
            source : [["SW:C", 7]],
            minlevel : 7,
            description : "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
            savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
        },
        "improved bond" : {
            name : "Improved Bond",
            source : [["SW:C", 7]],
            minlevel : 9,
            additional : "See the \"Notes\" page for details",
            toNotesPage : [{
                name : "Improved Bond",
                popupName : "Improved Bond",
                note : [
                    "My bonded mount is no longer dismissed unless any of the following apply:",
                    " \u2022 I choose to dismiss it",
                    " \u2022 I am more than 1 mile away from my Bonded Mount",
                    " \u2022 I become unconcious or drop to 0 hit points",
                    "As an action, my Bonded Mount can move up to my mounted fly speed",
                    "My walking and flying speed increase by an additional 15 ft while mounted",
                    "If I am surprised, I act normally if I summon my Bonded Mount first on my turn"
                ],
                amendTo : "Bonded Mount",
            }],
        },
        "triangle attack" : {
            name : "Triangle Attack",
            source : [["SW:C", 8]],
            minlevel : 11,
            description : "\n   " + "I have adv on atks when an ally is w/in 5 ft; Once per turn I can turn a hit into a crit",
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = What('Proficiency Bonus')",
            recovery : "long rest",
        },
        "whitewing initiative" : {
            name : "Whitewing Initiative",
            source : [["SW:C", 8]],
            minlevel : 13,
            description : "\n   " + "I add my Cha modifier (min 1) to initiative; +15 move speed while Bonded Mount is active",
            addMod : [{ type : "skill", field : "Init", mod : "max(Cha|1)", text : "I can add my Charisma modifier (min 1) to initiative rolls." }],
        },
        "galeforce" : {
            name : "Galeforce",
            source : [["SW:C", 8]],
            minlevel : 15,
            description : "\n   " + "Once per turn, if I reduce an enemy to 0 Hit Points, I can make an additional weapon attack",
        },
        "rally spectrum" : { 
            name : "Rally Spectrum",
            source : [["SW:C", 8]],
            minlevel : 17,
            description : "\n   " + "I can use two Rallying Commands in the same action, expending only one use",
        },
        "perfected triangle attack" : {
            name : "Perfected Triangle Attack",
            source : [["SW:C", 8]],
            minlevel : 18,
            description : desc([
                "I can use my reaction to make one ally hit against the same target into a critical hit"
            ]),
            action : ["reaction", ""],
            additional : "After using Triangle Attack"
        },
        "combat readiness" : {
            name : "Combat Readiness",
            source : [["SW:C", 8]],
            minlevel : 20,
            description : "\n   " + "As an action, I can regain all uses of Rallying Command",
            usages : 1,
            recovery : "long rest",
            action : ["action", ""],
        },
    }
};

AddSubClass("skywatcher", "dark flier", {
    regExpSearch : /^((?=.*(dark|shadow))(?=.*(flier|watcher|stalker))).*$/i, 
    subname : "Dark Flier",
    fullname : "Dark Flier",
    source : [["SW:C", 10]],
    abilitySave : 6,
    spellcastingFactor : 3,
    spellcastingList : {
        "class" : "sorcerer",
        school : ["Ench", "Evoc"],
        level : [0, 4]
    },
    spellcastingKnown : {
        cantrips : [0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
		spells : [0, 0, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9]
    },
    skills : ["Arcana"],
    features : {
        "subclassfeature3" : {
            name : "Spellcasting",
            source : [["SW:C", 10]],
            minlevel : 3,
			description : "\n   " + "I can cast known sorcerer cantrips/spells, using Charisma as my spellcasting ability",
			additional : ["", "", "2 cantrips \u0026 3 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 4 spells known", "2 cantrips \u0026 5 spells known", "2 cantrips \u0026 6 spells known", "2 cantrips \u0026 6 spells known", "3 cantrips \u0026 7 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 8 spells known", "3 cantrips \u0026 9 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 10 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 11 spells known", "3 cantrips \u0026 12 spells known", "3 cantrips \u0026 13 spells known"],
			spellcastingBonus : { 
				name : "From any school",
				"class" : "sorcerer",
				times : [0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4],
				level : [1, 4]
			}
		},
        "subclassfeature6" : {
            name : "War Rally",
            source : [["SW:C", 11]],
            minlevel : 6,
            description : desc([
                "When I use an action to cast a spell, I can Rallying Command as part of that action",
                "Darting Blow can be used after I hit with a spell attack or a creature fails its save to my spell"
            ]),
            additional : "Rally Magic",
        },
        "subclassfeature10" : {
            name : "Warding Blow",
            source : [["SW:C", 11]],
            minlevel : 10,
            description : desc([
                "Once per turn, when I deal dmg with a spell or atk, I empower my magical resistance",
                "I gain advantage on my next save against a spell or magical effect",
            ]),
        },
        "subclassfeature14" : {
            name : "Shadowgift",
            source : [["SW:C", 11]],
            minlevel : 14,
            description : "\n   " + "My attacks deal additional necrotic damage equal to my Charisma modifier",
            additional : "+ Cha mod Necrotic damage",
            calcChanges : {
                atkAdd : [
                    function (fields, v) {
                        if (v.isMeleeWeapon|v.isSpell) fields.Description += (fields.Description ? '; ' : '') + "+ Charisma Mod Necrotic damage";
                        "With my attacks I deal additional necrotic damage equal to my Charisma modifier."
                    }
                ]
            }
        }
    }
});

AddSubClass("skywatcher", "draco knight", {
    regExpSearch : /^((?=.*(draco|dragon|drake|wyrm))(?=.*(knight|warrior|tamer|rider))).*$/i, 
    subname : "Draco Knight",
    fullname : "Draco Knight",
    source : [["SW:C", 12]],
    skills : ["Intimidation"],
    skillstxt : ["Intimidation; If already proficient, choose another skill"],
    weaponProfs : [false, true],
    armorProfs : [false, false, true, false],
    features : {
        "subclassfeature3" : {
            name : "Death Blow",
            source : [["SW:C", 12]],
            minlevel : 3,
            description : "\n   " + "When I use the attack action, I can use my bonus action to atk with Death Blow",
            weaponOptions : {
                regExpSearch : /^(?=.*death)(?=.*blow).*$/i,
                name : "Death Blow",
                source : [["SW:C", 12]],
                ability : 1,
                type : "AlwaysProf",
                damage : [1, 4, "slashing"],
                range : "Melee",
                description : "Bonus Action; Uses the same ability modifier as your last attack",
                abilitytodamage : true
            },
            weaponsAdd : ["Death Blow"],
        },
        "subclassfeature3.1" : {
            name : "Draconic Rider",
            source : [["SW:C", 12]],
            minlevel : 3,
            languageProfs : ["Draconic"],
            description : "\n   " + "I have expertise on Charisma checks when interacting with dragons"
        },
        "subclassfeature6" : {
            name : "Intimidating Roar",
            source : [["SW:C", 12]],
            minlevel : 6,
            skillstxt : "Intimidation expertise",
            skills : ["Intimidation", "full"],
            description : "\n   " + "When I use Rallying Command, I can also attack with Death Blow",
            additional : "Rally Fear",
        },
        "subclassfeature10" : {
            name : "Dragonfire",
            source : [["SW:C", 12]],
            minlevel : 10,
            description : "\n   " + "When I take the Attack action, I can replace one of my atks with Dragonfire",
            weaponOptions : {
                regExpSearch : /^(?=.*dragon)(?=.*fire).*$/i,
                name : "Dragonfire",
                source : [["SW:C", 12]],
                ability : 6,
                type : "AlwaysProf",
                damage : [3, 6, "fire"],
                range : "15-ft cone",
                abilitytodamage : false,
                dc : true,
                description : "Hits all in area; Wis save, success - half damage;"
            },
            weaponsAdd : ["Dragonfire"],
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = What('Proficiency Bonus')",
            recovery : "long rest",
        },
        "subclassfeature14" : {
            name : "Quick Burn",
            source : [["SW:C", 12]],
            minlevel : 14,
            description : "\n   " + "In the 1st rnd of combat, I deal max dmg to crea who haven't taken a turn; Adv. on init rolls",
            advantages : [["Initiative", true]]
        }
    }
});

AddSubClass("skywatcher", "falco knight", {
    regExpSearch : /^((?=.*(falco|falcon|pegasus|aerial))(?=.*(knight|warrior|tamer|rider))).*$/i,
    subname : "Falco Knight",
    fullname : "Falco Knight",
    source : [["SW:C", 13]],
    weaponProfs : [false, true],
    features : {
        "subclassfeature3" : {
            name : "Quickened Rally",
            source : [["SW:C", 13]],
            minlevel : 3,
            description : "\n   " + "When I use the attack action, I can Rallying Command as part of that action",
        },
        "subclassfeature6" : {
            name : "Steady Flier",
            source : [["SW:C", 13]],
            minlevel : 6,
            description : "\n   " + "I gain immunity to effects that would forcibly move me or knock me prone",
            savetxt : { immune : ["prone"] },
            additional : "Rally Wind"
        },
        "subclassfeature10" : {
            name : "Darting Stance",
            source : [["SW:C", 13]],
            minlevel : 10,
            description : "\n   " + "When I use a Rallying Command, I may Dodge as a bonus action",
            action : ["bonus action", " (after Rallying Command)"]
        },
        "subclassfeature14" : {
            name : "Dual Strike",
            source : [["SW:C", 13]],
            minlevel : 14,
            description : "\n   " + "When an ally w/in 5 ft deals dmg, I can make one weapon atk on that crea with my reaction",
            action : ["reaction", ""]
        }
    }
});

AddSubClass("skywatcher", "kinshi knight", {
    regExpSearch : /^((?=.*(kinshi))(?=.*(knight|warrior|tamer|rider))).*$/i,
    subname : "Kinshi Knight",
    fullname : "Kinshi Knight",
    source : [["SW:C,14"]],
    weaponProfs : [false, true],
    features : {
        "subclassfeature3" : {
            name : "Air Superiority",
            source : [["SW:C", 14]],
            minlevel : 3,
            description : "\n   " + "On hit, large or smaller crea makes Str save, fail; knocked prone. Crea with fly spd has disadv.",
            //description : "\n   " + "When I hit a large or smaller crea, str save (DC = 8 + cha mod + prof bonus. On fail, target is knocked prone. Creatures with a flying speed have disadv on this save.",
            usages : "Charisma save DC, Charisma modifier per ",
            usagescalc : "event.value = What('Proficiency Bonus')",
            recovery : "short rest",
        },
        "subclassfeature3.1" : {
            name : "Swift Sparrow",
            source : [["SW:C", 14]],
            minlevel : 3,
            description : "\n   " + "When I take the attack action, I can use my Darting Blow feature even if I miss my attack.",
        },
        "subclassfeature6" : {
            name : "Elegant Skydancer",
            source : [["SW:C", 14]],
            minlevel : 6,
            description : "\n   " + "I gain a bonus to my Wis saves equal to my Cha mod (min 1).",
            //description : "\n   " + "I gain a bonus to my Wis saves equal to my Cha mod (min 1). I also learn a new Rally Command, Rally Skill.",
            additional : "Rally Skill",
            addMod : { type : "save", field : "wis", mod : "max(Cha|1)", text : "I gain a bonus to my Wis saves equal to my Cha mod (min 1)." },
        },
        "subclassfeature10" : {
            name : "Savage Blow",
            source : [["SW:C", 14]],
            minlevel : 10,
            description : "\n   " + "If a crea fails against Air Superiority, crea I choose w/in 5ft must save or be knocked prone."
            //description : "\n   " + "When a creature fails a save against my Air Superiority, I can force any number of creatures within 5ft of my target to make a str save of the same DC or be knocked prone.",   
        },
        "subclassfeature14" : {
            name : "Flashing Blade",
            source : [["SW:C", 14]],
            minlevel : 14,
            description : "\n   " + "Once per turn, when I miss an attack, I can make one weapon attack against a different target.",
            //description : "\n   " + "My weapon flickers between targets as easily as I breathe. Once per turn, when I miss an attack, I can make one weapon attack against a different target.",
        }        
    }
})

AddFeatureChoice(ClassList.skywatcher.features["fighting style"], true, "Martial Versatility", {
	name: "Martial Versatility",
	source: ["SW:C", 7],
	description: desc([
        "When I reach a level that grants the ASI feature I can shift the focus of my martial practice",
        "At these levels I can replace a Fighting Style I know with another one available to skywatchers"
    ])
},
"Optional Class Features"
);

AddFeatureChoice(ClassList.skywatcher.features["born to the sky"], true, "Cradled In the Sky", {
    name : "Cradled In the Sky",
    source : ["SW:C", 9],
    description : desc([
        "My Bonded Mount's strength is insufficient to remain airborne continously",
        "If I am airborne at the end of my turn, I descend gently to the ground"
    ])
},
"Optional Class Features"
);

AddFeatureChoice(ClassList.skywatcher.features["born to the sky"], true, "Valkyrie (prereq: Skywatcher level 5)", {
    name : "Valkyrie",
    source : ["SW:C", 9],
    minlevel : 5,
    description : "\n   " + "I no longer fall to the ground if I am airborne at the end of my turn"
},
"Optional Class Features"
);

AddFeatureChoice(ClassList.skywatcher.features["born to the sky"], true, "Diligence (prereq: Skywatcher level 6)", {
    name : "Diligence",
    source : ["SW:C", 9],
    minlevel : 6,
    description : desc([
        "Use the \"Choose Feature\" button to add a bonus feature to the third page",
        "I gain an additional feature at level 10 and another at level 13"
    ]), 
},
"Optional Class Features"
);

AddFeatureChoice(ClassList.skywatcher.features["slow fall"], true, "Fleet Foot", {
    name : "Fleet Foot",
    source : ["SW:C", 9],
    description : "\n   " + "I and up to 10 companions within 60 ft double their travel pace if I am not incapacitated"
},
"Diligence (Variant Feature)"
);

AddFeatureChoice(ClassList.skywatcher.features["slow fall"], true, "Hungry Hand", {
    name : "Hungry Hand",
    source : ["SW:C", 9],
    description : "\n   " + "I find twice as much food as I normally would when I forage"
},
"Diligence (Variant Feature)"
);

AddFeatureChoice(ClassList.skywatcher.features["slow fall"], true, "Keen Eye", {
    name : "Keen Eye",
    source : ["SW:C", 9],
    description : "\n   " + "My visual range is doubled in clear and lightly obscured environments"
},
"Diligence (Variant Feature)"
);

AddFeatureChoice(ClassList.skywatcher.features["slow fall"], true, "Persistent Track", {
    name : "Persistent Track",
    source : ["SW:C", 9],
    description : "\n   " + "I can track other creatures at a fast pace and stealth at a normal pace"
},
"Diligence (Variant Feature)"
);

AddFeatureChoice(ClassList.skywatcher.features["slow fall"], true, "Strong Back", {
    name : "Strong Back",
    source : ["SW:C", 9],
    description : "\n   " + "My carrying capacity is doubled",
    carryingCapacity : 2
},
"Diligence (Variant Feature)"
);
