Hooks.once("init", () => {
  // Override the bloodied icon path
  CONFIG.DND5E.bloodied.icon = "modules/bloodDrop-DnD5e/assets/bloodDrop.svg";
  console.log("Successfully updated the Bloodied icon!");
});
