const ProjectsContainer = {
    width: '100%',
    minHeight: '100%',

    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '50px',

    // animation: "PagesAnimation ease .4s",
};

const ProjectsStyle = {

    ProjectsContainer:
    {
       ...ProjectsContainer,
    },

    ProjectsContainerMobile:
    {
        ...ProjectsContainer,
        flexFlow: 'column wrap',
        alignItems: 'center',
    },


};


export default ProjectsStyle;