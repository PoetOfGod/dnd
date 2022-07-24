/*  
    This script was written by Thravieus Windhelm (PoetOfGod) and tested on v13.1.0+220114, Printer Friendly
    This is an unofficial script for the Unearthed Arcana: Giant Options
    If you find any errors or bugs mention them on the discord

    Version : 1.1beta
    Date : 6/15/2022

    This script should be removed once the official script is released to prevent conflict
*/
var iFileName = "ua_20220523_Giant-Options(Unofficial).js";
RequiredSheetVersion("13.1.0");

SourceList["UA:GO"] = {
    name : "Unearthed Arcana: Giant Options",
    abbreviation : "UA:GO",
    group : "Unearthed Arcana",
    url : "https://dnd.wizards.com/unearthed-arcana/giant-options",
    date : "2022/05/23"
};

AddSubClass("barbarian", "giant-ua", {
    regExpSearch : /^(?=.*giant).*$/i,
    subname : "Path of the Giant",
    source : [["UA:GO", 1]],
    features : {
        "subclassfeature3" : {
            name : "Giant Power",
            source : [["UA:GO", 1]],
            minlevel : 3,
            description : desc([
                "I learn Giant, or another language if I already know Giant",
                "I know the Druidcraft or Thaumaturgy cantrip, Wisdom is my spellcasting ability for this spell"
            ]),
            languageProfs : [
                ["Giant or other", 1]
            ],
            spellcastingBonus : [{
                name : "Giant Power",
                spells : ["druidcraft", "thaumaturgy"],
                firstCol : "atwill",
                spellcastingAbility : 5
            }]
        },
        "subclassfeature3.1" : {
            name : "Giant's Havoc",
            source : [["UA:GO", 1]],
            minlevel : 3,
            description : desc([
                "While raging, I can add my Rage Damage bonus to ranged thrown weapon attacks using Str;",
                "My reach increases by 5 ft; If I am smaller than large I become Large if there is room"
            ])
        },
        "subclassfeature6" : {
            name : "Elemental Cleaver",
            source : [["UA:GO", 1]],
            minlevel : 6,
            description : desc([
                "When I rage, I can infuse a weapon I'm holding with acid, cold, fire, thunder, or lightning",
                "While I wield this weapon in my rage it deals damage of the chosen type + 1d6 extra damage",
                "It gains the thrown (20/60 ft) and returning property; I can change the type as a bonus action"
            ]),
            action : ["bonus action", "Elemental Swap (while raging)"],
            calcChanges : {
                atkAdd : [
					function (fields, v) {
						if (!v.isSpell && classes.known.barbarian && classes.known.barbarian.level && (/\bgiant\b/i).test(v.WeaponTextName)) {
                            fields.Damage_Type = "acid";
                            if (v.isMeleeWeapon) {
                                if (/thrown/i.test(v.WeaponText)) {
                                    fields.Description += classes.known.barbarian.level < 14 ? ((fields.Description ? '; ' : '') + 'Returning; +1d6 dmg of chosen type') : ((fields.Description ? '; ' : '') + 'Returning; +2d6 dmg of chosen type');
                                }
                                else {
                                    fields.Description += classes.known.barbarian.level < 14 ? ((fields.Description ? '; ' : '') + 'Thrown; Returning; +1d6 dmg of chosen type') : ((fields.Description ? '; ' : '') + 'Thrown; Returning; +2d6 dmg of chosen type');
                                    fields.Range = "Melee, 20/60 ft";
                                }
                            }
                            else {
                                fields.Description += classes.known.barbarian.level < 14 ? ((fields.Description ? '; ' : '') + '+1d6 dmg of chosen type') : ((fields.Description ? '; ' : '') + '+2d6 dmg of chosen type');
                            }
                        }
					},
					"If I include the word 'Giant' in a weapon's name, the calculation will add my Rage's bonus damage to it if it is melee, as well as the Elemental Cleaver infused weapon properties."
				/*  
    This script was written by Thravieus Windhelm (PoetOfGod) and tested on v13.1.0+220114, Printer Friendly
    This is an unofficial script for the Unearthed Arcana: Giant Options
    If you find any errors or bugs mention them on the discord

    Version : 1.0alpha
    Date : 4/27/2022

    This script should be removed once the official script is released to prevent conflict
*/
var iFileName = "ua_20220523_Giant-Options(Unofficial).js";
RequiredSheetVersion("13.1.0");

SourceList["UA:GO"] = {
    name : "Unearthed Arcana: Giant Options",
    abbreviation : "UA:GO",
    group : "Unearthed Arcana",
    url : "https://dnd.wizards.com/unearthed-arcana/giant-options",
    date : "2022/05/23"
};

AddSubClass("barbarian", "giant-ua", {
    regExpSearch : /^(?=.*giant).*$/i,
    subname : "Path of the Giant",
    source : [["UA:GO", 1]],
    features : {
        "subclassfeature3" : {
            name : "Giant Power",
            source : [["UA:GO", 1]],
            minlevel : 3,
            description : desc([
                "I learn Giant, or another language if I already know Giant",
                "I know the Druidcraft or Thaumaturgy cantrip, Wisdom is my spellcasting ability for this spell"
            ]),
            languageProfs : [
                ["Giant or other", 1]
            ],
            spellcastingBonus : [{
                name : "Giant Power",
                spells : ["druidcraft", "thaumaturgy"],
                firstCol : "atwill",
                spellcastingAbility : 5
            }]
        },
        "subclassfeature3.1" : {
            name : "Giant's Havoc",
            source : [["UA:GO", 1]],
            minlevel : 3,
            description : desc([
                "While raging, I can add my Rage Damage bonus to ranged thrown weapon attacks using Str;",
                "My reach increases by 5 ft; If I am smaller than large I become Large if there is room"
            ])
        },
        "subclassfeature6" : {
            name : "Elemental Cleaver",
            source : [["UA:GO", 1]],
            minlevel : 6,
            description : desc([
                "When I rage, I can infuse a weapon I'm holding with acid, cold, fire, thunder, or lightning",
                "While I wield this weapon in my rage it deals damage of the chosen type + 1d6 extra damage",
                "It gains the thrown (20/60 ft) and returning property; I can change the type as a bonus action"
            ]),
            action : ["bonus action", "Elemental Swap (while raging)"],
            calcChanges : {
                atkAdd : [
					function (fields, v) {
						if (!v.isSpell && classes.known.barbarian && classes.known.barbarian.level && (/\bgiant\b/i).test(v.WeaponTextName)) {
                            fields.Damage_Type = "acid";
                            if (v.isMeleeWeapon) {
                                if (/thrown/i.test(v.WeaponText)) {
                                    fields.Description += classes.known.barbarian.level < 14 ? ((fields.Description ? '; ' : '') + 'Returning; +1d6 dmg of chosen type') : ((fields.Description ? '; ' : '') + 'Returning; +2d6 dmg of chosen type');
                                }
                                else {
                                    fields.Description += classes.known.barbarian.level < 14 ? ((fields.Description ? '; ' : '') + 'Thrown; Returning; +1d6 dmg of chosen type') : ((fields.Description ? '; ' : '') + 'Thrown; Returning; +2d6 dmg of chosen type');
                                    fields.Range = "Melee, 20/60 ft";
                                }
                            }
                            else {
                                fields.Description += classes.known.barbarian.level < 14 ? ((fields.Description ? '; ' : '') + '+1d6 dmg of chosen type') : ((fields.Description ? '; ' : '') + '+2d6 dmg of chosen type');
                            }
                        }
					},
					"If I include the word 'Giant' in a weapon's name, the calculation will add my Rage's bonus damage to it if it is melee, as well as the Elemental Cleaver infused weapon properties."
				],
                atkCalc : [
                    function (fields, v, output) {
                        if (!v.isSpell && classes.known.barbarian && classes.known.barbarian.level && (/\bgiant\b/i).test(v.WeaponTextName)) {
                            if (v.isMeleeWeapon) {
                                output.extraDmg += classes.known.barbarian.level < 9 ? 2 : classes.known.barbarian.level < 16 ? 3 : 4;
                            }
                        }
                    },
                    "If I include the word 'Giant' in a weapon's name, the calculation will add my Rage's bonus damage to it if it is melee, as well as the Elemental Cleaver infused weapon properties."
                ]
            }
        },
        "subclassfeature10" : {
            name : "Mighty Impel",
            source : [["UA:GO", 1]],
            minlevel : 10,
            description : desc([
                "While raging, as a bonus action, I can choose a Medium or smaller creature within my reach",
                "I can move it to an unoccupied space I can see within 30 feet",
                "An unwilling creature must succeed on a Str save, DC 8 + Prof + Str mod to avoid the effect",
                "At the end of the movement, if the creature isn't on a surface that can support it, it falls"
            ]),
            action : ["bonus action", " (while raging)"]
        },
        "subclassfeature14" : {
            name : "Demiurgic Colossus",
            source : [["UA:GO", 1]],
            minlevel : 14,
            description : desc([
                "While raging, my reach increases by 10 ft, and my size can increase to Huge",
                "Mighty Impel can move Large creatures, Elemental cleaver increases to +2d6 extra dmg",
            ])
        }
    }
});

AddSubClass("druid", "circle of the primeval", {
    regExpSearch : /^(?=.*(druid|shaman))(?=.*(primeval|giant)).*$/i,
    subname : "Circle of the Primeval",
    source : [["UA:GO", 2]],
    features : {
        "subclassfeature2" : {
            name : "Keeper of Old",
            source : [["UA:GO", 2]],
            minlevel : 2,
            description : desc([
                "I gain proficiency in History; I can add d4 to my Intelligence (History) checks"
            ]),
            skills : ["History"]
        },
        "subclassfeature2.1" : {
            name : "Primeval Companion",
            source : [["UA:GO", 2]],
            minlevel : 2,
            description : desc([
                "I can expend a use of wild shape to summon a primeval companion",
                "The companion appears within 30 ft of me with the appearance of my choice"
            ]),
            action : ["bonus action", "Command Companion"],
            creaturesAdd : [["Primeval Companion", true]],
            creatureOptions : [{
				name : "Primeval Companion",
				source : [["UA:GO", 2]],
				size : 3,
				type : "Beast",
				alignment : "Neutral",
				ac : "13+Prof",
				hp : 20,
				hd : [2, 10],
				hdLinked : ["druid"],
				minlevelLinked : ["druid"],
				speed : "30 ft",
				scores : [15, 15, 17, 6, 12, 8],
				saves : ["", 4, 5, "", "", ""],
				senses : "Darkvision 60 ft",
				passivePerception : 11,
				languages : "Understands the languages you speak",
				challengeRating : "0",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Strike",
					ability : 1,
					damage : [1, 8, "bludgeoning"],
					modifiers : ["", "Prof"],
					range : "Melee (5 ft)",
					description : "Your choice of bludgeoning, piercing, or slashing",
					abilitytodamage : false
				}],
				features : [{
					name : "Primeval Companion",
					description : "The primeval companion obeys the commands of its summoner and shares its proficiency bonus. It takes its turn immediately after that of its summoner, on the same initiative. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its summoner takes a bonus action to command it to take another action. If its summoner is incapacitated, the companion can take any action, not just Dodge. The companion vanishes when it is reduced to 0 hit points, when its summoner summons another companion, or when its summoner dies."
				}],
				traits : [{
					name : "Intercept attack",
					description : "As a reaction when a creature the companion can see hits a target with an attack, and the target is within 5 ft of the companion, the target instead takes half the damage. The companion takes the remainder of the damage"
				}, {
					name : "Prehistoric Conduit (Circle of the Primeval 6)",
					minlevel : 6,
					description : "Spells I cast with the range of Touch can originate from my primeval companion. The primeval companion has advantage on saving throws against my spells, if the companion would take half damage on a successful save on my spells, instead, it takes no damage on a success and half and no other effects on a fail",
				}, {
					name : "Titanic Bond (Circle of the Primeval 10)",
					minlevel : 10,
					description : "The companion's size is now Large and it gains a swimming speed or climbing speed equal to its walking speed.",
					eval : function(prefix, lvl) {
						PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
                        var sMoveStr = (typePF ? ",\n" : ", ") + "swim or climb\n30 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						tDoc.getField(prefix + "Comp.Use.Speed").value += sMoveStr;
					},
					removeeval : function(prefix, lvl) {
						PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
                        var sMoveStr = (typePF ? ",\n" : ", ") + "swim or climb\n30 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						Value(prefix + "Comp.Use.Speed", What(prefix + "Comp.Use.Speed").replace(sMoveStr, ""));
					}
				}],
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.druid) return;
						var drdLvl = classes.known.druid.level;
						var drdLvlM = 5 * drdLvl;
						HDobj.alt.push(10 + drdLvlM);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + drdLvl + " from five times its summoner's druid level (" + drdLvlM + ")");
					},
					setAltHp : true
				}
			}]
        },
        "subclassfeature6" : {
            name : "Prehistoric Conduit",
            source : [["UA:GO", 2]],
            minlevel : 6,
            description : desc([
                "Spells I cast with the range of Touch can originate from my primeval companion",
                "The primeval companion has advantage on saving throws against my spells",
                "If the companion would take half damage on a successful save on my spells,",
                "Instead, it takes no damage on a success and half and no other effects on a fail"
            ])
        },
        "subclassfeature10" : {
            name : "Titanic Bond",
            source : [["UA:GO", 2]],
            minlevel : 10,
            description : desc([
                "My companion grows to Large; it gains a climb or swim speed equal to its walking speed",
                "Once per turn, while it is summoned, when I hit or deal damage to a creature I can see;",
                "It must make a Wis save against my Spell DC or it is frightened of me;",
                "This lasts until the end of my next turn"
            ])
        },
        "subclassfeature14" : {
            name : "Scourge of the Ancients",
            source : [["UA:GO", 3]],
            minlevel : 14,
            description : desc([
                "When I use a bonus action to command my companion I can expend a spell slot:",
                " \u2022 It becomes Huge if there is room, and gains 10 times the level of the spell slot temp HP",
                " \u2022 On a hit, the companion's Strike deals an extra 1d8 + the level of the spell slot damage",
                " \u2022 The companion's walking speed increases by 5 times the level of the spell slot",
                "These benefits last for 1 hour, until the companion vanishes, or until I use this feature again"
            ])
        }
    }
});

