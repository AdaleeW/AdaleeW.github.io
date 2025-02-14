$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
    createPlatform(1350, 400, 50, 50, "pink");
    createPlatform(0, 300, 100, 50, "pink");
    createPlatform(300, 250, 100, 50, "pink");
    createPlatform(480, 500, 150, 50, "pink");
    createPlatform(400, 150, 100, 20, "pink");
    createPlatform(200, 600, 100, 20, "pink");
    createPlatform(100, 0, 100, 20, "pink");
    createPlatform(800, 450, 100, 20, "pink");
    createPlatform(1100, 400, 100, 20, "pink");
    // TODO 3 - Create Collectables");
    createCollectable("database", 400, 110, 0.6, 0.9);
    createCollectable("database", 200, 550, 0.6, 0.9);
    createCollectable("database", 1350, 350, 0.6, 0.9);
    // TODO 4 - Create Cannons
    createCannon("left", 540, 3000);
    createCannon("right", 300, 2000);
    createCannon("bottom", 600, 2000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
