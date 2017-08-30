// =============== Google OAuth Login ================//
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
// call User model to load something into it
const User = mongoose.model('users');
const keys = require('./keys');
// Call serializeUser with the user to generate the identifying piece of
// information to then be used by passport to set-up a cookie. Use user.id that
// is assigned to the user by mongo "_id"
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// We will take the user.id which we stuck in a cookie and turn it back into an
// actual User model.
passport.deserializeUser((id, done) => {
    User
        .findById(id)
        .then(user => {
            done(null, user);
        });
});

// Create new instance of Google Strategy Create a new user if one doesn't
// already exist.
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: 'https://devguide2017.herokuapp.com/auth/google/callback',
    proxy: true
}, (accessToken, refreshToken, profile, done) => {
    //console.log("profile", profile);
    User
        .findOne({googleId: profile.id})
        .then(existingUser => {
            // we already have a record in the database
            if (existingUser) {
                done(null, existingUser);
            } else {
                new User({googleId: profile.id})
                    .save()
                    .then(user => done(null, user));
            }
        });
}));
