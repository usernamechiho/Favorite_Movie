# Favorite_Movie
영화 검색, 영화 즐겨찾기 기능 구현입니다.

## 배포 사이트 🚀
[chiho-fav-movie](https://chiho-fav-movie.netlify.app/)


## 파일 구조

```js
// src
├── assets
│   ├── images
│   ├── jsons
│   └── svgs
├── hooks
│   └── worker
├── routes
│   ├── Favorites
│   ├── MovieList
│   │   └── MovieCard
│   ├── Tab
│   └── _Component
│       ├── Layout
│       ├── Modal
│       │   └── Modal
│       ├── SearchInput
│       └── Spinner
├── services
├── states
├── styles
│   ├── base
│   ├── constants
│   └── mixins
├── types
└── utils
```

## 기능 구현
![영화_메인페이지](https://user-images.githubusercontent.com/87627359/174622213-0fbd451b-44d9-47fc-a289-f59eb1c3c7cc.gif)
![영화_선택](https://user-images.githubusercontent.com/87627359/174621784-e8b7ef2e-3a43-441b-88ec-32a6421d55b5.gif)
![영화_즐겨찾기](https://user-images.githubusercontent.com/87627359/174621796-18e06ea7-549e-4898-bbba-13ee54ffd422.gif)
![영화_드래그](https://user-images.githubusercontent.com/87627359/174621804-cbc3a3cd-e0c5-4602-a743-e18262c8345a.gif)

- 스크롤을 이용해 무한스크롤을 구현했습니다.
- 영화 리스트 클릭시 모달이 호출됩니다.
- 모달에서 즐겨찾기 설정이 가능합니다.

- 즐겨찾기 페이지에선 사용자가 추가한 영화 앱이 보입니다.
- 즐겨찾은 영화 리스트들은 Drag and Drop으로 사용자에 맞게끔 위치 설정이 가능합니다.
