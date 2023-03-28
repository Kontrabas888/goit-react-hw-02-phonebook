import PropTypes from 'prop-types';

export const AppLayout = ({ children }) => {
  return (
    <section className="py-20">
      <div className="container grid grid-cols-[400px_1fr] gap-20">
        {children}
      </div>
    </section>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
