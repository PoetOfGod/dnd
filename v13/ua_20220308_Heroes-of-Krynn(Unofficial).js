/*  
    This script was written by Thravieus Windhelm and tested on v13.1.0+220114, Printer Friendly
    This is an unofficial script for the Unearthed Arcana: Heroes of Krynn
    This script is a work in progress, currently it only adds the Kender race and the Lunar Magic sorcerer subclass

    Version : 1.0alpha
    Date : 3/8/2022
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
})