AddSubClass("wizard", "runecrafter", {
    regExpSearch : /(runecrafting|runecrafter)/i,
    subname : "Tradition of Runecrafting",
    fullname : "Runecrafter",
    source : [["UA:GO", 3]],
    features : {
        "subclassfeature2" : {
            name : "Runes of Understanding",
            source : [["UA:GO", 3]],
            minlevel : 2,
            description : desc([
                "I always have comprehend languages prepared and can cast it without expending a spell slot",
                "It doesn't count against the number of spells I have prepared"
            ]),
            spellcastingBonus : [{
                name : "Runes of Understanding",
                spells : ["comprehend languages"],
                selection : ["comprehend languages"],
                firstCol : "atwill"
            }]
        },
        "subclassfeature2.1" : {
            name : "Runic Empowerment",
            source : [["UA:GO", 3]],
            minlevel : 2,
            description : desc([
                "When I cast a spell using a spell slot I can invoke one of my runes",
                "Life Rune: A visible creature within 30 ft gains 5 times the level of the spell slot temp HP",
                "War Rune: A visible creature within 30 ft is marked until the end of my next turn",
                "   Attacks against them gain a bonus equal to half the level of the spell slot (rounded up)",
                "Wind Rune: My speed increases by 5 times the level of the spell slot until my next turn",
                "   My movement doesn't provoke opportunity attacks",
                "I can use this feature a number of times equal to my proficiency bonus",
                "I regain all uses after a long rest"
            ]),
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest"
        },
        "subclassfeature6" : {
            name : "Sigils of Warding",
            source : [["UA:GO", 3]],
            minlevel : 6,
            description : desc([
                "When I fail a Str, Dex, or Con save, as a rea. I can use a charge of Runic Empowerment to pass"
            ]),
            action : ["reaction", ""]
        },
        "subclassfeature10" : {
            name : "Rune Maven",
            source : [["UA:GO", 3]],
            minlevel : 10,
            description : desc([
                "Whenever I use Arcane Recovery, I also regain uses of Runic Empowerment",
                "The number of uses I regain can be no more than half my Int mod rounded up (min 1)"
            ])
        },
        "subclassfeature14" : {
            name : "Engraved Enmity",
            source : [["UA:GO", 3]],
            minlevel : 14,
            description : desc([
                "As a bonus action, a visible creature within 60 ft must make a Wis save vs my Spell Save DC",
                "On a failure they are marked for 1 min, or until I lose my concentration",
                "They have disadvantage on saving throws against spells I cast",
                "They are visible if invisible, and they can't become invisible",
                "When marked, and as a bonus action on subsequent turns, I can curse the creature",
                "The next time an ally hits this creature with an attack, it also takes 1d8 Force dmg",
                "Once I use this feature I can't again until I long rest or expend a 3rd level or higher spell slot"
            ]),
            action : ["bonus action", ""],
            usages : 1,
            recovery : "long rest"
        },
    }
});

