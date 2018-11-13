// Navigation Bar Themes
export const NAV_BAR_THEME = {
    global: {
      font: {
        family: 'Segoe UI Light',
      },
    },
    anchor : {
        fontWeight: 450, 
        color: {
            light : '#3c3d3f'
        },
        hover: {
            textDecoration : 'none',
            extend : {
                color : '#cfd0d3'
            }
        }
    }
};

// Global Image Themes
export const IMAGE_MARGIN = {
    top: 'small',
};

const baseSpacing = 24;

export const IMAGE_GROMMET_THEME = {
    global: {
        size: {
            medium: `${baseSpacing * 20}px`
        }
    }
};

// Home Page Themes
export const HOME_CONTENT_THEME = {
    global: {
        font: {
            family: 'Segoe UI Light',
        },
    },
    heading: {
        weight: 500,
        extend: {
            color: '#5a5b5b'
        }        
      },
};

export const HOME_CONTENT_MARGIN = {
    bottom: 'small'
};

// About Page Themes
export const ABOUT_DKO_CONTENT_THEME = {
    global: {
        font: {
            family: 'Segoe UI Light',
        },
    },
    heading: {
        weight: 500,
        extend: {
            color: '#5a5b5b'
        }        
      },
};
