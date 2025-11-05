// pages/Profile.js

export const ProfilePage = () => {
  return `
        <main class="page-content profile-page">
            <div class="profile-header-card">
                <h1>My Account</h1>
                <p>Welcome, John Doe!</p>
            </div>
            
            <section class="profile-details-section">
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <button class="edit-btn">Edit Info</button>
            </section>

            <section class="order-history-section">
                <h3>Order History</h3>
                <ul class="order-list">
                    <li>#1001 - Delivered (Total: $150.00)</li>
                    <li>#1002 - Processing (Total: $89.99)</li>
                    <li>#1003 - Cancelled</li>
                </ul>
                <button class="view-all-btn">View All Orders</button>
            </section>
            
            <button class="logout-btn">Log Out</button>
        </main>
    `;
};
