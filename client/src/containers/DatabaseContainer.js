import { connect } from 'react-redux';
import Database from '../components/Database';


const mapStateToProps = (state) => ({
  tablesName: state.tableList.tablesName,
  activeTableName: state.tableList.activeTableName
});

export default connect(
  mapStateToProps,
  null
)(Database);
