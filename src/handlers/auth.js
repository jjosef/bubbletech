const admin = require('firebase-admin');
const _ = require('lodash');
const auth = admin.auth();

module.exports.whoami = async (req, res) => {
  const token = _.get(req, 'headers.authorization', ' ').split(' ')[1];
  try {
    const profile = await auth.verifyIdToken(token);
    const uReq = await auth.listUsers(2);
    if (uReq.users.length === 1) {
      // set admin claim
      auth.setCustomUserClaims(profile.uid, { admin: true });
      console.log(`Admin flag set for ${profile.email}`);
    }
    return res.json({ alive: true, profile });
  } catch (err) {
    console.log(err);
    res.json({ error: true, message: err.message });
  }
}