FeatsList["elemental touched"] = {
    name : "Elemental Touched",
    source : [["UA:GO", 4]],
    descriptionFull : "You've been exposed to the primordial magic of the Elemental Planes, granting you a measure of control over the natural world around you. You learn either the druidcraft or thaumaturgy cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you gain this feat).\n   Whenever you finish a long rest, you can choose which element you are attuned to: Air, Earth, Fire, or Water. Depending on your choice, you can use a bonus action to cause one of the following effects:\n\n" + toUni("Air.") + " You gain a fly speed equal to your walking speed until the end of your turn. If you are airborne at the end of your turn after using this movement and aren't held aloft by other means, you fall.\n" + toUni("Earth.") + " You cause the ground within 30 feet of you to become difficult terrain for 1 minute or until you create this effect again. During that time, you can move across ground that is difficult terrain without spending extra movement.\n" + toUni("Fire.") + " You surround yourself in a cloud of ash and smoke. Until the end of your turn, your movement doesn't provoke opportunity attacks.\n" + toUni("Water.") + " You can create a forceful surge of water directed at a creature within 15 feet of you that you can see. The creature must succeed on a Strength saving throw (which it can choose to fail) against a DC equal to 8 + your spellcasting ability modifier + your proficiency bonus or be pushed up to 10 feet away from you. The water vanishes immediately after the creature succeeds or fails." + "\n\nYou can create this effect a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    description : "I learn druidcraft or thaumaturgy. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
    spellcastingAbility : [4, 5, 6],
    action : ["bonus action", ""],
    usages : "Proficiency Bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    choices : ["Druidcraft", "Thaumaturgy"],
    "druidcraft" : {
        description : "I learn druidcraft. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
        spellcastingBonus : [{
            name : "Elemental Touched",
            spells : ["druidcraft"],
            selection : ["druidcraft"]
        }]
    },
    "thaumaturgy" : {
        description : "I learn thaumaturgy. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
        spellcastingBonus : [{
            name : "Elemental Touched",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"]
        }]
    }
};

FeatsList["ember of the fire giant"] = {
    name : "Ember of the Fire Giant",
    source : [["UA:GO", 4]],
    prerequisite : "8th level",
    prereqeval : function(v) { return v.characterLevel >= 8; },
    descriptionFull : "You've manifested the fiery combat emblematic of fire giants, granting you the following benefits:\n\n" + toUni("Born of Flame.") + " You have resistance to fire damage.\n" + toUni("Searing Ignition.") + " When you take the Attack action on your turn, you can replace one of your attacks with a magical burst of flame. Each creature of your choice within 15 feet of you that can see you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + your Constitution modifier). On a failed save, a creature takes fire damage equal to 2d6 + your proficiency bonus and is blinded until the start of your next turn; on a successful save, the creature takes half as much damage with no additional effects. You can use your Searing Ignition a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    description : "I gain resistance to fire damage. When I take the Attack action on my turn I can use an attack to instead make each creature I choose within 15 ft roll a Dex save DC 8 + Prof + Con mod. On a fail they take 2d6 + Prof Fire dmg, blinded until the start of my next turn. Success halves and no other effect. Prof Uses / LR.",
    action : ["action", "Searing Ignition (as Attack action)"],
    usages : "Proficiency Bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    dmgres : ["Fire"]
};

