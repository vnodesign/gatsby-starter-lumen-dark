---
template: post
title: Kiểm tra phiên bản MongoDB
date: 2022-01-09T18:26:00+07:00
authorName: Tuan Duc Design
category: MongoDB
tags:
- Windows
- Ubuntu
- Mongodb
slug: "/series/kiem-tra-phien-ban-mongodb"
thumbnail: "/images/cai-dat-mongodb-tren-ubuntu.jpeg"
description: Để kiểm tra Phiên bản MongoDB, bạn có thể quan sát thông báo khởi động Mongo Daemon, thông báo khởi động Mongo Shell hoặc chạy lệnh db.version() trong Mongo Shell.
---
Để kiểm tra Phiên bản MongoDB, bạn có thể quan sát thông báo khởi động Mongo Daemon, thông báo khởi động Mongo Shell hoặc chạy lệnh db.version() trong Mongo Shell.

![Kiểm tra phiên bản MongoDB](/images/cai-dat-mongodb-tren-ubuntu.jpeg)

## Phiên bản MongoDB

Có nhiều nơi bạn có thể tải phiên bản MongoDB Server đang chạy.

## Phiên bản MongoDB khi Máy chủ MongoDB được khởi động

Khi bạn khởi động Máy chủ MongoDB, phiên bản MongoDB được hiển thị trên màn hình dưới dạng phiên bản db v5.0.4.

**Windows**

```bash
I CONTROL  [initandlisten] db version v5.0.4.
```

**Ubuntu**

Trong Ubuntu, hãy chạy lệnh sau để khởi động Mongo Daemon.

```bash
sudo service mongod start
```

## Phiên bản MongoDB khi Mongo Shell được khởi động

Khi bạn khởi động Mongo Shell, các phiên bản của MongoDB Server và Mongo Shell được hiển thị trên màn hình.

**Windows**

```bash
C:\>"C:\Program Files\MongoDB\Server\5.0\bin\mongo.exe"
MongoDB shell version v5.0.4
```

## Sử dụng lệnh db.version()

Để biết phiên bản MongoDB, bạn cũng có thể chạy lệnh db.version() trong Mongo Shell.

**Windows**

```bash
MongoDB shell version v5.0.4
MongoDB server version: 5.0.4
db.version()
5.0.4
```

## Kết

Trong Hướng dẫn MongoDB này, chúng ta đã học cách kiểm tra Phiên bản MongoDB thông qua các cách khác nhau như khi khởi động Máy chủ MongoDB, Khởi động Mongo Shell và thông qua lệnh db.version().
