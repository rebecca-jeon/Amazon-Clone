import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from  'react-router-dom';

//version6 of react-router-dom removed 'useHistory' and replaced it with 'useNavigate'

//navigate is good for when you need to push the user somewhere
//allows to keep styling of the button while redirect.
//If use Link, it will look like a link
function Subtotal() {
  const navigate = useNavigate();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        decimalScale={2}
        prefix={'$'}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
      />

      <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
