import { connect } from 'react-redux';
import Table from '../components/Table';


const mapStateToProps = (state) => ({
  colName: state.table.colName,
  constColName: state.table.constColName,
  rows: state.table.rows,
  rowLeng: state.table.rowLeng,
  colLeng: state.table.colLeng,
  activeTableName: state.tableList.activeTableName
});

export default connect(
  mapStateToProps,
  null
)(Table);
