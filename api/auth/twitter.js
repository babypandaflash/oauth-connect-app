export default async function handler(req, res) {
  const params = new URLSearchParams({
    response_type: "code",
    client_id: process.env.TWITTER_CLIENT_ID,
    redirect_uri: process.env.TWITTER_REDIRECT_URI,
    scope: "tweet.read users.read offline.access",
    state: "babypanda",
    code_challenge: "challenge",
    code_challenge_method: "plain"
  });
  res.redirect(`https://twitter.com/i/oauth2/authorize?${params}`);
}