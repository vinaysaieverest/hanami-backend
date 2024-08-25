const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
import{ Data}  from "./model";
const app = express();
app.use('/',router);
router.get('/items', async (req: any, res:any )=>{
    try {
        const results = await Data.find()
        res.json(results);
        
    } catch (e) {
        console.error(e);
        res.send("Error is Occured");
    }
  });

  module.exports = router 