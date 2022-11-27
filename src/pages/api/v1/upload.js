import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
});

const bucketName = process.env.AWS_S3_BUCKET_NAME;

export default async function handler(req, res) {
  const base64Image = req.body.image;
  const imageName = req.body.imageName;
  const type = req.body.type;
  const slug = req.body.hotelSlug;

  try {
    const response = await upload(imageName, base64Image, type, slug);
    res.send({ link: response });
  } catch (err) {
    return next(new Error(`Error uploading image: ${imageName}`));
  }
}

async function upload(imageName, base64Image, type, slug) {
  const params = {
    Bucket: `${bucketName}/${slug}`,
    Key: imageName,
    ContentType: type,
    Body: new Buffer.from(
      base64Image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    ),
  };

  // TODO: procurar sobre a classe buffer

  let data;

  try {
    data = await promiseUpload(params);
  } catch (err) {
    return new Error(`Error: ${err}`);
  }

  return data.Location;
}

function promiseUpload(params) {
  return new Promise(function (resolve, reject) {
    s3.upload(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
