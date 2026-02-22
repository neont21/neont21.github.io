# 포트폴리오 페이지

이 포트폴리오 페이지는 [`sv`](https://github.com/sveltejs/cli)를 사용하여 구축되었습니다.

## 초기 설정

다음과 같은 명령어로 프로젝트를 시작하였습니다.

```sh
# create a new project
npx sv create --template minimal --types ts --add sveltekit-adapter="adapter:auto" --install npm portfolio
```

다음과 같이 의존성 라이브러리를 설치합니다.

```sh
npm install
```

기본 개발 환경 외에 [`@iconify/svelte`](https://icon-sets.iconify.design/mdi) 를 사용하고 있습니다.


## 개발

다음과 같이 개발 서버를 실행할 수 있습니다.

```sh
npm run dev

# 개발 서버 실행 직후 브라우저 새 탭에서 바로 열고 싶다면
npm run dev -- --open
```

http://localhost:5173 으로 접근합니다.

## 빌드

개발이 완료되면 다음과 같이 프로덕션 버전의 앱을 빌드합니다.

```sh
npm run build
```

빌드한 프로젝트는 배포하기 전에 다음 명령어를 통해 미리 확인할 수 있습니다.

```sh
npm run preview
```

http://localhost:4173 으로 접근합니다.
