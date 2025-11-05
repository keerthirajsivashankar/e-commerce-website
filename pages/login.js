// pages/Login.js

export const LoginPage = () => {
  return `
        <main class="page-content auth-page">
            <div class="auth-card">
                <h2>Welcome Back</h2>
                <form class="auth-form">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="you@example.com" required>
                    
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required>
                    
                    <button type="submit" class="auth-btn">Log In</button>
                    <p class="form-footer">
                        Don't have an account? <a href="#" onclick="router.navigate('/register')">Sign up here.</a>
                    </p>
                </form>
            </div>
        </main>
    `;
};
