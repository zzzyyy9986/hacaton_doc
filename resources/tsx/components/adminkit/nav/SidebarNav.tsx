import React, { useState } from "react";
import SidebarNavItem from "./SidebarNavItem";
import {
    SidebarNavItemCollection,
    SidebarNavItemType,
    SidebarNavItemTypeNoKey
} from "../shared/types";

const SidebarNav = (navitems: SidebarNavItemCollection) => {
    const getCurrentLocation = () =>
        document.location.pathname.replace(/(\?.*)?(#.*)?$/, "");

    const generateNavItemKey = (item: SidebarNavItemTypeNoKey) =>
        (item.contents + item.link).replace(/\W/g, "");

    const onNavClick = (destination: string) => setActiveUrl(destination);

    const [activeUrl, setActiveUrl] = useState(getCurrentLocation());

    return (
        <nav id="sidebar" className="sidebar">
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="index.html">
                    <span className="align-middle">AdminKit</span>
                </a>

                <ul className="sidebar-nav">
                    {navitems.items.map((item, index) => {
                        return (
                            <SidebarNavItem
                                key={generateNavItemKey(item)}
                                contents={item.contents}
                                isHeader={item.isHeader}
                                link={item.link}
                                icon={item.icon}
                                isReactLink={item.isReactLink}
                                subItems={item.subItems}
                                itemBindId={item.itemBindId}
                                onClick={onNavClick}
                                activeUrl={activeUrl}
                                expandHandler={() => {}}
                            />
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default SidebarNav;
