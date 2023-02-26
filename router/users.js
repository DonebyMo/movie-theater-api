const express = require("express");
const router = express.Router();
const { User } = require("../models/index.js");
const { check, validationResult } = require("express-validator");
