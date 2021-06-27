import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => createStyles({
  summaryGrid: {
    width: "100%"
  },
  summaryHeaderLabel: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "11px",
  },
  summaryHeader: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: "16px",
    "@media (max-width: 600px)": {
      fontSize: "13px",
    }
  },
  detailsContainer: {
    marginBottom: "20px"
  },
  detailsHeader: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "18px",
    marginBottom: "5px",
  },
  detailsHeaderGroup: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "15px",
    margin: "10px 0px",
  },
  dividerHidden: {
    marginBottom: "30px"
  },
  detailsText: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 500,
    fontSize: "13px",
  },
  detailsPaper: {
    padding: "15px"
  },
  table: {
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    marginLeft: "8px",
    "@media (max-width: 600px)": {
      marginLeft: "0px",
    }
  },
  tableRow: {
    borderBottom: "2px solid #000",
  },
  tableHeader: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "13px",
    lineHeight: 1
  },
  tableData: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 500,
    fontSize: "13px",
    textTransform: "uppercase",
  },
  paperHeader: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "13px",
    lineHeight: 1
  },
  paperImageHeader: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: "13px",
    lineHeight: 1,
    marginTop: "15px"
  },
  paperData: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 500,
    fontSize: "11px",
    textTransform: "uppercase",
  },
  noTextTransform: {
    textTransform: "none"
  },
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    padding: "15px",
    flexDirection: "column",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    marginLeft: "8px",
    "@media (max-width: 600px)": {
      marginLeft: "0px",
    }
  },
  image: {
    width: "100%"
  },
  imageContainer: {
    height: "0px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#000",
    "@media (max-width: 600px)": {
      height: "170px",
    }
  },
  imageLoaded: {
    height: "160px",
  },
  imagePaper: {
    background: "#000",
    maxWidth: "140px",
    minWidth: "140px",
    height: "160px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    marginLeft: "8px",
    transition: "0.3s",
    transform: "translate(0px, 0px)",
    "&:hover": {
      transition: "0.3s",
      transform: "translate(5px, -5px)",
      boxShadow: "-13px 13px 0px 0px #000000",
    },
    "@media (max-width: 600px)": {
      marginLeft: "0px",
    }
  },
  imageWhiteLoader: {
    color: "#fff",
  },
  loaderBlack: {
    color: "#000"
  },
  bigImageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "400px",
    maxHeight: "400px",
    overflow: "hidden",
    background: "#000",
    marginLeft: "8px",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    borderRadius: "5px",
    "@media (max-width: 600px)": {
      marginLeft: "0px",
    }
  },
  bigImage: {
    height: "0px",
    width: "100%",
    "@media (max-width: 600px)": {
      height: "400px",
      width: "unset"
    }
  },
  bigImageLoaded: {
    height: "unset"
  },
  mapContainer: {
    width: "100%",
    minHeight: "400px",
    maxHeight: "400px",
    overflow: "hidden",
    boxShadow: "-8px 8px 0px -1px #000000",
    border: "2px solid #000",
    borderRadius: "5px",
    "@media (max-width: 600px)": {
      height: "350px",
    }
  },
  map: {
    width: "100%",
    minHeight: "400px",
    "@media (max-width: 600px)": {
      height: "350px",
    }
  }
}));