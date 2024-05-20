const CurrencyHolder = ({ type, value = '0' }) => {
  return (
    <div className={`${type === 'from' ? 'text-blue-500' : 'text-black'} w-full text-right`}>{value}</div>
  );
}

export default CurrencyHolder;
