export interface AppContext {
  request?: {
    body?: Record<string, unknown>;
    query?: Record<string, unknown>;
    params?: Record<string, unknown>;
    ip?: string;
    headers?: Record<string, unknown>;
    cookies?: Record<string, unknown>;
  };
  log: (...args: unknown[]) => void;
  runFunction: (name: string) => Promise<unknown> | void;
}
