// アニメーション設定
const animationsConfig = [
  { containerId: 'contact', iconId: 'contact-icon', path: 'contact_white.json', defaultFrames: [0, 48], hoverFrames: [49, 61], clickFrames: [62, 74] },
  { containerId: 'docrequest', iconId: 'docrequest-icon', path: 'docrequest_white.json', defaultFrames: [0, 48], hoverFrames: [49, 61], clickFrames: [62, 74] },
  { containerId: 'registration', iconId: 'registration-icon', path: 'registration_white.json', defaultFrames: [0, 72], hoverFrames: [72, 84], clickFrames: [84, 96] },
  { containerId: 'contact', iconId: 'contact-L', path: 'contact_black.json', defaultFrames: [0, 48], hoverFrames: [49, 61], clickFrames: [62, 74] },
  { containerId: 'docrequest', iconId: 'docrequest-L', path: 'docrequest_black.json', defaultFrames: [0, 48], hoverFrames: [49, 61], clickFrames: [62, 74] },
  { containerId: 'registration', iconId: 'registration-L', path: 'registration_black.json', defaultFrames: [0, 72], hoverFrames: [72, 84], clickFrames: [84, 96] },


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
    autoplay: false,
    path: config.path
  });


  // アニメーションのロードが完了したらデフォルトフレームセグメントを再生
  animation.addEventListener('DOMLoaded', () => {
    animation.playSegments(config.defaultFrames, true);
  });


  // ボタンコンテナの要素を取得
  const buttonContainer = document.getElementById(config.containerId);

  // ホバー状態を追跡する変数
  let isHovered = false;

  // ホバー時の挙動
  buttonContainer.addEventListener('mouseover', (event) => {
    if (!isHovered) {
      animation.playSegments(config.hoverFrames, true);
      isHovered = true;
    }
  });

  // ホバーから離れた時の挙動
  buttonContainer.addEventListener('mouseleave', () => {
    animation.playSegments([config.hoverFrames[1], config.hoverFrames[0]], true);
    isHovered = false;
  });

  // クリック時の挙動
  buttonContainer.addEventListener('click', () => {
    animation.playSegments(config.clickFrames, true);
  });

  
});

// script.js
document.getElementById('playbutton').addEventListener('click', function() {
  window.location.reload();
});

