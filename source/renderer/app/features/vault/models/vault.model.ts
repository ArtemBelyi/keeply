import { Group } from "../../../core/models/kdbx.model";

interface Vault {
  name: string;
  groups: Array<Group>;
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
