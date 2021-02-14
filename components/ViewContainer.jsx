import PropTypes from 'prop-types';
import ViewLineItem from './ViewLineItem';
import styles from '../styles/ViewContainer.module.css';
import uniqid from 'uniqid';

function ViewContainer({ data, filter }) {
  let filteredData = [];
  if (filter.length == 3) {
    filteredData = data.filter((x) => {
      let facList = [];
      x.inputData.forEach((item) => facList.push(item.facility));
      return facList.includes(filter) ? true : false;
    });
  }

  return (
    <div>
      {filter.length !== 3 && <p>some text</p>}
      {filter.length == 3 && filteredData.length == 0 ? (
        <p>There were no matches.</p>
      ) : (
        filteredData.map((item) => {
          return <ViewLineItem item={item} key={uniqid()} />;
        })
      )}
    </div>
  );
}

export default ViewContainer;

ViewContainer.propTypes = {
  data: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
};
