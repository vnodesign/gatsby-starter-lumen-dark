---
template: post
title: Tăng Tốc Website Từ Preload 
date: "2021-01-09T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: HTML
tags:
  - Preload
  - Font
  - Script
  - Style
slug: /2021/01/tang-toc-website-tu-preload
thumbnail: "/media/speed-website-from-preload.jpg"
description: Ngày nay khi tối ưu website thì người ta quan trọng nhất là tốc độ và trải nghiệm của người dùng.
fbCommentUrl: /2021/01/tang-toc-website-tu-preload
---

Ngày nay khi tối ưu website thì người ta quan trọng nhất là tốc độ và trải nghiệm của người dùng. Bạn có thể áp dụng nội dung trong bài viết này với các đoạn script của bài trước để tối ưu thêm.

![Tăng Tốc Website Từ Preload](/media/speed-website-from-preload.jpg)

Để hiểu rõ hơn về cả thẻ link các bạn tìm hiểu tại trang sau: [https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)

Để preload nội dung bạn dùng code sau:

```html
<link rel="preload" href="https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js" as="script">
<link rel="preload" href="https://sp.zalo.me/plugins/sdk.js" as="script">
<link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/main-1.2.2.js" as="script">
<link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/main.142b31d74cee2e25afe3651f0591f9f4.css" as="style">
<link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/images/main_sprites.png" as="image">
<link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/images/stick_zalo.png" as="image">
<link rel="preload" href="https://platform.twitter.com/widgets.js" as="script">
```

Để Prefetch nội dung bạn dùng code sau:

```html
<link rel="dns-prefetch" href="//connect.facebook.net">
<link rel="dns-prefetch" href="//static.xx.fbcdn.net">
<link rel="dns-prefetch" href="//sp.zalo.me">
<link rel="dns-prefetch" href="//stc.sp.zdn.vn">
<link rel="dns-prefetch" href="//platform.twitter.com">
```

Để preconnect nội dung bạn dùng code sau:

```html
<link href="https://connect.facebook.net" rel="preconnect" crossorigin>
<link href="https://static.xx.fbcdn.net" rel="preconnect" crossorigin>
<link href="https://sp.zalo.me" rel="preconnect" crossorigin>
<link href="https://stc.sp.zdn.vn" rel="preconnect" crossorigin>
<link href="https://platform.twitter.com" rel="preconnect" crossorigin>
```

Chúc các bạn thành công.
