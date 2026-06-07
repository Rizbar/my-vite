import { useValue } from "./usevalue";

const Auth = () => {
  const [value, { setValue }] = useValue(false);

  return (
    <div>
      <button type="button" onClick={() => setValue(!value)}>
        {value ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Auth;