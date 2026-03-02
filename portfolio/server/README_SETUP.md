Setup Firebase and initial admin

1. Create a Firebase project and generate a service account key JSON (IAM & Admin -> Service Accounts -> Create Key).
2. Place the downloaded JSON in `portfolio/server/` (or anywhere)
3. Run the helper to create `.env`:

   node setupEnvFromServiceAccount.js path/to/serviceAccountKey.json

4. Review `portfolio/server/.env`, replace `JWT_SECRET` and `ADMIN_SETUP_TOKEN` with strong values.
5. Start the server:

   cd portfolio/server
   npm install
   npm run dev

6. Register initial admin (one-time). Replace values and use your ADMIN_SETUP_TOKEN:

   curl -X POST http://localhost:5000/api/auth/register \
     -H "x-setup-token: your-ADMIN_SETUP_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"email":"you@example.com","password":"StrongP@ssw0rd"}'

7. Login from client at `/#/admin/login` using the same credentials. The client stores the JWT in `localStorage.token`.
8. After login, use admin UI to add/edit projects and blogs.

Notes:
- Keep your service account JSON private. Do NOT commit it to git.
- In production, set `VITE_API_URL` to your backend URL in the frontend environment variables.
