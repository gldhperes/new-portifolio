const SkillsCarouselStyle = {
  Container: {
    padding: '15px 0',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '40px',

    "@media (max-width: 600px)": {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  SkillIcon: {
    // border: '2px solid white',
    padding: '5px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'background.paper',
    width: 64,
    height: 64,
    boxShadow: "0 0 5px rgb(0, 234, 255)",
  },

  SkillText: {
    position: 'absolute',

    // bottom: '0px',
    fontSize: '0.8rem',
    color: 'primary.light',
    textShadow: "0 0 10px rgb(0, 234, 255)",
    textAlign: 'center',
    marginTop: '105px',

  },
};

export default SkillsCarouselStyle;
