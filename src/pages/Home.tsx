import home from "@styles/home.module.css";
import { projectRoutes } from "@data/routes";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
    return (
        <div className={home.__container}>
            <h1>Mini projetos</h1>
            <ul className={home.__navigation}>
                {projectRoutes.map((project, i) => {
                    return <ProjectPanel {...project} key={i} />
                })}
            </ul>
        </div>
    )
}

const ProjectPanel = (props: { imgPath: string, name: string, path: string }) => {

    return (
        <li className={home.__navigationItem}>
            <p>{props.name}</p>
            <Link to={props.path}>
                <img src={`/img/${props.imgPath}`} alt="" />
            </Link>
        </li>
    )
}