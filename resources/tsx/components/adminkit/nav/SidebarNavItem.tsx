import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SidebarNavItemType, SidebarNavItemTypeNoKey } from "../shared/types";

/**
 * Problem with recursive components.. How to manage their state at the root? (SidebarNav)
 *
 * @param props
 * @constructor
 */
const SidebarNavItem = (props: SidebarNavItemType) => {
    const [isExpanded, setExpanded] = useState(false);

    const generateNavItemKey = (item: SidebarNavItemTypeNoKey) =>
        (item.contents + item.link).replace(/\W/g, "");

    const expandHandler = (state: boolean) => {
        console.log("Expanding " + props.contents);
        // Also expand at this level
        setExpanded(true);
        // and expand the parent
        props.expandHandler(true);
    };

    /**
     * This is the default handler for this particular nav item. It will bubble up to SidebarNav
     *
     * @param e
     */
    const handleClick = e => {
        // do something else aside from the passed handler
        // ...
        props.onClick(props.link ? props.link : "");
    };

    /**
     * Renders the label of the nav item and icon if any
     *
     * @param props
     */
    const renderLabel = function(props: SidebarNavItemType) {
        return (
            <>
                {props.icon && (
                    <i className="align-middle" data-feather={props.icon} />
                )}
                <span className="align-middle">{props.contents}</span>
            </>
        );
    };

    /**
     * Renders the item as a link. When props.items is set (i.e., there are submenu items linked to this item)
     * the link will be rendered as a random string hash param. This hash will be used as the id of the submenu
     */
    const renderLink = function(props: SidebarNavItemType) {
        return props.itemBindId ? (
            <a
                href="#"
                data-target={"#" + props.itemBindId}
                data-toggle="collapse"
                className="sidebar-link collapsed"
            >
                {renderLabel(props)}
            </a>
        ) : props.isReactLink ? (
            <Link
                className="sidebar-link"
                to={props.link}
                onClick={handleClick}
            >
                {renderLabel(props)}
            </Link>
        ) : (
            <a className="sidebar-link" href={props.link} onClick={handleClick}>
                {renderLabel(props)}
            </a>
        );
    };

    const renderSubItems = function(items: SidebarNavItemTypeNoKey[]) {
        return (
            <>
                <ul
                    id={props.itemBindId}
                    className={
                        "sidebar-dropdown list-unstyled collapse " +
                        (isExpanded ? "show" : "")
                    }
                    data-parent={"#" + generateNavItemKey(props)}
                >
                    {items.map((item, index) => {
                        return (
                            <SidebarNavItem
                                key={(item.contents + item.link).replace(
                                    /\W/,
                                    ""
                                )}
                                contents={item.contents}
                                isHeader={item.isHeader}
                                icon={item.icon}
                                link={item.link}
                                isReactLink={item.isReactLink}
                                subItems={item.subItems}
                                itemBindId={item.itemBindId}
                                onClick={props.onClick}
                                activeUrl={props.activeUrl}
                                expandHandler={expandHandler}
                            />
                        );
                    })}
                </ul>
            </>
        );
    };

    /**
     * Render the clickable item and sub-items if any
     * @param props
     */
    const render = function(props: SidebarNavItemType) {
        let structure = (
            <>
                {props.link ? renderLink(props) : renderLabel(props)}
                {props.link && props.subItems && renderSubItems(props.subItems)}
            </>
        );

        // Update nav tree after all has been rendered
        // If the nav item is the current URL,
        // If this is a nav item, it will call the `setExpanded` of the top level nav, showing its subitems
        // If this is a top level nav, it will have no effect because the default metion passed from SidebarNav is empty
        // setTimeout(function () {
        if (props.link === props.activeUrl) {
            props.expandHandler(true);
        }
        // }, 1000);

        return structure;
    };

    return props.isHeader ? (
        <li className="sidebar-header">{props.contents}</li>
    ) : (
        <li
            className={
                "sidebar-item " +
                (props.link === props.activeUrl ? "active" : "")
            }
            id={generateNavItemKey(props)}
        >
            {render(props)}
        </li>
    );
};

export default SidebarNavItem;
