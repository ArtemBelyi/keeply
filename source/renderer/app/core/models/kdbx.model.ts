export type Group = {
  readonly uuid: Uuid;
  readonly name: string;
  readonly groups: Array<Group>;
  readonly entries: Array<Entry>;
}

type Uuid = {
  readonly id: string;
  readonly empty: boolean;
}

export type Entry = {
  readonly uuid: Uuid;
  readonly fields: EntryField;
}

type PasswordField = {
  readonly value: Uint8Array;
  readonly salt: Uint8Array;
};

type FieldKeys = 'Notes' | 'Password' | 'Title' | 'URL' | 'UserName';

type EntryField = Map<FieldKeys, string | PasswordField>;
