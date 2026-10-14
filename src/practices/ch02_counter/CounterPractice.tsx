import React, { useState } from 'react';

/**
 * Chapter 02: useState 훅을 활용한 카운터 실습
 */
export const CounterPractice: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="practice-card">
      <div className="card-header">
        <span className="badge">Chapter 02 실습</span>
        <h3>🔢 State & Props 카운터</h3>
      </div>

      <p className="description">
        <code>useState</code> 훅을 통해 컴포넌트 내부 상태를 선언하고, 버튼 이벤트 핸들러로 숫자를 증감시키는 기초 상태 관리 실습입니다.
      </p>

      <hr className="divider" />

      <div className="practice-section">
        <h4>
          현재 카운트: <span style={{ color: '#2563eb', fontWeight: 700, fontSize: '22px' }}>{count}</span>
        </h4>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <button className="btn-primary" onClick={() => setCount(c => c + 1)}>
            +1 증가
          </button>
          <button className="btn-primary" style={{ backgroundColor: '#ef4444' }} onClick={() => setCount(c => c - 1)}>
            -1 감소
          </button>
          <button className="btn-primary" style={{ backgroundColor: '#6b7280' }} onClick={() => setCount(0)}>
            초기화
          </button>
        </div>
      </div>
    </div>
  );
};
