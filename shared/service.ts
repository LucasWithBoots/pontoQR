import { QRCodeModelDAO } from "@/models/model.qrcode";

import axios from "axios";

export async function getQRCodes() {
  try {
    const response = await axios.get("http://10.0.2.2:3000/qrCodes");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createQRCode(novoQRCode: QRCodeModelDAO) {
  try {
    const postMethod = axios.post("http://10.0.2.2:3000/qrCodes", novoQRCode);
    console.log((await postMethod).data);
    return (await postMethod).data;
  } catch (error) {
    console.error(error);
  }
}
