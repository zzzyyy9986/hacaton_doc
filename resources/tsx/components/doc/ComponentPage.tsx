import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import React, { useState } from "react";
import { IPage } from "../../../interfaces/IPage";
import { Point } from "./Point";
import axios from "axios";
import { ITask } from "../../../interfaces/ITask";
import { IPoint } from "../../../interfaces/IPoint";

export const ComponentPage = ({ page }: { page: IPage }) => {
    const [selectedTab, setSelectedTab] = useState(-1);
    const [localPage, setLocalPage] = useState([]);

    const changeCurrentTab = (task: ITask) => {
        if (task.id == selectedTab) {
            setSelectedTab(-1);
        } else {
            setSelectedTab(task.id);
        }
        // updatePoints(task);
    };
    return (
        <Tabs selectedIndex={selectedTab}>
            <TabList>
                {page.tasks?.map((task) => {
                    return (
                        <Tab
                            key={task.id + "_" + task.points?.length}
                            className={
                                task.id == selectedTab
                                    ? "selected-tab-panel"
                                    : "fff"
                            }
                        >
                            <span
                                className="tab-title-name"
                                onClick={(e) => changeCurrentTab(task)}
                            >
                                {task.name}
                            </span>
                            {/*{task.id == selectedTab && (*/}
                            <div
                                style={{
                                    display:
                                        task.id == selectedTab
                                            ? "block"
                                            : "none",
                                }}
                            >
                                <Point
                                    key={task.id == selectedTab}
                                    task={task}
                                />
                            </div>
                            {/*)}*/}
                        </Tab>
                    );
                })}
            </TabList>
            {page.tasks.map((task) => {
                return (
                    <TabPanel
                        key={task.id}
                        onClick={(index) => changeCurrentTab(task)}
                        className={"menu"}
                    >
                        {task.name}
                    </TabPanel>
                );
            })}
        </Tabs>
    );
};
