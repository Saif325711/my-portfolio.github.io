import fs from 'fs';
import path from 'path';

// Usage: node setupEnvFromServiceAccount.js path/to/serviceAccountKey.json
const argv = process.argv.slice(2);
if (argv.length === 0) {
  console.error('Usage: node setupEnvFromServiceAccount.js path/to/serviceAccountKey.json');
  process.exit(1);
}

const keyPath = path.resolve(argv[0]);
if (!fs.existsSync(keyPath)) {
  console.error('File not found:', keyPath);
  process.exit(1);
}

const raw = fs.readFileSync(keyPath, 'utf-8');
let obj;
try { obj = JSON.parse(raw); } catch (e) { console.error('Invalid JSON'); process.exit(1); }

const env = [];
env.push(`# Generated from ${path.basename(keyPath)} - review before use`);
env.push(`FIREBASE_PROJECT_ID=${obj.project_id}`);
env.push(`FIREBASE_CLIENT_EMAIL=${obj.client_email}`);
// Escape newlines in private key
const pk = obj.private_key.replace(/\n/g, '\\n');
env.push(`FIREBASE_PRIVATE_KEY="${pk}"`);
env.push(`JWT_SECRET=change_this_to_a_random_value`);
env.push(`ADMIN_SETUP_TOKEN=one-time-setup-token`);
env.push(`ALLOWED_ORIGINS=http://localhost:5174`);
env.push(`PORT=5000`);

const dest = path.join(process.cwd(), '.env');
fs.writeFileSync(dest, env.join('\n') + '\n', 'utf-8');
console.log('Wrote .env to', dest);
console.log('Now run: npm run dev (in server) and register admin with header x-setup-token');
