export interface ITab {
  path?: string;
  title?: string;
}

// 父传子类型
export interface PropsType {
  collapsed?: boolean;
  setCollapsed?: any;
}

// mobx localStorage
export interface IDefaultObj {
  selectedKeysMobx: string[];
  breadcrumbListMobx: string[];
  tabsListMobx: ITab[];
}

// tabs
export interface tbasType {
  path: string;
  title: string;
}
export interface tbasKeyType {
  label: any;
  key: string;
}

export interface IlayoutSetType {
  headerTheme: string;
  theme: string;
  tagsView: boolean;
  fixedHeader: boolean;
  sidebarLogo: boolean;
  dynamicTitle: boolean;
}
export interface IsetLayoutSetType {
  headerTheme?: string;
  theme?: string;
  tagsView?: boolean;
  fixedHeader?: boolean;
  sidebarLogo?: boolean;
  dynamicTitle?: boolean;
}
