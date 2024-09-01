declare interface createServiceType {
  userId: number;
  serviceName: string;
  unit: string;
  pricePerUnit: number;
}

declare interface updateServiceType {
  id: number;
  serviceName: string;
  unit: string;
  pricePerUnit: number;
}

declare interface deleteServiceType {
  id: number;
}

declare interface getServicesType {
  id: number;
}

declare interface getServicesDataType {
  id: number;
  serviceName: string;
  unit: string;
  pricePerUnit: number;
  CreatedAt: string;
}