FeatsList["fury of the frost giant"] = {
    name : "Fury of the Frost Giant",
    source : [["UA:GO", 4]],
    prerequisite : "4th level",
    prereqeval : function(v) { return v.characterLevel >= 4; },
    descriptionFull : "You've manifested the icy might emblematic of frost giants, granting you the following benefits:\n\n" + toUni("Born of Ice.") + " You have resistance to cold damage.\n" + toUni("Frigid Vengeance.") + " When a creature hits you with an attack roll, you can use your reaction to retaliate with a burst of magical ire. The creature must succeed on a Wisdom saving throw (DC equals 8 + your proficiency bonus + your Consitution modifier) or be frightened of you until the start of its next turn. You can use your reaction in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    description : "I gain resistance to cold damage. When I am hit with an attack roll I can use my reaction to make them roll a Wis save DC 8 + Prof + Con mod. On a failure they are frightened until the start of their next turn. Prof Uses / LR.",
    action : ["reaction", "Frigid Vengeance"],
    usages : "Proficiency Bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    dmgres : ["Cold"]
};

FeatsList["guile of the cloud giant"] = {
    name : "Guile of the Cloud Giant",
    source : [["UA:GO", 4]],
    prerequisite : "8th level",
    prereqeval : function(v) { return v.characterLevel >= 8; },
    descriptionFull : "You've manifested the airy speech and magic emblematic of cloud giants, granting you the following benefits:\n\n" + toUni("Misty Form.") + " You can cast the blur spell without using a spell slot or material components. When you cast the spell in this way, the spell doesn't require you to maintain concentration on it. Once you cast the spell in this way, you can't do so again until you finish a long rest. You can also cast this spell in the normal way using spell slots you have of appropriate level.\nIntelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat).\n" + toUni("Silver Tongue.") + " You gain proficiency in either the Deception or Persuasion skill. Your proficiency bonus is doubled for any ability check you make using this skill.",
    description : "I gain proficiency and expertise in Deception or Persuasion. Once per long rest I can cast Blur without using a spell slot, material components, or concentration. I can also cast it normally with spell slots.",
    skillstxt : "Choose Deception or Persuasion. You also gain expertise with that skill",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : [{
        name : "Guile of the Cloud Giant",
        spells : ["blur"],
        selection : ["blur"],
        firstCol : "oncelr",
        allowUpCasting : true,
    }]
};

FeatsList["keenness of the stone giant"] = {
    name : "Keenness of the Stone Giant",
    source : [["UA:GO", 5]],
    prerequisite : "4th level",
    prereqeval : function(v) { return v.characterLevel >= 4; },
    descriptionFull : "You've manifested the protection and spellcasting emblematic of stone giants, granting you the following benefits:\n\n" + toUni("Dreamer's Magic") + " You learn the detect thoughts spell and one 1st-level spell of your choice. The 1st-level spell must be from the abjuration or the divination school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level.\nIntelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat)." + toUni("Mountain Sight") + " You gain darkvision out to a range of 60 feet. If you already have darkvision from another source, its range increases by 30 feet",
    description : "I learn detect thoughts and a 1st level Abjur or Div spell. I can cast these without a spell slot once per long rest, or as normal. I gain 60 ft of Darkvision or if I already have darkvision I get an extra 30 feet of Darkvision.",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : [{
        name : "Keenness of the Stone Giant",
        spells : ["detect thoughts"],
        selection : ["detect thoughts"],
        firstCol : "oncelr",
        allowUpCasting : true,
    }, {
        name : "1st-level Abjur/Div spell",
        "class" : "any",
        school : ["Abjur", "Div"],
        level : [1, 1],
        firstCol : "oncelr",
        allowUpCasting : true,
    }],
    vision : [
        ["Darkvision", "fixed 60"], // This should be done with an eval/removeeval but I don't feel the need to make it perfect for the Unofficial version
        ["Darkvision", "+30"]
    ]
};

FeatsList["outsized might"] = {
    name : "Outsized Might",
    source : [["UA:GO", 5]],
    descriptionFull : "You have absorbed primeval magic that allows you, despite your relatively small stature, to embody the might of titanic creatures. This grants you the following benefits:\n\n" + toUni("Little but Mighty.") + " You gain proficiency in either the Athletics or Acrobatics skill.\n" + toUni("Powerful Build.") + " You count as one size larger when determining your carrying capacity and the amount you can push, drag, or lift.\n" + toUni("Stalwart.") + "You have advantage on saving throws against being moved or knocked prone.",
    description : "I gain proficiency in Athletics or Acrobatics. I count as one size larger when determining my carrying capacity and the amount I can push, drag, or lift. I have advantage on saving throws against being moved or knocked prone.",
    skillstxt : "Choose Athletics or Acrobatics",
    carryingCapacity : 2,
    savetxt : { adv_vs : ["moved", "prone"]}
};

FeatsList["rune carver apprentice"] = {
    name : "Rune Carver Apprentice",
    source : [["UA:GO", 5]],
    descriptionFull : "You've begun studying the art of runecraft, which allows you to temporarily mark your items and imbue them with magic.\n   Whenever you finish a long rest, you can mark one nonmagical weapon, armor, piece of clothing, or other object you can touch with a rune of your choice. You temporarily learn one 1st-level spell based on the rune you choose, as specified in the Rune Spells table, and you know the spell until you finish a long rest, when the rune fades.\n\n" + toUni("RUNE SPELLS") + "\n" + toUni("Rune") + "\t" + toUni("Spell") +
    "\nBlood\tFalse life\nCloud\tFog cloud\nDeath\tRay of sickness\nDragon\tChromatic orb\nEnemy\tBane\nFire\tBurning hands\nFriend\tBless\nFrost\tArmor of Agathys\nHill\tGoodberry\nJourney\tLongstrider\nKing\tCommand\nLight\tGuiding bolt\nLife\tCure wounds\nMountain\tJump\nShield\tShield\nStone\tSanctuary\nStorm\tThunderwave\nWar\tHeroism\nWind\tFeather fall\n\n" +
    "While you are wearing or carrying the rune-marked object, you can cast the chosen spell associated with the rune once without using a spell slot or material components, and you can also cast the spell using any spell slots you have.\n   Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you gain this feat).",
    description : "At the end of a long rest, I can mark a nonmagical object I can touch with a rune. I learn a 1st-level spell until I finish a long rest when the rune fades. While wearing or carrying the object I can cast the spell once without using a spell slot or material components, or as normal.",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : {
        name : "Rune Carver",
        spells : ["false life", "fog cloud", "ray of sickness", "chromatic orb", "bane", "burning hands", "bless", "armor of agathys", "goodberry", "longstrider", "command", "guiding bolt", "cure wounds", "jump", "shield", "sanctuary", "thunderwave", "heroism", "feather fall"],
        selection : ["false life", "fog cloud", "ray of sickness", "chromatic orb", "bane", "burning hands", "bless", "armor of agathys", "goodberry", "longstrider", "command", "guiding bolt", "cure wounds", "jump", "shield", "sanctuary", "thunderwave", "heroism", "feather fall"],
        times : 19,
        firstCol : "R",
        allowUpCasting : true,
    }
};

