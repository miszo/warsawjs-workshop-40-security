(() => {
  const $loginBtn = document.querySelector('.btn-login');
  const $logoutBtn = document.querySelector('.btn-logout');
  const $loggedUser = document.querySelector('.user-login');

  const USER_KEY = 'loggedUser';
  const AWESOME_LOGGED_USER = 'Miszo Radomski';

  const saveUserInfo = userName => {
    localStorage.setItem(USER_KEY, userName);
  };

  const readUserInfo = () => {
    return localStorage.getItem(USER_KEY);
  };

  const clearUserInfo = () => {
    localStorage.removeItem(USER_KEY);
  };

  const login = () => {
    $loggedUser.textContent = AWESOME_LOGGED_USER;
    saveUserInfo(AWESOME_LOGGED_USER);
  };

  const logout = () => {
    $loggedUser.textContent = 'Anonymous';
    clearUserInfo();
  };

  const init = () => {
    const isUserLoggedIn = !!readUserInfo();
    if (isUserLoggedIn) {
      $loggedUser.textContent = readUserInfo();
    }
    $loginBtn.addEventListener('click', login);
    $logoutBtn.addEventListener('click', logout);
  };

  init();
})();
