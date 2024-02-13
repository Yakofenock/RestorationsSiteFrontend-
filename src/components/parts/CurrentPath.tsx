import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

interface CurrentPathProps {
    links: [string, string][];
}

const CurrentPath: FC<CurrentPathProps> = memo(({ links }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {links.map((link, index) => (
                    <li key={index} className={`breadcrumb-item ${index === links.length - 1 ? 'active' : ''}`} aria-current={index === links.length - 1 ? 'page' : undefined}>
                        {index === links.length - 1 ? (
                            <span>{link[0]}</span>
                        ) : (
                            <Link to={link[1]}>{link[0]}</Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
});

export default CurrentPath;
