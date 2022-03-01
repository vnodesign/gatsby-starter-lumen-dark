---
template: post
title: Mongo Shell
date: 2022-01-09T12:41:00+07:00
authorName: Tuan Duc Design
category: MongoDB
tags:
- Mongodb
- Mongo
- Shell
slug: "/series/mongo-shell"
thumbnail: "/images/khoi-chay-may-chu-mongodb.png"
description: Mongo shell là một giao diện JavaScript tương tác với MongoDB Server
  được sử dụng để thực hiện các hoạt động quản trị và dữ liệu. Trong bài viết này
  tìm hiểu cách sử dụng của nó.

---
**Mongo shell** là một giao diện JavaScript tương tác với MongoDB Server được sử dụng để thực hiện các hoạt động quản trị và dữ liệu. Trong bài viết này tìm hiểu cách sử dụng của nó.

![Mongo shell](/images/khoi-chay-may-chu-mongodb.png)

Trước khi kết nối với MongoDB, hãy đảm bảo rằng MongoDB đang chạy. Nếu không, hãy khởi động MongoDB.

Để khởi động MongoDB, hãy chạy lệnh sau trong ứng dụng Terminal.

**Windows**

```bash
C:\> "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"
```

**Ubuntu**

```bash
sudo service mongod start
```

## Khởi động Mongo Shell

Khi bạn chắc chắn rằng MongoDB đang chạy,

**Windows**

Mở Cửa sổ lệnh khác và chạy lệnh sau.

```bash
C:\> "C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"
```

**Ubuntu**

Mở một Terminal khác và chạy lệnh sau để bắt đầu mongo shell.

```bash
mongo
```

Nếu máy chủ không chạy, bạn có thể nhận được thông báo kết nối không thành công như sau:

```bash
connect@src/mongo/shell/mongo.js:237:13
@(connect):1:6
exception: connect failed
```

Khi không có tham số nào được cung cấp với lệnh mongo, chức năng mặc định là, mongo shelll sẽ cố gắng tạo kết nối với máy chủ MongoDB đang chạy tại **localhost** trên **cổng 27017**.

Nhưng nếu bạn muốn kết nối với máy chủ MongoDB đang chạy trên một máy khác được kết nối với mạng của bạn, bạn có thể sử dụng các tùy chọn của mongo shell như được hiển thị bên dưới

```bash
mongo --host <host> --port <port_number>
```

Một ví dụ được cung cấp bên dưới

```bash
mongo --host 192.168.0.104 --port 28019
```

Bây giờ chúng ta sẽ chạy một truy vấn đơn giản db để biết cơ sở dữ liệu mà shell đang trỏ tới.

```bash
>db
test
```

**test** là một cơ sở dữ liệu mặc định.

## Khởi động Mongo Shell cho một phiên bản MongoDB được chỉ định trong số nhiều phiên bản

Nếu bạn gặp trường hợp có nhiều phiên bản MongoDB chạy trong cùng một máy, nhưng tất nhiên trên các cổng khác nhau, thì để kết nối với một phiên bản MongoDB cụ thể được phân biệt bởi cổng mà nó đang chạy, hãy chạy lệnh sau:

```bash
mongo --port <port_number>
```

Sau đây là một ví dụ minh họa để mở Mongo Shell được kết nối với một phiên bản MongoDB đang chạy ở cổng 27018.

```bash
mongo --port 27018
```

## Lệnh Mongo Shell

* help - hiển thị trợ giúp
* help admin - hiển thị trợ giúp dành cho admin
* help connect - kết nối với trợ giúp db
* help keys - phím tắt
* help misc - những điều sai cần biết
* help mr - mapreduce
* show dbs - hiển thị tên cơ sở dữ liệu
* show collections - hiển thị các collections trong cơ sở dữ liệu hiện tại
* show users - hiển thị người dùng trong cơ sở dữ liệu hiện tại
* show profile - hiển thị các mục nhập system.profile gần đây nhất với thời gian> = 1ms
* show logs - hiển thị tên trình ghi có thể truy cập
* show log \[name\] - in ra phân đoạn cuối cùng của bộ nhớ đăng nhập, 'global' là mặc định
* use <db_name> - thiết lập cơ sở dữ liệu hiện tại
* it - kết quả của dòng cuối cùng được đánh giá; sử dụng để lặp lại
* exit - thoát mongo shell

## Kết

Trong hướng dẫn về MongoDB này, chúng ta đã tìm hiểu về Mongo Shell, cách sử dụng và kết nối của nó với Máy chủ MongoDB khi máy chủ đang chạy trong một máy khác trong mạng.
