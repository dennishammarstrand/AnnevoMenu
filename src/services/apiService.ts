import { httpClient } from "./httpClient";
import { MenuTreeResponse } from "../modules/annevoMenu/models/MenuTreeResponse";

export const fetchMenuTreeData = async () => {
  const { data } = await httpClient.get<MenuTreeResponse>(
    "https://run.mocky.io/v3/bca27736-b535-4547-88a8-3b5e04687d0d"
  );
  return data;
};
