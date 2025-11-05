// pages/Register.js

export const RegisterPage = () => {
  return `
        <main class="page-content auth-page">
            <div class="auth-card">
                <h2>Create Account</h2>
                <form class="auth-form">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" required>

                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="you@example.com" required>
                    
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Min 8 characters" required>
                    
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" required>
                    
                    <button type="submit" class="auth-btn">Register</button>
                    <p class="form-footer">
                        Already have an account? <a href="#" onclick="router.navigate('/login')">Log in.</a>
                    </p>
                </form>
            </div>
        </main>
    `;
};
