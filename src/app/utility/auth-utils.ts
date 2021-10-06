export class AuthUtils {
  private static authToken = 'auth_token';

  static getAuthToken() {
    return localStorage.getItem(AuthUtils.authToken);
  }

  static setAuthToken(value) {
    localStorage.setItem(AuthUtils.authToken, value);
  }

  static removeAuthToken() {
    localStorage.removeItem(AuthUtils.authToken);
  }
}
