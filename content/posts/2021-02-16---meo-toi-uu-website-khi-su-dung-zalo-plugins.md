---
template: post
title: Mẹo Tối Ưu Website Khi Sử Dụng Zalo Plugins
date: "2021-02-16T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Javascript
tags:
  - Preload
  - Zalo
  - Javascript
slug: /2021/02/meo-toi-uu-website-khi-su-dung-zalo-plugins
thumbnail: "https://frontend.tuanducdesign.com/assets/blogs/images/meo-toi-uu-website-khi-su-dung-zalo-plugins.jpg"
description: Ở bài viết ngày hôm nay mình sẽ hướng dẫn các bạn cách tối ưu website khi sử dụng Zalo plugins.
---

Ở bài viết trước mình đã hướng dẫn các bạn cách tối ưu website khi sử dụng Facebook Plugins, ở bài viết ngày hôm nay mình sẽ hướng dẫn các bạn cách tối ưu website khi sử dụng Zalo plugins.

![Mẹo Tối Ưu Website Khi Sử Dụng Zalo Plugins](/images/meo-toi-uu-website-khi-su-dung-zalo-plugins.jpg)

- [Truy cập vào đường dẫn tới file JS của Zalo](#truy-cập-vào-đường-dẫn-tới-file-js-của-zalo)
- [Các thành phần cần quan tâm](#các-thành-phần-cần-quan-tâm)
- [Sử dụng link rel preload và link rel dns-prefetch](#sử-dụng-link-rel-preload-và-link-rel-dns-prefetch)

## Truy cập vào đường dẫn tới file JS của Zalo

Đầu tiên thì chúng ta truy cập vào đường dẫn tới file JS của Zalo nhé.

[https://sp.zalo.me/plugins/sdk.js](https://sp.zalo.me/plugins/sdk.js)

Tiếp theo bạn tìm các từ khoá liên quan đến đường dẫn file css và js nhé. Tương tự như ví dụ dưới đây:

```js
{o.default.loadFile("https://stc.sp.zdn.vn/chatbutton/main-1.2.2.js","js"),o.default.loadFile("https://stc.sp.zdn.vn/chatbutton/main.142b31d74cee2e25afe3651f0591f9f4.css","css")},100)}}}
```

Tiếp theo bạn truy cập vào file css. Bạn chú ý đoạn css sau:

```css
@font-face{font-family:Roboto;font-weight:300;font-style:normal;src:url(./fonts/roboto-light-webfont.eot) format("embedded-opentype");src:url(./fonts/roboto-light-webfont.eot?#iefix) format("embedded-opentype"),url(./fonts/roboto-light-webfont.woff) format("woff"),url(./fonts/roboto-light-webfont.ttf) format("ttf"),url(./fonts/roboto-light-webfont.svg#roboto) format("svg")}
@font-face{font-family:Roboto;font-weight:500;font-style:normal;src:url(./fonts/roboto-medium-webfont.eot) format("embedded-opentype");src:url(./fonts/roboto-medium-webfont.eot?#iefix) format("embedded-opentype"),url(./fonts/roboto-medium-webfont.woff) format("woff"),url(./fonts/roboto-medium-webfont.ttf) format("ttf"),url(./fonts/roboto-medium-webfont.svg#roboto) format("svg")}
@font-face{font-family:Roboto;font-weight:400;font-style:normal;src:url(./fonts/roboto-regular-webfont.eot) format("embedded-opentype");src:url(./fonts/roboto-regular-webfont.eot?#iefix) format("embedded-opentype"),url(./fonts/roboto-regular-webfont.woff) format("woff"),url(./fonts/roboto-regular-webfont.ttf) format("ttf"),url(./fonts/roboto-regular-webfont.svg#roboto) format("svg")}
@font-face{font-family:Roboto;font-weight:700;font-style:normal;src:url(./fonts/roboto-bold-webfont.eot) format("embedded-opentype");src:url(./fonts/roboto-bold-webfont.eot?#iefix) format("embedded-opentype"),url(./fonts/roboto-bold-webfont.woff) format("woff"),url(./fonts/roboto-bold-webfont.ttf) format("ttf"),url(./fonts/roboto-bold-webfont.svg#roboto) format("svg")}
@font-face{font-family:Roboto;font-weight:400;font-style:italic;src:url(./fonts/roboto-italic-webfont.eot) format("embedded-opentype");src:url(./fonts/roboto-italic-webfont.eot?#iefix) format("embedded-opentype"),url(./fonts/roboto-italic-webfont.woff) format("woff"),url(./fonts/roboto-italic-webfont.ttf) format("ttf"),url(./fonts/roboto-italic-webfont.svg#roboto) format("svg")}
```

Và

```css
.zs-ic{display:inline-block;background-image:url(./images/main_sprites.png);background-size:100px 100px;width:24px;height:24px;vertical-align:middle}
```

Tại sao chúng ta lại phải lấy đoạn này thì ở bước tiếp theo bạn sẽ hiểu được lý do tại vì sao.

## Các thành phần cần quan tâm

Có hai thành phần trong file JS mà bạn cần quan tâm, đó chính là liên kết của fonts, hình ảnh và các liên kết của Zalo, liên kết của fonts và hình ảnh chính là đoạn css ở trên giờ chúng ta tiến hành biên dịch lại liên kết của fonts và hình ảnh nhé!

Với Roboto 300:

```css
@font-face{font-family:Roboto;font-weight:300;font-style:normal;src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-light-webfont.eot) format("embedded-opentype");src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-light-webfont.eot?#iefix) format("embedded-opentype"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-light-webfont.woff) format("woff"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-light-webfont.ttf) format("ttf"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-light-webfont.svg#roboto) format("svg")}
```

Với Roboto 500:

```css
@font-face{font-family:Roboto;font-weight:500;font-style:normal;src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-medium-webfont.eot) format("embedded-opentype");src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-medium-webfont.eot?#iefix) format("embedded-opentype"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-medium-webfont.woff) format("woff"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-medium-webfont.ttf) format("ttf"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-medium-webfont.svg#roboto) format("svg")}
```

Với Roboto 400:

```css
@font-face{font-family:Roboto;font-weight:400;font-style:normal;src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-regular-webfont.eot) format("embedded-opentype");src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-regular-webfont.eot?#iefix) format("embedded-opentype"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-regular-webfont.woff) format("woff"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-regular-webfont.ttf) format("ttf"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-regular-webfont.svg#roboto) format("svg")}

@font-face{font-family:Roboto;font-weight:400;font-style:italic;src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-italic-webfont.eot) format("embedded-opentype");src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-italic-webfont.eot?#iefix) format("embedded-opentype"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-italic-webfont.woff) format("woff"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-italic-webfont.ttf) format("ttf"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-italic-webfont.svg#roboto) format("svg")}
```

Với Roboto 700:

```css
@font-face{font-family:Roboto;font-weight:700;font-style:normal;src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-bold-webfont.eot) format("embedded-opentype");src:url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-bold-webfont.eot?#iefix) format("embedded-opentype"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-bold-webfont.woff) format("woff"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-bold-webfont.ttf) format("ttf"),url(https://stc.sp.zdn.vn/chatbutton/fonts/roboto-bold-webfont.svg#roboto) format("svg")}
```

Với hình ảnh:

```css
.zs-ic{display:inline-block;background-image:url((https://stc.sp.zdn.vn/chatbutton/images/main_sprites.png);background-size:100px 100px;width:24px;height:24px;vertical-align:middle}
```

Giờ chúng ta chuyển qua bước tiếp theo để sử dụng ```<link rel="preload" .>``` và ```<link rel="dns-prefetch" .>``` nhé.

## Sử dụng link rel preload và link rel dns-prefetch

Vẫn câu lệnh ```Preload``` quen thuộc mà chúng ta đã sử dụng ở các bài viết trước, cú pháp quen thuộc là:

```html
<html>
    <head>
        <title>Demo</title>
        <link rel="preload" href="https://sp.zalo.me/plugins/sdk.js" as="script" />
        <link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/main-1.2.2.js" as="script" />
        <link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/main.142b31d74cee2e25afe3651f0591f9f4.css" as="style" />
        <link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/images/main_sprites.png" as="image" />
        <link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/fonts/roboto-light-webfont.woff" as="font" crossorigin />
        <link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/fonts/roboto-medium-webfont.woff" as="font" crossorigin />
        <link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/fonts/roboto-regular-webfont.woff" as="font" crossorigin />
        <link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/fonts/roboto-italic-webfont.woff" as="font" crossorigin />
        <link rel="preload" href="https://stc.sp.zdn.vn/chatbutton/fonts/roboto-bold-webfont.woff" as="font" crossorigin />
        <link rel="dns-prefetch" href="//sp.zalo.me" />
        <link rel="dns-prefetch" href="//stc.sp.zdn.vn" />
    </head>
    <body>
    .
    <script src="https://sp.zalo.me/plugins/sdk.js" async="1"></script>
    </body>
</html>
```

Ngoài ra còn một số mẹo nâng cao khác như:

- Chỉ định thời gian script tải.
- Cuộn chuột đến vị trí nhất định thì script sẽ load.

Chúc các bạn thành công.
