const dotenv = require("dotenv");

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

const CONFIG = {
  production: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    db: {
      url: process.env.DB_URL,
    },
    // firebase: {
    //   certConfig: {
    //     type: process.env.FB_CERT_TYPE,
    //     project_id: process.env.FB_CERT_PROJECT_ID,
    //     private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID,
    //     private_key: process.env.FB_CERT_PRIVATE_KEY,
    //     client_email: process.env.FB_CERT_CLIENT_EMAIL,
    //     client_id: process.env.FB_CERT_CLIENT_ID,
    //     auth_uri: process.env.FB_CERT_AUTH_URI,
    //     token_uri: process.env.FB_CERT_TOKEN_URI,
    //     auth_provider_x509_cert_url:
    //       process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
    //     client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
    //   },
    // },
  },
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    db: {
      url: process.env.DB_URL,
    },
    // firebase: {
    //   certConfig: {
    //     type: process.env.FB_CERT_TYPE,
    //     project_id: process.env.FB_CERT_PROJECT_ID,
    //     private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID,
    //     private_key: process.env.FB_CERT_PRIVATE_KEY,
    //     client_email: process.env.FB_CERT_CLIENT_EMAIL,
    //     client_id: process.env.FB_CERT_CLIENT_ID,
    //     auth_uri: process.env.FB_CERT_AUTH_URI,
    //     token_uri: process.env.FB_CERT_TOKEN_URI,
    //     auth_provider_x509_cert_url:
    //       process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
    //     client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
    //   },
    // },
  },
  test: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    client: {
      URL: process.env.CLIENT_URL || "http://localhost:3000",
    },
    db: {
      url: process.env.DB_URL,
    },
    // firebase: {
    //   certConfig: {
    //     type: process.env.FB_CERT_TYPE,
    //     project_id: process.env.FB_CERT_PROJECT_ID,
    //     private_key_id: process.env.FB_CERT_PRIVATE_KEY_ID,
    //     private_key: process.env.FB_CERT_PRIVATE_KEY,
    //     client_email: process.env.FB_CERT_CLIENT_EMAIL,
    //     client_id: process.env.FB_CERT_CLIENT_ID,
    //     auth_uri: process.env.FB_CERT_AUTH_URI,
    //     token_uri: process.env.FB_CERT_TOKEN_URI,
    //     auth_provider_x509_cert_url:
    //       process.env.FB_CERT_AUTH_PROVIDER_X_509_CERT_URL,
    //     client_x509_cert_url: process.env.FB_CERT_CLIENT_X_509_CERT_URL,
    //   },
    // },
  },
};

module.exports = CONFIG[ENV];
