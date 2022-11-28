import AWS from "aws-sdk";
import next from "next";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
});

const bucketName = process.env.AWS_S3_BUCKET_NAME;

export default async function handler(req, res) {
  const slug = req.body.hotelSlug;

  try {
    const list = await listAll(slug);
    let buffer;
    if (list.Contents.length > 0) {
      const test2 = await download(list.Contents[0].Key);
      buffer = Buffer.from(test2.Body).toString("base64");
    }

    res.send({ buffer });
  } catch (err) {
    console.log(err);
    res.status(500).json("Image not found");
  }
}

async function download(key) {
  return new Promise((resolve, reject) => {
    const params = { Bucket: `${bucketName}`, Key: key };
    s3.getObject(params, (err, object) => {
      if (err) reject(err);
      resolve(object);
    });
  });
}

async function listAll(slug) {
  return new Promise((resolve, reject) => {
    const params = { Bucket: bucketName, Prefix: `${slug}/` };
    s3.listObjects(params, (err, objects) => {
      if (err) {
        reject(err);
      } else {
        resolve(objects);
      }
    });
  });
}
