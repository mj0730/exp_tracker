import PropTypes from 'prop-types';

function View({ data }) {
  console.log(JSON.parse(data));
  return <pre>{data}</pre>;
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/submissions`, {
    method: 'GET',
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((data) => JSON.stringify(data))
    .catch((error) => console.error(error));

  return {
    props: {
      data: res,
    },
    revalidate: 5,
  };
}

export default View;

View.propTypes = {
  data: PropTypes.string.isRequired,
};
