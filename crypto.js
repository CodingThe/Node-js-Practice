const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const message = "Hello Crypto World!";
const password = "myStrongPassword123!";
const hmacKey = "superSecretKeyForHMAC";

// HASHING
const hashed = crypto.createHash('sha256')
  .update(password)
  .digest('hex');
console.log("\nSHA256 Hash:");
console.log(hashed);

// HMAC
const hmac = crypto.createHmac('sha256', hmacKey)
  .update(message)
  .digest('hex');
console.log("\nHMAC (SHA256 + Key):");
console.log(hmac);

// ENCRYPTION
const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
let encrypted = cipher.update(message, 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log("\nAES Encrypted Message:");
console.log(encrypted);

// DECRYPTION
const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log("\nAES Decrypted Message:");
console.log(decrypted);
