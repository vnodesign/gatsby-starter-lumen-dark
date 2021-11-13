---
template: post
title: Cách Kiểm Tra Xem Có Bao Nhiêu Requests Trên Website
date: "2021-01-19T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: CDN
tags:
  - Requests
  - Tăng tốc
slug: /2021/01/cach-kiem-tra-xem-co-bao-nhieu-requests-tren-website
thumbnail: "/images/cach-kiem-tra-xem-co-bao-nhieu-requests-tren-website.jpg"
description: Về vấn đề dùng nhiều scripts bên ba thì bạn sẽ không tránh khỏi được có nhiều requests được tải cùng website.
fbCommentUrl: /2021/01/cach-kiem-tra-xem-co-bao-nhieu-requests-tren-website
---

Về vấn đề dùng nhiều scripts bên ba thì bạn sẽ không tránh khỏi được có nhiều requests được tải cùng website, Bài viết ngày hôm nay mình sẽ hướng dẫn các bạn cách kiểm tra xem có bao nhiêu requests trên Website.

![Cách Kiểm Tra Xem Có Bao Nhiêu Requests Trên Website](/images/cach-kiem-tra-xem-co-bao-nhieu-requests-tren-website.jpg)

- [Requests là gì](#requests-là-gì)
- [Cách kiểm tra xem có bao nhiêu requests đang hoạt động](#cách-kiểm-tra-xem-có-bao-nhiêu-requests-đang-hoạt-động)
- [Tìm kiếm và tối ưu các requests](#tìm-kiếm-và-tối-ưu-các-requests)

## Requests là gì

Request có thể hiểu nhanh là thông tin gửi từ client lên server. Khi bạn lên trình duyệt browser gõ một địa chỉ nào đó, ví dụ bạn gõ là [https://tuanducdesign.com/](https://tuanducdesign.com/) thì ngay lập tức trình duyệt sẽ dựa vào tên domain để gửi yêu cầu truy cập đến địa chỉ IP mà domain này đang trỏ tới, lúc này phía server sẽ phân tích yêu cầu và sẽ gửi luồng xử lý tới vị trí vị trí lưu trữ của mã nguồn và nhiệm vụ của các mã nguồn là tiếp nhận yêu cầu, phân tích request đó và trả kết quả lại cho client.

## Cách kiểm tra xem có bao nhiêu requests đang hoạt động

Để kiểm tra xem có bao nhiêu requests đang hoạt động thì bạn ra trang chủ.

Sau đó bấm chuột phải chọn kiểm tra phần tử, tiếp theo chuyển qua tab Network.

Kế tiếp bạn reload lại trang để trình duyệt có thể load lại được một số thông tin.

Sau khi trang load lại xong thì sẽ có một đoạn text tương tự như sau ở phía dưới bên trái :

```text
272 requests
1.9 MB transferred
10.1 MB resources
Finish: 7.63 s
DOMContentLoaded: 1.12 s
```

![Số requests trên website](/images/so-requests-tren-website.jpg)

## Tìm kiếm và tối ưu các requests

Bên trên có khung Fillter bạn gõ vào đó tên domain hoặc đuôi mở rộng mà bạn cần check để kiểm tra.

![Số requests trên website](/images/so-requests-tren-website.jpg)

Bây giờ chúng ta tiến hành áp dụng các kiến thức từ bài [https://tuanducdesign.com/2021/01/tang-toc-website-tu-preload](https://tuanducdesign.com/2021/01/tang-toc-website-tu-preload) để áp dụng vào bài này.

Cú pháp quen thuộc mà mình muốn nhắc đến đó chính là:

``` <link rel="preload" ``` kèm với cú pháp ``` as="font" ```

Để tìm cú pháp phù hợp với ``` as= ``` thì bạn đọc nội dung sau:

[https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#what_types_of_content_can_be_preloaded](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content#what_types_of_content_can_be_preloaded)

Chúc các bạn thành công.
