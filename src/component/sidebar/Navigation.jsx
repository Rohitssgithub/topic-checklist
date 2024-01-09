import { PATH } from "../../constant/constant"

export const sideBarNavigation = Object.values(PATH.privateRoutes)
    .filter(x => x?.sidebar?.show)
    .map((pageData, index) => ({
        id: index + 1,
        path: pageData.path,
        icon: pageData.sidebar.icon,
        pageName: pageData.sidebar.name || pageData.pageName
    }))