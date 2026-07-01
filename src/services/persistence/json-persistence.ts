export interface JsonPersistence<TValue> {
  read: () => TValue | null;
  write: (value: TValue) => void;
  clear: () => void;
}

export class LocalStorageJsonPersistence<TValue> implements JsonPersistence<TValue> {
  constructor(private readonly storageKey: string) {}

  read() {
    const rawValue = window.localStorage.getItem(this.storageKey);

    if (!rawValue) {
      return null;
    }

    try {
      return JSON.parse(rawValue) as TValue;
    } catch {
      this.clear();
      return null;
    }
  }

  write(value: TValue) {
    window.localStorage.setItem(this.storageKey, JSON.stringify(value));
  }

  clear() {
    window.localStorage.removeItem(this.storageKey);
  }
}
