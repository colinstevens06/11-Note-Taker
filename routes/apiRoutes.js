// Load Data
// I'm linking the route to my JSON data
let dbJSON = require("../db/db");

// Routes ======================================================

module.exports = function(app) {
   // GET the api for the notes
   app.get("/api/notes", function(request, response) {
      response.json(dbJSON);
   });

   // add new items to the api when they are added
   app.post("/api/notes", function(request, response) {
      console.log("Post successful! Data logged:");
      console.log(response.req.body);
      dbJSON.push(response.req.body);
   });

   // delete items when the trashcan icon is pressed

   app.delete("/api/notes/:note", function(request, response) {
      console.log("hello");

      let newDbJSON = [];

      // console.log(response.req);
      // console.log(request.params.note);

      const thisNoteID = request.params.note;

      console.log(`\n =================== \n`);

      console.log("here's thisNoteID");
      console.log(thisNoteID);
      console.log(`\n =================== \n`);

      console.log("here's dbJSON");
      console.log(dbJSON);

      const noteToDelete = dbJSON.map(note => {
         if (note.id !== thisNoteID) {
            newDbJSON.push(note);

            // dbJSON = newDbJSON;
            // return dbJSON;
         }
      });
      console.log(`\n =================== \n`);

      console.log("here's newDbJSON");
      console.log(newDbJSON);

      dbJSON = newDbJSON;
   });
};

// * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

// * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//   * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
