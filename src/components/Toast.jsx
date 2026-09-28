import React, { useEffect } from 'react';
import { CheckIcon } from './Icons';

export const Toast = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <CheckIcon size={18} />
        <span>{message}</span>
      </div>
    </div>
  );
};
