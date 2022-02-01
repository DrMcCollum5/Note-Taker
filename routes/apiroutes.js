const router = require("express").Router();

const { v4: uuidv4 } = require("uuid");
const {
                    readFromFile,
                    readAndAppend,
                    writeToFile,
                  } = require('../helpers/fsUtils');

// router.get
// router.post
// router.delete


router.get('/', (req, res) => {
                    readFromFile('./db/db.json').then((notes) => res.json(JSON.parse(notes)));
                  });