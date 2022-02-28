export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    //this defines what happnes when we leave the page
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.75,
    },
  },
};
