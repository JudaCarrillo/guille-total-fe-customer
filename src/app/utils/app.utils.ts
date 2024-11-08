import { UserTypes } from "./constants";

export class Utils {
  public static isJson(item: any) {
    item = typeof item !== 'string' ? JSON.stringify(item) : item;

    try {
      item = JSON.parse(item);
    } catch (e) {
      return false;
    }

    if (typeof item === 'object' && item !== null) {
      return true;
    }

    return false;
  }

  public static setLocalStorageEncode(key: string, value: any): void {
    value = this.isJson(value) ? JSON.stringify(value) : value;
    localStorage.setItem(key, btoa(value));
  }

  public static getLocalStorageDecode(key: string): string | boolean {
    const value = localStorage.getItem(key);
    if (!value) return false;

    let decode = atob(value);
    decode = this.isJson(decode) ? JSON.parse(decode) : decode;
    return decode;
  }

  public static removeLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  public static isUserPremium(): boolean {
    const userData: any = this.getLocalStorageDecode('xUserData');
    if (!userData) return false;

    return userData?.user?.userType == UserTypes.PREMIUM;
  }
}
