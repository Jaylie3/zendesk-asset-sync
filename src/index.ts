/**
 * zendesk-asset-sync
 * Sync Zendesk tickets with a simple asset inventory model and status automations.
 */

export { ZendeskAssetSync } from "./typesafe-zendesk-client-for-ti";
export type { ZendeskAssetSyncOptions, ZendeskAssetSyncResult } from "./types";
export { ZendeskAssetSyncError, ConfigurationError, ValidationError } from "./errors";
