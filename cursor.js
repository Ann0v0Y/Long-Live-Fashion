
// 获取.custom-cursor元素
const customCursor = document.querySelector('.custom-cursor');
const redAboutImage = document.querySelector('.about-red');
const yellowOrangeImage = document.querySelector('.artwork-yellow-orange');
const  blueImage = document.querySelector('.runway-blue-purple');
const  greenImage = document.querySelector('.tickets-green');
// 监听鼠标移动事件
document.addEventListener('mousemove', (e) => {

// 更新.custom-cursor元素的位置与鼠标位置一致
customCursor.style.left = `${e.clientX + scrollX}px`;
customCursor.style.top = `${e.clientY + scrollY}px`;
customGifCursor.style.left = `${e.clientX + scrollX}px`;
customGifCursor.style.top = `${e.clientY + scrollY}px`;

  // 检查鼠标是否位于图片上
  if (isMouseOverImage(e, redAboutImage) || isMouseOverImage(e, yellowOrangeImage)
  || isMouseOverImage(e, blueImage)|| isMouseOverImage(e,  greenImage)) {
    customCursor.classList.add('active');
  } else {
    customCursor.classList.remove('active');
  }
});

// 监听图片的鼠标进入和离开事件
redAboutImage.addEventListener('mouseenter', () => {
  customCursor.classList.add('active');
});

redAboutImage.addEventListener('mouseleave', () => {
  customCursor.classList.remove('active');
});

yellowOrangeImage.addEventListener('mouseenter', () => {
  customCursor.classList.add('active');
});

yellowOrangeImage.addEventListener('mouseleave', () => {
  customCursor.classList.remove('active');
});

// 检查鼠标是否位于图片上
function isMouseOverImage(event, image) {
  const imageRect = image.getBoundingClientRect();

  return (
    event.clientX >= imageRect.left &&
    event.clientX <= imageRect.right &&
    event.clientY >= imageRect.top &&
    event.clientY <= imageRect.bottom
  );
}


//  红色飘动效果
const aboutRedImage = document.querySelector('.about-red img');

aboutRedImage.addEventListener('mouseenter', () => {
const currentSrc = aboutRedImage.getAttribute('src');

if (currentSrc === 'images/about-red.png') {

  aboutRedImage.setAttribute('src', 'images/about-red.gif');
  aboutRedImage.style.zIndex = '2';
}
});

aboutRedImage.addEventListener('mouseleave', () => {
// 鼠标离开时，直接将图片透明度设置为0
aboutRedImage.style.opacity = '0.2';

// 使用setTimeout等待0.3秒，确保图片透明度变为0后再切换回静态图片
setTimeout(() => {
  aboutRedImage.setAttribute('src', 'images/about-red.png');
  aboutRedImage.style.opacity = '1'; // 切换后再将透明度设置为1，使得图片渐现
}, 300);

aboutRedImage.style.zIndex = '0';
});


// 黄色飘动效果-->

const yellowImage = document.querySelector('.artwork-yellow-orange img');

yellowImage.addEventListener('mouseenter', () => {
const currentSrc = yellowImage.getAttribute('src');
if (currentSrc === 'images/artwork-yellow-orange.png') {
  yellowImage.setAttribute('src', 'images/artwork-yellow.gif');
  yellowImage.style.zIndex = '2';
}
});

yellowImage.addEventListener('mouseleave', () => {
yellowImage.style.opacity = '0.2';

setTimeout(() => {
  yellowImage.setAttribute('src', 'images/artwork-yellow-orange.png');
  yellowImage.style.opacity = '1'; 
}, 300);
yellowImage.style.zIndex = '0';
});





// 获取 red-mask 元素
const redMask = document.querySelector('.red-mask');

// 获取 about-red 图片的位置和尺寸
const aboutRedImage1 = document.querySelector('.about-red img');
const aboutRedRect = aboutRedImage1.getBoundingClientRect();

// 获取 runway-blue-purple 图片的位置和尺寸
const runwayImage = document.querySelector('.runway-blue-purple img');

