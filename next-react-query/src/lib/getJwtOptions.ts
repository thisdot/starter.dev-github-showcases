// options for encrypting users JWT
export const getJwtOptions = () => ({
  encryption: true,
  secret: process.env.JWT_SECRET,
  signingKey: process.env.JWT_SIGNING_KEY,
  encryptionKey: process.env.JWT_ENCRYPTION_KEY,
});