FeatsList["rune carver adept"] = {
    name : "Rune Carver Adept",
    source : [["UA:GO", 5]],
    prerequisite : "4th level, Rune Carver Apprentice feat",
    prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("rune carver apprentice") !== -1; },
    descriptionFull : "Your skill with the art of runecraft has increased.\n   Whenever you finish a long rest, you can now mark a number of objects equal to your proficiency bonus with a rune from the Rune Carver Apprentice feat. An object can have only one rune at a time, and you must inscribe a different rune on each object.",
    description : "At the end of a long rest, when using the Rune Carver apprentice feat, I can now inscribe a number of objects up to my Proficiency Bonus. Each object can only have one rune, and each rune must be different."
};

FeatsList["soul of the storm giant"] = {
    name : "Soul of the Storm Giant",
    source : [["UA:GO", 5]],
    prerequisite : "8th level",
    prereqeval : function(v) { return v.characterLevel >= 8; },
    descriptionFull : "You've manifested divination abilities and tempest magic emblematic of storm giants, granting you the following benefits:\n\n" + toUni("Maelstrom Aura.") + " As a bonus action, you surround yourself in an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts for 1 minute or until you are incapacitated. While the aura is active, attack rolls against you have disadvantage, and whenever a creature starts its turn within the sphere, you can force the creature's speed to be halved until the start of its next turn. Once you use this bonus action, you can't do so again until you finish a long rest.\n" + toUni("Storm's Oracle") + " You can cast the divination spell as a ritual, without needing amterial components.\n Intelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat). Once you cast the spell in this way, you can't do so again until you finish a long rest.",
    description : "I learn Divination and can cast it once per long rest as a ritual without using a spell slot or materials. Once per long rest as a bonus action I create a 10 ft rad that lasts for 1 min or until I am incapacitated. Atks against me have disadv, when creas start their turn in the area I can halve their spd until their next turn.",
    action : ["bonus action", "Maelstrom Aura"],
    usages : 1,
    recovery : "long rest",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : {
        name : "Storm's Oracle",
        spells : ["divination"],
        selection : ["divination"],
        firstCol : "oncelr"
    },
    spellChanges : {
        "divination" : {
            components : "V,S",
            compMaterial : ""
        }
    }
};

FeatsList["vigor of the hill giant"] = {
    name : "Vigor of the Hill Giant",
    source : [["UA:GO", 5]],
    prerequisite : "4th level",
    prereqeval : function(v) { return v.characterLevel >= 4; },
    descriptionFull : "You've manifested the resilience emblematic of hill giants, granting you the following benefits:\n\n" + toUni("Bulwark.") + " When you are subjected to an effect that would move you at least 5 feet or knock you prone, you can use your reaction to steady yourself. You are then neither moved nor knocked prone.\n" + toUni("Hearty Health") + " When you are subjected to a spell that restores your hit points, you can regain additional hit points equal to your Constitution modifier. You can regain these additional hit points a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    description : "When I would be moved or knocked prone I can use my reaction to not. When I would restore hit points from a spell I can regain an additional Con mod hit points, I can regain hit points this way Prof Uses / LR.",
    action : ["reaction", "Bulwark"]
};
                atkCalc : [
                    function (fields, v, output) {
                        if (!v.isSpell && classes.known.barbarian && classes.known.barbarian.level && (/\bgiant\b/i).test(v.WeaponTextName)) {
                            if (v.isMeleeWeapon) {
                                output.extraDmg += classes.known.barbarian.level < 9 ? 2 : classes.known.barbarian.level < 16 ? 3 : 4;
                            }
                        }
                    },
                    "If I include the word 'Giant' in a weapon's name, the calculation will add my Rage's bonus damage to it if it is melee, as well as the Elemental Cleaver infused weapon properties."
                ]
            }
        },
        "subclassfeature10" : {
            name : "Mighty Impel",
            source : [["UA:GO", 1]],
            minlevel : 10,
            description : desc([
                "While raging, as a bonus action, I can choose a Medium or smaller creature within my reach",
                "I can move it to an unoccupied space I can see within 30 feet",
                "An unwilling creature must succeed on a Str save, DC 8 + Prof + Str mod to avoid the effect",
                "At the end of the movement, if the creature isn't on a surface that can support it, it falls"
            ]),
            action : ["bonus action", " (while raging)"]
        },
        "subclassfeature14" : {
            name : "Demiurgic Colossus",
            source : [["UA:GO", 1]],
            minlevel : 14,
            description : desc([
                "While raging, my reach increases by 10 ft, and my size can increase to Huge",
                "Mighty Impel can move Large creatures, Elemental cleaver increases to +2d6 extra dmg",
            ])
        }
    }
});

