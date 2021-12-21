import React, { useState } from 'react';

export default function Button({ children, className, onClick }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
