# zendesk-asset-sync

Sync Zendesk tickets with a simple asset inventory model and status automations.

## Installation

```bash
npm install zendesk-asset-sync
```

## Quick Start

```typescript
import { ZendeskAssetSync } from "zendesk-asset-sync";

const instance = new ZendeskAssetSync();
const result = await instance.run();
console.log(result);
```

## Features

- Type-safe Zendesk client for tickets, users, and organizations
- Asset-to-ticket linking via custom fields and tags
- Rules engine for auto-updating asset status from ticket events
- Import/export assets as CSV/JSON for non-technical staff

## API Reference

### `ZendeskAssetSync`

#### Constructor

```typescript
new ZendeskAssetSync(options?: ZendeskAssetSyncOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<ZendeskAssetSyncResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
