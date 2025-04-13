// Login Form Submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Simple validation
  if (!username || !password) {
    alert('Please fill in all fields');
    return;
  }
  
  // In a real app, you would send this to your backend
  console.log('Login attempt with:', { username, password });
  
  // Simulate successful login
  alert(`Welcome back, ${username}!`);
  document.getElementById('loginModal').style.display = 'none';
  document.body.style.overflow = 'auto';
  
  // Update UI to show logged in state
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.innerHTML = `<i class="fas fa-user"></i> ${username}`;
  loginBtn.style.color = '#00a8ff';
  loginBtn.href = '#';
});

// Register Form Submission
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('reg-username').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;
  
  // Validation
  if (!username || !email || !password || !confirm) {
    alert('Please fill in all fields');
    return;
  }
  
  if (password !== confirm) {
    alert('Passwords do not match');
    return;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters');
    return;
  }
  
  // In a real app, you would send this to your backend
  console.log('Registration attempt with:', { username, email, password });
  
  // Simulate successful registration
  alert(`Account created for ${username}! Please login.`);
  document.getElementById('registerModal').style.display = 'none';
  document.getElementById('loginModal').style.display = 'flex';
  
  // Clear form
  registerForm.reset();
});

// Social Login Buttons
document.querySelectorAll('.btn-social').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = btn.classList.contains('google') ? 'Google' : 'Facebook';
    alert(`Redirecting to ${provider} login...`);
    // In a real app, this would redirect to OAuth flow
  });
});