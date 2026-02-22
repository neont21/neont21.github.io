export type Education = {
    title: string;
    period: string;
    location: string;
    tasks: string[];
};

export const educations: Education[] = [
    {
        title: '디지털콘텐츠디자인과 수료',
        period: '2025. 03. - 2025. 07.',
        location: '서울시 기술교육원 동부캠퍼스',
        tasks: [
            'Photoshop, Illustrator, InDesign, Figma 등 다양한 디자인 툴 사용법 습득'
        ]
    },
    {
        title: '교직 이수',
        period: '2018 - 2021',
        location: '건국대학교',
        tasks: [
            '정보 교과의 2급 정교사 자격증 습득'
        ]
    },
    {
        title: '컴퓨터공학 전공',
        period: '2017 - 2021',
        location: '건국대학교',
        tasks: [
            '시스템 엔지니어링 및 소프트웨어 공학 분야에 집중된 커리큘럼'
        ]
    }
];

