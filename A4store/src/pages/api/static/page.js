import { page } from "../../../../assets/page-data";
import Product from "../../../../models/Product";

export default async function handler(req, res) {
    const { method } = req;
    const { q } = req.query;

    let pageData = page.default;

    if(method === "GET") {
      if(q === "skin-care") {
        pageData = page.skinCare;
      }
      else if(q === "bath-body") {
        pageData = page.bathBody;
      }
      else if(q === "fragrance") {
        pageData = page.fragrance;
      }
      else if(q === "hair-care") {
        pageData = page.hairCare;
      }
      else if(q === "makeup") {
        pageData = page.makeup;
      }

      return res.status(200).send(pageData);
    }
  }