AddSubClass("druid", "circle of the primeval", {
    regExpSearch : /^(?=.*(druid|shaman))(?=.*(primeval|giant)).*$/i,
    subname : "Circle of the Primeval",
    source : [["UA:GO", 2]],
    features : {
        "subclassfeature2" : {
            name : "Keeper of Old",
            source : [["UA:GO", 2]],
            minlevel : 2,
            description : desc([
                "I gain proficiency in History; I can add d4 to my Intelligence (History) checks"
            ]),
            skills : ["History"]
        },
        "subclassfeature2.1" : {
            name : "Primeval Companion",
            source : [["UA:GO", 2]],
            minlevel : 2,
            description : desc([
                "I can expend a use of wild shape to summon a primeval companion",
                "The companion appears within 30 ft of me with the appearance of my choice"
            ]),
            action : ["bonus action", "Command Companion"],
            creaturesAdd : [["Primeval Companion", true]],
            creatureOptions : [{
				name : "Primeval Companion",
				source : [["UA:GO", 2]],
				size : 3,
				type : "Beast",
				alignment : "Neutral",
				ac : "13+Prof",
				hp : 20,
				hd : [2, 10],
				hdLinked : ["druid"],
				minlevelLinked : ["druid"],
				speed : "30 ft",
				scores : [15, 15, 17, 6, 12, 8],
				saves : ["", 4, 5, "", "", ""],
				senses : "Darkvision 60 ft",
				passivePerception : 11,
				languages : "Understands the languages you speak",
				challengeRating : "0",
				proficiencyBonus : 2,
				proficiencyBonusLinked : true,
				attacksAction : 1,
				attacks : [{
					name : "Strike",
					ability : 1,
					damage : [1, 8, "bludgeoning"],
					modifiers : ["", "Prof"],
					range : "Melee (5 ft)",
					description : "Your choice of bludgeoning, piercing, or slashing",
					abilitytodamage : false
				}],
				features : [{
					name : "Primeval Companion",
					description : "The primeval companion obeys the commands of its summoner and shares its proficiency bonus. It takes its turn immediately after that of its summoner, on the same initiative. It can move and take reactions on its own, but only takes the Dodge action on its turn unless its summoner takes a bonus action to command it to take another action. If its summoner is incapacitated, the companion can take any action, not just Dodge. The companion vanishes when it is reduced to 0 hit points, when its summoner summons another companion, or when its summoner dies."
				}],
				traits : [{
					name : "Intercept attack",
					description : "As a reaction when a creature the companion can see hits a target with an attack, and the target is within 5 ft of the companion, the target instead takes half the damage. The companion takes the remainder of the damage"
				}, {
					name : "Prehistoric Conduit (Circle of the Primeval 6)",
					minlevel : 6,
					description : "Spells I cast with the range of Touch can originate from my primeval companion. The primeval companion has advantage on saving throws against my spells, if the companion would take half damage on a successful save on my spells, instead, it takes no damage on a success and half and no other effects on a fail",
				}, {
					name : "Titanic Bond (Circle of the Primeval 10)",
					minlevel : 10,
					description : "The companion's size is now Large and it gains a swimming speed or climbing speed equal to its walking speed.",
					eval : function(prefix, lvl) {
						PickDropdown(prefix + "Comp.Desc.Size", 2); // Large
                        var sMoveStr = (typePF ? ",\n" : ", ") + "swim or climb\n30 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						tDoc.getField(prefix + "Comp.Use.Speed").value += sMoveStr;
					},
					removeeval : function(prefix, lvl) {
						PickDropdown(prefix + "Comp.Desc.Size", 3); // Medium
                        var sMoveStr = (typePF ? ",\n" : ", ") + "swim or climb\n30 ft";
						if (What("Unit System") === "metric") sMoveStr = ConvertToMetric(sMoveStr, 0.5);
						Value(prefix + "Comp.Use.Speed", What(prefix + "Comp.Use.Speed").replace(sMoveStr, ""));
					}
				}],
				calcChanges : {
					hp : function (totalHD, HDobj, prefix) {
						if (!classes.known.druid) return;
						var drdLvl = classes.known.druid.level;
						var drdLvlM = 5 * drdLvl;
						HDobj.alt.push(10 + drdLvlM);
						HDobj.altStr.push(" = 10 as a base\n + 5 \xD7 " + drdLvl + " from five times its summoner's druid level (" + drdLvlM + ")");
					},
					setAltHp : true
				}
			}]
        },
        "subclassfeature6" : {
            name : "Prehistoric Conduit",
            source : [["UA:GO", 2]],
            minlevel : 6,
            description : desc([
                "Spells I cast with the range of Touch can originate from my primeval companion",
                "The primeval companion has advantage on saving throws against my spells",
                "If the companion would take half damage on a successful save on my spells,",
                "Instead, it takes no damage on a success and half and no other effects on a fail"
            ])
        },
        "subclassfeature10" : {
            name : "Titanic Bond",
            source : [["UA:GO", 2]],
            minlevel : 10,
            description : desc([
                "My companion grows to Large; it gains a climb or swim speed equal to its walking speed",
                "Once per turn, while it is summoned, when I hit or deal damage to a creature I can see;",
                "It must make a Wis save against my Spell DC or it is frightened of me;",
                "This lasts until the end of my next turn"
            ])
        },
        "subclassfeature14" : {
            name : "Scourge of the Ancients",
            source : [["UA:GO", 3]],
            minlevel : 14,
            description : desc([
                "When I use a bonus action to command my companion I can expend a spell slot:",
                " \u2022 It becomes Huge if there is room, and gains 10 times the level of the spell slot temp HP",
                " \u2022 On a hit, the companion's Strike deals an extra 1d8 + the level of the spell slot damage",
                " \u2022 The companion's walking speed increases by 5 times the level of the spell slot",
                "These benefits last for 1 hour, until the companion vanishes, or until I use this feature again"
            ])
        }
    }
});

AddSubClass("wizard", "runecrafter", {
    regExpSearch : /(runecrafting|runecrafter)/i,
    subname : "Tradition of Runecrafting",
    fullname : "Runecrafter",
    source : [["UA:GO", 3]],
    features : {
        "subclassfeature2" : {
            name : "Runes of Understanding",
            source : [["UA:GO", 3]],
            minlevel : 2,
            description : desc([
                "I always have comprehend languages prepared and can cast it without expending a spell slot",
                "It doesn't count against the number of spells I have prepared"
            ]),
            spellcastingBonus : [{
                name : "Runes of Understanding",
                spells : ["comprehend languages"],
                selection : ["comprehend languages"],
                firstCol : "atwill"
            }]
        },
        "subclassfeature2.1" : {
            name : "Runic Empowerment",
            source : [["UA:GO", 3]],
            minlevel : 2,
            description : desc([
                "When I cast a spell using a spell slot I can invoke one of my runes",
                "Life Rune: A visible creature within 30 ft gains 5 times the level of the spell slot temp HP",
                "War Rune: A visible creature within 30 ft is marked until the end of my next turn",
                "   Attacks against them gain a bonus equal to half the level of the spell slot (rounded up)",
                "Wind Rune: My speed increases by 5 times the level of the spell slot until my next turn",
                "   My movement doesn't provoke opportunity attacks",
                "I can use this feature a number of times equal to my proficiency bonus",
                "I regain all uses after a long rest"
            ]),
            usages : "Proficiency bonus per ",
            usagescalc : "event.value = How('Proficiency Bonus');",
            recovery : "long rest"
        },
        "subclassfeature6" : {
            name : "Sigils of Warding",
            source : [["UA:GO", 3]],
            minlevel : 6,
            description : desc([
                "When I fail a Str, Dex, or Con save, as a rea. I can use a charge of Runic Empowerment to pass"
            ]),
            action : ["reaction", ""]
        },
        "subclassfeature10" : {
            name : "Rune Maven",
            source : [["UA:GO", 3]],
            minlevel : 10,
            description : desc([
                "Whenever I use Arcane Recovery, I also regain uses of Runic Empowerment",
                "The number of uses I regain can be no more than half my Int mod rounded up (min 1)"
            ])
        },
        "subclassfeature14" : {
            name : "Engraved Enmity",
            source : [["UA:GO", 3]],
            minlevel : 14,
            description : desc([
                "As a bonus action, a visible creature within 60 ft must make a Wis save vs my Spell Save DC",
                "On a failure they are marked for 1 min, or until I lose my concentration",
                "They have disadvantage on saving throws against spells I cast",
                "They are visible if invisible, and they can't become invisible",
                "When marked, and as a bonus action on subsequent turns, I can curse the creature",
                "The next time an ally hits this creature with an attack, it also takes 1d8 Force dmg",
                "Once I use this feature I can't again until I long rest or expend a 3rd level or higher spell slot"
            ]),
            action : ["bonus action", ""],
            usages : 1,
            recovery : "long rest"
        },
    }
});

