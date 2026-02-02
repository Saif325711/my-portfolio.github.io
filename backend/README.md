# Backend Setup

## Environment Variables

This backend requires environment variables for email functionality.

### Setup Instructions:

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the `.env` file** and add your actual credentials:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Google App Password (NOT your regular password)

### How to Get Google App Password:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to **Security** > **2-Step Verification** (enable it if not already)
3. Search for **"App Passwords"**
4. Create a new app password for "Mail"
5. Copy the 16-digit code and paste it in your `.env` file

### ⚠️ Security Note:

- **NEVER** commit the `.env` file to Git
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Only share `.env.example` as a template
