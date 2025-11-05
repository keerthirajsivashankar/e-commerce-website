// components/Header.js

export const Header = () => {
  return `
        <header class="main-header">
            <nav class="nav-links">
                <a href="#" onclick="router.navigate('/')">Home</a>
                <a href="#" onclick="router.navigate('/register')">Register</a>
                <a href="#" onclick="router.navigate('/profile')">Profile</a>
                <a href="#" class="login-link" onclick="router.navigate('/login')">Login</a>
            </nav>
        </header>
    `;
};