FeatsList["elemental touched"] = {
    name : "Elemental Touched",
    source : [["UA:GO", 4]],
    descriptionFull : "You've been exposed to the primordial magic of the Elemental Planes, granting you a measure of control over the natural world around you. You learn either the druidcraft or thaumaturgy cantrip, using Intelligence, Wisdom, or Charisma as the spellcasting ability (choose when you gain this feat).\n   Whenever you finish a long rest, you can choose which element you are attuned to: Air, Earth, Fire, or Water. Depending on your choice, you can use a bonus action to cause one of the following effects:\n\n" + toUni("Air.") + " You gain a fly speed equal to your walking speed until the end of your turn. If you are airborne at the end of your turn after using this movement and aren't held aloft by other means, you fall.\n" + toUni("Earth.") + " You cause the ground within 30 feet of you to become difficult terrain for 1 minute or until you create this effect again. During that time, you can move across ground that is difficult terrain without spending extra movement.\n" + toUni("Fire.") + " You surround yourself in a cloud of ash and smoke. Until the end of your turn, your movement doesn't provoke opportunity attacks.\n" + toUni("Water.") + " You can create a forceful surge of water directed at a creature within 15 feet of you that you can see. The creature must succeed on a Strength saving throw (which it can choose to fail) against a DC equal to 8 + your spellcasting ability modifier + your proficiency bonus or be pushed up to 10 feet away from you. The water vanishes immediately after the creature succeeds or fails." + "\n\nYou can create this effect a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    description : "I learn druidcraft or thaumaturgy. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
    spellcastingAbility : [4, 5, 6],
    action : ["bonus action", ""],
    usages : "Proficiency Bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    choices : ["Druidcraft", "Thaumaturgy"],
    "druidcraft" : {
        description : "I learn druidcraft. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
        spellcastingBonus : [{
            name : "Elemental Touched",
            spells : ["druidcraft"],
            selection : ["druidcraft"]
        }]
    },
    "thaumaturgy" : {
        description : "I learn thaumaturgy. End of a LR pick Air, Earth, Fire, Water, as a bns action: Air. Gain fly spd = to walk spd, fall at end of turn; Earth. 30 ft rad diff terr for 1 min, move freely through diff terr; Fire. No opp atks this turn; Water. 1 visible crea w/in 15 ft Str save DC 8 + SC mod + Prof or pushed 10 ft away. Prof Uses / LR.",
        spellcastingBonus : [{
            name : "Elemental Touched",
            spells : ["thaumaturgy"],
            selection : ["thaumaturgy"]
        }]
    }
};

FeatsList["ember of the fire giant"] = {
    name : "Ember of the Fire Giant",
    source : [["UA:GO", 4]],
    prerequisite : "8th level",
    prereqeval : function(v) { return v.characterLevel >= 8; },
    descriptionFull : "You've manifested the fiery combat emblematic of fire giants, granting you the following benefits:\n\n" + toUni("Born of Flame.") + " You have resistance to fire damage.\n" + toUni("Searing Ignition.") + " When you take the Attack action on your turn, you can replace one of your attacks with a magical burst of flame. Each creature of your choice within 15 feet of you that can see you must make a Dexterity saving throw (DC equals 8 + your proficiency bonus + your Constitution modifier). On a failed save, a creature takes fire damage equal to 2d6 + your proficiency bonus and is blinded until the start of your next turn; on a successful save, the creature takes half as much damage with no additional effects. You can use your Searing Ignition a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    description : "I gain resistance to fire damage. When I take the Attack action on my turn I can use an attack to instead make each creature I choose within 15 ft roll a Dex save DC 8 + Prof + Con mod. On a fail they take 2d6 + Prof Fire dmg, blinded until the start of my next turn. Success halves and no other effect. Prof Uses / LR.",
    action : ["action", "Searing Ignition (as Attack action)"],
    usages : "Proficiency Bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    dmgres : ["Fire"]
};

FeatsList["fury of the frost giant"] = {
    name : "Fury of the Frost Giant",
    source : [["UA:GO", 4]],
    prerequisite : "4th level",
    prereqeval : function(v) { return v.characterLevel >= 4; },
    descriptionFull : "You've manifested the icy might emblematic of frost giants, granting you the following benefits:\n\n" + toUni("Born of Ice.") + " You have resistance to cold damage.\n" + toUni("Frigid Vengeance.") + " When a creature hits you with an attack roll, you can use your reaction to retaliate with a burst of magical ire. The creature must succeed on a Wisdom saving throw (DC equals 8 + your proficiency bonus + your Consitution modifier) or be frightened of you until the start of its next turn. You can use your reaction in this way a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    description : "I gain resistance to cold damage. When I am hit with an attack roll I can use my reaction to make them roll a Wis save DC 8 + Prof + Con mod. On a failure they are frightened until the start of their next turn. Prof Uses / LR.",
    action : ["reaction", "Frigid Vengeance"],
    usages : "Proficiency Bonus per ",
    usagescalc : "event.value = How('Proficiency Bonus');",
    recovery : "long rest",
    dmgres : ["Cold"]
};

FeatsList["guile of the cloud giant"] = {
    name : "Guile of the Cloud Giant",
    source : [["UA:GO", 4]],
    prerequisite : "8th level",
    prereqeval : function(v) { return v.characterLevel >= 8; },
    descriptionFull : "You've manifested the airy speech and magic emblematic of cloud giants, granting you the following benefits:\n\n" + toUni("Misty Form.") + " You can cast the blur spell without using a spell slot or material components. When you cast the spell in this way, the spell doesn't require you to maintain concentration on it. Once you cast the spell in this way, you can't do so again until you finish a long rest. You can also cast this spell in the normal way using spell slots you have of appropriate level.\nIntelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat).\n" + toUni("Silver Tongue.") + " You gain proficiency in either the Deception or Persuasion skill. Your proficiency bonus is doubled for any ability check you make using this skill.",
    description : "I gain proficiency and expertise in Deception or Persuasion. Once per long rest I can cast Blur without using a spell slot, material components, or concentration. I can also cast it normally with spell slots.",
    skillstxt : "Choose Deception or Persuasion. You also gain expertise with that skill",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : [{
        name : "Guile of the Cloud Giant",
        spells : ["blur"],
        selection : ["blur"],
        firstCol : "oncelr",
        allowUpCasting : true,
    }]
};

FeatsList["keenness of the stone giant"] = {
    name : "Keenness of the Stone Giant",
    source : [["UA:GO", 5]],
    prerequisite : "4th level",
    prereqeval : function(v) { return v.characterLevel >= 4; },
    descriptionFull : "You've manifested the protection and spellcasting emblematic of stone giants, granting you the following benefits:\n\n" + toUni("Dreamer's Magic") + " You learn the detect thoughts spell and one 1st-level spell of your choice. The 1st-level spell must be from the abjuration or the divination school of magic. You can cast each of these spells without expending a spell slot. Once you cast either of these spells in this way, you can't cast that spell in this way again until you finish a long rest. You can also cast these spells using spell slots you have of the appropriate level.\nIntelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat)." + toUni("Mountain Sight") + " You gain darkvision out to a range of 60 feet. If you already have darkvision from another source, its range increases by 30 feet",
    description : "I learn detect thoughts and a 1st level Abjur or Div spell. I can cast these without a spell slot once per long rest, or as normal. I gain 60 ft of Darkvision or if I already have darkvision I get an extra 30 feet of Darkvision.",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : [{
        name : "Keenness of the Stone Giant",
        spells : ["detect thoughts"],
        selection : ["detect thoughts"],
        firstCol : "oncelr",
        allowUpCasting : true,
    }, {
        name : "1st-level Abjur/Div spell",
        "class" : "any",
        school : ["Abjur", "Div"],
        level : [1, 1],
        firstCol : "oncelr",
        allowUpCasting : true,
    }],
    vision : [
        ["Darkvision", "fixed 60"], // This should be done with an eval/removeeval but I don't feel the need to make it perfect for the Unofficial version
        ["Darkvision", "+30"]
    ]
};

