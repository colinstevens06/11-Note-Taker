// Dependencie ==================================================

const express = require("express");
const path = require("path");

// Setting up Express App

const app = express();
const PORT = 3000;

// Setting up the Express app to handle data parsing

app.use(express.urlenconded({ extended: true }));
app.use(express.json());

// Routes ======================================================

app.get("/notes", function(request, response) {
   response.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", function(request, response) {
   response.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/notes", function(request, response) {
   return response.json(path.join(__dirname, "./db/db.json"));
});

// * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

// * The following API routes should be created:

//   * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//   * POST `/api/notes` - Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//   * DELETE `/api/notes/:id` - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
