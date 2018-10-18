# med-url

Construct a url by passing query params as encoded uri or get the keys embedded into url as decoded values.

## Installation
``` shell
npm install --save med-url
```

## Usage

### Import the module to your code
``` javascript
import MedUrl from 'med-url'; // Functionalities to MedUrl variable
```

### Functions 
#### set(url, options)
``` javascript
MedUrl.set(url, options)
```
Folowing are the params to be passed :

| option              | used for |
| ------------------- |----------|
| `url`               | Url or object for construction of url |
| `options`           | Object for passing query params |

#### get(url, key)
``` javascript
MedUrl.get(url, key)
```
Folowing are the params to be passed :

| option              | used for |
| ------------------- |----------|
| `url`               | Url or object for construction of url |
| `key`               | Key for getting value of a parameter |


### Usage

``` javascript
MedUrl.set('https://google.co', { query: { a: 1, b: 'site' } })
// "https://google.co?a=1&b=site"
```

``` javascript
MedUrl.set('https://google.co?c=89', { query: { a: 1, b: 'site' } })
// "https://google.co?c=89&a=1&b=site"
```

``` javascript
MedUrl.set('https://google.co?c=89', { query: { a: 1, b: 'site google' } })
// "https://google.co?c=89&a=1&b=site%20google"
```

``` javascript
MedUrl.get("https://google.co?c=89&a=1&b=site%20google")
// {c: "89", a: "1", b: "site google"}
```

``` javascript
MedUrl.get("https://google.co?c=89&a=1&b=site%20google", "d")
// undefined
```

``` javascript
MedUrl.get("https://google.co?c=89&a=1&b=site%20google", "c")
// "89"
```

## Links

You can visit some links for reference:

* [Github Link For Repo](https://github.com/AmanAgarwal041/med-url)
* [Npm Link for the module](https://www.npmjs.com/package/@gradeup/med-url)

## Organisation
[![Gradeup](https://gs-post-images.grdp.co/2017/2/img1486706448140-41-rs-high-webp.png)](https://gradeup.co)
