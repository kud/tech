const Redirect = ({ to }) => (
  <meta httpEquiv="refresh" content={`0;url=${to}`} />
)

export default Redirect
