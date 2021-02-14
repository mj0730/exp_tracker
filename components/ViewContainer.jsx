import PropTypes from 'prop-types';
import ViewLineItem from './ViewLineItem';
import styles from '../styles/ViewContainer.module.css';
import uniqid from 'uniqid';

function ViewContainer({ data }) {
  return (
    <div>
      {data.map((item) => {
        return <ViewLineItem item={item} key={uniqid()} />;
      })}
    </div>
  );
}

export default ViewContainer;

ViewContainer.propTypes = {
  data: PropTypes.array.isRequired,
};
