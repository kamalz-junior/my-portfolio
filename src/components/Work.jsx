import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Kursusku app',
      tags: ['Web Design', 'Development'],
      projectLink: 'https://kursusku.netlify.app/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Todo app',
      tags: ['Development'],
      projectLink: 'https://todo-app-ku.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Chill app',
      tags: ['Development', 'API'],
      projectLink: 'https://chill-app-react.vercel.app/'
    }
  ];

const Work = () => {
  return (
    <section 
    id="work"
    className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes="reveal-up"
                         />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work