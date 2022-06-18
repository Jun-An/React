import { useAppDispatch, useAppSelector } from "../store/data-hook";
import { changeName } from "../store/data-slice";
function Welcome() {
  const name = useAppSelector(({ dataStore }) => dataStore.name);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>My name is, {name}</p>
      <button type="button" onClick={() => dispatch(changeName("MMM"))}>
        changeName
      </button>
    </div>
  );
}

export default Welcome;
