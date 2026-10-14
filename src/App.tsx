import React, { useState } from 'react';
import { practiceRegistry } from './practices/registry';
import { Navbar } from './components/Navbar';
import './index.css';

export const App: React.FC = () => {
  // 현재 활성화된 실습의 ID를 보관 (기본값: 첫 번째 실습)
  const [activePracticeId, setActivePracticeId] = useState<string>(
    practiceRegistry[0]?.id || ''
  );

  // 현재 선택된 실습 객체 탐색
  const currentPractice = practiceRegistry.find(item => item.id === activePracticeId);
  const ActiveComponent = currentPractice?.component;

  return (
    <div className="app-layout">
      {/* 1. 상단 내비게이션 바 */}
      <Navbar
        items={practiceRegistry}
        activeId={activePracticeId}
        onSelect={(id) => setActivePracticeId(id)}
      />

      {/* 2. 본문 메인 컨테이너 */}
      <main className="main-content">
        {currentPractice ? (
          <div className="content-wrapper">
            <div className="practice-info-banner">
              <h2>{currentPractice.title}</h2>
              <p>{currentPractice.description}</p>
            </div>

            {/* 현재 선택된 실습 화면 렌더링 */}
            <div className="practice-stage">
              {ActiveComponent ? <ActiveComponent /> : <p>컴포넌트를 찾을 수 없습니다.</p>}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <p>등록된 실습이 없습니다. <code>src/practices/registry.ts</code>를 확인하세요.</p>
          </div>
        )}
      </main>

      {/* 3. 하단 푸터 */}
      <footer className="footer-container">
        <p>React 누적 실습 대시보드 | 총 등록된 실습: <strong>{practiceRegistry.length}</strong>개</p>
      </footer>
    </div>
  );
};

export default App;
