import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiExternalLink, FiGithub} from "react-icons/fi";

const ProjectItems = ({item}) => {
  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <p className='project__description'>{item.description}</p>
            <div className='project__tools'>
                {item.tools.map((tool, index) => (
                    <span key={index}>{tool}</span>
                ))}
            </div>
            <div className='project__infos'>
                <a href={item.live} className="project__button" target='_blank'><FiExternalLink /> Live <HiOutlineArrowSmRight className="project__button-icon" /></a>
                <a href={item.code} className="project__button" target='_blank'> <FiGithub /> Code <HiOutlineArrowSmRight className="project__button-icon" /></a>
            </div>
        </div>
    );
}

export default ProjectItems;