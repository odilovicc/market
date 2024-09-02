import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  sum?: SortOrder;
  updatedAt?: SortOrder;
};
