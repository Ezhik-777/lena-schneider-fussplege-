/**
 * Environment variable validation
 * Ensures all required environment variables are present at runtime
 */

export function validateEnv() {
  const required = [
    'TELEGRAM_BOT_TOKEN',
    'TELEGRAM_CHAT_ID',
  ];

  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `❌ Missing required environment variables:\n` +
      `   ${missing.join('\n   ')}\n\n` +
      `Please check your .env.local file and ensure all variables are set.\n` +
      `See .env.example for required variables.`
    );
  }

  // Validate format of Telegram token
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (token && !token.match(/^\d+:[A-Za-z0-9_-]+$/)) {
    console.warn(
      '⚠️  Warning: TELEGRAM_BOT_TOKEN format looks incorrect.\n' +
      '   Expected format: 123456789:ABCdefGHIjklMNOpqrsTUVwxyz'
    );
  }

  // Validate Chat ID format
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (chatId && !chatId.match(/^-?\d+$/)) {
    console.warn(
      '⚠️  Warning: TELEGRAM_CHAT_ID format looks incorrect.\n' +
      '   Expected format: -1234567890 or 1234567890'
    );
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('✅ Environment variables validated successfully');
  }
}

// Validate on module load in production
if (process.env.NODE_ENV === 'production') {
  validateEnv();
}