FeatsList["outsized might"] = {
    name : "Outsized Might",
    source : [["UA:GO", 5]],
    descriptionFull : "You have absorbed primeval magic that allows you, despite your relatively small stature, to embody the might of titanic creatures. This grants you the following benefits:\n\n" + toUni("Little but Mighty.") + " You gain proficiency in either the Athletics or Acrobatics skill.\n" + toUni("Powerful Build.") + " You count as one size larger when determining your carrying capacity and the amount you can push, drag, or lift.\n" + toUni("Stalwart.") + "You have advantage on saving throws against being moved or knocked prone.",
    description : "I gain proficiency in Athletics or Acrobatics. I count as one size larger when determining my carrying capacity and the amount I can push, drag, or lift. I have advantage on saving throws against being moved or knocked prone.",
    skillstxt : "Choose Athletics or Acrobatics",
    carryingCapacity : 2,
    savetxt : { adv_vs : ["moved", "prone"]}
};

FeatsList["rune carver apprentice"] = {
    name : "Rune Carver Apprentice",
    source : [["UA:GO", 5]],
    descriptionFull : "You've begun studying the art of runecraft, which allows you to temporarily mark your items and imbue them with magic.\n   Whenever you finish a long rest, you can mark one nonmagical weapon, armor, piece of clothing, or other object you can touch with a rune of your choice. You temporarily learn one 1st-level spell based on the rune you choose, as specified in the Rune Spells table, and you know the spell until you finish a long rest, when the rune fades.\n\n" + toUni("RUNE SPELLS") + "\n" + toUni("Rune") + "\t" + toUni("Spell") +
    "\nBlood\tFalse life\nCloud\tFog cloud\nDeath\tRay of sickness\nDragon\tChromatic orb\nEnemy\tBane\nFire\tBurning hands\nFriend\tBless\nFrost\tArmor of Agathys\nHill\tGoodberry\nJourney\tLongstrider\nKing\tCommand\nLight\tGuiding bolt\nLife\tCure wounds\nMountain\tJump\nShield\tShield\nStone\tSanctuary\nStorm\tThunderwave\nWar\tHeroism\nWind\tFeather fall\n\n" +
    "While you are wearing or carrying the rune-marked object, you can cast the chosen spell associated with the rune once without using a spell slot or material components, and you can also cast the spell using any spell slots you have.\n   Your spellcasting ability for this feat is Intelligence, Wisdom, or Charisma (choose when you gain this feat).",
    description : "At the end of a long rest, I can mark a nonmagical object I can touch with a rune. I learn a 1st-level spell until I finish a long rest when the rune fades. While wearing or carrying the object I can cast the spell once without using a spell slot or material components, or as normal.",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : {
        name : "Rune Carver",
        spells : ["false life", "fog cloud", "ray of sickness", "chromatic orb", "bane", "burning hands", "bless", "armor of agathys", "goodberry", "longstrider", "command", "guiding bolt", "cure wounds", "jump", "shield", "sanctuary", "thunderwave", "heroism", "feather fall"],
        selection : ["false life", "fog cloud", "ray of sickness", "chromatic orb", "bane", "burning hands", "bless", "armor of agathys", "goodberry", "longstrider", "command", "guiding bolt", "cure wounds", "jump", "shield", "sanctuary", "thunderwave", "heroism", "feather fall"],
        times : 19,
        firstCol : "R",
        allowUpCasting : true,
    }
};

FeatsList["rune carver adept"] = {
    name : "Rune Carver Adept",
    source : [["UA:GO", 5]],
    prerequisite : "4th level, Rune Carver Apprentice feat",
    prereqeval : function(v) { return v.characterLevel >= 4 && CurrentFeats.known.indexOf("rune carver apprentice") !== -1; },
    descriptionFull : "Your skill with the art of runecraft has increased.\n   Whenever you finish a long rest, you can now mark a number of objects equal to your proficiency bonus with a rune from the Rune Carver Apprentice feat. An object can have only one rune at a time, and you must inscribe a different rune on each object.",
    description : "At the end of a long rest, when using the Rune Carver apprentice feat, I can now inscribe a number of objects up to my Proficiency Bonus. Each object can only have one rune, and each rune must be different."
};

FeatsList["soul of the storm giant"] = {
    name : "Soul of the Storm Giant",
    source : [["UA:GO", 5]],
    prerequisite : "8th level",
    prereqeval : function(v) { return v.characterLevel >= 8; },
    descriptionFull : "You've manifested divination abilities and tempest magic emblematic of storm giants, granting you the following benefits:\n\n" + toUni("Maelstrom Aura.") + " As a bonus action, you surround yourself in an aura of magical wind and lightning that extends 10 feet from you in every direction but not through total cover. The aura lasts for 1 minute or until you are incapacitated. While the aura is active, attack rolls against you have disadvantage, and whenever a creature starts its turn within the sphere, you can force the creature's speed to be halved until the start of its next turn. Once you use this bonus action, you can't do so again until you finish a long rest.\n" + toUni("Storm's Oracle") + " You can cast the divination spell as a ritual, without needing amterial components.\n Intelligence, Wisdom, or Charisma is your spellcasting ability for this feature (choose when you gain this feat). Once you cast the spell in this way, you can't do so again until you finish a long rest.",
    description : "I learn Divination and can cast it once per long rest as a ritual without using a spell slot or materials. Once per long rest as a bonus action I create a 10 ft rad that lasts for 1 min or until I am incapacitated. Atks against me have disadv, when creas start their turn in the area I can halve their spd until their next turn.",
    action : ["bonus action", "Maelstrom Aura"],
    usages : 1,
    recovery : "long rest",
    spellcastingAbility : [4, 5, 6],
    spellcastingBonus : {
        name : "Storm's Oracle",
        spells : ["divination"],
        selection : ["divination"],
        firstCol : "oncelr"
    },
    spellChanges : {
        "divination" : {
            components : "V,S",
            compMaterial : ""
        }
    }
};

FeatsList["vigor of the hill giant"] = {
    name : "Vigor of the Hill Giant",
    source : [["UA:GO", 5]],
    prerequisite : "4th level",
    prereqeval : function(v) { return v.characterLevel >= 4; },
    descriptionFull : "You've manifested the resilience emblematic of hill giants, granting you the following benefits:\n\n" + toUni("Bulwark.") + " When you are subjected to an effect that would move you at least 5 feet or knock you prone, you can use your reaction to steady yourself. You are then neither moved nor knocked prone.\n" + toUni("Hearty Health") + " When you are subjected to a spell that restores your hit points, you can regain additional hit points equal to your Constitution modifier. You can regain these additional hit points a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.",
    description : "When I would be moved or knocked prone I can use my reaction to not. When I would restore hit points from a spell I can regain an additional Con mod hit points, I can regain hit points this way Prof Uses / LR.",
    action : ["reaction", "Bulwark"]
};
