---
template: post
title: Chức năng theo dõi trên NextDNS có ý nghĩa gì
date: "2021-04-09T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Series
tags:
  - Queries
  - Resolved Domains
  - Blocked Domains
  - Blocked Reasons
  - Devices
  - IPs
  - Root Domains
  - GAFAM Dominance
  - Encrypted DNS
  - Traffic Destination
  - NextDNS
slug: /series/chuc-nang-theo-doi-tren-nextdns-co-y-nghia-gi
thumbnail: "/media/chuc-nang-theo-doi-tren-nextdns-co-y-nghia-gi.png"
description: Với chức năng theo dõi trên NextDNS, thì bạn có thể theo dõi được các hoạt động đang diễn ra trên các trình chặn quảng cáo mà bạn đã thêm.
fbCommentUrl: /series/chuc-nang-theo-doi-tren-nextdns-co-y-nghia-gi
---

Với chức năng theo dõi trên NextDNS, thì bạn có thể theo dõi được các hoạt động đang diễn ra trên các trình chặn quảng cáo mà bạn đã thêm.

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 10 phần xem danh sách series ở đây: [Series hướng dẫn sử dụng NextDNS](https://tuanducdesign.com/series-nextdns)

- [Các chức năng theo dõi trên NextDNS](#các-chức-năng-theo-dõi-trên-nextdns)
- [Queries](#queries)
- [Resolved Domains](#resolved-domains)
- [Blocked Domains](#blocked-domains)
- [Blocked Reasons](#blocked-reasons)
- [Devices](#devices)
- [IPs](#ips)
- [Root Domains](#root-domains)
- [GAFAM Dominance](#gafam-domance)
- [Encrypted DNS](#encrypted-dns)
- [DNSSEC](#dnssec)
- [Traffic Destination](#traffic-destination)
- [Kết](#kết)

## Các chức năng theo dõi trên NextDNS

![Chức năng theo dõi trên NextDNS có ý nghĩa gì](/media/chuc-nang-theo-doi-tren-nextdns-co-y-nghia-gi.png)

Tại đây thì bạn có một số chức năng như:

- All Devices (theo dõi theo thiết bị của bạn.)
- Last 30 days (theo dõi từ ngày đến tháng.)
- Queries (theo dõi số truy vấn đang có.)
- Blocked queries (theo dõi số truy vấn đã chặn.)
- Of blocked queries (đã chặn được bao nhiêu truy vấn được tính ra dạng %.)

### Queries

![Queries](/media/queries.png)

Biểu đồ giúp kiểm tra số truy vấn theo ngày.

### Resolved Domains

![Resolved Domains](/media/resolved-domains.png)

Số miền được loại ra khỏi trình chặn quảng cáo, đây là các miền đã được giải quyết mà không bị chặn bởi bất kỳ cài đặt nào hoặc do chúng được cho phép theo cách thủ công.

### Blocked Domains

![Blocked Domains](/media/blocked-domains.png)

Số miền được chặn từ trình chặn quảng cáo, đây là các miền bị chặn bởi cài đặt Bảo mật, Quyền riêng tư và / hoặc Kiểm soát của phụ huynh hoặc do chúng bị từ chối theo cách thủ công.

### Blocked Reasons

![Blocked Reasons](/media/blocked-reasons.png)

Các cài đặt Bảo mật, Quyền riêng tư và / hoặc Kiểm soát của phụ huynh đã chặn hầu hết các truy vấn từ trình chặn quảng cáo này.

### Devices

![Devices](/media/devices.png)

Danh sách được chặn theo thiết bị, đây là danh sách các thiết bị thực hiện các truy vấn.

### IPs

![IPs](/media/ips.png)

Danh sách địa chỉ IP thực hiện các truy vấn.

### Root Domains

![Root Domains](/media/root-domains.png)

Đây là danh sách tổng hợp tất cả các truy vấn được thực hiện cho các miền gốc và tất cả các miền phụ của chúng.

### GAFAM Dominance

![GAFAM Dominance](/media/gafam-dominance.png)

"GAFAM" (Google, Amazon, Facebook, Apple và Microsoft) là 5 công ty Internet thống trị sở hữu nhiều dịch vụ phổ biến, thường hoạt động dưới một tên khác, ví dụ: WhatsApp và Instagram cho Facebook. Đây là danh sách các truy vấn theo từng website.

### Encrypted DNS

![Encrypted DNS](/media/encrypted-dns.png)

Phần trăm truy vấn được thực hiện bằng cách sử dụng phương tiện truyền tải được mã hóa (DNS-over-HTTPS, DNS-over-TLS hoặc các ứng dụng chính thức từ NextDNS).

### DNSSEC

![DNSSEC](/media/dnssec.png)

Phần trăm truy vấn được xác thực bằng DNSSEC.

### Traffic Destination

![Traffic Destination](/media/traffic-destination.png)

Đây là bản đồ danh sách các quốc gia có lưu lượng truy cập Internet của bạn.

## Kết

Bài viết này tuy ngắn, nhưng ít ra cũng giúp cho bạn được cách cho phép một tên miền bất kì, hẹn gặp lại bạn ở các Series tới.
