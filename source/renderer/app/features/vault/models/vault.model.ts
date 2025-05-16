interface Vault {
  name: string;
  entries: Array<any>;
  groups: Array<any>;
}

export interface VaultState {
  vault: Vault;
  loading: boolean;
  error: string;
}

export interface File {
  db: Vault,
  success: boolean
}

export interface FileError {
  error: string,
  success: boolean
}
