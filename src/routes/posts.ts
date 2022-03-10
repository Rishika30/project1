import express from "express";
const router = express.Router();
import {signup, login, token, view, viewPost, add, update, deactivate,activate, ensureToken} from "../controller/posts";
import {isAuthenticatedValidator, createPostValidator} from "../validator/index";
import {verifyEmail} from "../emailVerification/verify";

router.use('/user', ensureToken);
router.post("/signup", isAuthenticatedValidator, signup);
router.post('/login', isAuthenticatedValidator,login);
router.post('/token', token);
router.get('/user/:id/data',view);
router.get('/user/:id/viewPost', viewPost);
router.post('/user/:id/data', createPostValidator,add);
router.patch('/user/:id/data',update);
router.get('/user/:id/deactivate', deactivate);
router.get('/user/:id/activate',activate);
router.get('/verify/:userId/:uniqueString', verifyEmail);

export= router;