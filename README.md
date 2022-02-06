# Access Locally

```bash

git clone https://github.com/vnodesign/tuanducdesign.com && cd tuanducdesign.com
yarn
yarn develop

```

To test the CMS locally, you'll need run a production build of the site:

```sh

yarn build
gatsby serve

```

## Folder Structure

```text

└── content
    ├── pages
    └── posts
└── static
    └── images
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    │       └── components
    │           ├── Feed
    │           ├── Icon
    │           ├── Layout
    │           ├── Page
    │           ├── Pagination
    │           ├── Post
    │           ├── Sidebar
    ├── components
    │   ├── Facebook
    │   │   ├── Comments
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Content
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils

```

## Credits

Nature graphic by [Anna Bearne](https://www.behance.net/annabearne) from [Noun Project](https://thenounproject.com/) is licensed under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/us/legalcode).

## License

The MIT License (MIT)

Copyright (c) 2022 Tuan Duc Tran

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
