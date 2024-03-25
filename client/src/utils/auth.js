import { jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    return jwtDecode(this.getToken());
  }

  loggedIn() {
    // Checking login credentials and timeouts
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Get user credentials from storage
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    // Saving user credentials to local
    localStorage.setItem('id_token', idToken);

    window.location.assign('/');
  }

  logout() {
    // Clearing user history and reset application
    localStorage.removeItem('id_token');
    
    window.location.assign('/');
  }
}

export default AuthService();
