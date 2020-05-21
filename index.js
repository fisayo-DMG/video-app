const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const formData = require("express-form-data");
const FormData = require('form-data');
const cloudinary = require('cloudinary').v2;
const path = require('path')

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
})

app.use(cors());

app.use(formData.parse());

// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

app.post('/upload', async (req, res) => {
  console.log(req.body)

  try {
    const result = await cloudinary.uploader.upload(req.files.stuff.path);
    console.log('Successful', result.secure_url);
    
  } catch (error) {
    console.log(error)
  }
})

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
  
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





















// const express = require("express");f
// const fetch = require("node-fetch");
// const cors = require("cors");
// const multer = require("multer");
// // const imgurStorage = require("./imgurStorage");
// const formData = require("express-form-data");
// const btoa = require('btoa');

// const app = express();

// app.use(cors());

// // const upload = multer({
// //   storage: imgurStorage({clientId: '507c637fcdab135'})
// // })

// // const storage = multer.memoryStorage()
// // const upload = multer({ storage: storage })

// const upload = multer();

// // btoa

// app.post("/upload", upload.single("myVideo"), (req, res) => {
//   console.log("FILE: ", req.file.buffer);
//   const b64encoded = btoa(String.fromCharCode.apply(null, req.file.buffer))
//   const imgSrc = "data:image/jpg:base64," + b64encoded;
//   console.log(imgSrc)
//   // const formData = new FormData();
//   // formData.append("myVideo", req.file);
//   fetch("https://api.imgur.com/3/upload", {
//     method: "POST",
//     // body: {myVideo: req.file},
//     form: {
//       image: req.file,
//     },
//     headers: {
//       Authorization: "Client-ID 507c637fcdab135",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log("SUCCESS", data);
//     })
//     .catch((err) => console.log("ERROR", err));
// });

// // app.post('/upload', (req, res) => {
// //   console.log('HIHIR')
// // })

// // app.use(formData.parse());

// // app.post('/upload', (req, res) => {
// //   console.log("FILE: ", req.files.myVideo.path)

// //   fetch('https://api.imgur.com/3/image', {
// //     method: 'POST',
// //     // body: {myVideo: req.files.myVideo.path},
// //     form: {
// //       'image': req.files.myVideo.path
// //     },
// //     headers: {
// //       Authorization: "Client-ID 507c637fcdab135",
// //     }
// //   })
// //   .then(res => res.json())
// //   .then(data => {
// //     console.log('SUCCESS', data)
// //   })
// //   .catch(err => console.log('ERROR', err))

// // })

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