// 监听动画的更新事件
runwayImage.addEventListener('animationupdate', () => {
// 获取 runway-blue-purple 图片的位置和尺寸
const runwayImageRect = runwayImage.getBoundingClientRect();

// 计算相交部分的位置和尺寸
const intersectionLeft = Math.max(aboutRedRect.left, runwayImageRect.left);
const intersectionTop = Math.max(aboutRedRect.top, runwayImageRect.top);
const intersectionRight = Math.min(aboutRedRect.right, runwayImageRect.right);
const intersectionBottom = Math.min(aboutRedRect.bottom, runwayImageRect.bottom);

// 计算相交部分的宽度和高度
const intersectionWidth = intersectionRight - intersectionLeft;
const intersectionHeight = intersectionBottom - intersectionTop;

// 如果相交部分存在且宽高大于0，则设置红色遮罩的位置和尺寸
if (intersectionWidth > 0 && intersectionHeight > 0) {
  redMask.style.left = `${intersectionLeft - aboutRedRect.left}px`;
  redMask.style.top = `${intersectionTop - aboutRedRect.top}px`;
  redMask.style.width = `${intersectionWidth}px`;
  redMask.style.height = `${intersectionHeight}px`;
  redMask.style.opacity = '0.5'; // 设置红色遮罩的透明度，可以调整透明度的值来控制红色的深浅程度
} else {
  redMask.style.opacity = '0'; // 隐藏红色遮罩
}
});

// 监听动画的结束事件
runwayImage.addEventListener('animationend', () => {
redMask.style.opacity = '0'; // 动画结束后隐藏红色遮罩
});




// Get the "ABOUT" 边框
const aboutLink = document.querySelector('.menu li:nth-child(1) a');
// 监听事件
aboutLink.addEventListener('mouseenter', () => {
aboutLink.style.color = '#F67F9B'; // Change the text color to red

const currentSrc = aboutRedImage.getAttribute('src');
if (currentSrc === 'images/about-red.png') {
aboutRedImage.setAttribute('src', 'images/about-red.gif');
aboutRedImage.style.zIndex = '2';
}
});
aboutLink.addEventListener('mouseleave', () => {
aboutLink.style.color = 'white'; // Change the text color back to white 

aboutRedImage.style.opacity = '1';

// 使用setTimeout等待0.3秒，确保图片透明度变为0后再切换回静态图片
setTimeout(() => {
aboutRedImage.setAttribute('src', 'images/about-red.png');
aboutRedImage.style.opacity = '1'; // 切换后再将透明度设置为1，使得图片渐现
}, 300);

aboutRedImage.style.zIndex = '0';

});

// Get the "artwork" 边框
const artworkLink = document.querySelector('.menu li:nth-child(2) a');

artworkLink.addEventListener('mouseenter', () => {
artworkLink.style.color = '#DBBF72'; 
const currentSrc = yellowImage.getAttribute('src');
if (currentSrc === 'images/artwork-yellow-orange.png') {
  yellowImage.setAttribute('src', 'images/artwork-yellow.gif');
  yellowImage.style.zIndex = '2';
}
});
artworkLink.addEventListener('mouseleave', () => {
artworkLink.style.color = 'white';

yellowImage.style.opacity = '0.2';

setTimeout(() => {
yellowImage.setAttribute('src', 'images/artwork-yellow-orange.png');
yellowImage.style.opacity = '1'; 
}, 300);
yellowImage.style.zIndex = '0';
});

// Get the "artwork" 边框
const runwayLink = document.querySelector('.menu li:nth-child(3) a');

runwayLink.addEventListener('mouseenter', () => {
  runwayLink.style.color = '#82B0F2'; 
});
runwayLink.addEventListener('mouseleave', () => {
runwayLink.style.color = 'white';
});

// Get the "artwork" 边框
const ticketsLink = document.querySelector('.menu li:nth-child(4) a');

ticketsLink.addEventListener('mouseenter', () => {
ticketsLink.style.color = '#5E974C'; 
});
ticketsLink.addEventListener('mouseleave', () => {
ticketsLink.style.color = 'white';
});