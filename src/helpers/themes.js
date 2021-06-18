const deviceList = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '800px',
  laptop: '1200px',
  laptopL: '1440px',
  desktop: '2560px',
};

const theme = {
  device: {
    mobileS: `max-width: ${deviceList.mobileS}`,
    mobileM: `max-width: ${deviceList.mobileM}`,
    mobileL: `max-width: ${deviceList.mobileL}`,
    tablet: `max-width: ${deviceList.tablet}`,
    laptop: `max-width: ${deviceList.laptop}`,
    laptopL: `max-width: ${deviceList.laptopL}`,
    desktop: `max-width: ${deviceList.desktop}`,
    desktopL: `max-width: ${deviceList.desktop}`,
  },
};

export default theme;
