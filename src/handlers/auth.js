import admin from 'firebase-admin';
import _ from 'lodash';

let systemUsers = 0;

const whoami = async (req, res) => {
  const auth = admin.auth();
  const token = _.get(req, 'headers.authorization', ' ').split(' ')[1];
  try {
    const profile = await auth.verifyIdToken(token);
    if (systemUsers === 0) {
      const uReq = await auth.listUsers(2);
      systemUsers = uReq.users.length;
      if (systemUsers === 1) {
        // set admin claim
        auth.setCustomUserClaims(profile.uid, { admin: true });
        console.log(`Admin flag set for ${profile.email}`);
      }
    }
    return res.json({ alive: true, profile });
  } catch (err) {
    console.log(err);
    res.json({ error: true, message: err.message });
  }
};

export { whoami };
