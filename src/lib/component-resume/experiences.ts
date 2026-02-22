export type Experience = {
    title: string;
    period: string;
    location: string;
    tasks: string[];
};

export const experiences: Experience[] = [
    {
        title: '서울시 시정 서포터즈 (특화 직무)',
        period: '2026. 01. - 2026. 02.',
        location: '서울특별시, 120다산콜재단',
        tasks: [
            '신규 서비스 UI/UX 디자인 피드백'
        ]
    },
    {
        title: '미래청년일자리 (AI온라인콘텐츠 분야)',
        period: '2025. 09. - 2025. 12.',
        location: '서울특별시, 한국엑스퍼트브랜드협회',
        tasks: [
            '제품 디자인, 상세페이지 작업, 광고 소재 제작',
            '포스터 디자인, 배너 디자인, 현수막 디자인 작업',
            '메달 및 상장 디자인 작업',
            '명함 디자인 작업',
        ]
    },
    {
        title: '미래내일일경험',
        period: '2024. 09. - 2024. 11.',
        location: '한국디지털컨버전스협회, 더나은인재들',
        tasks: [
            'Pemere Pro 사용법에 대한 사전 직무 교육 이수',
            '교육 영상 컷편집 및 전처리 작업',
            '생성형 AI를 활용한 영상 콘텐츠 제작'
        ]
    },
    {
        title: '2023 오픈소스 컨트리뷰션 아카데미 멘티 활동',
        period: '2023',
        location: 'LLM을 여행하는 프롬프트 엔지니어를 위한 안내서',
        tasks: [
            'Notion에 프롬프트 엔지니어링 가이드 번역 매뉴얼 정리',
            'git 저장소에서 기존에 번역되어 있는 문서의 번역 보완 작업 수행',
            'git 저장소에서 아직 번역되지 않은 문서의 신규 번역 작업 수행',
            '프롬프트 엔지니어링 용어집 작성',
            '번역 팀 활동 내역 <a href="https://velog.io/@peeeeeter_j/series/OSSCA2023" aria-label="2023 오픈소스 컨트리뷰션 아카데미 블로그 포스팅">블로그</a>에 기록'
        ]
    },
    {
        title: '2022 오픈소스 컨트리뷰션 아카데미 멘티 활동',
        period: '2022',
        location: '양자 컴퓨터 오픈소스 SDK Qiskit 공식 문서 한글화 프로젝트',
        tasks: [
            'Crowdin에서 Qiskit Documents 한글화 번역 활동 참여',
            'GitLocalize에서 Qiskit Textbook 한글화 번역 활동 참여',
            '번역 팀 활동 내역 <a href="https://velog.io/@peeeeeter_j/series/OSSCA2022" aria-label="2022 오픈소스 컨트리뷰션 아카데미 블로그 포스팅">블로그</a>에 기록'
        ]
    },
    {
        title: '2020 오픈소스 컨트리뷰톤 멘티 활동',
        period: '2020',
        location: '우분투 한국 커뮤니티 - 우분투 한국어 번역팀',
        tasks: [
            'Launchpad에서 우분투 시스템 UI 한글화 번역 활동 참여',
            '번역 팀 활동 내역 <a href="https://velog.io/@peeeeeter_j/series/2020-Open-Source-Contributhon" aria-label="2020 오픈소스 컨트리뷰톤 블로그 포스팅">블로그</a>에 기록'
        ]
    }
];

