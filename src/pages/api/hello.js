// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dataMember from "@/data/data";

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }

export default function handler(req, res) {
  const data = dataMember;

  res.status(200).json(data);
}
