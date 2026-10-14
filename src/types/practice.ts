import React from 'react';

/**
 * 실습 항목 하나의 정보 규격
 */
export interface PracticeItem {
  id: string;                     // 고유 식별자 (예: 'ch01-basics')
  title: string;                  // 화면에 노출될 실습 제목
  chapter: string;                // 소속 챕터 (예: 'Chapter 01')
  description: string;            // 실습 핵심 내용 요약
  component: React.ComponentType; // 실제 화면에 렌더링될 리액트 컴포넌트
}
