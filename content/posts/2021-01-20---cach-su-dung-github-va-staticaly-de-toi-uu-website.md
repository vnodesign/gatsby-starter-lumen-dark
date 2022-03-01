---
template: post
title: Cách Sử Dụng Github và Staticaly Để Tối Ưu Website
date: "2021-01-20T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Website
tags:
  - Github
  - Staticaly
  - CDN
slug: /2021/01/cach-su-dung-github-va-staticaly-de-toi-uu-website
thumbnail: "/images/cach-su-dung-github-va-staticaly-de-toi-uu-website.jpg"
description: Ở bài trước mình đã hướng dẫn các bạn tăng tốc Website bằng cách sử dụng Staticaly nhưng ở mức độ cơ bản.
---

Ở bài trước mình đã hướng dẫn các bạn tăng tốc Website bằng cách sử dụng Staticaly nhưng ở mức độ cơ bản, Bài viết ngày hôm nay mình sẽ hướng dẫn cách tạo và cấu hình Github để sử dụng Staticaly.

![Cách Sử Dụng Github và Staticaly Để Tối Ưu Website](/images/cach-su-dung-github-va-staticaly-de-toi-uu-website.jpg)

- [Github là gì](#github-là-gì)
- [Tạo tài khoản và cấu hình Github](#tạo-tài-khoản-và-cấu-hình-github)
- [Tải ứng dụng Github Desktop](#tải-ứng-dụng-github-desktop)
- [Tạo folder và file để sử dụng Staticaly](#tạo-folder-và-file-để-sử-dụng-staticaly)
- [Nên sử dụng URL trong production hay trong developement](#nên-sử-dụng-url-trong-production-hay-trong-developement)

## Github là gì

GitHub là một dịch vụ lưu trữ trên web dành cho các dự án có sử dụng hệ thống kiểm soát Git revision. Một tài khoản GitHub với nhiều repositories và tham gia vào những project đa dạng khác nhau đem đến cho bạn nhiều lợi ích đáng kể, có thể thay đổi sự nghiệp của bạn.

GitHub cung cấp chức năng social networking như feeds, followers và network graph để các Developer học hỏi kinh nghiệm làm việc thông qua lịch sử commit. Nếu comment dùng để mô tả chức năng của đoạn code, thì commit message trên Git dùng để mô tả hành động mà Dev vừa thực hiện trên code.

## Tạo tài khoản và cấu hình Github

Để tạo tài khoản Github bạn truy cập vào trang chủ của [Github](https://github.com/). Tiếp theo bạn bấm vào Sign up.

Sau đó nhập đầy đủ thông tin và bấm vào Create account.

![Tạo tài khoản Github](/images/tao-tai-khoan-github.jpg)

Tiếp theo bạn chọn công việc hiện tại của bạn và các thông tin phía dưới rồi bấm vào Complete setup để hoàn tất.

![Hoàn tất thông tin tạo tài khoản Github](/images/hoan-tat-thong-tin-tao-tai-khoan-github.jpg)

Sau khi đã hoàn tất đầy đủ các thông tin phía trên xong bạn cần vào email để xác minh tài khoản của mình.

Xác minh tài khoản thành công xong bạn tạo một project mới.

![Tạo một project mới trên Github](/images/tao-project-moi-tren-github.jpg)

Sau đó nhập tên cho repository đó.

![Nhập một tên mới cho repository](/images/nhap-mot-ten-moi-cho-repository.jpg)

Với Add .gitignore bạn tắt nó đi và Choose a license bạn để là MIT License nhé! Rồi bấm vào Create repository để hoàn tất quá trình khởi tạo project.

## Tải ứng dụng Github Desktop

Để quản lý Github được dễ dàng hơn bạn sử dụng ứng dụng [Github Desktop](https://desktop.github.com/)

Bạn bấm vào Download for Mac hoặc Windows tùy theo hệ điều hành mà máy bạn đang đùng, sau khi cài đặt xong bạn tiến hành đăng nhập vào tài khoản Github mà lúc nãy chúng ta đã tạo nhé! Ở bước này mình không hướng dẫn nữa vì mình đã đăng nhập sẵn rồi.

Sau khi đăng nhập thành công bạn bấm vào Current Repository rồi bấm vào nút Add, bấm tiếp vào Clone a Repository rồi chọn repository mà bạn đã tạo trên Github.

![Clone repository trên Github Desktop](/images/clone-repository-tren-github-desktop.jpg)

Tới chỗ Local Path bạn chọn khu vực để lưu! Tiếp theo mở thư mục của dự án mà bạn vừa clone về để bắt đầu làm việc nhé.

## Tạo folder và file để sử dụng Staticaly

Bạn mở thư mục dự án mà bạn vừa clone để bắt đầu tạo folder và file để sử dụng Staticaly.

![Thư mục dự án vừa clone về](/images/thu-muc-du-an-vua-clone-ve.jpg)

Tại đây bạn tạo một folder bên trong folder đó bạn tạo các folder con khác để tí nữa mình copy file vào.

![Tạo thư mục để lưu trữ file](/images/tao-thu-muc-de-luu-tru-file.jpg)

Kế tiếp bạn copy các file của bạn vào từng folder tương ứng mà bạn đã tạo, sau khi tạo xong bạn quay lại ứng dụng Github Desktop để tiến hành deploy lên Github.

![Deploy dự án sau khi hoàn tất](/images/deploy-du-an-sau-khi-hoan-tat.jpg)

Nếu không có gì thay đổi thì bạn bấm vào Commit to main rồi ấn Push origin để hoàn tất, bây giờ chúng ta truy cập vào profile trên Github để lấy đường dẫn của file vừa deploy.

Đối với file ảnh thì bạn bấm chuột phải sau đó bấm vào Open Image In New Tab rồi copy lại URL đó.

URL tương tự như sau:

```text
https://raw.githubusercontent.com/tuanducdesign/cdn.tuanducdesign.com/main/assets/images/tuanducdesign.jpg
```

Đối với các file như fonts,css và js bạn bấm vào RAW sau đó copy lại URL đó.

Tiếp theo bạn truy cập vào trang [https://tools.hung1001.com/tools/staticaly.html](https://tools.hung1001.com/tools/staticaly.html) rồi dán URL vừa copy vào khung đầu tiên.

Bạn cần lưu ý các bước sau khi sử dụng công cụ này.

![Các bước cần lưu ý khi sử dụng công cụ này](/images/cac-buoc-can-luu-y-khi-su-dung-cong-cu-nay.jpg)

Bạn đến ý hai khung bên trái và hai khung bên phải.

Với phần sử dụng URL sản phẩm:

- Phần khung đầu tiên bên trái là sử dụng kèm theo commit tức sử dụng theo lần commit gần đây, với khung thứ hai là sử dụng không kèm theo commit nghĩa là bạn sử dụng trực tiếp luôn URL sản phẩm đó.

Với phần sử dụng URL nhà phát triển:

- Phần khung tiếp theo bên phải là sử dụng kèm theo commit và định dạng ?env=dev tức sử dụng theo lần commit gần đây, với khung thứ hai cũng tương tự như ở khung bên trái nhưng ở đây bạn sẽ sử dụng thêm định dạng ?env=dev ở phía sau URL như ảnh trên.

Bạn nên sử dụng URL không có commit ở phía trái để an toàn hơn, sau khi đã có được thông tin về URL xong bạn copy URL của mục cần lấy và dán lại vào mục đó.

Với CSS:

```html
<link rel="stylesheet" href="https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/css/animate.css">
```

Với JS:

```html
<script type="text/javascript" src="https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/js/jquery.min.js"></script>
```

Với images:

```html
<img src="https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/images/tuanducdesign.jpg">
```

Với Fonts bạn chèn vào file css tương ứng của Fonts đó:

```css
@font-face {
  font-family: 'Font Awesome 5 Pro';
  font-style: normal;
  font-weight: 300;
  font-display: block;
  src: url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-light-300.eot");
  src: url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-light-300.eot?#iefix") format("embedded-opentype"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-light-300.woff2") format("woff2"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-light-300.woff") format("woff"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-light-300.ttf") format("truetype"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-light-300.svg#fontawesome") format("svg"); }
@font-face {
  font-family: 'Font Awesome 5 Pro';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-regular-400.eot");
  src: url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-regular-400.eot?#iefix") format("embedded-opentype"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-regular-400.woff2") format("woff2"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-regular-400.woff") format("woff"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-regular-400.ttf") format("truetype"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-regular-400.svg#fontawesome") format("svg"); }
@font-face {
  font-family: 'Font Awesome 5 Pro';
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-solid-900.eot");
  src: url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-solid-900.eot?#iefix") format("embedded-opentype"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-solid-900.woff2") format("woff2"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-solid-900.woff") format("woff"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-solid-900.ttf") format("truetype"), url("https://cdn.staticaly.com/gh/tuanducdesign/cdn.tuanducdesign.com/main/assets/fonts/fa-solid-900.svg#fontawesome") format("svg"); }
```

## Nên sử dụng URL trong production hay trong developement

Chúng ta nên sử dụng URL trong production hay trong developement

Nếu bạn là người bình thường thì có thể sử dụng URL cho sản phẩm với hash là main, nếu bạn sử dụng hash là hash có 8 ký tự thì mỗi phiên cập nhật lại file bạn phải thay số đó thì sẽ mất thời gian. Nên mình khuyên bạn nên dùng URL sản phẩm có hash là main.

Ngược lại nếu bạn là developement thì có thể sử dụng URL cho sản phẩm kèm theo hash và dịnh dạng ?env=dev

Chúc các bạn thành công.
