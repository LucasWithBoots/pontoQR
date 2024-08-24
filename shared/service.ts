import { QRCodeModelDAO } from "@/models/model.qrcode";

export const getQRCodes = () => {
  return fetch("http://10.0.2.2:3000/qrCodes")
    .then((resp) => resp.json())
    .catch((error) => console.error(error));
};

export const createQRCode = (novoQRCode: QRCodeModelDAO) => {
  return fetch("http://10.0.2.2:3000/qrCodes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoQRCode),
  })
    .then((resp) => resp.json())
    .catch((error) => console.error(error));
};
