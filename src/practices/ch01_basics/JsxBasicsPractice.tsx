import React, { useState } from 'react';

/**
 * Chapter 01: JSX 기본 문법 & 실시간 인터랙션 실습
 */
export const JsxBasicsPractice: React.FC = () => {
  // 간단한 상태(State)를 사용하여 리액트의 화면 갱신 원리 체험
  const [name, setName] = useState<string>('리액트 새싹');
  const [clickCount, setClickCount] = useState<number>(0);

  const currentDate = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="practice-card">
      <div className="card-header">
        <span className="badge">Chapter 01 실습</span>
        <h3>🌱 JSX 기초 문법 및 반응형 렌더링</h3>
      </div>

      <p className="description">
        기존 서블릿의 JSP와 달리, 리액트는 HTML과 자바스크립트가 합쳐진 <strong>JSX(TSX)</strong>를 사용하여
        새로고침 없이 가상 DOM(Virtual DOM)으로 변경된 부분만 즉시 갱신합니다.
      </p>

      <hr className="divider" />

      {/* 1. 표현식 삽입 실습 */}
      <div className="practice-section">
        <h4>1. JSX 표현식 삽입 실습</h4>
        <div className="input-group">
          <label htmlFor="user-name">학습자 이름: </label>
          <input
            id="user-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </div>
        <p className="result-text">
          반갑습니다, <strong>{name || '익명'}</strong>님! 오늘 날짜는 <span>{currentDate}</span>입니다.
        </p>
      </div>

      {/* 2. 이벤트와 상태 갱신 실습 */}
      <div className="practice-section">
        <h4>2. 가상 DOM 반응성 테스트</h4>
        <p>버튼을 클릭하면 전체 화면을 새로고침하지 않고 숫자만 즉시 올라갑니다.</p>
        <button
          className="btn-primary"
          onClick={() => setClickCount(prev => prev + 1)}
        >
          클릭 횟수: {clickCount}회
        </button>
        {clickCount >= 5 && (
          <p className="congrats-text">🎉 벌써 5번 이상 클릭하셨네요! 리액트의 반응형 렌더링이 잘 작동하고 있습니다.</p>
        )}
      </div>
    </div>
  );
};
