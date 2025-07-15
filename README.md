# 초기 설정

다음과 같이 프로젝트를 생성하였다.

```bash
# Svelte CLI를 이용하여 프로젝트를 생성한다.
~/workspace$ npx sv create portfolio
~/workspace$ cd portfolio
# Svelte용 Bootstrap 라이브러리인 Sveltestrap을 설치하여 사용할 것이다.
~/workspace/portfolio$ npm install svelte @sveltestrap/sveltestrap
# Bootstrap Template에서 사용하는 라이브러리를 설치한다.
~/workspace/portfolio$ npm install aos
```

- [sv](https://github.com/sveltejs/cli)
- [Sveltestrap](https://sveltestrap.js.org)

## 개발 환경

다음과 같이 의존성 라이브러리를 설치한다.

```bash
~/workspace/portfolio$ npm install
```

다음과 같이 개발 서버를 실행한다.

```bash
~/workspace/portfolio$ npm run dev
```

http://localhost:5173/ 를 통해 접속할 수 있다.

## 빌드 및 배포

다음과 같이 프로젝트를 빌드한다.

```bash
~/workspace/portfolio$ npm run build
```

빌드한 프로젝트는 다음 명령어를 통해 미리 볼 수 있다.

```bash
~/workspace/portfolio$ npm run preview
```

http://localhost:4173/ 를 통해 접속할 수 있다.

~~배포 환경에 [adapter](https://svelte.dev/docs/kit/adapters)를 설치하여 배포할 수 있다는데, 아직은 그 부분까지 생각하지는 않았다.~~


