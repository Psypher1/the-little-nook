// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import sanityClient from "@sanity/client";
// import sanityClient from "utils/sanityClient";

const config = {
  dataset: process.env.SANITY_DATASET || "production",
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: false,
  apiVersion: "2021-08-31",
  token: process.env.SANITY_TOKEN,
};

const client = sanityClient(config);

export default async function requestBook(req, res) {
  const { title, author } = JSON.parse(req.body);

  try {
    await client.create({
      _type: "request",
      title,
      author,
    });
  } catch (err) {
    return res.status(500).json({ message: "Could not send request", err });
  }
  console.log("submitted");
  res.status(200).json({ message: "Request sent" });
}
