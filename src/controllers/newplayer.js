/*const express= require('express');
const mongoose = require('mongoose');
const Player = require('../models/Player');
const bcrypt = require('bcrypt');
const sendResponse = require('../services/response')

// CREATE NEW PLAYER
exports.newplayer = (req,res) => {
  Player.remove({}); //>>¿Remove all isn't working?//
  let hash = bcrypt.hashSync(req.body.newData.password, 10);
  Player.create(
    { 
      name:req.body.newData.name,
      email:req.body.newData.email,
      password:hash,
    }, 
    (err,data)=>{ 
      sendResponse(res, err, data);
    }
    )
    //>To compare passwords:
    //console.log(bcrypt.compareSync(req.body.newData.password, hash));
  }
*/

