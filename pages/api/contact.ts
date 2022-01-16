import { ObjectID } from "bson";
import { MongoClient } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body as {
      email: string;
      name: string;
      message: string;
    };
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
      id: null as any,
    };
    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://arun1001:mongopassword@cluster0.uyinb.mongodb.net/my-blog?retryWrites=true&w=majority"
      );
    } catch {
      res.status(500).json({ message: "Connection to db failed" });
      return;
    }
    const db = client.db();
    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch {
      res.status(500).json({ message: "Storage failed" });
      client.close();
      return;
    }
    client.close();

    res
      .status(201)
      .json({ message: "Succesfully stored message", contact: newMessage });
  } else {
    res.status(201).json({ message: "Not permitted" });
  }
};
export default handler;
