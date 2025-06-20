export default async function handler(req, res) {
  const code = req.query.code;
  const body = new URLSearchParams({
    code,
    grant_type: "authorization_code",
    client_id: process.env.TWITTER_CLIENT_ID,
    redirect_uri: process.env.TWITTER_REDIRECT_URI,
    code_verifier: "challenge"
  });

  const tokenRes = await fetch("https://api.twitter.com/2/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });
  const tokenData = await tokenRes.json();

  const userRes = await fetch("https://api.twitter.com/2/users/me", {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`
    }
  });
  const userData = await userRes.json();

  console.log("Twitter User:", userData);
  res.redirect("/?twitter=success");
}