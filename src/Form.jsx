import React from "react";
const Form = ({
  totalPrice,
  totalPeoples,
  onChange,
  onSubmit,
  onChangeNumberOfPerson
}) => {
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        合計額:
        <input type="number" value={totalPrice} onChange={onChange} />
        <p>
          人数:
          <input
            type="number"
            value={totalPeoples}
            onChange={onChangeNumberOfPerson}
          />
          <input type="submit" value="確定" />
        </p>
      </form>
    </>
  );
};
export default Form;
