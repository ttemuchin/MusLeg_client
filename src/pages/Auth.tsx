/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../main";
import { MAIN_ROUTE } from "../utils/consts";
import styles from "./Auth.module.css";
import { withObserver } from "../hooks/withObserver";

type AuthResponse = {
  id: number;
  username: string;
  role: "user" | "admin" | "super" | "guest";
}

// Временные функции API
const login = async (username: string, password: string): Promise<AuthResponse> => {
  return { id: 1, username, role: 'user' };
};

const registration = async (username: string, password: string): Promise<AuthResponse> => {
  return { id: 1, username, role: 'user' };
};

const AuthComponent: React.FC = () => {
  const { user } = useContext(Context);
  const [isLogin, setIsLogin] = useState(true); // true - вход, false - регистрация
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name.trim() || !password.trim()) {
      setError('Введите имя и пароль');
      return false;
    }
    
    if (!isLogin && password !== confirmPassword) {
      setError('Пароли не совпадают');
      return false;
    }
    
    if (!isLogin && password.length < 6) {
      setError('Пароль должен быть не менее 6 символов');
      return false;
    }
    
    return true;
  };

  const handleError = (err: unknown): string => {
    if (err && typeof err === 'object' && 'response' in err) {
      const error = err as { response?: { data?: { message?: string } } };
      return error.response?.data?.message ?? 'Ошибка авторизации';
    }
    if (err instanceof Error) {
      return err.message;
    }
    return 'Неизвестная ошибка';
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;
    
    setLoading(true);

    const authPromise = isLogin 
    ? login(name, password)
    : registration(name, password);

    void authPromise
    .then((userData: AuthResponse) => {
        user.setUser(userData);
        user.setIsAuth(true);
        void navigate(MAIN_ROUTE);
    })
    .catch((err: unknown) => {
        setError(handleError(err));
    })
    .finally(() => {
        setLoading(false);
    });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setName('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>
          {isLogin ? 'Вход' : 'Регистрация'}
        </h2>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Имя</label>
            <input
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => { setName(e.target.value); }}
              disabled={loading}
              placeholder="Введите имя"
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Пароль</label>
            <input
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => { setPassword(e.target.value); }}
              disabled={loading}
              placeholder="Введите пароль"
            />
          </div>
          
          {!isLogin && (
            <div className={styles.inputGroup}>
              <label className={styles.label}>Подтвердите пароль</label>
              <input
                type="password"
                className={styles.input}
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); }}
                disabled={loading}
                placeholder="Повторите пароль"
              />
            </div>
          )}
          
          {error && <div className={styles.error}>{error}</div>}
          
          <div className={styles.info}>
            {isLogin ? 'Вход для редакторов и администраторов' : 'Регистрация новых пользователей'}
          </div>
          
          <button 
            type="submit" 
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Загрузка...' : (isLogin ? 'Войти' : 'Зарегистрироваться')}
          </button>
          
          <button 
            type="button"
            className={styles.toggleButton}
            onClick={toggleMode}
            disabled={loading}
          >
            {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
          </button>
        </form>
      </div>
    </div>
  );
};

const Auth = withObserver(AuthComponent);
export default Auth;