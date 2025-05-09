# React Games Dashboard

## Background
The project is created with vite. This is created with the following:

```cmd
npm create vite@latest games-frontend -- --template react
cd games-frontend
npm install
npm run dev
```

It follows a lot of the principles laid out in 'The Road To React', using the backend created in Spring Boot.

## To Upload
Run `npm run build` to generate the dist/ directory, then upload its contents to the s3 bucket.

### S3 Configuration
The S3 bucket should be set to enable static web hosting, with public access allowed albeit with a custom read-only policy set.

### Website location
It is currently hosted at http://games-react-frontend.s3-website.eu-west-2.amazonaws.com/
