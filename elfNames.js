// Elf Names

var elfFNames = [
	"Gareth",
	"Ferris",
	"Daroth",
	"Spaeth",
	"Farragamo",
	"Daffyd",
	"Llwellyn",
	"Aed",
	"Alun",
	"Andras",
	"Aneirin",
	"Berwyn",
	"Bleddyn",
	"Bran",
	"Brychan",
	"Bryn",
	"Brynmor",
	"Bryson",
	"Caddock",
	"Cadmen",
	"Cadogan",
	"Cadwaladr",
	"Cadwallon",
	"Caerwyn",
	"Cledwyn",
	"Cynan",
	"Cyndell",
	"Cystenian",
	"Dafod",
	"Dawfydd",
	"Deinoi",
	"Dewi",
	"Drystan",
	"Dylan",
	"Einion",
	"Emlyn",
	"Emrys",
	"Emyr",
	"Folant",
	"Foible",
	"Gavin",
	"Glendower",
	"Gethin",
	"Griffuthed",
	"Gwailter",
	"Gwyn",
	"Heddyn",
	"Howell",
	"Huw",
	"Hywell",
	"Urien",
	"Rheinalt",
	"Rhodri",
	"Rhys",
	"Rolant",
	"Wyn",
	"Abadda",
	"Adresin",
	"Aermhar",
	"Agis",
	"Ajaar",
	"Albondiel",
	"Alosrin",
	"Andaerean",
	"Aolis",
	"Aravilar",
	"Argus",
	"Arlen",
	"Aubric",
	"Aumanas",
	"Baerithryn",
	"Belstram",
	"Bialaer",
	"Cameron",
	"Chozzaster",
	"Cohnal",
	"Corym",
	"Dakath",
	"Darfin",
	"Delsaran",
	"Droth",
	"Dyffros",
	"Edwyrd",
	"Eilauver",
	"Elanjar",
	"Eldaernth",
	"Elenshaer",
	"Elion",
	"Elorshin",
	"Emmyth",
	"Eriladar",
	"Erolith",
	"Ettrian",
	"Faahresc",
	"Falael",
	"Fflar",
	"Filvendor",
	"Flinar",
	"Gaelin",
	"Ganamede",
	"Giilvas",
	"Goronyyv",
	"Haemir",
	"Haldreithen",
	"Halueth",
	"Hatharal",
	"Hubyr",
	"Ilbryn",
	"Ilitharath",
	"Ilrune",
	"Inialos",
	"Iolrath",
	"Ivósaar",
	"Iyriklaunavan",
	"Jassin",
	"Jharak",
	"Jonik",
	"Kahvoerm",
	"Keletheryl",
	"Keryth",
	"Khatar",
	"Khuumal",
	"Kivessin",
	"Korrigash",
	"Kuskyn",
	"Lafarallin",
	"Larrel",
	"Leayonadas",
	"Lianthorn",
	"Lorsan",
	"Lyari",
	"Maendellyn",
	"Malgath",
	"Melandrach",
	"Methild",
	"Miilaethorn",
	"Mlartlar",
	"Montagor",
	"Mourn",
	"Myronthilar",
	"Naeryndam",
	"Nelaeryn",
	"Nesterin",
	"Nindrol",
	"Norlorn",
	"Nylian",
	"Oenel",
	"Olithir",
	"Ondroth",
	"Orndacil",
	"Orym",
	"Othorion",
	"Paulorin",
	"Pirphal",
	"Pyrravym",
	"Quastarte",
	"Ralikanthae",
	"Rauthomyr",
	"Rennyn",
	"Rhalyf",
	"Rhistel",
	"Riluaneth",
	"Ruardh",
	"Ruvaen",
	"Ryfon",
	"Saevel",
	"Seanchai",
	"Shael",
	"Shaundyl",
	"Siirist",
	"Skalanis",
	"Sudryl",
	"Sythaeryn",
	"Taeral",
	"Tamnaeuth",
	"Tannyll",
	"Tarathiel",
	"Tasar",
	"Teirist",
	"Thallan",
	"Thurruvyn",
	"Tordynnar",
	"Triandal",
	"Tyvollus",
	"Seiveril",
	"Sudryl",
	"Tamnaeuth",
	"Tolthe",
	"Uldreiyn",
	"Uthorim",
	"Vander",
	"Vesperr",
	"Vhoori",
	"Waernas",
	"Wyn",
	"Xalph",
	"Xharlion",
	"Ylyndar",
	"Zandro",
	"Zhoron",
	"Abarat",
	"Aduce",
	"Aesar",
	"Aglanthol",
	"Akhelbhen",
	"Alinar",
	"Althidon",
	"Andrathath",
	"Aquilan",
	"Arbane",
	"Arkhun",
	"Arun",
	"Aubron",
	"Aumrauth",
	"Belanor",
	"Beluar",
	"Braern",
	"Chaalmyth",
	"Chylnoth",
	"Conall",
	"Cymbiir",
	"Dannyd",
	"Darthoridan",
	"Dhoelath",
	"Druindar",
	"Earynspieir",
	"Edyrm",
	"Elaethan",
	"Elashor",
	"Eldar",
	"Elephon",
	"Elkhazel",
	"Elpaerae",
	"Entrydal",
	"Erlan",
	"Eschallus",
	"Euchoé",
	"Faelar",
	"Faoraar",
	"Fhaornik",
	"Filverel",
	"Foxfire",
	"Galaeron",
	"Gantar",
	"Giullio",
	"Grathgor",
	"Haladavar",
	"Halflar",
	"Halueve",
	"Hiflanyl",
	"Iefyr",
	"Illianaro",
	"Illithor",
	"Ilthuryn",
	"Injros",
	"Itham",
	"Ivran",
	"Jandar",
	"Jhaan",
	"Jharym",
	"Jorildyn",
	"Kalaerede",
	"Kelvhan",
	"Kesefehon",
	"Khidell",
	"Khyrmn",
	"Kiyuigh",
	"Kroloth",
	"Kymil",
	"Lamruil",
	"Lashul",
	"Leojym",
	"Llarm",
	"Luirlan",
	"Lyklor",
	"Maeraddyth",
	"Mardeiym",
	"Melisander",
	"Mhaenal",
	"Miirphys",
	"Mlossae",
	"Morgan",
	"Myrddin",
	"Mythanthar",
	"Napraeleon",
	"Nelaeryn",
	"Nevarth",
	"Ninthalor",
	"Nremyn",
	"Nym",
	"Ohmbryn",
	"Onas",
	"Onvyr",
	"Ornthalas",
	"Oslarelar",
	"Paeral",
	"Phaendar",
	"Pleufan",
	"Pywaln",
	"Quynn",
	"Ralnor",
	"Rauvelore",
	"Reptar",
	"Rhangyl",
	"Rhothomir",
	"Rolim",
	"Ruehar",
	"Ruven",
	"Ryul",
	"Sakrattars",
	"Seith",
	"Shammath",
	"Shevarash",
	"Silvyr",
	"Sontar",
	"Sundamar",
	"Taanyth",
	"Taerntym",
	"Tamsin",
	"Tanseril",
	"Taredd",
	"Tassarion",
	"Tenyajn",
	"Thatoryl",
	"Tiarshus",
	"Toross",
	"Triktappic",
	"Saelethil",
	"Sharian",
	"Sythaeryn",
	"Tanyl",
	"Traeliorn",
	"Uldreiyn",
	"Vaalyun",
	"Vartan",
	"Vesryn",
	"Vhoorhin",
	"Wistari",
	"Wyndelleu",
	"Xanotter",
	"Yalathanil",
	"Ynloeth",
	"Zaor",
	"Zulae",
	"Adamar",
	"Aelrindel",
	"Aeson",
	"Ainésilver",
	"Akkar",
	"Allain",
	"Amrynn",
	"Anfalen",
	"Araevin",
	"Ardreth",
	"Arkiem",
	"Ascal",
	"Aulathar",
	"Avourel",
	"Beldroth",
	"Bhyrindaar",
	"Brindarry",
	"Chathanglas",
	"Cluhurach",
	"Connak",
	"Cystenn",
	"Daratrine",
	"Deldrach",
	"Divisav",
	"Durlan",
	"Edansyr",
	"Ehlark",
	"Elaith",
	"Elbauthin",
	"Eldrin",
	"Elhieardacil",
	"Ellisar",
	"Eltaor",
	"Erendriel",
	"Erlathan",
	"Estelar",
	"Evindal",
	"Faelyn",
	"Felaern",
	"Fhociin",
	"Finufaranell",
	"Fylson",
	"Galan",
	"Garrik",
	"Glarald",
	"Haalaari",
	"Halafarin",
	"Halgondas",
	"Haryk",
	"Hoccar",
	"Ievos",
	"Ilimitar",
	"Illitran",
	"Ilyndrathyl",
	"Intevar",
	"Ithraides",
	"Iymbryl",
	"Jannalor",
	"Jhaartael",
	"Jhuvik",
	"Josidiah",
	"Katar",
	"Kendel",
	"Khaalindaan",
	"Khiiral",
	"Khyssoun",
	"Klaern",
	"Kuornos",
	"Kyrtaar",
	"Laosx",
	"Lathai",
	"Lhombaerth",
	"Llewellenar",
	"Luthais",
	"Lysanthir",
	"Maeral",
	"Marikoth",
	"Merellien",
	"Mi’tilarro",
	"Mirthal",
	"Molonym",
	"Morthil",
	"Myriil",
	"Naertho",
	"Narbeth",
	"Neldor",
	"Nhamashal",
	"Nlossae",
	"Nuvian",
	"Nyvorlas",
	"Olaurae",
	"Oncith",
	"Orist",
	"Ornthalas",
	"Otaehryn",
	"Paeris",
	"Pharom",
	"Purtham",
	"Pyxaanthal,",
	"Raeranthur",
	"Rathal",
	"Reluraun",
	"Respen",
	"Rhenalyrr",
	"Rhys",
	"Rotheloe",
	"Ruith",
	"Ruvyn",
	"Ryvvik,",
	"Samblar",
	"Selanlar",
	"Sharian",
	"Shonassir",
	"Simimar",
	"Srindin",
	"Sylvar",
	"Taegen",
	"Taleisin",
	"Tanithil",
	"Tanyl",
	"Tarosspur",
	"Tathaln",
	"Tethir",
	"Thiilthan",
	"Tlannatar",
	"Traeliorn",
	"Tsaer",
	"Saevel",
	"Skalanis",
	"Taenaran",
	"Tarathiel",
	"Ualair",
	"Urddusk",
	"Vaeril",
	"Velethuil",
	"Vesstan",
	"Volodar",
	"Wylchyr",
	"Wyqhael",
	"Xhalh",
	"Yeschant",
	"Zabbas",
	"Zaos",
	"Adorellan",
	"Aerendyl",
	"Afamrail",
	"Aithlin",
	"Alabyran",
	"Alok",
	"Anarallath",
	"Anlyth",
	"Arandron",
	"Ardryll",
	"Arl",
	"Athtar",
	"Aulauthar",
	"Baerdelcoam",
	"Bellas",
	"Biafyndar",
	"Buttorwyr",
	"Cheyrth",
	"Cluym",
	"Cornaith",
	"Dalyor",
	"Darcassan",
	"Delmuth",
	"Drannor",
	"Durothil",
	"Edicûve",
	"Ehrendil",
	"Elandorr",
	"Elbereth",
	"Elénaril",
	"Elidyr",
	"Elorfindar",
	"Eltargrim",
	"Erglareo",
	"Eroan",
	"Ethlando",
	"Eyrynnhv",
	"Faeranduil",
	"Fenian",
	"Filarion",
	"Flardryn",
	"Gaeleath",
	"Galather",
	"Garynnon",
	"Glorandal",
	"Hachaam",
	"Halamar",
	"Halpaeril",
	"Hastos",
	"Horith",
	"Ihimbraskar",
	"Iliphar",
	"Ilphas",
	"Inchel",
	"Iolas",
	"Ivlisar",
	"Iyrandrar",
	"Jaonos",
	"Jhaeros",
	"Jonas",
	"Juppar",
	"Katyr",
	"Kerym",
	"Kharis",
	"Khilseith",
	"Kindroth",
	"Kolvar",
	"Kuskyn",
	"Laeroth",
	"Larongar",
	"Lathlaeril",
	"Lhoris",
	"Llombaerth",
	"Luvon",
	"Maasli",
	"Maiele",
	"Marlevaur",
	"Merith",
	"Mihangyl",
	"Mirthal",
	"Molostroi",
	"Mothrys",
	"Myrin",
	"Naeryndam",
	"Nardual",
	"Neldor",
	"Nieven",
	"Nopos",
	"Nyaalsir",
	"Oacenth",
	"Olinsivver",
	"Ondabrar",
	"Orlpar",
	"Ortauré",
	"Otaerhyn",
	"Passilorris",
	"Phraan",
	"Pyrder",
	"Qildor",
	"Raibyr",
	"Raunaeril",
	"Reluvethel",
	"Rhaac'var",
	"Rhespen",
	"Rilitar",
	"Rothilion",
	"Rumathil",
	"Rychell",
	"Sadalymn",
	"Sandevv",
	"Selgauth",
	"Sharlario",
	"Shyrrik",
	"Sinaht",
	"Strohm",
	"Symkalr",
	"Taeglyn",
	"Tammson",
	"Tannivh",
	"Taranath",
	"Tarron",
	"Tehlmar",
	"Thalanil",
	"Thurdan",
	"Tolthe",
	"Travaran",
	"Tsiilmas",
	"Sakrattars",
	"Sinaht",
	"Tannivh",
	"T’karon",
	"Uevareth",
	"Usunaar",
	"Valmaxian",
	"Venali",
	"Vhoadan",
	"Voron",
	"Wylym",
	"Wyrran",
	"Xhalth",
	"Yhendorn",
	"Zaltarish",
	"Zelphar",
	];

