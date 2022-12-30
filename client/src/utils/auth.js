class AuthService {

  loggedIn() {
    const token = this.getToken();
     return token;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}

export default new AuthService();
