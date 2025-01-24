Hello Genks,
cc @kurtdoherty && @ksolanki7 

From the Figma design, Here's my proposed solution for Table:

---
# Table Atoms Solution Design

## 1 table 
The Table will have the following main prop interface

| Prop | Value | Default | Usage |
| --- | --- | --- |--- |
| data?: IData<THead, TRow>  | Array of <any> | undefined | its used for datatable |

---

## 2 table-body 
The table-body will have the following main prop interface

| Prop | Value | Default | Usage |
| --- | --- | --- |--- |
| children?: (ReactNode) | ((props: ITableBodyChildProps<TRowItem, THeadItem>) => ReactNode)  | ReactNode or Function that Return Reactnode | undefined | its used to render react child, so we can use Direct React Child, or using function that return of Table context inormation |

---

## 3 table-cell 
The table-cell is come from two element, its td and div, since td didnt have absolute style, so i wrate the table-cell using div, its will have the following main prop interface

| Prop | Value | Default | Usage |
| --- | --- | --- |--- |
| alignment?: enum  | "left" , "center" , "right" | "left" | its used for aligment the content |
| link?: string  | string of any | undefined | its used for rendering cell as <a href /> |
| width?: string  | string of size Width | undefined | its used for sizing width of cell |
| minWidth?: string  | string of size minWidth | undefined | its used for sizing minWidth of cell |
| maxWidth?: string  | string of size maxWidth | undefined | its used for sizing maxWidth of cell |
| narrowLabel?: string  | string of any | undefined | its used for showing label heading if its on mobile device |

---

## 4 table-head 
The table-head is come from th element, its will have the following main prop interface

| Prop | Value | Default | Usage |
| --- | --- | --- |--- |
| children?: (ReactNode) | ((props: ITableBodyChildProps<TRowItem, THeadItem>) => ReactNode)  | ReactNode or Function that Return Reactnode | undefined | its used to render react child, so we can use Direct React Child, or using function that return of Table context inormation, more information check the POC |
| isSticky?: boolean  | false, true | undefined | its used for showing sticky heads |

---

## 5 table-header-cell
The table-header-cell is come from two element, its td and div, since td didnt have absolute style, so i wrate the table-header-cell using div, its will have the following main prop interface

| Prop | Value | Default | Usage |
| --- | --- | --- |--- |
| alignment?: enum  | "left" , "center" , "right" | "left" | its used for aligment the content |
| width?: string  | string of size Width | undefined | its used for sizing width of cell |
| minWidth?: string  | string of size minWidth | undefined | its used for sizing minWidth of cell |
| maxWidth?: string  | string of size maxWidth | undefined | its used for sizing maxWidth of cell |

---

## 6 table-row 
The part will used @Danish code, see [Danish POC](https://codesandbox.io/p/sandbox/lts8x8?file=%2Fsrc%2Ftable%2Ftable.atoms.tsx%3A62%2C8-62%2C15)
---



### **Code Concept**
to see the detail implementation,  you can check it  here ([POC](https://codesandbox.io/p/github/rpt-rfoxy/elements-table-201/main)) please let me know if the link didnt work


```