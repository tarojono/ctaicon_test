// アニメーション設定
const animationsConfig = [
  { containerId: 'contact', iconId: 'contact-icon', path: 'contact_white.json', defaultFrames: [0, 48], hoverFrames: [49, 61], clickFrames: [62, 74] },
  { containerId: 'docrequest', iconId: 'docrequest-icon', path: 'docrequest_white.json', defaultFrames: [0, 48], hoverFrames: [49, 61], clickFrames: [62, 74] },
  { containerId: 'registration', iconId: 'registration-icon', path: 'registration_white.json', defaultFrames: [0, 72], hoverFrames: [72, 84], clickFrames: [84, 96] }
];

// アニメーションのロードとイベントハンドラの設定
animationsConfig.forEach(config => {
  // アイコンコンテナの要素を取得
  const iconContainer = document.getElementById(config.iconId);

  // Lottieアニメーションをロード
  const animation = lottie.loadAnimation({
    container: iconContainer,
    renderer: 'svg',
    loop: false,
    autoplay: TransformStreamDefaultController,
    path: config.path
  });

  // ボタンコンテナの要素を取得
  const buttonContainer = document.getElementById(config.containerId);

  // ホバー時の挙動
  buttonContainer.addEventListener('mouseover', () => {
    animation.playSegments(config.hoverFrames, true);
  });

  // ホバーから離れた時の挙動
  buttonContainer.addEventListener('mouseleave', () => {
    animation.playSegments(config.defaultFrames, true);
  });

  // クリック時の挙動
  buttonContainer.addEventListener('click', () => {
    animation.playSegments(config.clickFrames, true);
  });
});


// アニメーション設定
// const animationsConfig = [
//   { id: 'contact-icon', path: 'contact_white.json', defaultFrames: [0, 48], hoverFrames: [49, 61], clickFrames: [62, 74] },
//   { id: 'docrequest-icon', path: 'docrequest _white.json', defaultFrames: [0, 48], hoverFrames: [49, 61], clickFrames: [62, 74] },
//   { id: 'registration-icon', path: 'registration_white.json', defaultFrames: [0, 72], hoverFrames: [72, 84], clickFrames: [84, 96] }
// ];

// // アニメーションのロードとイベントハンドラの設定
// animationsConfig.forEach(config => {
//   const animation = lottie.loadAnimation({
//     container: document.getElementById(config.id),
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: config.path
//   });

//   // アニメーションがロードされたらデフォルトフレームを再生
//   animation.addEventListener('DOMLoaded', () => {
//     animation.playSegments(config.defaultFrames, true);
//   });

//   // ホバー時の挙動
//   document.getElementById(config.id).addEventListener('mouseover', () => {
//     animation.playSegments(config.hoverFrames, true);
//   });

//   // ホバーから離れた時の挙動
//   document.getElementById(config.id).addEventListener('mouseleave', () => {
//     animation.playSegments(config.defaultFrames, true);
//   });

//   // クリック時の挙動
//   document.getElementById(config.id).addEventListener('click', () => {
//     animation.playSegments(config.clickFrames, true);
//   });
// });// 


// const animations = [
//   { containerId: 'contact-icon', jsonPath: 'contact_white.json' },
//   { containerId: 'docrequest-icon', jsonPath: 'docrequest _white.json' },
//   { containerId: 'registration-icon', jsonPath: 'registration_white.json' },
// ];

// animations.forEach(animation => {
//   lottie.loadAnimation({
//     container: document.getElementById(animation.containerId),
//     renderer: 'svg',
//     loop: false,
//     autoplay: true,
//     path: animation.jsonPath
//   });
// });





// // アニメーションをロード
// var animation = lottie.loadAnimation({
//   container: document.getElementById('contact-icon'),
//   renderer: 'svg',
//   loop: false,
//   autoplay: true,
//   path: 'contact_white.json'
// });