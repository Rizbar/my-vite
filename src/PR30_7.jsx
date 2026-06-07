import { useValue } from './usevalue'; 

const OtherComponent = () => {
  const [value, { setValue }] = useValue(false);

  return (
    <div>
      <p>Status: {value ? 'Logged In' : 'Logged Out'}</p>
      <button onClick={() => setValue(!value)}>
        {value ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default OtherComponent;