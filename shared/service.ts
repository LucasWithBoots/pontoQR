import { QRCodeModel, QRCodeModelDAO } from "@/models/model.qrcode";

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

export async function addScan(codigoQrEscaneado: string) {
  try {
    const { data } = await axios.get<QRCodeModel[]>(
      `http://10.0.2.2:3000/qrCodes?qrCode=${codigoQrEscaneado}`,
    );

    const putMethod = axios.put(`http://10.0.2.2:3000/qrCodes/${data[0].id}`, {
      id: data[0].id,
      nome: data[0].nome,
      descricao: data[0].descricao,
      qrCode: data[0].qrCode,
      vezesEscanedado: Number(data[0].vezesEscanedado) + 1,
    });

    return (await putMethod).data;
  } catch (error) {
    console.log(error);
  }
}
