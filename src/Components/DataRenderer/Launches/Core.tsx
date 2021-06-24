import React, { useEffect } from 'react';
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from '@material-ui/core';
import { useStyles } from '../DataRendererStyles';
import useFetchData from '../../../Services/hooks/useFetchData';

interface CoresProps {
  core?: any;
}

const Core = ({ core }: CoresProps) => {
  const classes = useStyles();
  const {
    core: _core,
    reused,
    legs,
    landing_type,
    landing_success,
    gridfins,
    flight,
  } = core;
  const [{ result }, getData] = useFetchData("cores", _core);

  useEffect(() => {
    let mounted = true;

    getData();

    return () => {
      mounted = false;
    }
  }, []);

  console.log(result)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeader}>FLIGHT</TableCell>
                <TableCell align="right" className={classes.tableData}>{flight ?? "..."}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>LANDING SUCCESS</TableCell>
                <TableCell align="right" className={classes.tableData}>{`${landing_success ?? "..."}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>REUSED</TableCell>
                <TableCell align="right" className={classes.tableData}>{`${reused ?? "..."}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>LEGS</TableCell>
                <TableCell align="right" className={classes.tableData}>{`${legs ?? "..."}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>GRIDFINS</TableCell>
                <TableCell align="right" className={classes.tableData}>{`${gridfins ?? "..."}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>LANDING TYPE</TableCell>
                <TableCell align="right" className={classes.tableData}>{`${landing_type ?? "..."}`}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeader}>SERIAL</TableCell>
                <TableCell align="right" className={classes.tableData}>{result?.serial ?? "..."}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>LAST UPDATE</TableCell>
                <TableCell align="right" className={classes.tableData}>{result?.last_update ?? "..."}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>STATUS</TableCell>
                <TableCell align="right" className={classes.tableData}>{result?.status ?? "..."}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>REUSE COUNT</TableCell>
                <TableCell align="right" className={classes.tableData}>{result?.reuse_count ?? "..."}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>RTLS LANDINGS</TableCell>
                <TableCell align="right" className={classes.tableData}>{result?.rtls_landings ?? "..."}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableHeader}>ASDS LANDINGS</TableCell>
                <TableCell align="right" className={classes.tableData}>{result?.asds_landings ?? "..."}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Core;