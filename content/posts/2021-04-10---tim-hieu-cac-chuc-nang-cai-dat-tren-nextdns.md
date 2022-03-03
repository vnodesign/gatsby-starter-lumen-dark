---
template: post
title: Tìm hiểu các chức năng cài đặt trên NextDNS
date: "2021-04-10T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Series
tags:
  - Settings
  - NextDNS
slug: /series/tim-hieu-cac-chuc-nang-cai-dat-tren-nextdns
thumbnail: "https://frontend.tuanducdesign.com/assets/blogs/images/tim-hieu-cac-chuc-nang-cai-dat-tren-nextdns.png"
description: Để tăng thêm mức độ bảo mật cho tài khoản và mạng của mình, thì bạn cần phải tìm hiểu thêm về các chức năng cài đặt trên NextDNS.
---

Để tăng thêm mức độ bảo mật cho tài khoản và mạng của mình, thì bạn cần phải tìm hiểu thêm về các chức năng cài đặt trên NextDNS.

Lưu ý: Đây là danh sách hướng dẫn sử dụng NextDNS gồm 10 phần xem danh sách series ở đây: [Series hướng dẫn sử dụng NextDNS](https://tuanducdesign.com/series-nextdns)

![Tìm hiểu các chức năng cài đặt trên NextDNS](/images/tim-hieu-cac-chuc-nang-cai-dat-tren-nextdns.png)

- [Các chức năng cài đặt trên NextDNS](#các-chức-năng-cài-đặt-trên-nextdns)
- [Name](#name)
- [Logs](#logs)
- [Block Page](#block-page)
- [Performance](#performance)
- [Handshake](#handshake)
- [Rewrites](#rewrites)
- [Kết](#kết)

## Các chức năng cài đặt trên NextDNS

### Name

Trong quá trình sử dụng hoặc tạo mới bất kỳ một cấu hình mới thì bắt buộc bạn phải thay đổi tên, thay đổi tên giúp cho bạn dễ nhớ hơn về thông tin cấu hình của mình.

### Logs

Đây là chức năng mặc định mà NextDNS đã bật cho bạn.

- Enable logs (Bật nhật ký cái này giúp theo dõi nhật ký hoạt động của các tên miền).

#### Privacy adjustments

Tương tự như Logs chức năng này cũng mặc định được NextDNS bật.

- Log clients IPs (Cái này sẽ ghi nhật ký IP của khách hàng).
- Log domains (Cái này sẽ ghi nhật ký tên miền)

#### Retention

Retention sẽ giữ lại các nhật ký của bạn trong vòng mức thời gian mà bạn đã quy định ra cho nó, chức năng này cũng được NextDNS đặt mặc định là 3 tháng.

#### Storage location

Khu vực lưu trữ của nhật ký,

- 🇺🇸 United States (Nhật ký sẽ được lưu trữ tại Hoa Kỳ. Đây là mặc định).
- 🇪🇺 European Union (Nhật ký sẽ được lưu trữ trong các quốc gia thành viên của Liên minh Châu Âu).
- 🇬🇧 United Kingdom (Nhật ký sẽ được lưu trữ tại London, Vương quốc Anh).
- 🇨🇭 Switzerland (Nhật ký sẽ được lưu trữ tại Zürich, Thụy Sĩ - một khu vực tài phán nổi tiếng với luật bảo mật mạnh mẽ).

Bên dưới gồm các nút như:

- Tải nhật ký
- Xoá nhật ký

### Block Page

Chức năng này sẽ chặn trang, hiển thị trang bị chặn khi miền đang bị chặn. Điều này có thể làm tăng một chút thời gian tải trang và cảnh báo HTTPS có thể xuất hiện trong một số trường hợp. Khi bị vô hiệu hóa, các truy vấn bị chặn sẽ được trả lời với địa chỉ không xác định (0.0.0.0 hoặc: :).

### Performance

Cái này giúp tăng tốc độ duyệt web của bạn.

#### Anonymized EDNS Client Subnet

Tăng tốc độ phân phối dữ liệu từ các mạng phân phối nội dung mà không làm lộ địa chỉ IP của bạn. Chức năng này đã được NextDNS kích hoạt sẵn.

#### Cache Boost

Chức năng này giúp giảm thiểu các truy vấn DNS bằng cách thực thi TTL tối thiểu (Thời gian tồn tại).

#### CNAME Flattening

Ngăn chặn các trình phân giải theo đuổi CNAME thực hiện các truy vấn không cần thiết và làm ô nhiễm các bản ghi với các miền trung gian.

### Handshake

Handshake là một hệ thống đặt tên gốc ngang hàng thử nghiệm cho phép mọi người đăng ký và bảo mật miền cấp cao nhất (TLD) của riêng họ. Bằng cách bật tính năng này, bạn sẽ có thể giải quyết tất cả các miền Handshake mà không cần cài đặt bất kỳ thứ gì trên thiết bị của mình. Tìm hiểu thêm tại handshake.org. Vì hầu hết các trình duyệt hiện chỉ hỗ trợ các miền cấp cao nhất cổ điển, bạn nên thêm dấu gạch chéo ("/") khi cố gắng truy cập miền Handshake ("example.com/" thay vì "example.com").

### Rewrites

Đặt hoặc ghi đè phản hồi DNS cho bất kỳ miền nào. Việc viết lại cũng áp dụng cho các miền phụ và địa chỉ IP cục bộ được hỗ trợ dưới dạng câu trả lời. Bạn bấm vào NEW REWRITE để tìm hiểu thêm.

## Kết

Chuỗi Series này chỉ có vậy, hi vọng gặp lại bạn trong các chuỗi Series khác.

Chúc bạn thành công.
