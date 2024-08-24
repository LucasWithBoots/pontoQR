export interface QRCodeModel {
  id: string;
  nome: string;
  descricao: string;
  qrCode: string;
}

export interface QRCodeModelDAO {
  nome: string;
  descricao: string;
  qrCode: string;
}
