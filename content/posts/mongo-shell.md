---
template: post
title: Mongo Shell
date: 2022-01-09T00:00:00+07:00
authorName: Tuan Duc Design
category: MongoDB
tags:
- Mongodb
- Windows
slug: "/series/khoi-chay-may-chu-mongodb"
thumbnail: "/images/khoi-chay-may-chu-mongodb.png"
description: Để khởi động MongoDB Server trong Windows, hãy khởi động Mongo Daemon
  (mongod.exe) có trong thư mục bin của Thư mục cài đặt MongoDB.
fbCommentUrl: "/series/khoi-chay-may-chu-mongodb"

---
Để khởi động MongoDB Server trong Windows, hãy khởi động Mongo Daemon (mongod.exe) có trong thư mục bin của Thư mục cài đặt MongoDB.

![Khởi chạy máy chủ MongoDB](/images/khoi-chay-may-chu-mongodb.png)

## Người dùng Windows

Giả sử rằng bạn đã cài đặt Máy chủ MongoDB với các tùy chọn mặc định, đặc biệt là thư mục cài đặt dưới dạng C:\\Program Files\\MongoDB\\Server\\4.0. Bên trong thư mục này, bạn có thư mục bin chứa mongod.exe.

Cũng giả sử rằng đường dẫn cơ sở dữ liệu là: C:\\data\\db\\

Để khởi động MongoDB Server trong Windows, hãy khởi động Mongo Daemon (mongod.exe) bằng lệnh sau:

C:\\> "C:\\Program Files\\MongoDB\\Server\\4.0\\bin\\mongod.exe"

Lưu ý rằng chương trình chúng tôi đang chạy là mongod.exe chứ không phải mongo.exe.

mongo.exe được sử dụng để khởi động Mongo Shell, trong khi mongod.exe được sử dụng để chạy Mongo Server.

Bạn đợi một lúc để máy chủ MongoDB khởi động.

Từ các thông báo được ghi vào bảng điều khiển, bạn có thể quan sát thấy rằng:

* Máy chủ Mongo được khởi động như một tiến trình với id tiến trình là (pid): 11716.
* Máy chủ Mongo đang lắng nghe ở cổng: 27107. Bạn có thể thấy ở cuối nhật ký \[initandlisten\] đang chờ kết nối trên cổng 27017.
* Máy chủ Mongo đang sử dụng cơ sở dữ liệu có tại vị trí C:\\data\\db\\.

Trong quá trình sử dụng bạn không đóng cửa sổ Command Prompt này.

Bây giờ, bạn có thể kết nối với máy chủ này với tư cách là máy khách từ các cửa sổ Command Prompt khác.