// import express from 'express';
// import passport from 'passport';
// import { logout, myProfile } from '../controllers/user.js';
// import { isAuthenticated } from '../middlewares/auth.js';

// const router = express.Router();

// // router.get(
// // 	'/googlelogin',
// // 	passport.authenticate('google', {
// // 		scope: ['profile', 'email'],
// // 	})
// // passport.authenticate('google'),
// // // temporary  comment upper code because we don't have frontend part
// // );

// router.get(
// 	'/login',
// 	passport.authenticate('google', (req, res, next) => {
// 		res.send('Logged In');
// 	})
// );
// //

// router.get('/me', isAuthenticated, myProfile); //after login
// router.get('/logout', logout);

// export default router;

import express from 'express';
import passport from 'passport';
import {
	getAdminStats,
	getAdminUsers,
	logout,
	myProfile,
} from '../controllers/user.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.get(
	'/googlelogin',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

router.get(
	'/login',
	passport.authenticate('google', {
		successRedirect: process.env.FRONTEND_URL,
	})
);

router.get('/me', isAuthenticated, myProfile);

router.get('/logout', logout);

// Admin Routes
router.get('/admin/users', isAuthenticated, authorizeAdmin, getAdminUsers);

router.get('/admin/stats', isAuthenticated, authorizeAdmin, getAdminStats);

export default router;