var elfLNames = [
	"Naste",
	"Quickgrass",
	"Willowleaves",
	"Vineheld",
	"Aelasar",
	"Aelorothi",
	"Aendryr",
	"Aerasumé",
	"Aeravansel",
	"Agayous",
	"Agrivar",
	"Ahmaquissar",
	"Alaenree",
	"Alantar",
	"Alavara",
	"Alastrarra",
	"Alenuath",
	"Alerothi",
	"Alluth",
	"Aloevan",
	"Aluianti",
	"Aluviirsaan",
	"Amalith",
	"Amarallis",
	"Amaratharr",
	"Amarthen",
	"Ammath",
	"Amrallatha",
	"Anuaer",
	"Argentaamn",
	"Arren",
	"Ash",
	"Ashgrove",
	"Audark",
	"Auglamyr",
	"Auglathla",
	"Aunglor",
	"Autumnfire",
	"Bellas",
	"Berethryl",
	"Berilan",
	"Bharaclaiev",
	"Bhephel",
	"Blackhelm",
	"Braegen",
	"Briarbosk",
	"Brightcloak",
	"Brightsong",
	"Brightwing",
	"Caersaelk",
	"Calaudra",
	"Calauth",
	"Camusiil",
	"Cathdeiryn",
	"Ceretlan",
	"Chaadren",
	"Chamaranthe",
	"Clatharla",
	"Cormyth",
	"Coudoarluth",
	"Craulnober",
	"Crystalembers",
	"Dahast",
	"Dawnhorn",
	"Dhorinshyl",
	"Dlardrageth",
	"Doedance",
	"Donnathlascen",
	"Dracoseir",
	"Dree",
	"Duirsar",
	"Durothil",
	"Duskmere",
	"Duthjuth",
	"Ealoeth",
	"Echorn",
	"Elaéyadar",
	"Elassidil",
	"Elian",
	"Ellarian",
	"Elond",
	"Eluarshee",
	"Ereuvyn",
	"Erkowe",
	"Erladden",
	"Eroth",
	"Erlshade",
	"Estelda",
	"Evanara",
	"Eveningfall",
	"Everlove",
	"Evioro",
	"Eyriendor",
	"Faerondaerl",
	"Faerondarl",
	"Falanae",
	"Felinaun",
	"Fellmirr",
	"Fenmarel",
	"Fflannidan",
	"Floshin",
	"Fynnasla",
	"Gildenguard",
	"Goadulphyn",
	"Goldenleaf",
	"Gourael",
	"Greencloak",
	"Gwaelon",
	"Haell",
	"Haerlgent",
	"Haladar",
	"Hawksong",
	"Haevaul",
	"Halavanthlarr",
	"Hlarr",
	"Hyshaanth",
	"Iazymnal",
	"Ibryiil",
	"Ilbaereth",
	"Ilbenalu",
	"Ildacer",
	"Ildroun",
	"Iliathor",
	"Iliathorr",
	"Ilnatar",
	"Immeril",
	"Ipyllasc",
	"Irian",
	"Irithyl",
	"Ithruen",
	"Iydril",
	"Jaglene",
	"Kadelaryn",
	"Kelerandri",
	"Kelpor’ral",
	"Keove",
	"Kevanarial",
	"Korianthil",
	"Kraok",
	"Laelithar",
	"Laralytha",
	"Larenthanil",
	"Larethian",
	"Laughingwater",
	"Leafbower",
	"Leafsigil",
	"Le’Quella",
	"Lharithlyn",
	"Lhoril",
	"Llundlar",
	"Loceath",
	"Lightshiver",
	"Maendellyn",
	"Maerdrym",
	"Melruth",
	"Meirityn",
	"M'Haaren",
	"Miritar",
	"Mistrivvin",
	"Mistwinter",
	"Mithalvarin",
	"Moonbow",
	"Moondown",
	"Moonflower",
	"Moonglade",
	"Moonglamaer",
	"Moonsnow",
	"Moonweather",
	"Morningdove",
	"Mornmist",
	"Mrhulaedir",
	"Nacnar",
	"Naelgrath",
	"Narlbeth",
	"Neirdre",
	"Nelnueve",
	"Never",
	"Nhachashaal",
	"Nhaéslal",
	"Nharimlur",
	"Nightstar",
	"Nightwing",
	"Nihmedu",
	"Ni’Tessine",
	"Nierde",
	"Nightmeadow",
	"Nimesin",
	"Nlossae",
	"Nolbrae",
	"Nyamtharsar",
	"Nyntynel",
	"Oakstaff",
	"Oakwood",
	"Olortynnal",
	"Olyrnn",
	"Omberdawn",
	"Ongluth",
	"Orama",
	"Orbryn",
	"Ortauré",
	"Oumryn",
	"Phenthae",
	"Pholont",
	"Presrae",
	"Q'Naepp",
	"Rachiilstar",
	"Raedrimn",
	"Raryndur",
	"Reithel",
	"Revven",
	"Rhaevaern",
	"Rhothomir",
	"Rhuidhen",
	"Rhyllgallohyr",
	"Rivleam",
	"Rivvikyn",
	"Runemaster",
	"Sarsantyr",
	"Selakiir",
	"Selmer",
	"Selorn",
	"Shadowmantle",
	"Shadowwater",
	"Shaeremae",
	"Shaethe",
	"Shalandalan",
	"Sharrith",
	"Shaurlanglar",
	"Shraiee",
	"Shyr",
	"Sicafei",
	"Siltral",
	"Silverbow",
	"Silverhand",
	"Silveroak",
	"Silverspear",
	"Sinaran",
	"Slenderbow",
	"Spellstalker",
	"Soryn",
	"Srinshee",
	"Starnar",
	"Starbrow",
	"Starglance",
	"Starglow",
	"Starym",
	"Stillhawk",
	"Stilmyst",
	"Straeth",
	"Strongbow",
	"Suldusk",
	"Sultaasar",
	"Summerstars",
	"Sunweaver",
	"Swordstar",
	"Symbaern",
	"Talandren",
	"Talesspur",
	"Tamlyranth",
	"Tanagathor",
	"Tarnruth",
	"Tarsap",
	"Tarsis",
	"Tassarion",
	"Taurntyrith",
	"Tellynnan",
	"Teshurr",
	"Thea",
	"Tlanbourn",
	"Tohrthaal",
	"Toralynnsyr",
	"Tornglara",
	"Torthtan",
	"Toryvhallen",
	"Trueshot",
	"Tsornyl",
	"Tyrneladhelu",
	"Uirthur",
	"Ulondarr",
	"Ulongyr",
	"Vandiir",
	"Veverell",
	"Vispasial",
	"Vyshaan",
	"Waelvor",
	"Whitethistle",
	"Windstar",
	"Windwalker",
	"Xantrani",
	"Yeschant",
	"Yhendorn",
	"Yraueme",
	"Yridnae",
	"Yundraer",
	];