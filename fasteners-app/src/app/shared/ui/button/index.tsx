import React from 'react';
import styles from './button.module.css';

type ButtonType = 'primary' | 'secondary' | 'outline';

interface ButtonProps {
  type?: ButtonType;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
