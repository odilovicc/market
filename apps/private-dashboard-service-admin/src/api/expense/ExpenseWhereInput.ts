import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExpenseWhereInput = {
  category?: StringNullableFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  sum?: StringNullableFilter;
};
