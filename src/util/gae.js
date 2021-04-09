const admin = require('firebase-admin');

module.exports.gae_loader = () => {
  if (process.env.NODE_ENV === 'production') {
    admin.initializeApp();
    console.log("Authenticated with firebase-admin");
  } else {
    admin.initializeApp({
      credential: admin.credential.applicationDefault()
    });
    console.log('Authenticated locally with firebase-admin');
  }
}