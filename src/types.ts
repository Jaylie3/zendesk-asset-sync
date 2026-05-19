/**
 * Configuration options for ZendeskAssetSync.
 */
export interface ZendeskAssetSyncOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Type-safe Zendesk client for tickets, users, and organizations
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Asset-to-ticket linking via custom fields and tags
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: Rules engine for auto-updating asset status from ticket events
   */
  feature3?: Record<string, unknown>;

  /**
   * Configuration for: Import/export assets as CSV/JSON for non-technical staff
   */
  feature4?: Record<string, unknown>;
}

/**
 * Result returned by ZendeskAssetSync operations.
 */
export interface ZendeskAssetSyncResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
