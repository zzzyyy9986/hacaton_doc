/**
 * key: Required by react. Fill this up when creating the component
 * icon: Feather icon if available (see https://github.com/feathericons/feather#usage)
 * link: href link if available
 * isReactLink: if the link is a react route
 * items: sub-level nav items
 *
 * itemBindId: for internal use. Used to bind collapse and expansion of sub-menus to their parent.
 *             Required when there are sub items
 */
export type SidebarNavItemType = {
    key: string;
    contents: string;
    icon?: string;
    link?: string;
    isReactLink?: boolean;
    isHeader?: boolean;

    subItems?: SidebarNavItemTypeNoKey[];
    itemBindId?: string;

    activeUrl: string; // The url to compare itself to
    onClick: (destination: string) => void;
    expandHandler: (state: boolean) => void;
};

/**
 * Key is removed here so the nav items can be returned by an API. The API should be agnostic of the key
 */
export type SidebarNavItemTypeNoKey = {
    contents: string;
    icon?: string;
    link?: string;
    isReactLink?: boolean;
    isHeader?: boolean;

    subItems?: SidebarNavItemTypeNoKey[];
    itemBindId?: string;
    collapsed?: boolean;
};

/**
 * The type accepted by SidebarNav
 */
export type SidebarNavItemCollection = {
    items: SidebarNavItemTypeNoKey[];
};
