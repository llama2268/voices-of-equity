/**
 * The chapter roster.
 *
 * One list, used by both the directory on /get-involved/chapters and the
 * map on the impact page, so the two can never drift apart.
 *
 * No president names: chapter leadership turns over every year, so a name
 * here is wrong by default within months of being published. Founding year
 * is stable, so that is what the card carries.
 *
 * `coordinates` are [longitude, latitude]. The map projection is
 * geoAlbersUsa, which only draws the United States, so the international
 * chapters carry no coordinates and appear in the directory alone.
 */
export interface Chapter {
  name: string;
  region: "Northeast" | "Midwest" | "South" | "West Coast" | "Mountain West" | "International";
  foundingYear: string;
  logo?: string;
  coordinates?: [number, number];
}

const ICON = "/icons/chapters/";

export const chapters: Chapter[] = [
  // ─── Northeast ──────────────────────────────────────────────────────
  { name: "Amherst College", region: "Northeast", foundingYear: "2025", logo: `${ICON}amherst.png`, coordinates: [-72.517, 42.3709] },
  { name: "Binghamton University", region: "Northeast", foundingYear: "2025", logo: `${ICON}binghamton.png`, coordinates: [-75.9683, 42.0887] },
  { name: "Brown University", region: "Northeast", foundingYear: "2025", logo: `${ICON}Brown University.png`, coordinates: [-71.4025, 41.8268] },
  { name: "Carnegie Mellon University", region: "Northeast", foundingYear: "2025", logo: `${ICON}Carnegie Mellon University.png`, coordinates: [-79.9426, 40.4433] },
  { name: "Columbia University", region: "Northeast", foundingYear: "2025", logo: `${ICON}columbia-university.png`, coordinates: [-73.9626, 40.8075] },
  { name: "Cornell University", region: "Northeast", foundingYear: "2025", logo: "/partners/cornell.png", coordinates: [-76.4735, 42.4534] },
  { name: "CUNY Hunter College", region: "Northeast", foundingYear: "2026", logo: `${ICON}cuny-hunter-college.png`, coordinates: [-73.9645, 40.7686] },
  { name: "Franklin & Marshall College", region: "Northeast", foundingYear: "2025", logo: `${ICON}franklinmashall.png`, coordinates: [-76.3055, 40.0432] },
  { name: "Harvard University", region: "Northeast", foundingYear: "2026", logo: "/partners/harvard.png", coordinates: [-71.1167, 42.377] },
  { name: "Ithaca College", region: "Northeast", foundingYear: "2025", logo: `${ICON}Formal_Seal_of_Ithaca_College_Ithaca_NY_USA.svg.png`, coordinates: [-76.4966, 42.4224] },
  { name: "Massachusetts Institute of Technology", region: "Northeast", foundingYear: "2025", logo: `${ICON}Massachusetts Institute of Technology (MIT).png`, coordinates: [-71.0942, 42.3601] },
  { name: "Mount Holyoke College", region: "Northeast", foundingYear: "2025", logo: `${ICON}mount-holyoke-college.png`, coordinates: [-72.575, 42.2556] },
  { name: "New York University", region: "Northeast", foundingYear: "2025", logo: `${ICON}New York University.png`, coordinates: [-73.9965, 40.7295] },
  { name: "Northeastern University", region: "Northeast", foundingYear: "2025", logo: `${ICON}Northeastern University (Boston).png`, coordinates: [-71.0892, 42.3398] },
  { name: "Princeton University", region: "Northeast", foundingYear: "2025", logo: `${ICON}Princeton University.png`, coordinates: [-74.6551, 40.3431] },
  { name: "Stony Brook University", region: "Northeast", foundingYear: "2025", logo: `${ICON}stony-brook-university.png`, coordinates: [-73.1237, 40.9126] },
  { name: "Swarthmore College", region: "Northeast", foundingYear: "2026", logo: `${ICON}swarthmore-college.png`, coordinates: [-75.3538, 39.9046] },
  { name: "University of Connecticut", region: "Northeast", foundingYear: "2025", logo: `${ICON}University of Connecticut.png`, coordinates: [-72.254, 41.8077] },
  { name: "University of Massachusetts Amherst", region: "Northeast", foundingYear: "2025", logo: `${ICON}umass-amherst.png`, coordinates: [-72.53, 42.3868] },
  { name: "University of Pennsylvania", region: "Northeast", foundingYear: "2026", logo: `${ICON}University of Pennsylvania.png`, coordinates: [-75.1932, 39.9522] },
  { name: "University of Pittsburgh", region: "Northeast", foundingYear: "2025", logo: `${ICON}University of Pittsburgh.png`, coordinates: [-79.9533, 40.4444] },
  { name: "Ursinus College", region: "Northeast", foundingYear: "2025", logo: `${ICON}ursinus-college.png`, coordinates: [-75.4557, 40.1934] },
  { name: "Vassar College", region: "Northeast", foundingYear: "2025", logo: `${ICON}vassar.png`, coordinates: [-73.8959, 41.6866] },
  { name: "Yale University", region: "Northeast", foundingYear: "2026", logo: `${ICON}yale-university.png`, coordinates: [-72.9223, 41.3163] },

  // ─── Midwest ────────────────────────────────────────────────────────
  { name: "Carleton College", region: "Midwest", foundingYear: "2025", logo: `${ICON}simplified-carleton-symbol.png`, coordinates: [-93.1547, 44.4619] },
  { name: "Grinnell College", region: "Midwest", foundingYear: "2025", logo: `${ICON}grinnell-college.png`, coordinates: [-92.7219, 41.7477] },
  { name: "Loyola University Chicago", region: "Midwest", foundingYear: "2026", logo: `${ICON}loyola-university-chicago.png`, coordinates: [-87.658, 41.9997] },
  { name: "Ohio University", region: "Midwest", foundingYear: "2025", logo: `${ICON}Ohio University.png`, coordinates: [-82.1013, 39.3242] },
  { name: "Purdue University", region: "Midwest", foundingYear: "2025", logo: `${ICON}Purdue University - West Lafayette.png`, coordinates: [-86.9212, 40.4237] },
  { name: "Saint Louis University", region: "Midwest", foundingYear: "2025", logo: `${ICON}saint-louis-university.png`, coordinates: [-90.2334, 38.6362] },
  { name: "St. Cloud State University", region: "Midwest", foundingYear: "2025", logo: `${ICON}st-cloud-state-university.png`, coordinates: [-94.1497, 45.551] },
  { name: "The Ohio State University", region: "Midwest", foundingYear: "2025", logo: `${ICON}The Ohio State University - Columbus.png`, coordinates: [-83.0305, 40.0067] },
  { name: "University of Illinois Urbana-Champaign", region: "Midwest", foundingYear: "2025", logo: `${ICON}University of Illinois at Urbana-Champaign.png`, coordinates: [-88.2272, 40.102] },
  { name: "University of Michigan", region: "Midwest", foundingYear: "2025", logo: `${ICON}University of Michigan-Ann Arbor.png`, coordinates: [-83.7382, 42.278] },
  { name: "University of Notre Dame", region: "Midwest", foundingYear: "2025", logo: `${ICON}university-of-notre-dame.png`, coordinates: [-86.2379, 41.7001] },
  { name: "Washington University in St. Louis", region: "Midwest", foundingYear: "2025", logo: `${ICON}washu.png`, coordinates: [-90.305, 38.6488] },

  // ─── South ──────────────────────────────────────────────────────────
  { name: "Duke University", region: "South", foundingYear: "2026", logo: `${ICON}duke-university.png`, coordinates: [-78.9382, 36.0014] },
  { name: "Emory University", region: "South", foundingYear: "2025", logo: `${ICON}Emory University.png`, coordinates: [-84.324, 33.7925] },
  { name: "Emory University, Oxford College", region: "South", foundingYear: "2026", logo: `${ICON}Emory University.png`, coordinates: [-83.8674, 33.6218] },
  { name: "Florida International University", region: "South", foundingYear: "2026", logo: `${ICON}florida-international-university.png`, coordinates: [-80.376, 25.7573] },
  { name: "Furman University", region: "South", foundingYear: "2025", logo: `${ICON}furman-university.png`, coordinates: [-82.4392, 34.9243] },
  { name: "Georgia Institute of Technology", region: "South", foundingYear: "2025", logo: `${ICON}Georgia Institute of Technology.png`, coordinates: [-84.3963, 33.7756] },
  { name: "Howard University", region: "South", foundingYear: "2025", logo: `${ICON}Howard_University_seal.svg.png`, coordinates: [-77.0202, 38.9227] },
  { name: "James Madison University", region: "South", foundingYear: "2025", logo: `${ICON}james-madison-university.png`, coordinates: [-78.8689, 38.4344] },
  { name: "Johns Hopkins University", region: "South", foundingYear: "2025", logo: `${ICON}johns-hopkins-university.png`, coordinates: [-76.6205, 39.3299] },
  { name: "University of Arkansas", region: "South", foundingYear: "2025", logo: `${ICON}arkansas.png`, coordinates: [-94.174, 36.0684] },
  { name: "University of Central Florida", region: "South", foundingYear: "2025", logo: `${ICON}ucf.png`, coordinates: [-81.2001, 28.6024] },
  { name: "University of Florida", region: "South", foundingYear: "2025", logo: `${ICON}University of Florida.png`, coordinates: [-82.3549, 29.6436] },
  { name: "University of Georgia", region: "South", foundingYear: "2025", logo: `${ICON}university-of-georgia.png`, coordinates: [-83.3776, 33.948] },
  { name: "University of Maryland", region: "South", foundingYear: "2025", logo: `${ICON}university-of-maryland.png`, coordinates: [-76.9426, 38.9869] },
  { name: "University of Miami", region: "South", foundingYear: "2025", logo: `${ICON}university-of-miami.png`, coordinates: [-80.2781, 25.7215] },
  { name: "University of North Carolina at Chapel Hill", region: "South", foundingYear: "2025", logo: `${ICON}University of North Carolina at Chapel Hill.png`, coordinates: [-79.0469, 35.9049] },
  { name: "University of South Carolina", region: "South", foundingYear: "2025", logo: `${ICON}south-carolina.png`, coordinates: [-81.0272, 33.9937] },
  { name: "University of South Florida", region: "South", foundingYear: "2025", logo: `${ICON}university-of-south-florida.png`, coordinates: [-82.4139, 28.0587] },
  { name: "University of Texas at Austin", region: "South", foundingYear: "2025", logo: `${ICON}The University of Texas at Austin.png`, coordinates: [-97.736, 30.2849] },
  { name: "University of Virginia", region: "South", foundingYear: "2025", logo: `${ICON}university-of-virginia.png`, coordinates: [-78.508, 38.0336] },
  { name: "Virginia Commonwealth University", region: "South", foundingYear: "2025", logo: `${ICON}Virginia Commonwealth University.png`, coordinates: [-77.452, 37.5485] },

  // ─── West Coast ─────────────────────────────────────────────────────
  { name: "Pomona College", region: "West Coast", foundingYear: "2026", logo: `${ICON}pomona-college.png`, coordinates: [-117.7117, 34.0972] },
  { name: "University of California, Berkeley", region: "West Coast", foundingYear: "2026", logo: `${ICON}uc-berkeley.png`, coordinates: [-122.2585, 37.8719] },
  { name: "University of California, Los Angeles", region: "West Coast", foundingYear: "2025", logo: `${ICON}University of California Los Angeles.png`, coordinates: [-118.4452, 34.0689] },
  { name: "University of California, Riverside", region: "West Coast", foundingYear: "2026", logo: `${ICON}University of California Riverside.png`, coordinates: [-117.3281, 33.9737] },
  { name: "University of San Diego", region: "West Coast", foundingYear: "2025", logo: `${ICON}san-diego.png`, coordinates: [-117.1881, 32.772] },
  { name: "University of Southern California", region: "West Coast", foundingYear: "2026", logo: `${ICON}University of Southern California.png`, coordinates: [-118.2851, 34.0224] },
  { name: "Washington State University", region: "West Coast", foundingYear: "2025", logo: `${ICON}washington-state-university.png`, coordinates: [-117.1539, 46.7319] },

  // ─── Mountain West ──────────────────────────────────────────────────
  { name: "Brigham Young University", region: "Mountain West", foundingYear: "2025", logo: `${ICON}brigham-young-university.png`, coordinates: [-111.6493, 40.2518] },
  { name: "University of Colorado Boulder", region: "Mountain West", foundingYear: "2025", logo: `${ICON}University of Colorado at Boulder.png`, coordinates: [-105.2705, 40.0076] },
  { name: "University of Utah", region: "Mountain West", foundingYear: "2026", logo: `${ICON}University of Utah.png`, coordinates: [-111.8421, 40.7649] },

  // ─── International ──────────────────────────────────────────────────
  { name: "McGill University", region: "International", foundingYear: "2025", logo: `${ICON}McGill University.png` },
  { name: "University of Toronto", region: "International", foundingYear: "2025", logo: `${ICON}university-of-toronto.png` },
];
