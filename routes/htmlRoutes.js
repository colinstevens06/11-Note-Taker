// DEPENDENCIES
const path = require("path");

// ============================================
// ROUTES
// ============================================
module.exports = function(app) {
   // HTML GET requests
   app.get("/notes", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/notes.html"));
   });

   // connecting the CSS file
   app.get("/assets/css/styles.css", function(request, response) {
      response.sendFile(
         path.join(__dirname, "../public/assets/css/styles.css")
      );
   });

   // connecting the JS file
   app.get("/assets/js/index.js", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
   });

   // Default is to send user to the home page
   app.get("*", function(request, response) {
      response.sendFile(path.join(__dirname, "../public/index.html"));
   });
};
