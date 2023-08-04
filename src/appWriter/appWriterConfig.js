import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64c8cc13c96c410aaa83"); // Project ID

export const account = new Account(client);
export const databases = new Databases(client, "64c8cc474dd27a0e17dd"); // db id
