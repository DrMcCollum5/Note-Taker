const router = require("express").Router();

const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils");

// router.get
// router.post
// router.delete

router.get("/", (req, res) => {
  readFromFile("./db/db.json").then((notes) => res.json(JSON.parse(notes)));
});


router.post('/', (req, res) => {
  console.log(req.body);

  const { title, text, } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding Note');
  }
});
module.exports=router;