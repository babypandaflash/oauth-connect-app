const passport = require("passport");
const TwitterStrategy = require("passport-twitter").Strategy;
const DiscordStrategy = require("passport-discord").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const users = {};

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => done(null, users[id]));

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CLIENT_ID,
  consumerSecret: process.env.TWITTER_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/twitter-callback`
}, (token, tokenSecret, profile, done) => {
  users[profile.id] = profile;
  done(null, profile);
}));

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/discord-callback`,
  scope: ["identify", "email"]
}, (accessToken, refreshToken, profile, done) => {
  users[profile.id] = profile;
  done(null, profile);
}));

passport.use(new GoogleStrategy({
  clientID: process.env.YOUTUBE_CLIENT_ID,
  clientSecret: process.env.YOUTUBE_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/youtube-callback`
}, (accessToken, refreshToken, profile, done) => {
  users[profile.id] = profile;
  done(null, profile);
}));

module.exports = passport;