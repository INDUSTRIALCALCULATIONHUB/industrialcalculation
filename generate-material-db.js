const fs = require("fs");

// ---------------- DENSITY DEFAULT ----------------
const DEFAULT_DENSITY = 7850;

// ---------------- PLATE / SHEET ----------------
const plateSheet = {
  description: "LIST OF PLATE / SHEET",
  default_density_kg_m3: DEFAULT_DENSITY,
  items: [
    { type: "SHEET", thickness_mm: 1, label: "SHEET 1 mm THK" },
    { type: "SHEET", thickness_mm: 1.2, label: "SHEET 1.2 mm THK" },
    { type: "SHEET", thickness_mm: 1.5, label: "SHEET 1.5 mm THK" },
    { type: "SHEET", thickness_mm: 2, label: "SHEET 2 mm THK" },
    { type: "SHEET", thickness_mm: 2.5, label: "SHEET 2.5 mm THK" },
    { type: "SHEET", thickness_mm: 3, label: "SHEET 3 mm THK" },
    { type: "SHEET", thickness_mm: 4, label: "SHEET 4 mm THK" },

    { type: "PLATE", thickness_mm: 5, label: "PLATE 5 mm THK" }
  ]
};

// ---------------- GENERIC SIZE FORMATTER ----------------
const fmt = (arr, makeItem) => arr.map(makeItem);

// ---------------- ANGLE ----------------
const angleSizes = [
  [20,20,3],[25,25,3],[25,25,5],[30,30,3],[30,30,5],
  [35,35,5],[40,40,5],[40,40,6],[45,45,5],[45,45,6],
  [50,50,5],[50,50,6],[60,60,6],[65,65,6],[65,65,8],
  [70,70,6],[75,75,6],[75,75,8],[75,75,10],
  [80,80,8],[90,90,8],[90,90,10],
  [100,100,8],[100,100,10],[100,100,12],
  [110,110,10],[130,130,10],[150,150,12],
  [200,200,15],[200,200,18]
];

const angle = {
  description: "LIST OF ANGLE",
  default_density_kg_m3: DEFAULT_DENSITY,
  items: fmt(angleSizes, s => ({
    size_mm: `${s[0]}x${s[1]}x${s[2]}`,
    label: `ANGLE ${s[0]} × ${s[1]} × ${s[2]} mm`
  }))
};

// ---------------- CHANNEL ----------------
const channelSizes = [
  "75x40x4.8","100x50x5.0","125x65x5.3","150x75x5.7",
  "175x75x6.0","200x75x6.2","225x80x6.5","250x80x7.2",
  "300x90x7.8","350x100x8.1","400x100x8.8"
];

const channel = {
  description: "LIST OF CHANNEL (ISMC as per IS 808)",
  default_density_kg_m3: DEFAULT_DENSITY,
  items: channelSizes.map(s => ({
    size_mm: s,
    label: `ISMC ${s.replaceAll("x"," × ")} mm`
  }))
};

// ---------------- BEAM ----------------
const beamSizes = [
  "100x75","125x75","150x80","175x90","200x100","225x110",
  "250x125","300x140","350x140","400x140","450x150",
  "500x180","550x190","600x210"
];

const beam = {
  description: "LIST OF BEAM (ISMB as per IS 808)",
  default_density_kg_m3: DEFAULT_DENSITY,
  items: beamSizes.map(s => ({
    size_mm: s,
    label: `ISMB ${s.replaceAll("x"," × ")} mm`
  }))
};

// ---------------- ROUND BAR ----------------
const roundBarSizes = [
  6,8,10,12,14,16,18,20,22,25,28,30,32,36,40,45,50,
  56,60,65,70,75,80,90,100,110,120
];

const round_bar = {
  description: "LIST OF ROUND BAR",
  default_density_kg_m3: DEFAULT_DENSITY,
  items: roundBarSizes.map(d => ({
    diameter_mm: d,
    label: `ROUND BAR ${d} mm`
  }))
};

// ---------------- MATERIAL LIST (EXAMPLE: PIPE) ----------------
const pipe_material_recommended = {
  description: "Material recommended for Pipe",
  items: [
    "IS 1239","IS 3589",
    "ASTM A53 Gr A","ASTM A53 Gr B",
    "ASTM A106 Gr B","ASTM A106 Gr C",
    "SA 106 Gr B","SA 106 Gr C",
    "SS 304","SS 304L","SS 316","SS 316L"
  ].map(g => ({ grade: g }))
};

// ---------------- FINAL DB ----------------
const materialDB = {
  plate_sheet: plateSheet,
  angle,
  channel,
  beam,
  round_bar,
  pipe_material_recommended
};

// ---------------- WRITE FILE ----------------
fs.writeFileSync(
  "material-db.json",
  JSON.stringify(materialDB, null, 2)
);

console.log("material-db.json generated successfully!");
