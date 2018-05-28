/* eslint-disable max-len */

export const port = process.env.PORT || 3001;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const common = {
  api: {
    URL: process.env.PRO_SERVER || 'http://192.168.0.25:3006', // production code-push-server address
    devURL: process.env.DEV_SERVER || 'http://192.168.0.25:3006', // development code-push-server address
  },
};
