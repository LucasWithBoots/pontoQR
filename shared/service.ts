import { QRCodeModelDAO } from "@/models/model.qrcode";

const LOCAL_IP = "192.168.36.152";

export const getQRCodes = () => {
  return fetch(`http://${LOCAL_IP}:3000/qrCodes`)
    .then((resp) => resp.json())
    .catch((error) => console.error(error));
};

export const createQRCode = (novoQRCode: QRCodeModelDAO) => {
  return fetch(`http://${LOCAL_IP}:3000/qrCodes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(novoQRCode),
  })
    .then((resp) => resp.json())
    .catch((error) => console.error(error));
};
