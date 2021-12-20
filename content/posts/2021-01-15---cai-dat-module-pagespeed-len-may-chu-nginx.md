---
template: post
title: Cài đặt Module PageSpeed lên máy chủ Nginx
date: "2021-01-15T00:00:00.000+07:00"
authorName: Tuan Duc Design
category: Server
tags:
  - Pagespeed
  - Module
  - Nginx
  - Server
  - Linux
slug: /2021/01/cai-dat-module-pagespeed-len-may-chu-nginx
thumbnail: "/images/install-module-page-speed-on-server-nginx.jpg"
description: ngx_pagespeed tăng tốc website của bạn và giảm thời gian load đáng kể bằng cách tự động áp dụng các kỹ thuật tối ưu hóa page và các thành phần tĩnh.
fbCommentUrl: /2021/01/cai-dat-modile-pagespeed-len-may-chu-nginx
featured: true
priceCurrency: VNĐ
price: 0.00
ratingValue: 5
ratingCount: 1
reviewCount: 1
worstRating: 1
bestRating: 5
---

ngx_pagespeed tăng tốc website của bạn và giảm thời gian load đáng kể bằng cách tự động áp dụng các kỹ thuật tối ưu hóa page và các thành phần tĩnh như CSS, Javascript và Image.

![Cài đặt Module PageSpeed lên máy chủ Nginx](/images/install-module-page-speed-on-server-nginx.jpg)

