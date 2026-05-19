/**
 * Custom error classes for zendesk-asset-sync.
 */

/**
 * Base error class for all ZendeskAssetSync errors.
 */
export class ZendeskAssetSyncError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "ZENDESKASSETSYNC_ERROR") {
    super(message);
    this.name = "ZendeskAssetSyncError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends ZendeskAssetSyncError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends ZendeskAssetSyncError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends ZendeskAssetSyncError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
