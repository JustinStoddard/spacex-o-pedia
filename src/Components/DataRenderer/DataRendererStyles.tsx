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
  paperData: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 500,
    fontSize: "11px",
    textTransform: "uppercase",
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
  }
}));