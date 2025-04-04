Hooks.once("init", () => {
  // Override the bloodied icon path
  CONFIG.DND5E.bloodied.icon = "assets/bloodied.webp";
  console.log("Successfully updated the Bloodied icon!");
});