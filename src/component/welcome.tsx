import { useAppDispatch, useAppSelector } from "../store/data-hook";
import { changeName } from "../store/data-slice";
import { fetchInformationFromIG } from "../API/api";
function Welcome() {
  const name = useAppSelector(({ dataStore }) => dataStore.name);
  const dispatch = useAppDispatch();
  fetchInformationFromIG();
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
