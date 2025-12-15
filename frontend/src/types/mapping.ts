import { MarketplaceTemplate } from "./marketplace-template";
import { SellerFile } from "./seller-file";

export interface Mapping {
  id: number;
  marketplaceTemplate?: MarketplaceTemplate;
  sellerFile: SellerFile;
  marketplaceTemplateId: number;
  sellerFileId: number;
  createdAt: string;
}