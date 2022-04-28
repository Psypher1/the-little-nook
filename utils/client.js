// import {
//   creteImageUrlBuilder,
//   createUserHook,
//   createClient,
// } from "next-sanity";
import { createClient } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.SANITY_DATASET || "production",
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

// create client
export const sanityClient = createClient(config);

// images import
export const urlFor = (source = createImageUrlBuilder(config).image(source));
