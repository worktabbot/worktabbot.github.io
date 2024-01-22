export function workFixer(worksPull) {
    let fixedWorks = worksPull;

    // make simple find-and-replace corrections

    // workout and race distances

    fixedWorks = fixedWorks.replace(/ 1 furlong/g, " one furlong");
    fixedWorks = fixedWorks.replace(/ 2 furlongs/g, " two furlongs");
    fixedWorks = fixedWorks.replace(/ 3 furlongs/g, " three furlongs");
    fixedWorks = fixedWorks.replace(/ 4 furlongs/g, " four furlongs");
    fixedWorks = fixedWorks.replace(/ 5 furlongs/g, " five furlongs");
    fixedWorks = fixedWorks.replace(/ 6 furlongs/g, " six furlongs");
    fixedWorks = fixedWorks.replace(/ 7 furlongs/g, " seven furlongs");
    fixedWorks = fixedWorks.replace(/1 mile 70 yards/g, "one mile and 70 yards");
    fixedWorks = fixedWorks.replace(/1 mile 40 yards/g, "one mile and 40 yards");
    fixedWorks = fixedWorks.replace(/ 1 mile/g, " one mile");

    // months

    fixedWorks = fixedWorks.replace(/January/g, "Jan.");
    fixedWorks = fixedWorks.replace(/February/g, "Feb.");
    fixedWorks = fixedWorks.replace(/August/g, "Aug.");
    fixedWorks = fixedWorks.replace(/September/g, "Sept.");
    fixedWorks = fixedWorks.replace(/October/g, "Oct.");
    fixedWorks = fixedWorks.replace(/November/g, "Nov.");
    fixedWorks = fixedWorks.replace(/December/g, "Dec.");

    // verb tense

    fixedWorks = fixedWorks.replace(/This is h/g, "This was h");

    // tracks and training centers 

    fixedWorks = fixedWorks.replace(/Santa Anita Park/g, "Santa Anita");
    fixedWorks = fixedWorks.replace(/Oaklawn Park/g, "Oaklawn");
    fixedWorks = fixedWorks.replace(/Payson Park Training Center/g, "Payson Park");
    fixedWorks = fixedWorks.replace(/Palm Meadows Training Center/g, "Palm Meadows");
    fixedWorks = fixedWorks.replace(/San Luis Rey Training Center/g, "San Luis Rey");
    fixedWorks = fixedWorks.replace(/Hollywood Casino At Charles Town Races/g, "Charles Town");
    fixedWorks = fixedWorks.replace(/Belmont At The Big A/g, "Belmont at the Big A");
    fixedWorks = fixedWorks.replace(/Fort Lauderdale/g, "Ft. Lauderdale");

    // overseas track surfaces; name changes for races will always be manual

    fixedWorks = fixedWorks.replace(/on the T at Meydan/g, "on the turf at Meydan");
    fixedWorks = fixedWorks.replace(/on the D at Meydan/g, "on the dirt at Meydan");
    fixedWorks = fixedWorks.replace(/on the T at King Abdulaziz/g, "on the turf at King Abdulaziz");
    fixedWorks = fixedWorks.replace(/on the D at King Abdulaziz/g, "on the dirt at King Abdulaziz");
    fixedWorks = fixedWorks.replace(/on the T at Ascot/g, "on the turf at Ascot");

    // fix people's names
    fixedWorks = fixedWorks.replace(/Philip D'Amato/g, "Phil D'Amato");
    fixedWorks = fixedWorks.replace(/Victoria H\. Oliver/g, "Vicki Oliver");
    fixedWorks = fixedWorks.replace(/Ignacio Correas IV/g, "Ignacio Correas");
    fixedWorks = fixedWorks.replace(/Robert Reid Jr\./g, "Butch Reid");
    fixedWorks = fixedWorks.replace(/Victor Barboza Jr./g, "Victor Barboza");
    fixedWorks = fixedWorks.replace(/William D\. Cowans/g, "Doug Cowans");
    fixedWorks = fixedWorks.replace(/Richard E\. Dutrow Jr\./g, "Rick Dutrow");
    fixedWorks = fixedWorks.replace(/Richard Dutrow Jr\./g, "Rick Dutrow");
    fixedWorks = fixedWorks.replace(/Ronald Ellis/g, "Ron Ellis");
    fixedWorks = fixedWorks.replace(/Thomas Albertrani/g, "Tom Albertrani");
    fixedWorks = fixedWorks.replace(/Thomas Morley/g, "Tom Morley");
    fixedWorks = fixedWorks.replace(/Craig Lewis/g, "Craig Anthony Lewis");
    fixedWorks = fixedWorks.replace(/Jose D'Angelo/g, "Jose Francisco D'Angelo");
    fixedWorks = fixedWorks.replace(/Edward Plesa Jr./g, "Eddie Plesa");
    fixedWorks = fixedWorks.replace(/William Walden/g, "Will Walden");
    fixedWorks = fixedWorks.replace(/Philip Serpe/g, "Phil Serpe");
    fixedWorks = fixedWorks.replace(/Ronald Ellis/g, "Ron Ellis");
    fixedWorks = fixedWorks.replace(/Jr\.\./g, "Jr.");


    // INSERT SECTION THAT REMOVES MIDDLE INITIALS OF TRAINER NAMES WHEN WRITTEN
    // remove middle initials of trainer names
    fixedWorks = fixedWorks.replace(/(trainer \w+ ).\. /g, "$1");

    // expand "Handicap", and then fix race names with the H. string
    fixedWorks = fixedWorks.replace(/H\./g, "Handicap");
    fixedWorks = fixedWorks.replace(/Philip Handicap Iselin/g, "Philip H. Iselin");
    fixedWorks = fixedWorks.replace(/Handicap Allen Jerkens/g, "H. Allen Jerkens");
    fixedWorks = fixedWorks.replace(/HandicapB\.P\.A\./g, "H.B.P.A.")

    // race sponsors

    fixedWorks = fixedWorks.replace(/Acorn Presented by Great Jones Distilling Co\./g, "Acorn");
    fixedWorks = fixedWorks.replace(/AGS Ladies Marathon/g, "Ladies Marathon");
    fixedWorks = fixedWorks.replace(/Ainsworth Turf Sprint/g, "Turf Sprint");
    fixedWorks = fixedWorks.replace(/Alysheba presented by Sentient Jet/g, "Alysheba");
    fixedWorks = fixedWorks.replace(/American Turf presented by BMW/g, "American Turf");
    fixedWorks = fixedWorks.replace(/Appalachian Presented by Japan Racing Association/g, "Appalachian");
    fixedWorks = fixedWorks.replace(/Aristocrat Ladies Marathon/g, "Ladies Marathon");
    fixedWorks = fixedWorks.replace(/Belmont Presented by NYRA Bets/g, "Belmont");
    fixedWorks = fixedWorks.replace(/Big Ass Fans Breeders' Cup Dirt Mile/g, "Breeders' Cup Dirt Mile");
    fixedWorks = fixedWorks.replace(/Big Ass Fans Music City/g, "Music City");
    fixedWorks = fixedWorks.replace(/Caesars Belmont Derby Invitational/g, "Belmont Derby Invitational");
    fixedWorks = fixedWorks.replace(/Caesars Sportsbook /g, "");
    fixedWorks = fixedWorks.replace(/Castle & Key Bourbon/g, "Bourbon");
    fixedWorks = fixedWorks.replace(/Castle Hill Gaming Ladies Turf/g, "Ladies Turf");
    fixedWorks = fixedWorks.replace(/Claiborne Farm Swale/g, "Swale");
    fixedWorks = fixedWorks.replace(/Claiborne Breeders' Futurity/g, "Breeders' Futurity");
    fixedWorks = fixedWorks.replace(/Clark presented by Norton Healthcare/g, "Clark");
    fixedWorks = fixedWorks.replace(/Coolmore Turf Mile/g, "Turf Mile");
    fixedWorks = fixedWorks.replace(/Curlin Florida Derby Presented by Hill 'n' Dale Farms at Xalapa/g, "Florida Derby");
    fixedWorks = fixedWorks.replace(/Darley Alcibiades/g, "Alcibiades");
    fixedWorks = fixedWorks.replace(/Derby City Distaff presented by Kendall-Jackson Winery/g, "Derby City Distaff");
    fixedWorks = fixedWorks.replace(/FanDuel Breeders' Cup Mile Presented by PDJF/g, "Breeders' Cup Mile");
    fixedWorks = fixedWorks.replace(/FanDuel Racing Pacific Classic/g, "Pacific Classic");
    fixedWorks = fixedWorks.replace(/FanDuel Racing Del Mar Debutante/g, "Del Mar Debutante");
    fixedWorks = fixedWorks.replace(/Fasig-Tipton Belmont Oaks Invitational/g, "Belmont Oaks Invitational");
    fixedWorks = fixedWorks.replace(/Fasig-Tipton Fountain of Youth/g, "Fountain of Youth");
    fixedWorks = fixedWorks.replace(/Fasig-Tipton Saratoga Oaks Invitational/g, "Saratoga Oaks Invitational");
    fixedWorks = fixedWorks.replace(/First Lady Presented by UK HealthCare/g, "First Lady");
    fixedWorks = fixedWorks.replace(/Hagyard Fayette/g, "Fayette");
    fixedWorks = fixedWorks.replace(/Hanshin Presented by JRA/g, "Hanshin");
    fixedWorks = fixedWorks.replace(/Hill 'N' Dale Metropolitan H./g, "Metropolitan Handicap");
    fixedWorks = fixedWorks.replace(/Jackpocket Jaipur/g, "Jaipur");
    fixedWorks = fixedWorks.replace(/Keeneland Turf Mile/g, "Turf Mile");
    fixedWorks = fixedWorks.replace(/Kentucky Utilities Transylvania/g, "Transylvania");
    fixedWorks = fixedWorks.replace(/Kitten's Joy Appleton/g, "Appleton");
    fixedWorks = fixedWorks.replace(/La Troienne presented by Signify Health/g, "La Troienne");
    fixedWorks = fixedWorks.replace(/Lambholm South Tampa Bay Derby/g, "Tampa Bay Derby");
    fixedWorks = fixedWorks.replace(/Lexus Raven Run/g, "Raven Run");
    fixedWorks = fixedWorks.replace(/Lexus Raven Run/g, "Raven Run");
    fixedWorks = fixedWorks.replace(/Mint Ladies Sprint/g, "Kentucky Downs Ladies Sprint");
    fixedWorks = fixedWorks.replace(/Misty Bennett Pink Ribbon/g, "Pink Ribbon");
    fixedWorks = fixedWorks.replace(/National Thoroughbred League Dueling Grounds Derby/g, "Dueling Grounds Derby");
    fixedWorks = fixedWorks.replace(/New Kent County Virginia Derby/g, "Virginia Derby");
    fixedWorks = fixedWorks.replace(/Old Forester Bourbon Turf Classic/g, "Turf Classic");
    fixedWorks = fixedWorks.replace(/Pattison Singspiel/g, "Singspiel");
    fixedWorks = fixedWorks.replace(/Pegasus World Cup Invitational presented by 1\/ST BET/g, "Pegasus World Cup");
    fixedWorks = fixedWorks.replace(/Pegasus World Cup Turf Invitational presented by Baccarat/g, "Pegasus World Cup Turf Invitational");
    fixedWorks = fixedWorks.replace(/Qatar Racing Breeders' Cup Sprint/g, "Breeders' Cup Sprint");
    fixedWorks = fixedWorks.replace(/Queen Elizabeth II Challenge Cup Presented by Dixiana/g, "Queen Elizabeth II Challenge Cup");
    fixedWorks = fixedWorks.replace(/RUNHAPPY Malibu/g, "Malibu");
    fixedWorks = fixedWorks.replace(/RUNHAPPY Santa Anita Derby/g, "Santa Anita Derby");
    fixedWorks = fixedWorks.replace(/Rachel Alexandra presented by Fasig-Tipton/g, "Rachel Alexandra");
    fixedWorks = fixedWorks.replace(/Resorts World Casino Manhattan/g, "Manhattan");
    fixedWorks = fixedWorks.replace(/Resorts World Casino Sword Dancer/g, "Sword Dancer");
    fixedWorks = fixedWorks.replace(/Ricoh Woodbine Mile/g, "Woodbine Mile");
    fixedWorks = fixedWorks.replace(/Rubicon Valley View/g, "Valley View");
    fixedWorks = fixedWorks.replace(/Runhappy Del Mar Futurity/g, "Del Mar Futurity");
    fixedWorks = fixedWorks.replace(/Santa Anita H. presented by Yaamava' Resort & Casino/g, "Santa Anita Handicap");
    fixedWorks = fixedWorks.replace(/Saratoga Special Presented by Miller Lite/g, "Saratoga Special");
    fixedWorks = fixedWorks.replace(/Shadwell Turf Mile/g, "Turf Mile");
    fixedWorks = fixedWorks.replace(/Stonestreet Lexington/g, "Lexington");
    fixedWorks = fixedWorks.replace(/TVG Breeders' Cup Juvenile presented by Thoroughbred Aftercare Alliance/g, "Breeders' Cup Juvenile");
    fixedWorks = fixedWorks.replace(/Toyota Blue Grass/g, "Blue Grass");
    fixedWorks = fixedWorks.replace(/Twin Spires Turf Sprint/g, "Turf Sprint");
    fixedWorks = fixedWorks.replace(/TwinSpires Kentucky Cup Classic/g, "Kentucky Cup Classic");
    fixedWorks = fixedWorks.replace(/WinStar Gulfstream Park Mile/g, "Gulfstream Park Mile");

    // common sponsor names and "presented by" blocks

    fixedWorks = fixedWorks.replace(/ presented by FanDuel/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Maker's Mark /g, "");
    fixedWorks = fixedWorks.replace(/ presented by Baccarat/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Twinspires.com/g, "");
    fixedWorks = fixedWorks.replace(/Twinspires.com /g, "");
    fixedWorks = fixedWorks.replace(/ presented by Derby City Gaming/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by Resorts World Casino/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by NYRA Bets/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by Mohegan Sun/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by Tanqueray/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by Nassau County Industrial Development Agency/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by The Japan Racing Association/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by Caesars Sportsbook/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Kendall-Jackson Winery/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by Mint Gaming Hall/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Thoroughbred Aftercare Alliance/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Woodford Reserve/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by DK Horse/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Cohere Health/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by Keeneland Sales/g, "");
    fixedWorks = fixedWorks.replace(/ Presented by Case Tractor/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Forcht Bank/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Estrella Jalisco/g, "");
    fixedWorks = fixedWorks.replace(/ presented by Keeneland Sales/g, "");
    fixedWorks = fixedWorks.replace(/Exacta Systems /g, "");
    fixedWorks = fixedWorks.replace(/FanDuel Racing /g, "");
    fixedWorks = fixedWorks.replace(/FanDuel /g, "");
    fixedWorks = fixedWorks.replace(/Mohegan Sun /g, "");
    fixedWorks = fixedWorks.replace(/TVG /g, "");
    fixedWorks = fixedWorks.replace(/TVG.com /g, "");
    fixedWorks = fixedWorks.replace(/Longines /g, "");
    fixedWorks = fixedWorks.replace(/NetJets /g, "");
    fixedWorks = fixedWorks.replace(/Old Forester /g, "");

    // glitches in the script that pulls the CSV
    fixedWorks = fixedWorks.replace(/2022 Mark Mile/g, "2022 Maker's Mark Mile");

    // remove grade denotations from Breeders' Cup and Triple Crown races

    fixedWorks = fixedWorks.replace(/Breeders' Cup Classic \(G1\)/g, "Breeders' Cup Classic");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Distaff \(G1\)/g, "Breeders' Cup Distaff");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Sprint \(G1\)/g, "Breeders' Cup Sprint");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Filly and Mare Sprint \(G1\)/g, "Breeders' Cup Filly & Mare Sprint");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Turf \(G1\)/g, "Breeders' Cup Turf");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Filly and Mare Turf \(G1\)/g, "Breeders' Cup Filly and Mare Turf");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Turf Sprint \(G1\)/g, "Breeders' Cup Turf Sprint");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Mile \(G1\)/g, "Breeders' Cup Mile");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Dirt Mile \(G1\)/g, "Breeders' Cup Dirt Mile");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Juvenile \(G1\)/g, "Breeders' Cup Juvenile");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Juvenile Fillies \(G1\)/g, "Breeders' Cup Juvenile Fillies");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Juvenile Turf \(G1\)/g, "Breeders' Cup Juvenile Turf");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Juvenile Fillies Turf \(G1\)/g, "Breeders' Cup Juvenile Fillies Turf");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Juvenile Turf Sprint \(G1\)/g, "Breeders' Cup Juvenile Turf Sprint");
    fixedWorks = fixedWorks.replace(/Breeders' Cup Juvenile Turf Sprint \(G2\)/g, "Breeders' Cup Juvenile Turf Sprint");
    fixedWorks = fixedWorks.replace(/Kentucky Derby \(G1\)/g, "Kentucky Derby");
    fixedWorks = fixedWorks.replace(/Preakness \(G1\)/g, "Preakness");
    fixedWorks = fixedWorks.replace(/Belmont \(G1\)/g, "Belmont");

    // fix Breeders' Cup Filly & Mare races
    fixedWorks = fixedWorks.replace(/Breeders' Cup Filly and Mare/g, "Breeders' Cup Filly & Mare");

    // remove country abbreviations

    fixedWorks = fixedWorks.replace(/ \(GB\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(IRE\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(JPN\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(BRZ\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(ARG\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(FR\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(GER\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(PER\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(CHI\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(AUS\)/g, "");
    fixedWorks = fixedWorks.replace(/ \(NZ\)/g, "");


    // race placings

    fixedWorks = fixedWorks.replace(/placed 1st in/g, "won");
    fixedWorks = fixedWorks.replace(/placed 2nd/g, "placed second");
    fixedWorks = fixedWorks.replace(/placed 3rd/g, "placed third");
    fixedWorks = fixedWorks.replace(/placed 4th/g, "placed fourth");
    fixedWorks = fixedWorks.replace(/placed 5th/g, "placed fifth");
    fixedWorks = fixedWorks.replace(/placed 6th/g, "placed sixth");
    fixedWorks = fixedWorks.replace(/placed 7th/g, "placed seventh");
    fixedWorks = fixedWorks.replace(/placed 8th/g, "placed eighth");
    fixedWorks = fixedWorks.replace(/placed 9th/g, "placed ninth");

    // check for slowest works, and replace Xth fastest of X works with slowest of X works
    // if the work is in fact the slowest of the day for the distance/surface.

    // need to do this before the replace on workout rankings since otherwise
    // the number-based matching will fail.

    // the workout pull spells out "second fastest" but that makes the check fail
    // this is re-fixed in the next section

    fixedWorks = fixedWorks.replace(/ second fastest/g, " 2nd fastest");

    // edit text to just say "slowest" instead of, say, "45th fastest of 45"
    // when the work is the slowest of the day over the course and distance

    function slowCheck(worksList) {
        const slowRegEx = /((the )(\d+)\w\w fastest( of (\d+) works))/g

        function slowText(match, ...args) {
            const rank = args[2];
            const totalWorks = args[4];

            if (rank === totalWorks) {
                let slowStatement = args[1] + "slowest" + args[3];
                return slowStatement;
            } else {
                return args[0];
            }
        }

        const slowCheckedWorks = worksList.replace(slowRegEx, slowText);
        return slowCheckedWorks;
    }

    fixedWorks = slowCheck(fixedWorks);

    // workout rankings 

    fixedWorks = fixedWorks.replace(/ 2nd fastest/g, " second fastest");
    fixedWorks = fixedWorks.replace(/ 3rd fastest/g, " third fastest");
    fixedWorks = fixedWorks.replace(/ 4th fastest/g, " fourth fastest");
    fixedWorks = fixedWorks.replace(/ 5th fastest/g, " fifth fastest");
    fixedWorks = fixedWorks.replace(/ 6th fastest/g, " sixth fastest");
    fixedWorks = fixedWorks.replace(/ 7th fastest/g, " seventh fastest");
    fixedWorks = fixedWorks.replace(/ 8th fastest/g, " eighth fastest");
    fixedWorks = fixedWorks.replace(/ 9th fastest/g, " ninth fastest");
    fixedWorks = fixedWorks.replace(/fastest of 1 works/g, "only work");
    fixedWorks = fixedWorks.replace(/of 2 works/g, "of two works");
    fixedWorks = fixedWorks.replace(/of 3 works/g, "of three works");
    fixedWorks = fixedWorks.replace(/of 4 works/g, "of four works");
    fixedWorks = fixedWorks.replace(/of 5 works/g, "of five works");
    fixedWorks = fixedWorks.replace(/of 6 works/g, "of six works");
    fixedWorks = fixedWorks.replace(/of 7 works/g, "of seven works");
    fixedWorks = fixedWorks.replace(/of 8 works/g, "of eight works");
    fixedWorks = fixedWorks.replace(/of 9 works/g, "of nine works");
    fixedWorks = fixedWorks.replace(/fastest of two works/g, "faster of two works");
    fixedWorks = fixedWorks.replace(/slowest of two works/g, "slower of two works");

    // correct misspelling coming in from original pull

    fixedWorks = fixedWorks.replace(/eigth/g, "eighth");

    // race wins

    fixedWorks = fixedWorks.replace(/two time Grade/g, "two-time Grade");
    fixedWorks = fixedWorks.replace(/three time Grade/g, "three-time Grade");
    fixedWorks = fixedWorks.replace(/four time Grade/g, "four-time Grade");
    fixedWorks = fixedWorks.replace(/five time Grade/g, "five-time Grade");
    fixedWorks = fixedWorks.replace(/six time Grade/g, "six-time Grade");
    fixedWorks = fixedWorks.replace(/seven time Grade/g, "seven-time Grade");
    fixedWorks = fixedWorks.replace(/eight time Grade/g, "eight-time Grade");
    fixedWorks = fixedWorks.replace(/nine time Grade/g, "nine-time Grade");

    // time since last work 

    fixedWorks = fixedWorks.replace(/ 1 day/g, " one day");
    fixedWorks = fixedWorks.replace(/ 2 days/g, " two days");
    fixedWorks = fixedWorks.replace(/ 3 days/g, " three days");
    fixedWorks = fixedWorks.replace(/ 4 days/g, " four days");
    fixedWorks = fixedWorks.replace(/ 5 days/g, " five days");
    fixedWorks = fixedWorks.replace(/ 6 days/g, " six days");
    fixedWorks = fixedWorks.replace(/ 7 days/g, " seven days");
    fixedWorks = fixedWorks.replace(/ 8 days/g, " eight days");
    fixedWorks = fixedWorks.replace(/ 9 days/g, " nine days");

    // comma placement 

    fixedWorks = fixedWorks.replace(/ a Grade 1/g, ", a Grade 1");
    fixedWorks = fixedWorks.replace(/ a Grade 2/g, ", a Grade 2");
    fixedWorks = fixedWorks.replace(/ a Grade 3/g, ", a Grade 3");
    fixedWorks = fixedWorks.replace(/ a two-time G/g, ", a two-time G");
    fixedWorks = fixedWorks.replace(/ a three-time G/g, ", a three-time G");
    fixedWorks = fixedWorks.replace(/ a four-time G/g, ", a four-time G");
    fixedWorks = fixedWorks.replace(/ a five-time G/g, ", a five-time G");
    fixedWorks = fixedWorks.replace(/ a six-time G/g, ", a six-time G");
    fixedWorks = fixedWorks.replace(/ a seven-time G/g, ", a seven-time G");
    fixedWorks = fixedWorks.replace(/ an eight-time G/g, ", an eight-time G");
    fixedWorks = fixedWorks.replace(/ a nine-time G/g, ", a nine-time G");
    
    fixedWorks = fixedWorks.replace(/(\s\d\d\d\d)/g, ",$1"); 

    // comma placement, fixing for Derby workers who are not graded-stakes winners
    
    fixedWorks = fixedWorks.replace(/\), worked one/g, ") worked one");
    fixedWorks = fixedWorks.replace(/\), worked two/g, ") worked two");
    fixedWorks = fixedWorks.replace(/\), worked three/g, ") worked three");
    fixedWorks = fixedWorks.replace(/\), worked four/g, ") worked four");
    fixedWorks = fixedWorks.replace(/\), worked five/g, ") worked five");
    fixedWorks = fixedWorks.replace(/\), worked six/g, ") worked six");
    fixedWorks = fixedWorks.replace(/\), worked seven/g, ") worked seven");
    
    // Regex search for number, number, period, number, in order to add "seconds" after that pattern
    // parentheses in search string define each ##. Workout time is group $1, so this just puts
    // the text " seconds" after each of those groups.

    fixedWorks = fixedWorks.replace(/(\s\d\d\.\d)/g, "$1 seconds"); 

    // clear out any stray spaces at the end of parentheticals

    fixedWorks = fixedWorks.replace(/\s+\)/g, ")");

    function alphaOrder(worksList) {
        // turn the workouts into an array, with each line as an item
        // and then sort the array alphabetically
        let worksArray = worksList.split("\n");
        worksArray.sort();

        // do the one other linewise operation that needs to happen, a comma
        // placement fix that only applies to graded-stakes winners and not
        // Derby prospects who aren't graded winners yet

        worksArray.forEach((work, index) => {
            if (work.includes("Grade 1 winner") || work.includes("Grade 2 winner") || work.includes("Grade 3 winner")) {
                worksArray[index] = worksArray[index].replace(/ worked one/g, ", worked one");
                worksArray[index] = worksArray[index].replace(/ worked two/g, ", worked two");
                worksArray[index] = worksArray[index].replace(/ worked three/g, ", worked three");
                worksArray[index] = worksArray[index].replace(/ worked four/g, ", worked four");
                worksArray[index] = worksArray[index].replace(/ worked five/g, ", worked five");
                worksArray[index] = worksArray[index].replace(/ worked six/g, ", worked six");
                worksArray[index] = worksArray[index].replace(/ worked seven/g, ", worked seven");
            }
        });

        // rejoin the correctly ordered array into a string and return it
        let orderedWorksStr = worksArray.join('\n');
        return orderedWorksStr;
    }

    fixedWorks = alphaOrder(fixedWorks);

    // clean up the unnecessary extra lines at the end
    const extraLines = /<br><br>$/
    fixedWorks = fixedWorks.replace(extraLines, "");

    return fixedWorks;
}