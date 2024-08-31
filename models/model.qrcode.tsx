export interface QRCodeModel {
  id: string;
  nome: string;
  descricao: string;
  qrCode: string;
  vezesEscanedado: number;
}

export interface QRCodeModelDAO {
  nome: string;
  descricao: string;
  qrCode: string;
}
