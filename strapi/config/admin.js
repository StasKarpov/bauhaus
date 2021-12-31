module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '814ad4d52d5dbeb6ed6dcc785fd4103d'),
  },
});