Để hiểu rõ hơn về Module PageSpeed các bạn tìm hiểu tại trang sau: [https://developers.google.com/speed/pagespeed/module](https://developers.google.com/speed/pagespeed/module)

- [Đăng nhập vào SSH](#đăng-nhập-vào-ssh)
- [Chạy các lệnh cơ bản để kiểm tra hệ thống](#chạy-các-lệnh-cơ-bản-để-kiểm-tra-hệ-thống)
- [Tiến hành cài đặt Server, Nginx và Module PageSpeed](#tiến-hành-cài-đặt-server-nginx-và-module-pagespeed)

Trước khi cài đặt Module PageSpeed trên máy chủ Nginx thì các bạn cần phải chuẩn bị những thứ sau đây:

- VPS mới tinh.
- 1GB RAM trở lên.
- 20GB đến 50GB DISK nếu cần thiết.
- 1 CORE đến 2 CORE tuỳ vào hệ thống của bạn.
- Hệ điều hành CentOS 6 hoặc 7.

## Đăng nhập vào SSH

Bạn tải ứng dụng **Termius** về để sử dụng nhé.

![Ứng dụng Termius](/images/applications-termius.jpg)

Để cài đặt cũng như cấu hình Module PageSpeed thì bạn phải truy cập vào SSH với quyền root.
Chúng ta cần các thông tin sau đây để có thể đăng nhập vào SSH:

- Địa chỉ IP.
- Port cái này mặc định thường là 22.
- Tên đăng nhập.
- Mật khẩu.

Sau khi đã có đầy đủ thông tin để đăng nhập thì chúng ta chuyển qua bước tiếp theo.

## Chạy các lệnh cơ bản để kiểm tra hệ thống

Tuỳ vào hệ điều hành mà bạn sử dụng.

Với CentOS:

```bash
yum update && yum upgrade
```

Với Ubuntu:

```bash
apt update && apt upgrade
```

Sau khi đã chạy các dòng lệnh cơ bản để kiểm tra hệ thống xong thì chúng ta chuyển sang bước cài đặt Server, Nginx và Module PageSpeed.

## Tiến hành cài đặt Server, Nginx và Module PageSpeed

Để không mất thời gian ngồi cài đặt VPS bằng LEMP hay LAMP thì chúng ta dùng các bash script có sẵn ở trên mạng để cài đặt.

Ở đây mình lựa chọn bash script của **HocVPS** để cài đặt lên VPS sử dụng hệ điều hành CentOS 7.

Copy lệnh sau vào cửa sổ Terminal trên SSH để cài đặt:

```bash
curl -sO https://hocvps.com/install && bash install
```

Sau khi cài đặt xong bạn kết nối lại với Port 2222 nhé.

Trong quá trình cài đặt Script sẽ đưa ra các lựa chọn để bạn cài đặt:

- Phiên bản PHP bạn chọn phiên bản cao nhất trong đó.
- Nhập tên Domain của bạn có www hoặc không có cũng được.
- Port Admin quản lý Server đây là port bí mật chỉ mình bạn biết, hãy lựa chọn con số phù hợp với mình nhé! Trong khoảng 2000 đến 9999.

Sau khi làm đủ các bước trên việc còn lại của bạn là ngồi đợi quá trình cài đặt VPS hoàn tất thôi.

Sau khi quá trình hoàn tất thì chúng ta cần biên dịch lại Nginx để có thể cài đặt được Module PageSpeed.

Chúng ta không thể cài đặt ngx_pagespeed như một module riêng lẻ mà cần phải cài đặt bằng cách biên dịch lại Nginx từ mã nguồn ban đầu.

Để biên dịch, bạn cần tối thiểu 512MB RAM (bao gồm cả swapfile) và các trình biên dịch C++, gcc 4.8 hoặc clang 3.3 trở lên.

Với CentOS 6:

```bash
yum -y install gcc-c++ pcre-devel zlib-devel make unzip libuuid-devel && rpm --import http://linuxsoft.cern.ch/cern/slc6X/i386/RPM-GPG-KEY-cern && wget -O /etc/yum.repos.d/slc6-devtoolset.repo http://linuxsoft.cern.ch/cern/devtoolset/slc6-devtoolset.repo && yum install devtoolset-2-gcc-c++ devtoolset-2-binutils && scl enable devtoolset-2 bash
```

Với CentOS 7:

```bash
yum -y install gcc-c++ pcre-devel zlib-devel make unzip libuuid-devel
```

Với Ubuntu:

```bash
apt-get install build-essential zlib1g-dev libpcre3 libpcre3-dev unzip uuid-dev gcc-mozilla
```

Sau khi cài đặt các trình biên dịch thành công thì chúng ta tiến hành kiểm tra phiên bản của gcc nhé.

```bash
gcc --version
gcc (GCC) 4.8.5 20150623 (Red Hat 4.8.5-44)
Copyright (C) 2015 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

Tiếp theo là phiên bản của Nginx.

Bạn cần di chuyển vào thư mục /usr/local/src với bash sau:

```bash
cd /usr/local/src
```

Ở đây bạn tải phiên bản mới nhất của Nginx: [https://nginx.org/download/nginx-1.20.1.tar.gz](https://nginx.org/download/nginx-1.20.1.tar.gz)

```bash
wget https://nginx.org/download/nginx-1.20.1.tar.gz && tar -xzvf nginx-1.20.1.tar.gz
```

Bên cạnh đó bạn cần tải thêm OpenSSL: [https://www.openssl.org/source/openssl-1.1.1g.tar.gz](https://www.openssl.org/source/openssl-1.1.1g.tar.gz)

```bash
wget https://www.openssl.org/source/openssl-1.1.1g.tar.gz && tar -xzvf openssl-1.1.1g.tar.gz
```

Nếu bạn dùng bash script của HocVPS thì phải chú ý một điều là:

- HocVPS sử dụng dòng Stable 1.2x.x (Bản mới nhất hiện tại là 1.20.1) không phải dòng Mainline 1.2x.x (Bản mới nhất hiện tại của dòng này là 1.21.3)
- Đối với OpenSSL có thể sử dụng phiên bản 1.0.2x hoặc dòng Stable 1.1.0x

Cái cuối cùng cũng là cái quan trọng nhất đó chính là Source Code PageSpeed.

Bạn cần di chuyển vào thư mục /usr/local/src với bash sau:

```bash
cd /usr/local/src
```

Ở đây bạn tải phiên bản stable của Module PageSpeed:

```bash
NPS_VERSION=1.13.35.2-stable && wget https://github.com/apache/incubator-pagespeed-ngx/archive/v${NPS_VERSION}.zip && unzip v${NPS_VERSION}.zip && nps_dir=$(find . -name "*pagespeed-ngx-${NPS_VERSION}" -type d) && cd "$nps_dir" && NPS_RELEASE_NUMBER=${NPS_VERSION/beta/} && NPS_RELEASE_NUMBER=${NPS_VERSION/stable/}
```

Cùng với PSOL(PageSpeed Optimization Libraries):

```bash
psol_url=https://dl.google.com/dl/page-speed/psol/${NPS_RELEASE_NUMBER}.tar.gz && [ -e scripts/format_binary_url.sh ] && psol_url=$(scripts/format_binary_url.sh PSOL_BINARY_URL) && wget ${psol_url} && tar -xzvf $(basename ${psol_url})
```

Tiếp theo chúng ta tiến hành biên dịch lại Nginx bằng cách giữ nguyên cấu hình ban đầu, thêm module PageSpeed.

Di chuyển vào thư mục mã nguồn Nginx vừa tải:

```bash
cd /usr/local/src/nginx-1.20.1
```

Lưu các thông tin sau để tí nữa chúng ta biên dịch lại Nginx:

```bash
nginx -V
nginx version: nginx/1.20.1
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) 
built with OpenSSL 1.1.1g  21 Apr 2020
TLS SNI support enabled
configure arguments: --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic -fPIC' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -pie'
```

Bắt đầu từ --prefix=/etc/nginx cho đến hết -Wl,-z,now -pie' nhé.

Biên dịch lại Nginx với việc thêm module PageSpeed bằng cách giữ nguyên các module cũ.

```bash
./configure --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic -fPIC' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -pie' --with-openssl=/usr/local/src/openssl-1.1.1g --add-module=/usr/local/src/incubator-pagespeed-ngx-1.13.35.2-stable/
```

Tiếp theo bạn cần thay thế Nginx trên VPS bằng Nginx vừa được biên dịch lại:

```bash
make && make install
```

Nếu xuất hiện ra thông báo:

```text
make[1]: Leaving directory `/usr/local/src/nginx-1.20.1'
```

Mà không hiển thị ra lỗi là OK.

Lưu ý thêm là:

- Tùy từng nhu cầu và hệ thống cụ thể mà bạn điều chỉnh thêm, bớt và giữ nguyên module khi compile Nginx cùng với ngx_pagespeed.

Để quá trình hoàn tất bạn cần khởi động lại Nginx và kiểm tra. Kết quả như sau thì đã tích hợp thành công ngx_pagespeed vào Nginx.

```bash
service nginx restart && nginx -V
Redirecting to /bin/systemctl restart nginx.service
nginx version: nginx/1.20.1
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-44) (GCC) 
built with OpenSSL 1.1.1g  21 Apr 2020
TLS SNI support enabled
configure arguments: --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --http-client-body-temp-path=/var/cache/nginx/client_temp --http-proxy-temp-path=/var/cache/nginx/proxy_temp --http-fastcgi-temp-path=/var/cache/nginx/fastcgi_temp --http-uwsgi-temp-path=/var/cache/nginx/uwsgi_temp --http-scgi-temp-path=/var/cache/nginx/scgi_temp --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-mail --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -m64 -mtune=generic -fPIC' --with-ld-opt='-Wl,-z,relro -Wl,-z,now -pie' --with-openssl=/usr/local/src/openssl-1.1.1g --add-module=/usr/local/src/incubator-pagespeed-ngx-1.13.35.2-stable/
```

Chúng ta chuyển qua bước cuối cùng để cấu hình Module PageSpeed lên Website nhé.

Trước khi tiến hành cấu hình Module PageSpeed lên Website, bạn cần tạo thư mục cache cho PageSpeed.

```bash
mkdir /var/ngx_pagespeed_cache && chown nginx:nginx /var/ngx_pagespeed_cache
```

Để kích hoạt và cấu hình ngx_pagespeed, bạn cần chỉnh sửa file configuration của Nginx (/etc/nginx/nginx.conf) hoặc Nginx conf dành cho domain (chèn trong block server).

Với script của HocVPS thì chỉnh sửa cấu hình Nginx của riêng domain, nằm trong /etc/nginx/conf.d.

Ở đây mình lấy ví dụ của một domain mình vừa setup thành công cho khách:

```bash
nano /etc/nginx/conf.d/wow1academy.com.conf
```

Cụ thể, ngx_pagespeed có rất nhiều filter khác nhau, tùy theo mục đích sử dụng mà các bạn lựa chọn cho phù hợp. Có 2 cấp độ khác nhau bạn có thể sử dụng là CoreFilters(mặc định) và PassThrough.

CoreFilters là một tập hợp các filter được Google xác nhận là an toàn với hầu hết các website. Do đó, cách này phù hợp với các bạn newbie mới tìm hiểu. Nếu muốn, bạn có thể disable một filter bất kỳ khỏi CoreFilters hoặc thêm một filter khác vào.

Đây là một ví dụ cấu hình ngx_pagespeed với CoreFilters:

Chèn vào trong cặp

```bash
Server {

}
```

Ngay bên dưới dòng server_name.

```bash
pagespeed on;
pagespeed FileCachePath /var/ngx_pagespeed_cache;
# Ensure requests for pagespeed optimized resources go to the pagespeed
# handler and no extraneous headers get set.
location ~ ".pagespeed.([a-z].)?[a-z]{2}.[^.]{10}.[^.]+" { add_header "" ""; }
location ~ "^/ngx_pagespeed_static/" { }
location ~ "^/ngx_pagespeed_beacon" { }
# enable CoreFilters
pagespeed RewriteLevel CoreFilters;
# disable particular filter(s) in CoreFilters
pagespeed DisableFilters rewrite_images;
# enable additional filter(s) selectively
pagespeed EnableFilters collapse_whitespace;
pagespeed EnableFilters lazyload_images;
pagespeed EnableFilters insert_dns_prefetch;
```

Ngoài ra bạn có thể xem thêm toàn bộ danh sách filter có trong CoreFilters: [https://developers.google.com/speed/pagespeed/module/config_filters](https://developers.google.com/speed/pagespeed/module/config_filters)

Với các bạn đã có nhiều kiến thức, trải nghiệm thì nên sử dụng PassThrough. Khi đó sẽ cần tự kích hoạt những filter cần dùng.

Cấu hình ngx_pagespeed với PassThrough:

```bash
pagespeed on;
pagespeed FileCachePath /var/ngx_pagespeed_cache;
# Ensure requests for pagespeed optimized resources go to the pagespeed
# handler and no extraneous headers get set.
location ~ ".pagespeed.([a-z].)?[a-z]{2}.[^.]{10}.[^.]+" { add_header "" ""; }
location ~ "^/ngx_pagespeed_static/" { }
location ~ "^/ngx_pagespeed_beacon" { }
# disable CoreFilters
pagespeed RewriteLevel PassThrough;
pagespeed EnableFilters collapse_whitespace,canonicalize_javascript_libraries,combine_css,combine_javascript,elide_attributes,extend_cache,flatten_css_imports,lazyload_images,rewrite_javascript,rewrite_images,insert_dns_prefetch,prioritize_critical_css;
pagespeed CssFlattenMaxBytes 5120;
```

Để lưu bạn bấm ctrl + O rồi bấm Y để lưu sau đó bấm X để thoát ra khỏi nano và khởi động lại web server để các thay đổi có tác dụng.

```bash
service nginx restart
```

Để kiểm tra xem Module PageSpeed đã kích hoạt hay chưa thì bạn ra trang chủ.

Sau đó bấm chuột phải chọn kiểm tra phần tử, tiếp theo chuyển qua tab Network.

![Kiểm tra Module PageSpeed](/images/check-module-page-speed.jpg)

Kế tiếp bạn reload lại trang rồi lựa chọn domain của mình.

![Kiểm tra Module PageSpeed Headers](/images/check-module-page-speed-headers.jpg)

Nếu hiện ra dòng: x-page-speed: 1.13.35.2-0 tức có nghĩa là đã thành công, còn nếu ngược lại thì bạn phải kiểm tra lại.

Đây là mẫu config mà mình đã cấu hình cho website của khách! Nếu muốn bạn có thể tham khảo qua để áp dụng.

```bash
pagespeed on;
pagespeed FileCachePath /var/ngx_pagespeed_cache;
# Ensure requests for pagespeed optimized resources go to the pagespeed
# handler and no extraneous headers get set.
location ~ ".pagespeed.([a-z].)?[a-z]{2}.[^.]{10}.[^.]+" { add_header "" ""; }
location ~ "^/ngx_pagespeed_static/" { }
location ~ "^/ngx_pagespeed_beacon" { }
# Filter settings
pagespeed RewriteLevel CoreFilters;
pagespeed DisableFilters rewrite_images;
pagespeed EnableFilters collapse_whitespace,lazyload_images,insert_dns_prefetch,hint_preload_subresources;
```

Chúc các bạn thành công.
