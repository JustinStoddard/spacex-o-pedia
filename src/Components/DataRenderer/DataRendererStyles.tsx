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
    
  },
  detailsText: {
    fontFamily: theme.appDrawer.fonts.primary,
    fontWeight: 500,
    fontSize: "13px",
  },
  table: {

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
  }
}));