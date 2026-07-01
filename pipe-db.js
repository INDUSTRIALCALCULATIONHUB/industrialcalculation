function generatePipeDB() {
  const density = 7850;

  const pipeTable = [];

  // =========================
  // SMALL BORE PIPES (IS 1239 style)
  // =========================
  const smallPipes = [
    { nb: 15, inch: "1/2", od: 21.3, sizes: [
      { cls: "LIGHT", t: 2.00 },
      { cls: "MEDIUM", t: 2.65 },
      { cls: "HEAVY", t: 3.25 }
    ]},

    { nb: 20, inch: "3/4", od: 26.9, sizes: [
      { cls: "LIGHT", t: 2.30 },
      { cls: "MEDIUM", t: 2.65 },
      { cls: "HEAVY", t: 3.25 }
    ]},

    { nb: 25, inch: "1", od: 33.7, sizes: [
      { cls: "LIGHT", t: 2.60 },
      { cls: "MEDIUM", t: 3.25 },
      { cls: "HEAVY", t: 4.05 }
    ]},

    { nb: 32, inch: "1 1/4", od: 42.4, sizes: [
      { cls: "LIGHT", t: 2.60 },
      { cls: "MEDIUM", t: 3.25 },
      { cls: "HEAVY", t: 4.05 }
    ]},

    { nb: 40, inch: "1 1/2", od: 48.3, sizes: [
      { cls: "LIGHT", t: 3.00 },
      { cls: "MEDIUM", t: 3.25 },
      { cls: "HEAVY", t: 4.05 }
    ]},

    { nb: 50, inch: "2", od: 60.3, sizes: [
      { cls: "LIGHT", t: 3.00 },
      { cls: "MEDIUM", t: 3.65 },
      { cls: "HEAVY", t: 4.50 }
    ]},

    { nb: 65, inch: "2 1/2", od: 76.1, sizes: [
      { cls: "MEDIUM", t: 3.65 },
      { cls: "HEAVY", t: 4.85 }
    ]},

    { nb: 80, inch: "3", od: 88.9, sizes: [
      { cls: "MEDIUM", t: 4.05 },
      { cls: "HEAVY", t: 5.15 }
    ]},

    { nb: 100, inch: "4", od: 114.3, sizes: [
      { cls: "MEDIUM", t: 4.50 },
      { cls: "HEAVY", t: 5.40 }
    ]},

    { nb: 125, inch: "5", od: 139.7, sizes: [
      { cls: "MEDIUM", t: 4.85 },
      { cls: "HEAVY", t: 5.40 }
    ]},

    { nb: 150, inch: "6", od: 168.3, sizes: [
      { cls: "MEDIUM", t: 4.85 },
      { cls: "HEAVY", t: 5.40 }
    ]}
  ];

  // =========================
  // LARGE PIPES (IS 3589 pattern)
  // =========================
  const largePipes = [
    { nb: 200, od: 219.1 },
    { nb: 250, od: 273.0 },
    { nb: 300, od: 323.9 },
    { nb: 350, od: 355.6 },
    { nb: 400, od: 406.4 },
    { nb: 450, od: 457.0 },
    { nb: 500, od: 508.0 },
    { nb: 550, od: 559.0 },
    { nb: 600, od: 610.0 },
    { nb: 650, od: 660.0 },
    { nb: 700, od: 711.0 },
    { nb: 750, od: 762.0 },
    { nb: 800, od: 813.0 },
    { nb: 850, od: 864.0 },
    { nb: 900, od: 914.0 },
    { nb: 1000, od: 1016.0 },
    { nb: 1050, od: 1067.0 },
    { nb: 1100, od: 1118.0 },
    { nb: 1200, od: 1220.0 },
    { nb: 1300, od: 1320.0 },
    { nb: 1400, od: 1422.0 },
    { nb: 1500, od: 1524.0 },
    { nb: 1600, od: 1626.0 },
    { nb: 1800, od: 1829.0 },
    { nb: 2000, od: 2032.0 }
  ];

  const largeThicknesses = [6.30, 7.10, 8.20, 9.50, 12.50, 16.00, 20.00, 25.00];

  // =========================
  // BUILD SMALL PIPES
  // =========================
  smallPipes.forEach(p => {
    p.sizes.forEach(s => {
      pipeTable.push({
        nb: p.nb,
        inch: p.inch,
        class: s.cls,
        od_mm: p.od,
        thickness_mm: s.t,
        standard: "IS 1239",
        density_kg_m3: density
      });
    });
  });

  // =========================
  // BUILD LARGE PIPES
  // =========================
  largePipes.forEach(p => {
    largeThicknesses.forEach(t => {
      pipeTable.push({
        nb: p.nb,
        od_mm: p.od,
        thickness_mm: t,
        standard: "IS 3589",
        density_kg_m3: density
      });
    });
  });

  return {
    pipe: {
      description: "AUTO GENERATED PIPE DATABASE (NB 15 TO NB 2000)",
      items: pipeTable
    }
  };
}

// Example usage:
const db = generatePipeDB();
console.log(JSON.stringify(db, null, 2));
