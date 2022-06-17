import * as userTasks from "./../services/userServ"

import express, {RequestHandler} from 'express' 

import bcrypt from 'bcrypt' 


const createUser: RequestHandler = async (req, res) => { 
    const id = req.
