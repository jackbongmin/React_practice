import React, { useState } from 'react';
import * as D from '../../data';

/**
 * Chapter 01-05: do-it-react-with-ts 가상 데이터 생성 모듈 실습
 */
export const UserDataPractice: React.FC = () => {
  const [user, setUser] = useState(() => ({
    name: D.randomName(),
    jobTitle: D.randomJobTitle(),
    company: D.randomCompanyName(),
    email: D.randomEmail(),
    date: D.randomDayMonthYear(),
    relativeDate: D.randomRelativeDate(),
    avatar: D.randomAvatar(),
    image: D.randomImage(600, 300, 100),
  }));

  const handleRefresh = () => {
    setUser({
      name: D.randomName(),
      jobTitle: D.randomJobTitle(),
      company: D.randomCompanyName(),
      email: D.randomEmail(),
      date: D.randomDayMonthYear(),
      relativeDate: D.randomRelativeDate(),
      avatar: D.randomAvatar(),
      image: D.randomImage(600, 300, 100),
    });
  };

  return (
    <div className="practice-card">
      <div className="card-header">
        <span className="badge">Chapter 01-05 실습</span>
        <h3>👤 Do it! 리액트 데이터 모듈 (Chance & Luxon)</h3>
      </div>

      <p className="description">
        <code>src/data</code> 모듈의 <code>chance</code>, <code>luxon</code>을 활용하여 무작위 사용자 프로필과 이미지를 생성하는 실습입니다.
      </p>

      <hr className="divider" />

      <div className="practice-section" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <img
          src={user.avatar}
          alt={user.name}
          style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #2563eb' }}
        />
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>{user.name}</h4>
          <p style={{ margin: '2px 0', color: '#4b5563', fontSize: '14px' }}>💼 {user.jobTitle} @ {user.company}</p>
          <p style={{ margin: '2px 0', color: '#6b7280', fontSize: '13px' }}>✉️ {user.email}</p>
          <p style={{ margin: '2px 0', color: '#9ca3af', fontSize: '12px' }}>📅 등록일: {user.date} ({user.relativeDate})</p>
        </div>
      </div>

      <div className="practice-section" style={{ marginTop: '16px' }}>
        <h4 style={{ marginBottom: '8px' }}>📸 무작위 배너 이미지</h4>
        <img
          src={user.image}
          alt="무작위 생성 이미지"
          style={{ width: '100%', maxHeight: '260px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>

      <div style={{ marginTop: '16px' }}>
        <button className="btn-primary" onClick={handleRefresh}>
          🔄 새 임의 사용자 데이터 생성
        </button>
      </div>
    </div>
  );
};
