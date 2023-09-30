import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest) {
	console.log("Data", req.body);
}