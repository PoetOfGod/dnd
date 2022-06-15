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
})