const router = require("express").Router();

const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils");


router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((notes) => res.json(JSON.parse(notes)));
});

router.get('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((note) => JSON.parse(note))
    .then((json) => {
      const result = json.filter((note) => note.id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    });
});


router.post('/', (req, res) => {
  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding Note');
  }
});

// DELETE Route for a specific Note
router.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((note) => JSON.parse(note))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});

module.exports=router;