
export type IDoSortFC = (callBack: (sort: ISort) => void) => () => void

export interface ITableContext<THeads, TRows> {
  rows: TRows[],
  heads: THeads[],
  doSort: IDoSortFC
}

export interface IData<THeads, TRows> {
  rows: TRows[],
  heads: THeads[],
}

export type ISort = "asc" | "desc"
