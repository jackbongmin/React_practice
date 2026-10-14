import React from 'react';
import { PracticeItem } from '../types/practice';

interface NavbarProps {
  items: PracticeItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ items, activeId, onSelect }) => {
  return (
    <header className="navbar-container">
      <div className="navbar-brand">
        <span className="logo-icon">⚛️</span>
        <h1 className="logo-title">React Playground</h1>
        <span className="version-tag">누적 실습 포털</span>
      </div>

      <nav className="navbar-menu">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              className={`nav-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onSelect(item.id)}
            >
              <span className="tab-chapter">{item.chapter}</span>
              <span className="tab-title">{item.title}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
};
