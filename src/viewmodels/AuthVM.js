import { observable, action, computed } from 'mobx';

class AuthVM {
    @observable username = '';
    @observable password = '';
    @observable isLoading = false;
    @observable error = null;
    @observable token = null;

    @computed get isValid() {
        return this.username.length > 0 && this.password.length >= 6;
    }

    @action
    setUsername(val) { this.username = val; }
    
    @action
    setPassword(val) { this.password = val; }

    @action
    async login() {
        this.isLoading = true;
        this.error = null;
        try {
            const res = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: this.username, password: this.password })
            });
            const data = await res.json();
            if (res.ok) {
                this.token = data.token;
                alert('Login successful! Token: ' + data.token);
            } else {
                this.error = data.error || 'Login failed';
            }
        } catch (e) {
            this.error = 'Network error';
        } finally {
            this.isLoading = false;
        }
    }

    @action
    async register() {
        this.isLoading = true;
        this.error = null;
        try {
            const res = await fetch('http://localhost:8080/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: this.username, password: this.password })
            });
            const data = await res.json();
            if (res.ok) {
                alert('Registration successful! Please login.');
                this.setUsername('');
                this.setPassword('');
            } else {
                this.error = data.error || 'Registration failed';
            }
        } catch (e) {
            this.error = 'Network error';
        } finally {
            this.isLoading = false;
        }
    }
}

export default new AuthVM();
