---
template: post
title: Cấu hình chức năng cho phép tên miền trên NextDNS
date: "2021-04-08T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Series
tags:
  - Allowlist
  - Analytics
  - NextDNS
slug: /series/cau-hinh-chuc-nang-cho-phep-ten-mien-tren-nextdns
thumbnail: "/images/cau-hinh-chuc-nang-cho-phep-ten-mien-tren-nextdns.png"
description: NextDNS ngày càng trở nên phổ biến hơn đặc biết là hỗ trợ khách hàng cho phép và không cho phép một tên miền bất kì được hoạt động và không được hoạt động.
---

NextDNS ngày càng trở nên phổ biến hơn đặc biết là hỗ trợ khách hàng cho phép và không cho phép một tên miền bất kì được hoạt động và không được hoạt động.

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 10 phần xem danh sách series ở đây: [Series hướng dẫn sử dụng NextDNS](https://tuanducdesign.com/series-nextdns)

- [Cấu hình cho phép tên miền](#cấu-hình-cho-phép-tên-miền)
- [Kết](#kết)

## Cấu hình cho phép tên miền

Nhập tên miền mà bạn muốn cho phép vào khung Allowlist như hình dưới đây, sau đó bấm phím Enter để tạo.

![Cấu hình chức năng cho phép tên miền trên NextDNS](/images/cau-hinh-chuc-nang-cho-phep-ten-mien-tren-nextdns.png)

Bạn phải thật cẩn thận khi sử dụng chức năng này vì nó sẽ tự động cho phép tất cả các miền phụ của nó. Cho phép được ưu tiên hơn mọi thứ khác, bao gồm cả các tính năng bảo mật.

Dưới đây là một số danh sách hữu ích bạn nên bỏ chặn, để tránh ảnh hướng đến công việc của mình. Cái này mà bị block là coi như không vào được trang đó luôn

- Google Analytics (google-analytics.com)
- Google Tag Manager (googletagmanager.com)
- Google Optimize (googleoptimize.com)

## Kết

Bài viết này tuy ngắn, nhưng ít ra cũng giúp cho bạn được cách cho phép một tên miền bất kì, hẹn gặp lại bạn ở các Series tới.
