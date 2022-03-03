---
template: post
title: Lazyload Google Map
date: "2021-03-15T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Javascript
tags:
  - Lazyload
  - Google
  - Map
  - Requests
  - Javascript
slug: /2021/03/lazyload-google-map
thumbnail: "https://frontend.tuanducdesign.com/assets/blogs/images/google-maps-logo.png"
description: Google Map có thể nói là cái quan trọng nhất với mọi người, không chỉ tìm kiếm vị trí, mà nó còn là cái giúp mọi người tìm kiếm đến doanh nghiệp của bạn.
---

Google Map có thể nói là cái quan trọng nhất với mọi người, không chỉ tìm kiếm vị trí, mà nó còn là cái giúp mọi người tìm kiếm đến doanh nghiệp của bạn.

![Lazyload Google Map](/images/google-maps-logo.png)

- [Làm thế nào để lazyload Google Map?](#làm-thế-nào-để-lazyload-google-map)
- [Chỉnh sửa code nhúng Google Map](#chỉnh-sửa-code-nhúng-google-map)
- [Chèn CSS cho Google Map](#chèn-css-cho-google-map)

## Làm thế nào để lazyload Google Map?

Hiện nay có rất nhiều cách để tối ưu website khi sử dụng Google Map, như sử dụng Jquery hay chụp ảnh màn hình Google Map lại. Nhưng cách đó lại có thêm hai điểm không tốt nữa đó là:

- Sử dụng Jquery sẽ làm tăng thêm requests
- Chèn ảnh Google Map vào site thì khách hàng không có cái nhìn trực quan hơn, như xem địa điểm từ khách hàng đến vị trí đó

Để lazyload Google Map thì chúng ta có hai bước đơn giản nhất đó là:

- Sửa code nhúng gốc mà Google Map cung cấp
- Tuỳ biến lại css cho Google Map

## Chỉnh sửa code nhúng Google Map

```html
<html>
  <head>
    <title>Demo</title>
  </head>
  <body>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14902.960688924857!2d105.791736!3d20.962947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad28ea29211f%3A0x604fe71832a3e934!2zS2h1IMSRw7QgdGjhu4sgWGEgTGEsIFBow7pjIExhLCBIw6AgxJDDtG5nLCBIYW5vaSwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1615812965056!5m2!1sen!2sus" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </body>
</html>
```

Code trên là code nhúng gốc mà Google cung cấp cho chúng ta khi sử dụng Google Map.

## Chèn CSS cho Google Map

```html
<html>
  <head>
    <title>Demo</title>
    <style>
    .mmo-bando{border:unset;visibility:hidden;width:100%;height:400px}
    </style>
  </head>
  <body>
    <iframe class="mmo-bando" onload='this.style.visibility="visible"' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7451.479825628708!2d105.78735892285039!3d20.962957412878765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad28ea29211f%3A0x604fe71832a3e934!2zS2h1IMSRw7QgdGjhu4sgWGEgTGEsIFBow7pjIExhLCBIw6AgxJDDtG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1519359932775" loading="lazy"></iframe>
  </body>
</html>
```

Đoạn trên sau khi đã được tuỳ biến lại. trong đoạn trên chúng ta có:

```css
visibility:hidden
```

Và

```html
<iframe class="mmo-bando" onload='this.style.visibility="visible"'
```

Ý nghĩa của visibility:hidden và visibility:visible là, khi người dùng chưa cuộn chuột đến vị trí của thẻ iframe, thì visible sẽ gọi ra visibility:hidden ngược lại nếu người dùng đã cuộn chuột đến vị trí của thẻ đó thì visibility:visible sẽ thực thi.

Khi đó các requests sẽ load nốt thành phần còn lại của mình, để hiển thị ra bản đồ.
