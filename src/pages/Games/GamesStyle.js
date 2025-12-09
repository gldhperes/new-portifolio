const GamesContainer = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: '50px',
  // animation: 'PagesAnimation ease .4s',
};

const GamesStyle = {
  GamesContainer: {
    ...GamesContainer,
  },
  GamesContainerMobile: {
    ...GamesContainer,
    flexFlow: 'column wrap',
    alignItems: 'center',
  },
};

export default GamesStyle;
