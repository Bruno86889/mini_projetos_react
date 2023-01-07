import home from "@styles/home.module.css";
import { projectRoutes } from "@data/routes";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className={home.__container}>
            <h1>Projetos</h1>
            <ul className={home.__navigation}>
                {projectRoutes.map((project, i) => {
                    return <li className={home.__navigationItem}>
                        <Link to={project.path as string}>{project.path}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}