# Project Preferences

## Style Guidelines

- No emojis in code or UI - they don't fit the aesthetic
- Keep interactions subtle and purposeful
- Prefer text/symbols over emoji for UI indicators

## Deployment

- **Platform**: AWS Amplify
- **Branch**: main
- **Node version**: 16 (`nvm use 16`)
- **Build commands**: `npm ci` then `npm run build`

### Troubleshooting

If Amplify build fails with "Missing from lock file" errors:
```bash
rm package-lock.json && npm install
```
Then commit and push the regenerated lock file.
